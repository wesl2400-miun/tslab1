import type { Courseinfo } from "../../logic/interface/Courseinfo.ts";
import { newNode } from "../utils/utils.ts";
import { Courses } from "../../logic/feature/Courses.ts";
import type { CourseList } from "./CourseList.ts";

// Ansvarar för kurselement i kurslistan
export class CourseItem {
  private item: HTMLElement;
  private course: Courseinfo;

  constructor(list: HTMLElement, 
    course: Courseinfo) {
    this.course = course;
    const { code, name, 
      progression, syllabus } = this.course;
    this.item = newNode('li', list, null);
    newNode('p', this.item, 
      `Kurskod: ${code}`);
    newNode('p', this.item, 
      `Kursnamn: ${name}`);
    newNode('p', this.item, 
      `Progression: ${progression}`);
    newNode('p', this.item, 
      `Kurskod: ${syllabus}`);
  }

  // Ta bort den angivna kursen från listan när ta-bort-knappen trycks
  public wireRemBtn = (courses: Courses, 
    courseList: CourseList): void => {
    const { code } = this.course;
    const btn = newNode('button', 
      this.item, 'Ta bort');
    btn.addEventListener('click', () => {
      courses.remove(code);
      courseList.update(courses);
    });
  }
}