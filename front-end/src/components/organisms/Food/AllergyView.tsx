interface AllergyViewProps {
  render?: () => React.ReactNode;
}

const AllergyView = ({render}: AllergyViewProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full py-6">
      <div className="grid h-full grid-flow-row grid-cols-3 gap-3 w-fit">
        {render?.()}
      </div>
    </div>
  );
};

export default AllergyView;
