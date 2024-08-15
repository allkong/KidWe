import BracketButton from '@/components/atoms/Button/BracketButton';

interface MyPageItemProps {
  label: string;
  content?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MyPageItem = ({label, content, onClick}: MyPageItemProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full px-5 py-2 text-gray-300 bg-white border-b border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <p className="font-semibold">{label}</p>
          {content && <p>{content}</p>}
        </div>
        {onClick && <BracketButton direction="right" />}
      </div>
    </div>
  );
};

export default MyPageItem;
