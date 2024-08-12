import TextArea from '@/components/atoms/Input/TextArea';
import MemoChildSelect from '@/components/organisms/Memo/MemoChildSelect';
import MemoLessonSelect from '@/components/organisms/Memo/MemoLessonSelect';
import {useRecoilState} from 'recoil';
import {memoContentSelector} from '@/recoil/selectors/memo/memoContent';

const KindergartenInfomationSelect = () => {
  const [memoContent, setMemoContent] = useRecoilState(memoContentSelector);

  const handleChange = (value: string) => {
    setMemoContent(value);
  };

  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">내용 선택</p>
        <MemoChildSelect type="memo" isMultipleSelect />
        <MemoLessonSelect />
        <div className="h-32">
          <TextArea value={memoContent} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default KindergartenInfomationSelect;
