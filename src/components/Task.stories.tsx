import type { Meta, StoryObj } from '@storybook/react-vite';

import { Provider } from 'react-redux';

import store from '../lib/store';

import Task from './Task';

const meta = {
  component: Task,
  title: 'Task',
  decorators: [
    (story) => <Provider store={store}>{story()}</Provider>,
  ],
  tags: ['autodocs'],
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};