import {getMemberRole} from '@/utils/userData';

export const isGuardian = () => getMemberRole() === 'ROLE_GUARDIAN';
