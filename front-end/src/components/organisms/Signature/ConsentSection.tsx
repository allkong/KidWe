interface ConsentSection {
  text: string;
  date: string;
  parentName: string;
}

const ConsentSection = ({text, date, parentName}: ConsentSection) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex flex-col items-center space-y-1">
        <p className="text-gray-150">{text}</p>
        <p className="font-medium text-black">
          {date} {parentName}
        </p>
      </div>
    </div>
  );
};

export default ConsentSection;
