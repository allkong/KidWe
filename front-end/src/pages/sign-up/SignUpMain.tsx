import React, {useState} from 'react';
import RoleSelector from '@/components/atoms/Selector/RoleSelector';
import Button from '@/components/atoms/Button/Button';
import PopupModal from '@/components/organisms/Modal/PopupModal';

import {useNavigate} from 'react-router-dom';

const roleItems = [
  {value: '학부모', label: '학부모'},
  {value: '선생님', label: '선생님'},
  {value: '원장님', label: '원장님'},
];

const SignUpMain: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterButtonClick = () => {
    if (selectedRole === '') {
      setIsModalOpen(true);
    } else {
      navigate('/register');
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
    <div className="flex flex-col min-h-full space-y-8 mt-16 ">
      <p className="text-xl mb-8">역할을 선택해주세요</p>
      <div className=" w-full items-center justify-center space-y-4 text-lg">
        {roleItems.map((item, index) => (
          <RoleSelector
            key={index}
            isSelected={selectedRole === item.value}
            onClick={() => handleRoleChange(item.value)}
            value={item.value}
          />
        ))}
      </div>
      <div className="flex items-center justify-center px-4 bottom-8 ">
        <Button label="역할 선택" onClick={handleRegisterButtonClick} />
        {isModalOpen && (
          <PopupModal
            isOpen={true}
            title={'역할을 정해주세요'}
            onCancelButtonClick={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default SignUpMain;
