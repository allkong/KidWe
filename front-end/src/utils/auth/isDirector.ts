import {getMemberRole} from '@/utils/userData';

export const isDirector = () => getMemberRole() === 'ROLE_DIRECTOR';
