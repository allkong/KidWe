import {atom} from 'recoil';

export interface ExampleType {
  name: string;
  content: string;
}

export const contentState = atom<ExampleType[]>({
  key: 'content',
  default: [
    {
      name: '여명',
      content: '808',
    },
    {name: '메롱', content: '화이팅'},
  ],
});
