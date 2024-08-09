import {useEffect, useState} from 'react';
// import TextEditor from '@/components/organisms/Texteditor/Texteditor';

import TitleInput from '@/components/atoms/Input/TitleInput';
import LabelInput from '@/components/atoms/Input/LabelInput';
import Button from '@/components/atoms/Button/Button';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import VoteIcon from '@/assets/icons/vote.svg?react';
import Divider from '@/components/atoms/Divider/Divider';
import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import type {VoteInfo} from '@/types/announce/vote';
import type {AnnounncementWrite} from '@/types/announce/AnnouncementWrite';
import {postAnnouncementWrite} from '@/apis/announcement/postAnnouncementWrite';
import dayjs from 'dayjs';
const AnnouncementWrite = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [votetitle, setVoteTitle] = useState('');
  const [votedate, setVoteDate] = useState('');
  const [voteoptions, setVoteOptions] = useState(['', '', '']);
  const [voteInfo, setVoteInfo] = useState<VoteInfo>();
  const [announcementData, setAnnouncementData] =
    useState<AnnounncementWrite>();
  const [isPostAnnouncement, setIsPostAnnouncement] = useState(false);
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
  const handleVoteDelete = () => {
    setVoteInfo(undefined);
  };

  const announcementMutate = useMutation({
    mutationFn: () => {
      return postAnnouncementWrite(announcementData!);
    },
  });

  const handleAnnouncementSubmit = async () => {
    // 여기에 데이터를 저장하고 전송하는 로직을 추가합니다.
    setAnnouncementData(() => ({
      post: {
        createdDateTime: dayjs().toISOString(), // 현재 시간을 ISO 8601 형식으로 설정합니다.
        title: title,
        content: contents,
        picture: '',
      },
    }));

    // 저장이 완료되면 /announcement 페이지로 이동합니다.
    setIsPostAnnouncement(true);
  };

  useEffect(() => {
    if (isPostAnnouncement) {
      const postAnnouncement = async () => {
        try {
          await announcementMutate.mutate();
          console.log('작성 완료');
          navigate('/announcement');
        } catch (error) {
          console.error('공지사항 작성 못 보냈어요:', error);
        }
      };
      postAnnouncement();
      setIsPostAnnouncement(false);
    }
  }, [isPostAnnouncement, navigate, announcementMutate]);

  return (
    <div>
      <div className="flex-grow">
        <div>
          <TitleInput
            value={title}
            placeholder="제목"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="h-96">
          {/* <TextEditor value={contents} onChange={setContents} /> */}
        </div>

        {voteInfo ? (
          <>
            <div className="flex items-center justify-start">
              <VoteIcon width={36} height={36} />
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
