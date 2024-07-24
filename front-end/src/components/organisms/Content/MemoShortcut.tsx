import Button from '@/components/atoms/Button/Button';

const MemoShortcut = () => {
  return (
    <div className="bg-white rounded-lg">
      <div></div>
      <div>
        <p>방금 일어난 일을 바로 기록해 보세요</p>
        {/* 연필 아이콘 */}
      </div>
      <Button label="+ 메모 등록하기" />
    </div>
  );
};

export default MemoShortcut;
