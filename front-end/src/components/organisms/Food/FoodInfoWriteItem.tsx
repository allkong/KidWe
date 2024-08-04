import TextArea from '@/components/atoms/Input/TextArea';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Tag from '@/components/atoms/Tag/Tag';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import AllergyView from '@/components/organisms/Food/AllergyView';
import {useEffect, useState} from 'react';
import {allergies} from '@/constants/allergy';
import type {Allergy} from '@/constants/allergy';

interface FoodInfoWriteItemProps {
  label?: string;
}

const FoodInfoWriteItem = ({label}: FoodInfoWriteItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datas, setDatas] = useState<Allergy[]>(allergies);
  const [copiedDatas, setCopiedDatas] = useState<Allergy[]>([...datas]);
  const [isDataChecked, setIsDataChecked] = useState(false);

  useEffect(() => {
    setIsDataChecked(datas.find(value => value.isChecked) !== undefined);
  }, [datas]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setCopiedDatas([...datas]);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setDatas([...copiedDatas]);
    setIsModalOpen(false);
  };

  const handleChangeData = (value: Allergy[]) => {
    setCopiedDatas(value);
  };

  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p>{label}</p>
        <div className="w-full h-20">
          <TextArea />
        </div>
        <div className="w-full h-fit min-h-7">
          {isDataChecked ? (
            <div
              className="flex flex-wrap w-full gap-2"
              onClick={handleModalOpen}
            >
              {datas.map((data, idx) =>
                data.isChecked ? (
                  <Tag key={idx} text={data.value} size="small" />
                ) : null
              )}
            </div>
          ) : (
            <DashedButton
              onClick={handleModalOpen}
              label="알레르기 정보 추가"
            />
          )}
        </div>
      </div>
      <ModalPortal>
        <Modal isOpen={isModalOpen}>
          <Modal.Header title="알레르기 선택" />
          <Modal.Body>
            <AllergyView datas={copiedDatas} onChangeData={handleChangeData} />
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
