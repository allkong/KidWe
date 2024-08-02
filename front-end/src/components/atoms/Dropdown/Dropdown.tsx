import DropdownMain from '@/components/atoms/Dropdown/DropdownMain';
import Option from '@/components/atoms/Option/Option';
import Divider from '@/components/atoms/Divider/Divider';

const Dropdown = Object.assign(DropdownMain, {
  Option: Option,
  Divider: Divider,
});

export default Dropdown;
