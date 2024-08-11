import {saveAs} from 'file-saver';
import {toast} from 'react-toastify';
import Icon from '@/assets/icons/download-line.svg?react';

interface DownloadButtonProps {
  imageUrl: string;
}

const DownloadButton = ({imageUrl}: DownloadButtonProps) => {
  const handleDownload = async () => {
    try {
      //   const response = await fetch(imageUrl);
      const response = await fetch(imageUrl, {mode: 'no-cors'});
      const blob = await response.blob();
      saveAs(blob, `KidWe_${Date.now()}.png`);
    } catch (error) {
      toast.error('이미지 저장 실패');
    }
  };

  return (
    <button onClick={handleDownload}>
      <Icon width={24} height={24} />
    </button>
  );
};

export default DownloadButton;
