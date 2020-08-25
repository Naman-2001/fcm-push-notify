importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js"
);

firebase.initializeApp({
  messagingSenderId: "343676937800",
  apiKey: "AIzaSyDCiXqVCawu6OPsvc87lPWqxoDIZ36RKmQ",
  appId: "1:343676937800:web:ab233c9b1b935ed9439a7d",
  projectId: "fcm-push-notify-bb24d",
});

const initMessaging = firebase.messaging();
