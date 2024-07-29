export interface ModalHeaderProps {
  title?: string;
}

const ModalHeader = ({title}: ModalHeaderProps) => {
  return <div className="text-lg font-bold text-gray-300">{title}</div>;
};

export default ModalHeader;
