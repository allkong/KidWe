import '@/components/atoms/Loader/skeleton.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  shape?: 'circle' | 'rect';
}

const SkeletonLoader = ({
  width = '4rem',
  height = '4rem',
  shape = 'rect',
}: SkeletonLoaderProps) => {
  const roundedClass = shape === 'rect' ? 'rounded-sm' : 'rounded-full';

  return (
    <div
      className={`${roundedClass} skeleton-loader bg-gray-100`}
      style={{width, height}}
    ></div>
  );
};

export default SkeletonLoader;
