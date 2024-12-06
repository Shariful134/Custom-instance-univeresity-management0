import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { AcademicRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicFacultiesRoutes } from '../modules/AcademicFacalty/academicFaculty.routes';
import { AcademicDepertmentRoutes } from '../modules/academicDepertment/academicDepertment.routes';

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
    path: '/academic-faculties',
    route: AcademicFacultiesRoutes,
  },
  {
    path: '/academic-depertments',
    route: AcademicDepertmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
