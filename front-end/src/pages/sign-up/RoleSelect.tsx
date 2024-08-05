import React, {useState} from 'react';
import RoleSelector from '@/components/atoms/Selector/RoleSelector';
import Button from '@/components/atoms/Button/Button';
import Modal from '@/components/organisms/Modal/Modal';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {signupFormState} from '@/pages//sign-up/SignupState';

const roleItems = [
  {label: 'ROLE_GUARDIAN', value: '학부모'},
  {label: 'ROLE_TEACHER', value: '선생님'},
  {label: 'ROLE_DIRECTOR', value: '원장님'},
];

const RoleSelect = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signuprole, setSignupRole] = useRecoilState(signupFormState);
  const navigate = useNavigate();
  const handleRegisterButtonClick = () => {
    if (selectedRole === '') {
      setIsModalOpen(true);
    } else {
      setSignupRole(prevState => ({
        ...prevState,
        member: {
          ...prevState.member,
          role: selectedRole,
        },
      }));
      navigate('/signup/info');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    // 선택된 역할을 부모 컴포넌트에 전달하는 로직 추가하기
  };

  return (
    <div className="flex flex-col min-h-full space-y-8 mt-16 mx-4">
      <p className="text-xl mb-8">역할을 선택해주세요</p>
      <div className=" w-full items-center justify-center space-y-4 text-lg">
        {roleItems.map((item, index) => (
          <RoleSelector
            key={index}
            isSelected={selectedRole === item.label}
            onClick={() => handleRoleChange(item.label)}
            value={item.value}
          />
        ))}
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
