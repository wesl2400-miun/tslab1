import type { Courses } from "../../logic/feature/Courses";
import { CourseItem } from "./CourseItem";

// Ansvarar för kurslistan
export class CourseList {
  private list: HTMLElement;

  constructor(list: HTMLElement) {
    this.list = list;
  }

  // Uppdatera kurslistan
  public update = (courses: Courses): void => {
    this.list.innerHTML = '';
    courses.get().forEach(course => {
      const item = new CourseItem(
        this.list, course);
      item.wireRemBtn(courses, this);
    });
  }
}