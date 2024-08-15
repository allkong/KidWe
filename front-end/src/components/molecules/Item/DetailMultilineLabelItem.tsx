import Tag from '@/components/atoms/Tag/Tag';
import Icon from '@/assets/icons/phone-call-fill.svg?react';

interface MedicationDetailItemProps {
  title: string;
  content?: string;
  color?: string;
  contact?: string;
}

const DetailMultilineLabelItem = ({
  title,
  content,
  color = '#FFEC9E',
  contact,
}: MedicationDetailItemProps) => {
  return (
    <div className="flex flex-col items-start space-y-3">
      <Tag text={title} backgroundColor={color} size="medium" />
      <div className="w-full border-b-2 ms-1" style={{borderColor: color}}>
        {contact ? (
          <div className="flex flex-row items-center justify-between">
            <div>
              <p>{content}</p>
              <p>{contact}</p>
            </div>
            <a
              href={`tel:${contact}`}
              className="bg-[#30D240] rounded-full w-8 h-8 flex items-center justify-center me-5"
            >
              <Icon />
            </a>
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default DetailMultilineLabelItem;
