interface PostImageListProps {
  images: string[];
  onClick: (index: number) => void;
}
const PostImageList = ({images, onClick}: PostImageListProps) => {
  return (
    <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="object-cover h-32 rounded-sm aspect-square"
          onClick={() => {
            onClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default PostImageList;
