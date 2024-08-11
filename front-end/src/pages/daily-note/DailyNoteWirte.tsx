import {useState} from 'react';
import {toast} from 'react-toastify';
import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import TextEditor from '@/components/organisms/Board/TextEditor';
import MemoChildSelect from '@/components/organisms/Memo/MemoChildSelect';
import ArticleImageList from '@/components/molecules/List/ArticleImageList';
import ImageIcon from '@/assets/icons/pic_line.svg?react';

const DailyNoteWrite = () => {
  // 파일 객체 배열과 미리보기 URL 배열을 위한 상태 선언
  const [files, setFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleAddImage = (selectedFiles: FileList) => {
    const currentFileCount = files.length;

    // 최대 10장을 초과하지 않도록 제한
    if (currentFileCount + selectedFiles.length > 10) {
      toast.warn('최대 10장까지 업로드할 수 있습니다.');
      return;
    }

    // FileList를 배열로 변환
    const newFiles = Array.from(selectedFiles);

    // 파일 객체 배열을 업데이트
    setFiles([...files, ...newFiles]);

    // 미리보기 URL 생성 후 상태 업데이트
    const newImagePreviews = newFiles.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newImagePreviews]);
  };

  const handleClick = (index: number) => {
    // 이미지 클릭 시 동작 처리
    console.log(`이미지 ${index + 1} 클릭됨`);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title="알림장" buttonType="back" />
      <div className={containerHeaderClass}>
        <div className="p-4">
          <MemoChildSelect />
        </div>
        <TextEditor />
        <div className="p-4 mt-12">
          <div className="flex flex-row items-center mb-2">
            <ImageIcon fill="black" width={24} height={25} />
            <p className="ms-2">사진 선택</p>
            <p className="text-xs ms-5">{files.length}/10</p>
          </div>
          <ArticleImageList
            images={imagePreviews} // 미리보기 URL을 전달
            onClick={handleClick}
            isEditable={true}
            onAddImage={handleAddImage}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyNoteWrite;
