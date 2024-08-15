import TextArea from '@/components/atoms/Input/TextArea';
import DashedButton from '@/components/atoms/Button/DashedButton';
import Tag from '@/components/atoms/Tag/Tag';
import Modal from '@/components/organisms/Modal/Modal';
import ModalPortal from '@/components/organisms/Modal/ModalPortal';
import AllergyView from '@/components/organisms/Food/AllergyView';
import {useEffect, useState} from 'react';
import {ALLERGIES} from '@/constants/allergy';
import type {Allergy} from '@/constants/allergy';

interface FoodInfoWriteItemProps {
  label?: 'lunch' | 'snack' | 'dinner';
  food?: string;
  allergies?: string[];
  onAllergyChange?: (
    allergies: string[],
    type: 'lunch' | 'snack' | 'dinner'
  ) => void;
  onInputChange?: (value: string, type: 'lunch' | 'snack' | 'dinner') => void;
}

const getLabel = (label: string) => {
  switch (label) {
    case 'lunch':
      return '점심';
    case 'snack':
      return '간식';
    case 'dinner':
      return '저녁';
    default:
      return '';
  }
};

const FoodInfoWriteItem = ({
  label = 'lunch',
  food = '',
  allergies,
  onAllergyChange,
  onInputChange,
}: FoodInfoWriteItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState(food);

  const [datas, setDatas] = useState<Allergy[]>(); // 취소 버튼을 눌렀을 경우 사용
  const [copiedDatas, setCopiedDatas] = useState<Allergy[]>(); // 등록 버튼을 눌렀을 경우 사용
  const [isDataChecked, setIsDataChecked] = useState(false);

  useEffect(() => {
    const checkedDatas = ALLERGIES.map(allergy => {
      if (allergies === undefined) {
        return {...allergy};
      }
      if (allergies.includes(allergy.value)) {
        return {...allergy, isChecked: true};
      }
      return {...allergy};
    });
    setDatas(checkedDatas);
    setCopiedDatas(checkedDatas);
  }, [allergies]);

  useEffect(() => {
    setIsDataChecked(datas?.find(value => value.isChecked) !== undefined);
  }, [datas]);

  useEffect(() => {
    setInput(food);
  }, [food]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    if (datas !== undefined) {
      setCopiedDatas([...datas]);
    }
    setIsModalOpen(false);
  };

  const handleAllergySubmit = () => {
    if (copiedDatas !== undefined) {
      setDatas([...copiedDatas]);
      const allergies = copiedDatas
        .filter(element => element.isChecked)
        .map(element => element.value);
      onAllergyChange?.(allergies, label);
    }
    setIsModalOpen(false);
  };

  const handleChangeInput = (value: string) => {
    setInput(value);
    onInputChange?.(value, label);
  };

  const handleChangeData = (value: Allergy[]) => {
    setCopiedDatas(value);
  };

  return (
    <>
      <div className="space-y-2 text-gray-300">
        <p>{getLabel(label)}</p>
        <div className="w-full h-20">
          <TextArea value={input} onChange={handleChangeInput} />
        </div>
        <div className="w-full h-fit min-h-7">
          {isDataChecked ? (
            <div
              className="flex flex-wrap w-full gap-2"
              onClick={handleModalOpen}
            >
              {datas &&
                datas.map((data, idx) =>
                  data.isChecked ? (
                    <Tag key={idx} text={data.value} size="small" />
                  ) : null
                )}
            </div>
          ) : (
            <DashedButton
              onClick={handleModalOpen}
              label="알레르기 정보 추가"
              variant="lightgray"
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
            onClick={handleAllergySubmit}
          ></Modal.BottomButton>
          <Modal.Background onClick={handleModalClose} />
        </Modal>
      </ModalPortal>
    </>
  );
};

export default FoodInfoWriteItem;
