interface ColorVariant {
  variant?: 'green' | 'deepGreen' | 'gray' | 'primary';
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

const BigTag = ({text, variant: color}: TagProps) => {
  const colorClass = getColorClass(color);

  return (
    <div
      className={`w-fit text-xs min-w-5 box-border py-2 px-2 rounded-lg text-center ${colorClass}`}
    >
      {text}
    </div>
  );
};

export default BigTag;
