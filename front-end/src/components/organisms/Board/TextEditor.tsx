import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{list: 'ordered'}, {list: 'bullet'}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{color: []}, {background: []}],
      [{align: []}],
    ],
  };

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        className="h-72"
      />
    </div>
  );
};

export default TextEditor;
