import TextArea from '@/components/atoms/Input/TextArea';
import MemoChildSelect from '@/components/organisms/Memo/MemoChildSelect';
import MemoLessonSelect from '@/components/organisms/Memo/MemoLessonSelect';

const KindergartenInfomationSelect = () => {
  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">내용 선택</p>
        <MemoChildSelect />
        <MemoLessonSelect />
        <div className="h-32">
          <TextArea />
        </div>
      </div>
    </>
  );
};

export default KindergartenInfomationSelect;
