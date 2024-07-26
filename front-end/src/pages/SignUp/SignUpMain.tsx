import React, {useState} from 'react';
import RoleSelector from '@/components/atoms/Selector/RoleSelector';
import Button from '@/components/atoms/Button/Button';

const SignUpMain: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    // 선택된 역할을 부모 컴포넌트에 전달하는 로직을 추가할 수 있습니다.
  };

  return (
    <div className="flex flex-col min-h-full space-y-8 mt-10 ">
      <p className="text-xl">역할을 선택해주세요</p>
      <div className=" w-4/5 items-center justify-center space-y-4 text-lg">
        <RoleSelector
          isSelected={selectedRole === '학부모'}
          onClick={() => handleRoleChange('학부모')}
          value="학부모"
        />
        <RoleSelector
          isSelected={selectedRole === '선생님'}
          onClick={() => handleRoleChange('선생님')}
          value="선생님"
        />
        <RoleSelector
          isSelected={selectedRole === '원장님'}
          onClick={() => handleRoleChange('원장님')}
          value="원장님"
        />
      </div>
      <div className="flex items-center justify-center absolute bottom-8 w-full">
        <Button label="역할 선택" />
      </div>
    </div>
  );
};

export default SignUpMain;
