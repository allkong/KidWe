import React from 'react';

export type TestTextProps = {
  text: string;
};

const TestText: React.FC<TestTextProps> = ({text}) => {
  return <p>{text}</p>;
};

export default TestText;
