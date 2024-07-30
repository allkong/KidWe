interface DashedRoundedButtonProps {
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DashedRoundedButton = ({
  onClick,
  size = '2.5rem',
}: DashedRoundedButtonProps) => {
  return (
    <button
      className="text-lg text-gray-200 border border-gray-200 border-dashed rounded-full"
      style={{width: size, height: size}}
      onClick={onClick}
    >
      +
    </button>
  );
};

export default DashedRoundedButton;
