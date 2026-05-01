import type { Courses } from "../../logic/feature/Courses";
import { CourseItem } from "./CourseItem";

export class CourseList {
  private list: HTMLElement;

  constructor(list: HTMLElement) {
    this.list = list;
  }

  public update = (courses: Courses): void => {
    this.list.innerHTML = '';
    courses.get().forEach(course => {
      const item = new CourseItem(
        this.list, course);
      item.wireRemBtn(courses, this);
    });
  }
}