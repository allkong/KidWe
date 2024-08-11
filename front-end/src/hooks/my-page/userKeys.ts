export const userKeys = {
  all: ['myPage'] as const,
  user: (userId: number) => [...userKeys.all, 'user', userId] as const,
  kid: (kidId: number) => [...userKeys.all, 'kid', kidId] as const,
};
