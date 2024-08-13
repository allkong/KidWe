import {containerHeaderClass} from '@/styles/styles';

import Header from '@/components/organisms/Navigation/Header';
import TitleInput from '@/components/atoms/Input/TitleInput';
import TextEditor from '@/components/organisms/Board/TextEditor';

const AnnouncementWrite = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="공지사항" buttonType="back" />
      <div className={containerHeaderClass}></div>
      <TitleInput
        // value={}
        placeholder="제목"
        // onChange={e => setTitle(e.target.value)}
      />
      <TextEditor value={formState.content} onChange={handleEditorChange} />
    </div>
  );
};

export default AnnouncementWrite;
