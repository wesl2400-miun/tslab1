import { valCourse } from "../../logic/utils/valCourse.js";
import type { Courseinfo } from "../../logic/interface/Courseinfo.js";
import { Courses } from "../../logic/feature/Courses.js";

const course: Courseinfo = valCourse('dt211g', 'databaser', 'c', 
  'http://localhost:5173/');

const courses = new Courses();


