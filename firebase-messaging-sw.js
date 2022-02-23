// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');
console.log("KIIIR")
firebase.initializeApp({
    messagingSenderId: '1014345989752'
});

const messaging = firebase.messaging();

