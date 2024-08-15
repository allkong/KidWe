import {useState} from 'react';
import dayjs from 'dayjs';
import type {VoteInfo} from '@/types/announcement/VoteInfo';

import LabelInput from '@/components/atoms/Input/LabelInput';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import Divider from '@/components/atoms/Divider/Divider';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import VoteIcon from '@/assets/icons/vote-outline.svg?react';
import DatePicker from '@/components/atoms/Input/DatePicker'; // DatePicker import

interface VoteModalProps {
  onVoteChange: (vote: VoteInfo | undefined) => void; // 투표 정보 변경 시 호출되는 콜백
}

const VoteModal = ({onVoteChange}: VoteModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [votetitle, setVoteTitle] = useState('');
  const [voteStartDate, setVoteStartDate] = useState('');
  const [voteEndDate, setVoteEndDate] = useState('');
  const [voteOptions, setVoteOptions] = useState(['', '']); // 기본으로 2개의 항목 설정
  const [voteInfo, setVoteInfo] = useState<VoteInfo>();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleVoteOptionChange = (index: number, value: string) => {
    const newVoteOptions = [...voteOptions];
    newVoteOptions[index] = value;
    setVoteOptions(newVoteOptions);
  };

  const handleItemAdd = () => {
    setVoteOptions([...voteOptions, '']);
  };

  const handleItemDelete = (index: number) => {
    if (voteOptions.length > 2) {
      const newVoteOptions = voteOptions.filter((_, i) => i !== index);
      setVoteOptions(newVoteOptions);
    }
  };

  const handleSubmit = () => {
    const voteData = {
      title: votetitle,
      voteStartDate,
      voteEndDate,
      items: voteOptions.map(option => ({itemName: option})),
    };
    setVoteInfo(voteData);
    onVoteChange(voteData); // formState에 투표 정보 저장
    setIsModalOpen(false);
  };

  const handleVoteDelete = () => {
    setVoteInfo(undefined);
    onVoteChange(undefined); // 투표 정보 삭제
  };

  return (
    <div>
      {voteInfo ? (
        <div className="flex items-center justify-start">
          <p>투표</p>
        </div>
      ) : (
        <div className="flex flex-row items-center mb-2">
          <VoteIcon width={20} height={20} />
          <p className="ms-2">투표 추가</p>
        </div>
      )}

      {voteInfo ? (
        <div className="box-border max-w-full px-2 py-2 mx-2 space-y-2 border rounded-lg">
          <div className="flex justify-between px-4">
            <p className="justify-between text-2xl">{voteInfo.title}</p>
            <MoreButton>
              <MoreButton.Option text="수정하기" onClick={handleModalOpen} />
              <MoreButton.Option text="삭제하기" onClick={handleVoteDelete} />
            </MoreButton>
          </div>
          <ul>
            {voteInfo.items.map((option, index) => (
              <div key={index} className="px-4">
                <p className="px-2">{option.itemName}</p>
                <Divider />
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <DashedButton label="+" onClick={handleModalOpen} variant="lightgray" />
      )}

      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="투표 추가" />
          <Modal.Body>
            <div className="flex flex-col space-y-3 overflow-y-scroll max-h-96 scrollbar-hide">
              <LabelInput
                label="주제"
                placeholder="투표 제목"
                value={votetitle}
                onChange={e => setVoteTitle(e.target.value)}
              />
              <div className="space-y-2">
                <p>기간</p>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-xs">
                    <DatePicker
                      selectedDate={voteStartDate}
                      minDate={dayjs().format('YYYY-MM-DD')}
                      onDateChange={setVoteStartDate}
                    />
                  </div>
                  <div className="flex items-center justify-center w-1/5 text-xs">
                    <p className="text-center">~</p>
                  </div>
                  <div className="text-xs">
                    <DatePicker
                      selectedDate={voteEndDate}
                      minDate={voteStartDate || dayjs().format('YYYY-MM-DD')}
                      onDateChange={setVoteEndDate}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p>항목</p>
                {voteOptions.map((option, index) => (
                  <LabelInput
                    key={index}
                    placeholder={`항목 ${index + 1}`}
                    value={option}
                    onChange={e =>
                      handleVoteOptionChange(index, e.target.value)
                    }
                    onDelete={
                      index >= 2 ? () => handleItemDelete(index) : undefined
                    }
                  />
                ))}
                <DashedButton label="+ 항목 추가" onClick={handleItemAdd} />
              </div>
            </div>
          </Modal.Body>
          <Modal.BottomButton
            label="취소"
            round="full"
            size="large"
            variant="negative"
            onClick={handleModalClose}
          />
          <Modal.BottomButton
            label="선택"
            round="full"
            size="large"
            variant="positive"
            onClick={handleSubmit}
          />
          <Modal.Background onClick={handleModalClose} />
        </Modal>
      </ModalPortal>
    </div>
  );
};

export default VoteModal;
