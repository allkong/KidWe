import type {Meta, StoryObj} from '@storybook/react';
import ArticleImage from '@/components/organisms/Article/ArticleImage';

const meta: Meta<typeof ArticleImage> = {
  component: ArticleImage,
};

export default meta;

type Story = StoryObj<typeof ArticleImage>;

export const Default: Story = {
  args: {
    images: [
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2Fb3216850-8080-4322-8948-bb940a6abd8c%2Fimage.png?table=block&id=c2eaca91-e453-4a55-8186-f244d96576d1&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=1540&userId=174f1594-3085-42b6-85f6-846b8e6727d3&cache=v2',
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2Fe8d31622-e105-45b7-838a-54a2a6f6220a%2Fimage.png?table=block&id=036a96e5-56e3-49d5-8fc0-3278a30d94dc&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=1540&userId=174f1594-3085-42b6-85f6-846b8e6727d3&cache=v2',
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2Ff9a6bacf-6b11-4976-afca-2340b565cb68%2Fimage.png?table=block&id=943fc85c-93d9-4b48-9267-375d6e99d8e0&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=1540&userId=174f1594-3085-42b6-85f6-846b8e6727d3&cache=v2',
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2F9443e44a-0783-4a96-aafa-66064bdd2fc2%2Fimage.png?table=block&id=04ce80d4-d4ec-4560-95f6-294af62debd5&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=1540&userId=174f1594-3085-42b6-85f6-846b8e6727d3&cache=v2',
      'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F552f5903-0ff8-4755-a27c-4324d9d2fb6a%2F3b83682f-cb95-4101-8c6a-b758e787abad%2Fimage.png?table=block&id=562ef359-eeba-4f50-bca4-acef407b97f5&spaceId=552f5903-0ff8-4755-a27c-4324d9d2fb6a&width=1540&userId=174f1594-3085-42b6-85f6-846b8e6727d3&cache=v2',
    ],
  },
};
