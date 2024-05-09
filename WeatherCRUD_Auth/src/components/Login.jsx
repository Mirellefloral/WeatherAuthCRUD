import React, { useState } from "react";
import { auth, googleProvider, facebookProvider, githubProvider } from '../config/firebase';
import { signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GoogleButton from "react-google-button";
import GitHubButton from "react-github-button";


export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Weather");
    } catch (error) {
      console.log("Account Does not Exist");
      console.log(error);
    }
  };

  const SigninWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/weather");
    } catch (error) {
      console.log(error);
    }
  };

  const SigninWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/weather");
    } catch (error) {
      console.log(error);
    }
  };

  const SigninWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/weather");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/signup");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <section
      className="hero is-fullheight is-fullwidth"
      style={{
        backgroundImage: "url('/path/to/your/image.jpg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Header></Header>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box" onSubmit={Signin}>
                <h1 className="title is-2">Sign In</h1>
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
                    Sign In
                  </button>
                </div>
              </form>
              <div>
                <div>
                  <GoogleButton onClick = {SigninWithGoogle} />
                </div>
    
                <div>
                  <button onClick = {SigninWithGithub} >Sign in with Github</button>
                </div>
                <div>
                  <button onClick={SigninWithFacebook}>Sign In with Facebook</button>
                </div>
                <div>
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
              <div className="has-text-centered mt-5">
                <p>
                  Don't have an account?
                  <button className="button is-text is-link" onClick={handleSignupClick}>
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};