import TextArea from '@/components/atoms/Input/TextArea';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Tag from '@/components/atoms/Tag/Tag';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import AllergyView from '@/components/organisms/Food/AllergyView';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';
import {useEffect, useState, useRef} from 'react';

interface FoodInfoWriteItemProps {
  label?: string;
}

const allergies = [
  {
    value: '달걀',
    isChecked: false,
  },
  {
    value: '우유',
    isChecked: false,
  },
  {
    value: '메밀',
    isChecked: false,
  },
  {
    value: '땅콩',
    isChecked: false,
  },
  {
    value: '대두',
    isChecked: false,
  },
  {
    value: '밀',
    isChecked: false,
  },
  {
    value: '고등어',
    isChecked: false,
  },
  {
    value: '게',
    isChecked: false,
  },
  {
    value: '돼지고기',
    isChecked: false,
  },
  {
    value: '새우',
    isChecked: false,
  },
  {
    value: '복숭아',
    isChecked: false,
  },
  {
    value: '토마토',
    isChecked: false,
  },
];

const FoodInfoWriteItem = ({label}: FoodInfoWriteItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datas, setDatas] = useState(allergies);
  const [isDataChecked, setIsDataChecked] = useState(false);
  const checkBoxRefs = useRef<null[] | HTMLInputElement[]>([]);

  useEffect(() => {
    setIsDataChecked(datas.find(value => value.isChecked) !== undefined);
  }, [datas]);

  const clearData = () => {
    setDatas(
      datas.map(data => {
        return {...data, isChecked: false};
      })
    );
  };

  const checkData = () => {
    setDatas(
      datas.map((data, idx) =>
        checkBoxRefs.current[idx]!.checked
          ? {...data, isChecked: true}
          : {...data}
      )
    );
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    clearData();
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    checkData();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p>{label}</p>
        <div className="w-full h-20">
          <TextArea />
        </div>
        <div className="w-full h-10">
          {!isDataChecked ? (
            <DashedButton
              onClick={handleModalOpen}
              label="알레르기 정보 추가"
            />
          ) : (
            <div
              className="flex flex-wrap w-full gap-2"
              onClick={handleModalOpen}
            >
              {datas.map((data, idx) =>
                data.isChecked ? (
                  <Tag key={idx} text={data.value} height="1.25rem" />
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="알레르기 선택" />
          <Modal.Body>
            <AllergyView
              render={() => {
                return (
                  datas &&
                  datas.map((data, idx) => (
                    <CheckBoxButton
                      key={idx}
                      label={data.value}
                      ref={element => (checkBoxRefs.current[idx] = element)}
                    />
                  ))
                );
              }}
            />
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
    </>
  );
};

export default FoodInfoWriteItem;
