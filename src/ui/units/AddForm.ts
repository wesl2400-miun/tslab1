import { Courses } from "../../logic/feature/Courses.ts";
import type { Courseinfo } from "../../logic/interface/Courseinfo.ts";
import { valCourse } from "../../logic/utils/valCourse.ts";
import { CourseList } from "./CourseList.ts";

export class AddForm {
  private courses: Courses;
  private msgNode: HTMLElement;
  private courseList : CourseList;
  
  constructor(
    courses: Courses,
    msgNode: HTMLElement,
    list: HTMLElement) {
    this.courses = courses;
    this.msgNode = msgNode;
    this.courseList = 
      new CourseList(list);
    this.courseList.update(
      this.courses);
  }

  public wireAddBtn = (
    codeInp: HTMLInputElement,
    nameInp: HTMLInputElement,
    progInp: HTMLInputElement,
    syllInp: HTMLInputElement,
    addBtn: HTMLInputElement,
  ): void => {
    addBtn.addEventListener(
      'click', (event) => {
      event.preventDefault();
      const course: Courseinfo = valCourse(
      codeInp.value, nameInp.value, 
      progInp.value, syllInp.value);
      this.addCourse(course);
    });
  }

  private addCourse = (
    course: Courseinfo): void => {
      const mess: string = 
        this.courses.add(course);
      const color: string = 
        mess.includes('FEL:') 
        ? '#731010': '#13590e';
      this.msgNode.style.color = color;
      this.msgNode.textContent = mess;
      this.courseList.update(
        this.courses);
  }
}