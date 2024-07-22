import React from 'react';

export interface TestTextProps {
  text: string;
}

const TestText = ({text}: TestTextProps) => {
  return <p>{text}</p>;
};

export default TestText;
