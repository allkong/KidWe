interface ColorVariant {
  variant?: 'red' | 'green' | 'blue' | 'primary';
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

const Tag = ({text, variant: color}: TagProps) => {
  const colorClass = getColorClass(color);

  return (
    <div
      className={`inline-block w-fit text-xxs min-w-5 box-border py-1 px-2 rounded-lg text-center ${colorClass}`}
    >
      {text}
    </div>
  );
};

export default Tag;
