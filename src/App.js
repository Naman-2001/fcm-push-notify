import React, { useEffect } from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  useEffect(() => {
    const messaging = firebase.messaging();
    // Add the public key generated from the console here.
    messaging.usePublicVapidKey(
      "BG7wjjZMNWotLUbUvpNd9tYyf0_6p4RCRRQHpIJX5JOQrOY-RanQ6JoLU-zaqTF6eR32FYNZw-GCtASTciI1SxU"
    );
    messaging
      .requestPermission()
      .then(() => {
        console.log("permission granted");
        return messaging.getToken();
      })
      .then((token) => {
        console.log(token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <h2>Hello World</h2>;
}

export default App;
