import SignatureModal from '../Modal/SignatureModal';

interface ConsentSection {
  text: string;
  date: string;
  parentName: string;
  onClick: (imageData: Blob) => void;
}

const ConsentSection = ({text, date, parentName, onClick}: ConsentSection) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center space-y-1">
        <p className="text-gray-150">{text}</p>
        <p className="font-medium text-black">
          {date} {parentName}
        </p>
      </div>
      <SignatureModal onClick={onClick} />
    </div>
  );
};

export default ConsentSection;
