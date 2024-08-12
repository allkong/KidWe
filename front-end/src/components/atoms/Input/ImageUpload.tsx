import {useState, ChangeEvent} from 'react';
import Icon from '@/assets/icons/pic_line.svg?react';

interface ImageUploadProps {
  onChange: (image: File) => void;
}

const ImageUpload = ({onChange}: ImageUploadProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  return (
    <div className="space-y-2">
      <p>사진 선택 (첨부)</p>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImagePreview}
        className="hidden"
      />
      {!previewImage && (
        <label
          htmlFor="image"
          className="box-border flex flex-row items-center justify-center w-full h-10 gap-2 text-gray-200 bg-white border-2 border-dashed rounded-lg"
        >
          <Icon fill="#C3C3C3" width={23} height={24} />
          <p className="text-sm">사진 선택</p>
        </label>
      )}
      {previewImage && (
        <img
          src={previewImage}
          alt="preview"
          className="object-cover w-full h-64"
        />
      )}
    </div>
  );
};

export default ImageUpload;
