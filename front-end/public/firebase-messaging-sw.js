self.addEventListener('install', () => {
  console.log('fcm sw install..');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('fcm sw activate..');
});

self.addEventListener('push', async e => {
  // console.log('push: ', e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData,
  };
  console.log('push: ', {resultData, notificationTitle, notificationOptions});

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  console.log('notification click');
  event.notification.close();
  // const url = '/';
  // event.waitUntil(clients.openWindow(url));
});
