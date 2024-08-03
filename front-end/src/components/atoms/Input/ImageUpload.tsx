import {useState, ChangeEvent} from 'react';
import Icon from '@/assets/icons/pic_line.svg?react';

interface ImageUploadProps {
  onChange: (image: string) => void;
}

const ImageUpload = ({onChange}: ImageUploadProps) => {
  const [image, setImage] = useState<string | null>(null);

  const previewImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <p>사진 선택 (첨부)</p>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={previewImage}
        className="hidden"
      />
      {!image && (
        <label
          htmlFor="image"
          className="box-border flex flex-row items-center justify-center w-full h-10 gap-2 text-gray-200 bg-white border-2 border-dashed rounded-lg"
        >
          <Icon />
          <p className="text-sm">사진 선택</p>
        </label>
      )}
      {image && (
        <img src={image} alt="preview" className="object-cover w-full h-64" />
      )}
    </div>
  );
};

export default ImageUpload;
