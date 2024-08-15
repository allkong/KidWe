import {useEffect, useCallback} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {toast} from 'react-toastify';

import {useDailyNoteDetail} from '@/hooks/daily-note/useDailyNoteDetail';
import {usePutDailyNote} from '@/hooks/daily-note/usePutDailyNote';
import {dailyNoteFormState} from '@/recoil/atoms/daily-note/dailyNoteFormState';
import {getMemberId} from '@/utils/userData';
import {containerHeaderClass} from '@/styles/styles';

import Header from '@/components/organisms/Navigation/Header';
import TextEditor from '@/components/organisms/Board/TextEditor';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';

const DailyNoteUpdate = () => {
  const {dailyNoteId} = useParams();
  const navigate = useNavigate();
  const {data} = useDailyNoteDetail(getMemberId()!, dailyNoteId!);
  const {mutate} = usePutDailyNote();
  const [formState, setFormState] = useRecoilState(dailyNoteFormState);
  const resetFormState = useResetRecoilState(dailyNoteFormState);

  useEffect(() => {
    if (data) {
      setFormState({
        kidId: data.kidId,
        sendTime: data.sendTime || '',
        content: data.content,
      });
    }

    return () => {
      resetFormState();
    };
  }, [data, setFormState, resetFormState]);

  const handleEditorChange = (value: string) => {
    setFormState(prev => ({...prev, content: value}));
  };

  const handleFormSubmit = useCallback(() => {
    if (!formState.content.trim()) {
      toast.error('내용을 입력해 주세요');
      return;
    }

    mutate(
      {
        memberId: getMemberId()!,
        dailyNoteId: dailyNoteId!,
        body: {
          kidId: formState.kidId,
          content: formState.content,
        },
      },
      {
        onSuccess: () => {
          navigate(`/daily-notes/${dailyNoteId}`);
        },
      }
    );
  }, [formState, mutate, navigate, dailyNoteId]);

  return (
    <div className="flex flex-col h-screen">
      <Header title="알림장 수정" buttonType="back" />
      <div className={containerHeaderClass}>
        <TextEditor value={formState.content} onChange={handleEditorChange} />
      </div>
      <ButtonBar
        label="수정하기"
        disabled={!formState.content}
        variant={!formState.content ? 'negative' : 'positive'}
        onClick={handleFormSubmit}
      />
    </div>
  );
};

export default DailyNoteUpdate;
