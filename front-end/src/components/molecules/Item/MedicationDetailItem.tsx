import Tag from '@/components/atoms/Tag/Tag';

interface MedicationDetailItemProps {
  title: string;
  content?: string;
  color: string;
  imageUrl?: string;
}

const MedicationDetailItem = ({
  title,
  content,
  color,
  imageUrl,
}: MedicationDetailItemProps) => {
  return (
    <div className="flex items-center space-x-6">
      <Tag text={title} backgroundColor={color} size="medium" />
      {imageUrl ? (
        <img src={imageUrl} className="object-cover w-32 h-32 rounded-lg" />
      ) : (
        <p className="border-b-2" style={{borderColor: color}}>
          {content}
        </p>
      )}
    </div>
  );
};

export default MedicationDetailItem;
