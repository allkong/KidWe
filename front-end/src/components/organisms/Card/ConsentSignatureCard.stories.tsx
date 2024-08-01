import type {Meta, StoryObj} from '@storybook/react';
import ConsentSignatureCard from '@/components/organisms/Card/ConsentSignatureCard';

const meta: Meta<typeof ConsentSignatureCard> = {
  component: ConsentSignatureCard,
};

export default meta;

type Story = StoryObj<typeof ConsentSignatureCard>;
export const Default: Story = {
  args: {
    text: '학부모가 요청한 투약의뢰서에 따른 책임은\\n 학부모에게 있습니다.',
    date: '2024년 7월 11일',
    parentName: '신형만',
    signatureUrl:
      'https://habitual-sawfish-65b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2F67a96011-c560-4598-ba77-45845356442b%2FUntitled.png?table=block&id=e317e6e8-c9d3-477f-8bfa-036af6ecf325&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=2000&userId=&cache=v2',
  },
};
