interface ColorVariant {
  variant?: 'red' | 'green' | 'blue' | 'primary';
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
    case 'red':
      return 'bg-red-400 text-white';
    case 'green':
      return 'bg-lime-600 text-white';
    case 'blue':
      return 'bg-blue-400 text-white';
    case 'primary':
      return 'bg-primary text-white';
    default:
      return 'bg-gray-200 text-white';
  }
};

const Tag = ({
  text,
  variant,
  width,
  height,
  bgColor: backgroundColor,
  textColor: color,
}: TagProps) => {
  const colorClass = getColorClass(variant);

  return (
    <div
      className={`inline-block w-fit text-xxs min-w-5 box-border py-1 px-2 rounded-lg text-center ${colorClass}`}
      style={{width: width, height, backgroundColor, color}}
    >
      {text}
    </div>
  );
};

export default Tag;
