import {useState} from 'react';
import {dataURLToFile} from '@/utils/convertImageType';
import SignatureModal from '@/components/organisms/Modal/SignatureModal';

interface ConsentSection {
  text: string;
  date: string;
  parentName: string;
  onClick: (imageData: File) => void;
}

const ConsentSection = ({text, date, parentName, onClick}: ConsentSection) => {
  const [imageData, setImageData] = useState<string | null>(null);

  const handleImageUpload = (imageData: string) => {
    setImageData(imageData);
    onClick(dataURLToFile(imageData, '서명.png'));
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center space-y-1">
        <p className="text-gray-150">{text}</p>
        <p className="font-medium text-black">
          {date} {parentName}
        </p>
      </div>
      <SignatureModal onClick={handleImageUpload} />
      {imageData && (
        <div className="flex justify-end">
          <img src={imageData} className="mt-4 bg-gray-100 rounded-md w-60" />
        </div>
      )}
    </div>
  );
};

export default ConsentSection;
