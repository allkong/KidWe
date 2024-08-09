import Header from '@/components/organisms/Navigation/Header';
import AuthorItem from '@/components/molecules/Item/AuthorItem';
import {containerHeaderClass} from '@/styles/styles';

const DailyNoteDetail = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="알림장" buttonType="back" />
      <div className={containerHeaderClass}>
        <AuthorItem
          profile=""
          writer="햄스터반 선생님"
          date="2024-08-09 15:13"
        />
      </div>
    </div>
  );
};

export default DailyNoteDetail;
