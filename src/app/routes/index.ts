import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { AcademicRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicRoutes,
  },
  {
    path: '/get-single-academic-semester',
    route: AcademicRoutes,
  },
  {
    path: '/update-academic-semester',
    route: AcademicRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
