export interface ModalBackgroundProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ModalBackground = ({onClick}: ModalBackgroundProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed w-screen h-screen bg-gray-300 opacity-40"
    ></div>
  );
};

export default ModalBackground;
