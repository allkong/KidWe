import React from 'react';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({onChange, ...props}: TextAreaProps) => {
  const {value} = props;
  return (
    <textarea
      className="text-gray-300 font-normal text-xs p-3 w-full h-full box-border max-h-60 border border-gray-200 rounded focus:outline-none focus:border-gray-300 transition-colors focus:shadow-sm focus:shadow-gray-200"
      onChange={onChange}
      {...props}
      value={value}
    />
  );
};

export default TextArea;
