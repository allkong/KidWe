import {useState} from 'react';
import InputForm from '@/components/molecules/InputForm/InputForm';

interface InputBarProps {
  onSubmit: (content: string) => void;
}

const InputBar = ({onSubmit}: InputBarProps) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim() === '') return;
    onSubmit(comment);
    setComment('');
  };

  return (
    <nav className="box-border relative bottom-0 w-full py-4 text-base bg-white border-t px-7">
      <InputForm
        placeholder="댓글 입력"
        inputValue={comment}
        setValue={setComment}
        buttonLabel="등록"
        onClick={handleSubmit}
      />
    </nav>
  );
};

export default InputBar;
