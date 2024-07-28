import Button from '@/components/atoms/Button/Button';
import pencilIcon from '@/assets/menu/pencil.png';

const MemoShortcut = () => {
  const today: Date = new Date();

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const formattedDate = today.toLocaleDateString('ko-KR', dateOptions);

  return (
    <div className="p-5 space-y-2 bg-white rounded-lg">
      <div>
        <p className="text-sm text-gray-200">{formattedDate}</p>
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-gray-300">
            방금 일어난 일을 바로 기록해 보세요
          </p>
          <img className="w-4 h-4" src={pencilIcon} />
        </div>
      </div>
      <Button label="+ 메모 등록하기" />
    </div>
  );
};

export default MemoShortcut;
