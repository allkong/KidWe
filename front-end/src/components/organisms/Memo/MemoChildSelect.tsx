import DashedRoundedButton from '@/components/atoms/Button/DashedRoundedButton';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import {useEffect, useState} from 'react';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal/Modal';
import CheckListItem from '@/components/organisms/Check/CheckListItem';
import Input from '@/components/atoms/Input/Input';
import {useRecoilState} from 'recoil';
import type {Kid} from '@/types/memo/Kid';
import {useGetBanInfomation} from '@/hooks/memo/useGetBanInfomation';
import {memoKidsSelector} from '@/recoil/selectors/memo/memoKids';
import {dailyNoteKidSelector} from '@/recoil/selectors/daily-note/dailyNoteKid';

interface CheckedKid {
  kid: Kid;
  isChecked: boolean;
}

const banId = 1;

interface MemoChildSelectProps {
  type: 'memo' | 'daily-note';
  isMultipleSelect?: boolean;
}

const MemoChildSelect = ({
  type,
  isMultipleSelect = false,
}: MemoChildSelectProps) => {
  const [memoKids, setMemoKids] = useRecoilState(memoKidsSelector);
  const [dailyNoteKid, setDailyNoteKid] = useRecoilState(dailyNoteKidSelector);

  const [children, setChildren] = useState<CheckedKid[]>();
  const [filteredChildren, setFilteredChildren] = useState<CheckedKid[]>();

  const [input, setInput] = useState('');

  const handleInput = (value: string) => {
    setInput(value);
  };

  const {data} = useGetBanInfomation(banId);

  useEffect(() => {
    setChildren(
      data?.kids.map(kid => {
        return {kid, isChecked: false};
      })
    );
  }, [data]);

  useEffect(() => {
    if (children === undefined) {
      return;
    }
    if (input === '') {
      setFilteredChildren([...children]);
    } else {
      setFilteredChildren(
        [...children].filter(child => child.kid.name.includes(input))
      );
    }
  }, [input, children]);

  const [isChildrenModalOpen, setIsChildrenModalOpen] = useState(false);

  const handleCloseChildrenModal = () => {
    setChildren(
      data?.kids.map(kid => {
        return {kid, isChecked: false};
      })
    );
    setIsChildrenModalOpen(false);
  };

  const handleOpenChildrenModal = () => {
    setIsChildrenModalOpen(true);
  };

  const handleSubmitChildrenModal = () => {
    if (children !== undefined) {
      const checkedChild = children?.filter(child => child.isChecked);
      if (type === 'memo') {
        setMemoKids(checkedChild.map(child => child.kid));
      } else if (type === 'daily-note') {
        setDailyNoteKid(checkedChild[0].kid.id);
      }

      setIsChildrenModalOpen(false);
    }
  };

  const handleItemClick = (id: number) => {
    if (children !== undefined) {
      if (isMultipleSelect) {
        // 다중 선택 모드
        setChildren(
          [...children].map(child =>
            child.kid.id === id
              ? {...child, isChecked: !child.isChecked}
              : {...child}
          )
        );
      } else {
        // 단일 선택 모드
        setChildren(
          [...children].map(child =>
            child.kid.id === id
              ? {...child, isChecked: true}
              : {...child, isChecked: false}
          )
        );
      }
    }
  };

  return (
    <>
      <p>원생 선택</p>
      <div
        onClick={handleOpenChildrenModal}
        className="flex flex-wrap gap-2 mt-2 overflow-y-auto"
      >
        <DashedRoundedButton />
        {type === 'memo' &&
          memoKids &&
          memoKids.map(kid => <ProfileImage key={kid.id} src={''} />)}
        {type === 'daily-note' && dailyNoteKid !== 0 && (
          <ProfileImage src={''} />
        )}
      </div>
      <ModalPortal>
        <Modal isOpen={isChildrenModalOpen}>
          <Modal.Header title="원생 선택" />
          <Modal.Body>
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 py-6">
              <div className="box-border w-full px-6 h-fit">
                <Input
                  placeholder="원생 이름 입력"
                  value={input}
                  onChange={handleInput}
                />
              </div>
              <div className="flex flex-col w-full overflow-y-auto h-72">
                {filteredChildren &&
                  filteredChildren.map(child => (
                    <CheckListItem
                      key={child.kid.id}
                      text={child.kid.name}
                      onClick={() => handleItemClick(child.kid.id)}
                      isChecked={child.isChecked}
                    />
                  ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            onClick={handleCloseChildrenModal}
            variant="negative"
            round="full"
            size="large"
          ></Modal.BottomButton>
          <Modal.BottomButton
            label="선택"
            onClick={handleSubmitChildrenModal}
            variant="positive"
            round="full"
            size="large"
          ></Modal.BottomButton>
          <Modal.Background onClick={handleCloseChildrenModal} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default MemoChildSelect;
