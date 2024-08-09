import LabelInput from '@/components/atoms/Input/LabelInput';

const MyPageUpdateView = () => {
  return (
    <div className="w-full py-10 space-y-5">
      <div className="space-y-2">
        <LabelInput label="이름" value="백승우" disabled />
        <LabelInput label="이메일" value="808@kidwe.com" disabled />
      </div>
      <div className="space-y-2">
        <LabelInput
          label="비밀번호"
          value=""
          type="password"
          placeholder="비밀번호"
        />
        <LabelInput
          label="비밀번호 확인"
          value=""
          type="password"
          placeholder="비밀번호 확인"
        />
      </div>
      <div className="space-y-2">
        <LabelInput label="전화번호" value="" placeholder="전화번호" />
      </div>
    </div>
  );
};

export default MyPageUpdateView;
