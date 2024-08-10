import InputForm from '@/components/molecules/InputForm/InputForm';

const ButtonBar = () => {
  return (
    <nav className="box-border fixed bottom-0 w-full py-4 text-base bg-white border-t px-7">
      <InputForm inputValue="댓글 입력" buttonLabel="등록" onClick={() => {}} />
    </nav>
  );
};

export default ButtonBar;
