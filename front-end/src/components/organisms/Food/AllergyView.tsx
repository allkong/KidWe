import type {Allergy} from '@/constants/allergy';
import CheckListItem from '@/components/organisms/Check/CheckListItem';
import Input from '@/components/atoms/Input/Input';
import {useCallback, useEffect, useState} from 'react';

interface AllergyViewProps {
  datas?: Allergy[];
  onChangeData?: (value: Allergy[]) => void;
}

const AllergyView = ({datas, onChangeData}: AllergyViewProps) => {
  const handleCheckBoxClick = (id: number) => {
    if (datas !== undefined) {
      onChangeData?.(
        datas.map(data =>
          data.id === id ? {...data, isChecked: !data.isChecked} : {...data}
        )
      );
    }
  };

  const [filteredDatas, setFilteredDatas] = useState<Allergy[] | undefined>(
    datas
  );

  const [input, setInput] = useState('');

  const filterDatas = useCallback(
    (value: string) => {
      if (value === '') {
        setFilteredDatas([...datas!]);
      } else {
        setFilteredDatas(
          [...datas!].filter(data => data.value?.includes(value))
        );
      }
    },
    [datas]
  );

  useEffect(() => {
    setFilteredDatas(datas);
    filterDatas(input);
  }, [datas, filterDatas, input]);

  const handleInputChange = (value: string) => {
    setInput(value);
    filterDatas(input);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 py-6">
      <div className="box-border w-full px-6 h-fit">
        <Input onChange={handleInputChange} placeholder="알레르기 입력" />
      </div>
      <div className="flex flex-col w-full overflow-y-auto h-72">
        {filteredDatas &&
          filteredDatas.map(data => (
            <CheckListItem
              key={data.id}
              text={data.value}
              onClick={() => handleCheckBoxClick(data.id)}
              isChecked={data.isChecked}
            />
          ))}
      </div>
    </div>
  );
};

export default AllergyView;
