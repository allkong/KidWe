import {getMemberRole} from '@/utils/userData';

export const isTeacher = () => getMemberRole() === 'ROLE_TEACHER';
