import Divider from '@/components/atoms/Divider/Divider';
import Input from '@/components/atoms/Input/Input';
import Tag from '@/components/atoms/Tag/Tag';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useRef, useState} from 'react';
import {getTags} from '@/apis/memo/getTags';
import {memoState} from '@/recoil/atoms/memo/memo';
import {useRecoilState} from 'recoil';
import type {Tag as MemoTag} from '@/types/memo/Tag';
import type {Memo} from '@/types/memo/Memo';
import NoResult from '@/components/atoms/NoResult';
import Button from '@/components/atoms/Button/Button';

const MemoTagSelect = () => {
  const [tags, setTags] = useState<MemoTag[] | undefined>();
  const [filteredTags, setFilteredTags] = useState<MemoTag[] | undefined>();
  const [memo, setMemo] = useRecoilState<Memo>(memoState);
  const [input, setInput] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const {data} = useQuery({
    queryKey: ['tags'],
    queryFn: () => getTags(0),
  });

  useEffect(() => {
    if (data) {
      setTags(data);
      setFilteredTags(data);
    }
  }, [data]);

  useEffect(() => {
    if (input === '') {
      setFilteredTags(tags);
    } else {
      setFilteredTags(tags?.filter(tag => tag.content.includes(input)));
    }
  }, [input, tags]);

  const handleInputClick = () => {
    inputRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleTagClick = (value: string) => {
    const isAlreadySelected = memo.tagRequestDtos.find(
      tag => tag.content === value
    );
    if (isAlreadySelected === undefined) {
      const tagRequestDtos = memo.tagRequestDtos;
      setMemo({
        ...memo,
        tagRequestDtos: [
          ...tagRequestDtos,
          {
            id: '',
            teacherId: 0,
            content: value,
          },
        ],
      });
    }
  };

  const handleSelectedTagClick = (value: string) => {
    const isSelected = memo.tagRequestDtos.find(tag => tag.content === value);
    if (isSelected !== undefined) {
      const tagRequestDtos = memo.tagRequestDtos;
      setMemo({
        ...memo,
        tagRequestDtos: tagRequestDtos.filter(tag => tag.content !== value),
      });
    }
  };

  const handleTagAdd = () => {
    const find = memo.tagRequestDtos.find(tag => tag.content === input);
    if (find === undefined) {
      const newTag: MemoTag = {
        teacherId: 0,
        content: input,
      };
      setMemo({...memo, tagRequestDtos: [...memo.tagRequestDtos, newTag]});
    }

    setInput('');
  };

  return (
    <div className="space-y-3 text-gray-300">
      <p className="mb-1 text-2xl font-semibold cursor-default">태그 선택</p>
      <p className="text-sm">태그</p>
      <Input
        ref={inputRef}
        onClick={handleInputClick}
        placeholder="태그 입력"
        value={input}
        onChange={handleInputChange}
      />
      <div className="box-border h-40 px-2 py-3 overflow-y-auto border border-gray-200 rounded-md text-wrap">
        {/* tag 받아오는 영역 */}
        {filteredTags && filteredTags.length !== 0 ? (
          <div className="inline-block m-1">
            {filteredTags.map((tag, idx) => (
              <Tag key={idx} text={tag.content} onClick={handleTagClick} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <NoResult text="등록된 태그가 없어요" />
            <Button
              label="태그 추가"
              variant="negative"
              onClick={() => handleTagAdd()}
            />
          </div>
        )}
      </div>
      <div className="flex flex-wrap w-full gap-2 h-fit">
        {memo &&
          memo.tagRequestDtos.map((tag, idx) => (
            <Tag
              key={idx}
              text={tag.content}
              onClick={handleSelectedTagClick}
              backgroundColor="#FFDFDF"
            />
          ))}
      </div>
      <Divider />
    </div>
  );
};

export default MemoTagSelect;
