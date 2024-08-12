import {useState} from 'react';
import ArticleImageList from '@/components/molecules/List/ArticleImageList';
import ImageModal from '@/components/organisms/Modal/ImageModal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';

interface ArticleImageProps {
  images: string[];
}

const ArticleImage = ({images}: ArticleImageProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ArticleImageList images={images} onClick={handleClick} />
      {selectedImage !== null && (
        <ModalPortal>
          <ImageModal
            images={images}
            selectedImage={selectedImage}
            onClose={handleClose}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default ArticleImage;
