import type {Allergy} from '@/constants/allergy';
import CheckBoxButton from '@/components/atoms/CheckBox/CheckBoxButton';

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

  return (
    <div className="flex items-center justify-center w-full h-full py-6">
      <div className="grid h-full grid-flow-row grid-cols-3 gap-3 w-fit">
        {datas &&
          datas.map(data => (
            <CheckBoxButton
              key={data.id}
              label={data.value}
              onClick={() => {
                handleCheckBoxClick(data.id);
              }}
              isChecked={data.isChecked}
            />
          ))}
      </div>
    </div>
  );
};

export default AllergyView;
