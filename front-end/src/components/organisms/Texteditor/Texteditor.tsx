import {useRef, useState, useMemo} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';

const TextEditor = ({value, onChange}) => {
  const QuillRef = useRef<ReactQuill>();

  // // 이미지를 업로드 하기 위한 함수
  // const imageHandler = () => {
  //   // 파일을 업로드 하기 위한 input 태그 생성
  //   const input = document.createElement('input');
  //   const formData = new FormData();

  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();

  //   // 파일이 input 태그에 담기면 실행 될 함수
  //   input.onchange = async () => {
  //     const file = input.files;
  //     if (file !== null) {
  //       formData.append('image', file[0]);
  //     }
  //   };
  // };

  // 툴바에 title 속성을 추가하여 한글 설명을 달아줍니다.
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{size: ['small', false, 'large', 'huge']}],
    [
      {color: [], title: '글자 색'},
      {background: [], title: '배경 색'},
      {align: [], title: '정렬'},
    ],
  ];

  // quill에서 사용할 모듈을 설정하는 코드 입니다.
  // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
  //   const modules = useMemo(
  //     () => ({
  //       toolbar: {
  //         container: [
  //           ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //           [{size: ['small', false, 'large', 'huge']}, {color: []}],
  //           [
  //             {list: 'ordered'},
  //             {list: 'bullet'},
  //             {indent: '-1'},
  //             {indent: '+1'},
  //             {align: []},
  //           ],
  //           ['image', 'video'],
  //         ],
  //         handlers: {
  //           image: imageHandler,
  //         },
  //       },
  //     }),
  //     []
  //   );
  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        // handlers: {
        //   image: imageHandler,
        // },
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuill
        ref={element => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요"
        className="h-72"
      />
    </div>
  );
};

export default TextEditor;
