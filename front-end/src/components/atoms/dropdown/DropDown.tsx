import DropDownMain from '@/components/atoms/DropDown/DropDownMain';
import DropDownOption from '@/components/atoms/DropDown/DropDownOption';
import DropDownDivider from '@/components/atoms/DropDown/DropDownDivider';

const DropDown = Object.assign(DropDownMain, {
  Option: DropDownOption,
  Divider: DropDownDivider,
});

export default DropDown;
