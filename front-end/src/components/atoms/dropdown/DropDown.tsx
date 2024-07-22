import React from 'react';
import DropDownMain from '@/components/atoms/dropdown/DropDownMain';
import DropDownOption from '@/components/atoms/dropdown/DropDownOption';
import DropDownDivider from '@/components/atoms/dropdown/DropDownDivider';

const DropDown = Object.assign(DropDownMain, {
  Option: DropDownOption,
  Divider: DropDownDivider,
});

export default DropDown;
