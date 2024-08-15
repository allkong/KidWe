import ModalMain from '@/components/organisms/Modal/ModalMain';
import ModalHeader from '@/components/atoms/Modal/ModalHeader';
import ModalBody from '@/components/atoms/Modal/ModalBody';
import ModalBackground from '@/components/atoms/Modal/ModalBackground';
import Button from '@/components/atoms/Button/Button';

/**
 * 사용할 때는 꼭 ModalPortal과 함께 사용해주세요
 */
const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Body: ModalBody,
  BottomButton: Button,
  Background: ModalBackground,
});

export default Modal;
