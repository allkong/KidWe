import {useRef, useState, useMemo} from 'react';
import TextEditor from '@/components/organisms/Texteditor/Texteditor';

import TitleInput from '@/components/atoms/Input/TitleInput';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import VoteIcon from '@/assets/icons/vote.svg?react';
import Divider from '@/components/atoms/Divider/Divider';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import {useNavigate} from 'react-router-dom';
import type {VoteInfo} from '@/types/announce/vote';

const AnnouncementWrite = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [votetitle, setVoteTitle] = useState('');
  const [votedate, setVoteDate] = useState('');
  const [voteoptions, setVoteOptions] = useState(['', '', '']);
  const [voteInfo, setVoteInfo] = useState<VoteInfo>();
  const navigate = useNavigate();

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
  const handleAnnouncementSubmit = () => {
    // 여기에 데이터를 저장하고 전송하는 로직을 추가합니다.
    // 예: API 호출

    // 저장이 완료되면 /announcement 페이지로 이동합니다.
    navigate('/announcement');
  };

  return (
    <div>
      <div className="flex-grow ">
        <div>
          <TitleInput
            value={title}
            placeholder="제목"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="h-96">
          <TextEditor value={contents} onChange={setContents} />
        </div>

        {voteInfo ? (
          <>
            <div className="flex items-center justify-start">
              <VoteIcon width={36} height={36} />
              <p>투표</p>
            </div>
            <div className="w-full mx-2 px-2 space-y-2 py-2 border rounded-lg">
              <div className="flex justify-between pl-4">
                <p className="text-2xl justify-between">{voteInfo.votetitle}</p>
                <MoreButton options={['sdfsdf', '삭제']} />
              </div>
              <ul>
                {voteInfo.voteoptions.map((option, index) => (
                  <div key={index} className="px-4">
                    <p className="px-2">{option}</p>
                    <Divider />
                  </div>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <p className="w-full px-2 space-y-2">투표 추가</p>
            <DashedButton label="+" onClick={handleModalOpen} />
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
      <div className="px-5 py-6 h-fit min-h-fit min-w-fit">
        <Button
          label="공지사항 작성"
          size="large"
          onClick={handleAnnouncementSubmit}
        />
      </div>
    </div>
  );
};

export default AnnouncementWrite;
