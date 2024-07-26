import DropdownMain from '@/components/atoms/Dropdown/DropdownMain';
import DropdownOption from '@/components/atoms/Dropdown/DropdownOption';
import Divider from '@/components/atoms/Divider/Divider';

const Dropdown = Object.assign(DropdownMain, {
  Option: DropdownOption,
  Divider: Divider,
});

export default Dropdown;
