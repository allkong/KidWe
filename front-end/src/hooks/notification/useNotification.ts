import {getToken} from 'firebase/messaging';
import {messaging} from '@/utils/notification/settingFCM';
export const useNotification = () => {
  // firebase의 VAPID 키를 전달하여 토큰 발급!
  const requestPermissionAndRegister = async () => {
    const permission = await Notification.requestPermission();
    console.log('나의 permission', permission);
    if (permission === 'granted') {
      // Service Worker 등록
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(async registration => {
          console.log('Service Worker 등록 성공:', registration);

          // FCM 토큰 가져오기
          const token = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_VAPID_KEY,
          });

          console.log('FCM Token:', token);
        })
        .catch(error => {
          console.log('Service Worker 등록 실패:', error);
        });
    } else {
      console.log('알림 권한이 없습니다.');
    }
  };

  return {requestPermissionAndRegister};
};
