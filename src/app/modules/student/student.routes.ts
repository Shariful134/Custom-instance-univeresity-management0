import express from 'express';
import { StudentControlers } from './student.controllers';

const router = express.Router();

router.get('', StudentControlers.getAllDataStudent);

router.get('/:id', StudentControlers.getsingleStudent);

router.delete('/:id', StudentControlers.deletStudent);

export const StudentRoutes = router;
