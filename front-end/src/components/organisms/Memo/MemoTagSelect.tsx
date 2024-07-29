import Input from '@/components/atoms/Input/Input';
import BigTag from '@/components/atoms/Tag/BigTag';
import {useRef} from 'react';

const MemoTagSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    inputRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div className="space-y-3 text-gray-300">
      <p className="text-sm">태그</p>
      <Input
        ref={inputRef}
        onClick={handleInputClick}
        placeholder="태그 입력"
      />
      <div className="box-border h-40 px-2 py-3 overflow-y-auto border border-gray-200 rounded-md text-wrap">
        {/* tag 받아오는 영역 */}
        <div className="inline-block m-1">
          <BigTag variant="green" text="밥 남김" />
        </div>
      </div>
      <div className="w-full space-x-1 overflow-x-auto h-fit text-nowrap">
        <BigTag variant="deepGreen" text="밥 남김" />
        <BigTag variant="deepGreen" text="밥 남김" />
      </div>
    </div>
  );
};

export default MemoTagSelect;
