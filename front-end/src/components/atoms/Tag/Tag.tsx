interface TagProps {
  text: string;
  backgroundColor?: string;
  textColor?: 'black' | 'white';
  size?: 'small' | 'medium' | 'large';
}

const Tag = ({
  text,
  backgroundColor = '#FFF1A7',
  textColor = 'black',
  size = 'medium',
}: TagProps) => {
  const colorClass = textColor === 'black' ? 'text-black' : 'text-white';
  // small은 커스텀해서 사용하기
  let sizeClass: string = '';

  if (size === 'small') {
    sizeClass = 'text-xs py-1 px-3';
  } else if (size === 'medium') {
    sizeClass = 'py-1 px-3';
  } else if (size === 'large') {
    sizeClass = 'py-2 px-4';
  }

  return (
    <div
      className={`${colorClass} ${sizeClass} inline-block rounded-full text-center`}
      style={{backgroundColor}}
    >
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default Tag;
