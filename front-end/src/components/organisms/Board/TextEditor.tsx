import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor = ({value, onChange}: TextEditorProps) => {
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
        onChange={onChange}
        modules={modules}
        className="h-72"
      />
    </div>
  );
};

export default TextEditor;
