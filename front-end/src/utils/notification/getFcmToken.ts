import {getToken} from 'firebase/messaging';
import {messaging} from '@/utils/notification/settingFCM';

const vapidKey = import.meta.env.VITE_VAPID_KEY;

export const getFcmToken = async () => {
  const fcmToken = await getToken(messaging, {vapidKey});
  if (fcmToken) {
    return fcmToken;
  } else {
    throw new Error('fcm token을 발급받지 못했습니다.');
  }
};
