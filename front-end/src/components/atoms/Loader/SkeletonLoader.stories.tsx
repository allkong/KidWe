import type {Meta, StoryObj} from '@storybook/react';
import SkeletonLoader from '@/components/atoms/Loader/SkeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
  component: SkeletonLoader,
};

export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  args: {},
};

export const Card: Story = {
  render: function () {
    return (
      <div className="flex flex-col items-center justify-center h-48 px-3 py-3 border border-gray-100 rounded-md w-36">
        <div className="w-full aspect-square">
          <SkeletonLoader width="100%" height="100%" />
        </div>
        <div className="flex items-center justify-between flex-grow w-full">
          <SkeletonLoader shape="circle" width="2rem" height="2rem" />
          <SkeletonLoader width="5rem" height="1rem" />
        </div>
      </div>
    );
  },
};
