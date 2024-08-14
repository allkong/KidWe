import {messaging} from './src/utils/notification/settingFCM';

// install event
self.addEventListener('install', () => {
  console.log('[Service Worker] installed');
});

// activate event
self.addEventListener('activate', e => {
  console.log('[Service Worker] actived', e);
});

// fetch event
self.addEventListener('fetch', e => {
  console.log('[Service Worker] fetched resource ' + e.request.url);
});

// push event
self.addEventListener('push', function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;

  const notificationOptions = {
    body: resultData.body,
  };

  console.log(resultData.title, {
    body: resultData.body,
  });

  e.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
