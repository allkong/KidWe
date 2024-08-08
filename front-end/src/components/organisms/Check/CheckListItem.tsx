import CheckBox from '@/components/atoms/CheckBox/CheckBox';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import {useCheckBox} from '@/hooks/CheckBox/useCheckBox';
import {ForwardedRef, forwardRef} from 'react';

interface CheckListItemProps {
  src?: string;
  text?: string;
  isChecked?: boolean;
  onClick?: (value: boolean) => void;
  size?: 'small' | 'large';
}

function getSizeClass(size: string): {fontSize: string; imgSize: string} {
  switch (size) {
    case 'small':
      return {fontSize: 'text-md', imgSize: ''};
    case 'large':
      return {fontSize: 'text-lg', imgSize: '46px'};
    default:
      return {fontSize: '', imgSize: ''};
  }
}

const CheckListItem = forwardRef(
  (
    {
      src,
      text,
      isChecked: ControlledIsChecked,
      onClick,
      size = 'large',
    }: CheckListItemProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = useCheckBox(ControlledIsChecked, onClick);

    const colorClass = isChecked ? 'bg-[#FFF9DF]' : 'bg-white';
    const {fontSize, imgSize} = getSizeClass(size);

    return (
      <div
        className={`flex items-center justify-between w-full px-8 py-5 text-gray-300 ${colorClass} border-b border-gray-100`}
        onClick={() => setIsChecked(!isChecked)}
      >
        <div className="flex items-center justify-center gap-3 w-fit h-fit">
          {src && <ProfileImage src={src} size={imgSize} />}
          <p className={`${fontSize} font-semibold`}>{text}</p>
        </div>
        <CheckBox ref={ref} isChecked={isChecked} onClick={setIsChecked} />
      </div>
    );
  }
);

export default CheckListItem;
