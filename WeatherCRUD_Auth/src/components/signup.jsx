// import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider, facebookProvider, githubProvider} from '../config/firebase';
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const Signup = async () => {
//     try {
//       createUserWithEmailAndPassword(auth, email, password);
//       console.log("Account created successfully");
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const SignupWithGithub = async () => {
//     try {
//       await signInWithPopup(auth, githubProvider)
//       navigate("/")
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const SignupWithFacebook = async () => {
//     try {
//       await signInWithPopup(auth, facebookProvider)
//       navigate("/")
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   const SignupWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider)
//       navigate("/")
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return (
//     <section className="hero is-fullheight is-fullwidth" style={{background: "linear-gradient(rgb(253, 108, 188), rgb(6, 119, 224))"}}>
//       <div className="hero-body">
//         <div className="container">
//           <div className="columns is-centered">
//             <div className="column is-4">
//               <form className="box" onSubmit={Signup}>
//                 <h1 className="title is-2">Sign Up</h1>
//                 <div className="field">
//                   <label className="label">Email</label>
//                   <div className="control">
//                     <input
//                       type="text"
//                       className="input"
//                       placeholder="Email"
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Password</label>
//                   <div className="control">
//                     <input
//                       type="password"
//                       className="input"
//                       placeholder="******"
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="field mt-5">
//                   <button
//                     type="submit"
//                     className="button is-success is-fullwidth">Sign Up
//                   </button>
//                 </div>
//               </form>
//               <div>
//               <div>
//                 <button onClick={SignupWithGoogle}>Sign In with Google</button>
//                 <button onClick={SignupWithFacebook}>Sign In with Facebook</button>
//                 <button onClick={SignupWithGithub}>Sign In with GitHub</button>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, facebookProvider, githubProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import backgroundImage from "./OIP (2).jpeg";
import Header from "./Header";
import Footer from "./Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignupWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  const handleSignupWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section
      className="hero is-fullheight is-fullwidth"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Header></Header>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box" onSubmit={handleSignup}>
                <h1 className="title is-2">Sign Up</h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button type="submit" className="button is-success is-fullwidth">
                    Sign Up
                  </button>
                </div>
              </form>
              <div>
                <div>
                  <button onClick={handleSignupWithGoogle}>Sign In with Google</button>
                  <button onClick={handleSignupWithFacebook}>Sign In with Facebook</button>
                  <button onClick={handleSignupWithGithub}>Sign In with GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Signup;












// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config/firebase";
// import { reset } from "../features/authSlice";

// const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       dispatch(reset());
//       navigate("/Weather");
//     } catch (error) {
//       console.log("Error creating user:", error);
//     }
//   };

//   return (
//     <section className="hero is-fullheight is-fullwidth" style={{ background: "linear-gradient(rgb(253, 108, 188), rgb(6, 119, 224))" }}>
//       <div className="hero-body">
//         <div className="container">
//           <div className="columns is-centered">
//             <div className="column is-4">
//               <form className="box" onSubmit={handleSignup}>
//                 <h1 className="title is-2">Sign Up</h1>
//                 <div className="field">
//                   <label className="label">Email</label>
//                   <div className="control">
//                     <input
//                       type="text"
//                       className="input"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Password</label>
//                   <div className="control">
//                     <input
//                       type="password"
//                       className="input"
//                       placeholder="******"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="field mt-5">
//                   <button
//                     type="submit"
//                     className="button is-success is-fullwidth"
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;


