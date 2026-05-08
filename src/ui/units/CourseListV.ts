import type { Courses } from "../../logic/feature/Courses.ts";
import { CourseItem } from "./CourseItem.ts";

// Ansvarar för kurslistan
export class CourseListV {
  private courListNode: HTMLElement;

  constructor(
    courListNode: HTMLElement) {
    this.courListNode = courListNode;
  }

  // Uppdatera kurslistan
  public update = (
    courses: Courses): void => {
    this.courListNode.innerHTML = '';
    courses.get().forEach(course => {
      const item = new CourseItem(
        this.courListNode, course);
      item.wireRemBtn(courses, this);
    });
  }
}