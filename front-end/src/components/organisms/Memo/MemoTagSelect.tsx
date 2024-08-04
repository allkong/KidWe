import Divider from '@/components/atoms/Divider/Divider';
import Input from '@/components/atoms/Input/Input';
import Tag from '@/components/atoms/Tag/Tag';
import {useRef} from 'react';

const MemoTagSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    inputRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div className="space-y-3 text-gray-300">
      <p className="mb-1 text-2xl font-semibold cursor-default">태그 선택</p>
      <p className="text-sm">태그</p>
      <Input
        ref={inputRef}
        onClick={handleInputClick}
        placeholder="태그 입력"
      />
      <div className="box-border h-40 px-2 py-3 overflow-y-auto border border-gray-200 rounded-md text-wrap">
        {/* tag 받아오는 영역 */}
        <div className="inline-block m-1">
          <Tag text="밥 남김" />
        </div>
      </div>
      <div className="w-full space-x-1 overflow-x-auto h-fit text-nowrap">
        <Tag backgroundColor="#FFDFDF" text="밥 남김" size="large" />
        <Tag backgroundColor="#FFDFDF" text="밥 남김" size="large" />
      </div>
      <Divider />
    </div>
  );
};

export default MemoTagSelect;
