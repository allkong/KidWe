interface ColorVariant {
  variant?: 'green' | 'deepGreen' | 'gray' | 'primary';
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
}

interface TagProps extends ColorVariant {
  text?: string;
}

const getColorClass = (variant: ColorVariant['variant']) => {
  switch (variant) {
    case 'gray':
      return 'bg-gray-200 text-white';
    case 'green':
      return 'bg-[#C3E4C0] text-gray-300';
    case 'deepGreen':
      return 'bg-[#7AB675] text-white';
    case 'primary':
      return 'bg-primary text-white';
    default:
      return 'bg-gray-200 text-white';
  }
};

const BigTag = ({
  text,
  variant,
  bgColor: backgroundColor,
  textColor: color,
  ...props
}: TagProps) => {
  const colorClass = getColorClass(variant);

  return (
    <div
      className={`inline-block w-fit text-xs min-w-10 box-border py-2 px-2 rounded-lg text-center ${colorClass}`}
      style={{backgroundColor, color, ...props}}
    >
      {text}
    </div>
  );
};

export default BigTag;
