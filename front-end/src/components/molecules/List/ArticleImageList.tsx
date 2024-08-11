import React, {useRef} from 'react';

interface ArticleImageListProps {
  images: string[];
  onClick: (index: number) => void;
  isEditable?: boolean;
  onAddImage?: (files: FileList) => void;
}

const ArticleImageList = ({
  images,
  onClick,
  isEditable = false,
  onAddImage,
}: ArticleImageListProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && onAddImage) {
      onAddImage(event.target.files);
    }
  };

  return (
    <div className="flex space-x-2 overflow-x-scroll scrollbar-hide">
      {isEditable && (
        <>
          <div
            className="flex items-center justify-center h-32 border-2 border-dashed rounded-sm cursor-pointer aspect-square"
            onClick={handleAddImageClick}
          >
            <p className="text-6xl font-thin text-gray-150">+</p>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{display: 'none'}}
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </>
      )}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="object-cover h-32 rounded-sm cursor-pointer aspect-square"
          onClick={() => {
            onClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default ArticleImageList;
