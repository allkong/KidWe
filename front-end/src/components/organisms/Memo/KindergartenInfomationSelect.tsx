import TextArea from '@/components/atoms/Input/TextArea';
import MemoChildSelect from '@/components/organisms/Memo/MemoChildSelect';
import MemoLessonSelect from '@/components/organisms/Memo/MemoLessonSelect';
import {memoState} from '@/recoil/atoms/memo/memo';
import {PostMemo} from '@/types/memo/PostMemo';
import {useRecoilState} from 'recoil';

const KindergartenInfomationSelect = () => {
  const [memo, setMemo] = useRecoilState<PostMemo>(memoState);

  const handleChange = (value: string) => {
    setMemo({...memo, content: value});
  };

  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p className="mb-1 text-2xl font-semibold cursor-default">내용 선택</p>
        <MemoChildSelect />
        <MemoLessonSelect />
        <div className="h-32">
          <TextArea value={memo.content} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default KindergartenInfomationSelect;
