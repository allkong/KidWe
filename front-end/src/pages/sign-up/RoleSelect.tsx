import React, {useState, useEffect} from 'react';
import RoleSelector from '@/components/atoms/Selector/RoleSelector';
import Button from '@/components/atoms/Button/Button';
import Modal from '@/components/organisms/Modal/Modal';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {Signup} from '@/recoil/atoms/signup/Signup';
import {RoleItem} from '@/enum/roleItem';
import {ROLE_NAMES} from '@/constants/roleNames';
const RoleSelect = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStateUpdated, setIsStateUpdated] = useState(false);
  const [signuprole, setSignupRole] = useRecoilState(Signup);
  const navigate = useNavigate();
  const handleRegisterButtonClick = () => {
    setSignupRole(prevState => ({
      ...prevState,
      dto: {
        ...prevState.dto,
        role: selectedRole,
      },
    }));
    setIsStateUpdated(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  useEffect(() => {
    // 혹시 새로고침하여서 role이 없는 경우 redirect
    if (!isStateUpdated) {
      closeModal();
    } else {
      navigate('/signup/info');
    }
  }, [isStateUpdated, navigate, signuprole]);

  return (
    <div className="flex flex-col min-h-full mx-4 mt-16 space-y-8">
      <div className="flex items-center justify-between">
        <p className="mb-8 text-xl">역할을 선택해주세요</p>
        <img src="/icons/kid.png" alt="Kid Icon" className="w-1/2" />
      </div>
      <div className="items-center justify-center w-full space-y-4 text-lg ">
        {Object.values(RoleItem).map(key => (
          <RoleSelector
            key={key}
            isSelected={selectedRole === key}
            onClick={() => handleRoleChange(key)}
            label={ROLE_NAMES[key]}
          />
        ))}
        {/* {RoleItem.map((item, index) => (
          <RoleSelector
            key={index}
            isSelected={selectedRole === item.value}
            onClick={() => handleRoleChange(item.value)}
            value={item.value}
            label={item.label}
          />
        ))} */}
      </div>
      <div className="flex items-center justify-center px-4 bottom-8 ">
        <Button label="역할 선택" onClick={handleRegisterButtonClick} />
        {isModalOpen && (
          <Modal isOpen={true}>
            <Modal.Header title="경고!" />
            <Modal.Body>
              <div className="text-lg text-center text-gray-300">
                <p>역할을 정해주세요</p>
              </div>
            </Modal.Body>
            <Modal.BottomButton
              label="확인"
              onClick={closeModal}
              size="large"
            />
            <Modal.Background onClick={closeModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default RoleSelect;
