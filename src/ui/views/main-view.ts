import { Courses } from "../../logic/feature/Courses.js";
import { NODE_ID } from "../refs/node-id.js";
import { AddForm } from "../units/AddForm.js";
import { node } from "../utils/utils.js";

const courses = new Courses();

const codeInp = node(
  NODE_ID.COURSE_CODE) as 
  HTMLInputElement || null;
const nameInp = node(
  NODE_ID.COURSE_NAME) as 
  HTMLInputElement || null;
const progInp = node(
  NODE_ID.COURSE_PROG) as 
  HTMLInputElement || null;
const syllInp = node(
  NODE_ID.COURSE_SYLL) as 
  HTMLInputElement || null;
const addBtn = node(
  NODE_ID.ADD_BTN) as 
  HTMLInputElement || null;
const msgNode = node(
  NODE_ID.ADD_MSG) as 
  HTMLElement || null;
const courseList = node(
  NODE_ID.COURSE_LIST) as 
  HTMLElement || null;

const addForm = new AddForm(
  courses, msgNode, courseList);
addForm.wireAddBtn(codeInp, 
  nameInp, progInp, 
  syllInp, addBtn);





