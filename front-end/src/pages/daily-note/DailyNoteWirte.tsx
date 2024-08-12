import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';

const DailyNoteWrite = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="알림장" buttonType="back" />
      <div className={containerHeaderClass}>작성</div>
    </div>
  );
};

export default DailyNoteWrite;
