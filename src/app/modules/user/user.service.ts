import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntDB = async (password: string, studnetData: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually generated id
  userData.id = '203010000112';

  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    studnetData.id = newUser.id;
    studnetData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studnetData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntDB,
};
