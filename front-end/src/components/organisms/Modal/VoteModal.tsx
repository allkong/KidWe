import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import dayjs from 'dayjs';

import type {VoteInfo} from '@/types/announcement/vote';
import type {AnnounncementWrite} from '@/types/announcement/AnnouncementWrite';
import {postAnnouncementWrite} from '@/apis/announcement/postAnnouncementWrite';

import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import Divider from '@/components/atoms/Divider/Divider';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import VoteIcon from '@/assets/icons/vote-outline.svg?react';

const VoteModal = () => {
  //   const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [votetitle, setVoteTitle] = useState('');
  const [votedate, setVoteDate] = useState('');
  const [voteoptions, setVoteOptions] = useState(['', '', '']);
  const [voteInfo, setVoteInfo] = useState<VoteInfo>();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleVoteOptionChange = (index: number, value: string) => {
    const newVoteOptions = [...voteoptions];
    newVoteOptions[index] = value;
    setVoteOptions(newVoteOptions);
  };
  const handleItemAdd = () => {
    setVoteOptions([...voteoptions, '']);
  };
  const handleSubmit = () => {
    setVoteInfo({votetitle, votedate, voteoptions});
    setIsModalOpen(false);
  };
  const handleVoteDelete = () => {
    setVoteInfo(undefined);
  };

  return (
    <div>
      <div className="flex-grow">
        {voteInfo ? (
          <>
            <div className="flex items-center justify-start">
              <p>투표</p>
            </div>
            <div className="box-border max-w-full px-2 py-2 mx-2 space-y-2 border rounded-lg">
              <div className="flex justify-between px-4 ">
                <p className="justify-between text-2xl">{voteInfo.votetitle}</p>
                <MoreButton>
                  <MoreButton.Option
                    text="수정하기"
                    onClick={handleModalOpen}
                  />
                  <MoreButton.Option
                    text="삭제하기"
                    onClick={handleVoteDelete}
                  />
                </MoreButton>
              </div>
              <ul>
                {voteInfo.voteoptions.map((option, index) => (
                  <div key={index} className="px-4 ">
                    <p className="px-2">{option}</p>
                    <Divider />
                  </div>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center mb-2">
              <VoteIcon width={20} height={20} />
              <p className="ms-2">투표 추가</p>
            </div>
            <DashedButton
              label="+"
              onClick={handleModalOpen}
              variant="lightgray"
            />
          </>
        )}
        <div className="w-full px-2 space-y-2"></div>
        <ModalPortal>
          <Modal isOpen={isModalOpen}>
            <Modal.Header title="투표 추가" />
            <Modal.Body>
              <LabelInput
                label="제목"
                placeholder="투표 제목"
                value={votetitle}
                onChange={e => setVoteTitle(e.target.value)}
              />
              <LabelInput
                label="기간"
                placeholder="투표 기간"
                value={votedate}
                onChange={e => setVoteDate(e.target.value)}
              />
              <p>투표</p>
              {voteoptions.map((option, index) => (
                <LabelInput
                  key={index}
                  placeholder={`항목 ${index + 1}`}
                  value={option}
                  onChange={e => handleVoteOptionChange(index, e.target.value)}
                />
              ))}
              <div className="py-2">
                <DashedButton label="+" onClick={handleItemAdd} />
              </div>
            </Modal.Body>

            <Modal.BottomButton
              label="취소"
              round="full"
              size="large"
              variant="negative"
              onClick={handleModalClose}
            ></Modal.BottomButton>
            <Modal.BottomButton
              label="선택"
              round="full"
              size="large"
              variant="positive"
              onClick={handleSubmit}
            ></Modal.BottomButton>

            <Modal.Background onClick={handleModalClose} />
          </Modal>
        </ModalPortal>
      </div>
    </div>
  );
};

export default VoteModal;
