import DropdownMain from '@/components/atoms/Dropdown/DropdownMain';
import DropdownOption from '@/components/atoms/Dropdown/DropdownOption';
import DropdownDivider from '@/components/atoms/Dropdown/DropdownDivider';

const Dropdown = Object.assign(DropdownMain, {
  Option: DropdownOption,
  Divider: DropdownDivider,
});

export default Dropdown;
