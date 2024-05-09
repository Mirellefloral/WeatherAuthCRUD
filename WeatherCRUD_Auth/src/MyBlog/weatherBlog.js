
import { useEffect, useState } from "react";
import { db, auth, storage } from "../config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import './weatherblog.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


function Blog() {
  const [WeatherList, setWeatherList] = useState([]);
  const [weatherLocation, setWeatherLocation] = useState("");
  const [weatherDay, setWeatherDay] = useState("");
  const [weatherWeatherstate, setWeatherWeatherstate] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
  const [weatherImage, setWeatherImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const WeatherCollectionRef = collection(db, "WeatherDetail");
  const imageListRef = ref(storage, "weatherImages/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const getWeatherList = async () => {
    try {
      const data = await getDocs(WeatherCollectionRef);
      const filterData = data.docs.map((doc, index) => ({
        ...doc.data(),
        id: doc.id,
        imageUrl: imageUrls[index],
      }));
      setWeatherList(filterData);
    } catch (err) {
      
      console.error(err);
    }
  };


  const deleteWeather = async (id) => {
    const WeatherDoc = doc(db, "WeatherDetail", id);
    await deleteDoc(WeatherDoc);
    getWeatherList();
  };

  const updateWeatherLocation = async (id) => {
    const WeatherDoc = doc(db, "WeatherDetail", id);
    await updateDoc(WeatherDoc, { Location: updateLocation });
    getWeatherList();
  };

  const submitWeatherDetail = async () => {
    try {
      await addDoc(WeatherCollectionRef, {
        Location: weatherLocation,
        Day: weatherDay,
        Weatherstate: weatherWeatherstate,
        userId: auth?.currentUser?.uid,
      });
     getWeatherList();
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async () => {
    if (!weatherImage) return;
    const imageName = `${weatherImage.name}_${v4()}`;
    const weatherImagesRef = ref(storage, `weatherImages/${imageName}`);
    try {
      uploadBytes(weatherImagesRef, weatherImage).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
        alert("Image Uploaded");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="con">
      <Header></Header>
    <div className="container2">
      <div className="form">
       {WeatherList.map((Weather) => (
        <div className="" key={Weather.id}>
          <div className="">
            {Weather.imageUrl && <img src={Weather.imageUrl} alt="img" />}
            <h3>Location: {Weather.Location}</h3>
            <p>Date: {Weather.Day}</p>
            <p>Description: {Weather.Weatherstate}</p>
          </div>
          <div>
            <button onClick={() => deleteWeather(Weather.id)}>Delete</button>
            <input
              type="text"
              onChange={(e) => setUpdateLocation(e.target.value)}
              placeholder="Update Location"
            />
            <button onClick={() => updateWeatherLocation(Weather.id)}>New Location</button>
          </div>
        </div>
      ))}
     </div>

      <div className="form">
        <h1>Create A Weather Post Here</h1>
        <input
          className="data"
          onChange={(e) => setWeatherLocation(e.target.value)}
          placeholder="Location"
          type="text"
        />
        <br />
        <input
          className="data"
          onChange={(e) => setWeatherDay(e.target.value)}
          placeholder="Day"
          type="text"
        />
        <br />
        <textarea
          className="data"
          onChange={(e) => setWeatherWeatherstate(e.target.value)}
          placeholder="Describe The Weather condition In your Location: Temperature, Humidity and state of the day"
        />
        <br />
        <input type="file" onChange={(e) => setWeatherImage(e.target.files[0])} />
        <br />
        <button className="button" onClick={() => {
          uploadImage();
          submitWeatherDetail();
        }}><i className="fa fa-upload" aria-hidden="true"></i>Post Weather Details</button>
      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
}

export default Blog;