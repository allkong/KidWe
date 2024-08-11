import DashedButton from '@/components/atoms/Button/DashedButton';
import {useEffect, useState} from 'react';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal/Modal';
import Input from '@/components/atoms/Input/Input';
import CheckListItem from '../Check/CheckListItem';
import {useRecoilState, useRecoilValue} from 'recoil';
import type {Lesson} from '@/types/memo/Lesson';
import Tag from '@/components/atoms/Tag/Tag';
import {useGetLessonInfomation} from '@/hooks/memo/useGetLessonInfomation';
import dayjs from 'dayjs';
import {memoLessonSelector} from '@/recoil/selectors/memo/memoLesson';
import {memoTimeSelector} from '@/recoil/selectors/memo/memoTime';

interface CheckedLesson {
  lesson: Lesson;
  isChecked: boolean;
}

const banId = 1;

const MemoLessonSelect = () => {
  const [lessons, setLessons] = useState<CheckedLesson[]>();
  const [filteredLessons, setFilteredLessons] = useState<CheckedLesson[]>();
  const [input, setInput] = useState('');

  const [memoLesson, setMemoLesson] = useRecoilState(memoLessonSelector);
  const memoTime = useRecoilValue(memoTimeSelector);

  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);

  const {data} = useGetLessonInfomation(
    banId,
    dayjs(memoTime).format('YYYY-MM-DD')
  );

  useEffect(() => {
    setLessons(
      data?.map(value => {
        return {lesson: value, isChecked: false};
      })
    );
  }, [data]);

  useEffect(() => {
    if (lessons === undefined) {
      return;
    }
    if (input === '') {
      setFilteredLessons([...lessons]);
    } else {
      setFilteredLessons(
        [...lessons].filter(item => item.lesson.content.includes(input))
      );
    }
  }, [lessons, input, data]);

  const handleCloseLessonModal = () => {
    setIsLessonModalOpen(false);
  };

  const handleOpenLessonModal = () => {
    setIsLessonModalOpen(true);
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleClickItem = (value: string) => {
    const find = lessons?.find(lesson => lesson.lesson.content === value);
    if (find !== undefined) {
      setMemoLesson(find.lesson.content);
    }
    setLessons(
      lessons?.map(lesson =>
        lesson.lesson.content === value
          ? {...lesson, isChecked: true}
          : {...lesson, isChecked: false}
      )
    );
    setIsLessonModalOpen(false);
  };

  return (
    <>
      <p className="text-sm">수업 선택</p>
      <div
        onClick={handleOpenLessonModal}
        className="flex items-center justify-center h-10"
      >
        {memoLesson ? (
          <div className="flex items-center justify-start w-full gap-3">
            <Tag backgroundColor="#FFF1A7" text={'수업'} />
            <p>{memoLesson}</p>
          </div>
        ) : (
          <DashedButton label="+" onClick={handleOpenLessonModal} />
        )}
      </div>
      <p className="text-sm">메모</p>
      <ModalPortal>
        <Modal isOpen={isLessonModalOpen}>
          <Modal.Header title="수업 선택" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 py-6">
              <div className="box-border w-full px-6 h-fit">
                <Input
                  placeholder="수업 이름 입력"
                  value={input}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full overflow-y-auto h-72">
                {filteredLessons &&
                  filteredLessons.map((lesson, idx) => (
                    <CheckListItem
                      key={idx}
                      text={lesson.lesson.content}
                      isChecked={lesson.isChecked}
                      onClick={() => handleClickItem(lesson.lesson.content)}
                    />
                  ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleCloseLessonModal}
            variant="negative"
            round="small"
            size="large"
          ></Modal.BottomButton>
          <Modal.Background onClick={handleCloseLessonModal} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default MemoLessonSelect;
