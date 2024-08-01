import {selector} from 'recoil';
import type {ExampleType} from '@/recoil/atoms/example';
import {contentState} from '@/recoil/atoms/example';

export const contentSortedState = selector<ExampleType[]>({
  key: 'sortedContent',
  get: ({get}) => {
    const data = get(contentState);
    return data.sort((e1, e2) => e1.name.localeCompare(e2.name));
  },
});
