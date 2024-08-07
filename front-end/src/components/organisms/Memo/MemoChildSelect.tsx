import DashedRoundedButton from '@/components/atoms/Button/DashedRoundedButton';
import ProfileImage from '@/components/atoms/Image/ProfileImage';
import {useEffect, useState} from 'react';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal/Modal';
import CheckListItem from '@/components/organisms/Check/CheckListItem';
import Input from '@/components/atoms/Input/Input';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useRecoilState} from 'recoil';
import type {Kid} from '@/types/memo/Kid';
import {useGetBanInfomation} from '@/hooks/memo/useGetBanInfomation';

interface CheckedKid {
  kid: Kid;
  isChecked: boolean;
}

const banId = 1;

const MemoChildSelect = () => {
  const [memo, setMemo] = useRecoilState(memoState);

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
      setMemo({
        ...memo,
        kids: checkedChild.map(child => child.kid),
      });
      setIsChildrenModalOpen(false);
    }
  };

  const handleItemClick = (id: number) => {
    if (children !== undefined) {
      setChildren(
        [...children].map(child =>
          child.kid.id === id
            ? {...child, isChecked: !child.isChecked}
            : {...child}
        )
      );
    }
  };

  return (
    <>
      <p className="text-sm">원생 선택</p>
      <div
        onClick={handleOpenChildrenModal}
        className="flex flex-wrap gap-2 overflow-y-auto max-h-10"
      >
        {memo.kids &&
          memo.kids.map(kid => <ProfileImage key={kid.id} src={''} />)}
        <DashedRoundedButton></DashedRoundedButton>
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
