import { Courses } from "../../logic/feature/Courses.ts";
import { CourseListV } from "./CourseListV.ts";
import { ErrListV } from "./ErrListV.ts";

// Hanterar logiken bakom formuläret
export class AddForm {
  private courses: Courses;
  private courListNode: HTMLElement;
  private courseListV : CourseListV;
  private errListV: ErrListV;
  
  constructor(
    courses: Courses,
    courListNode: HTMLElement,
    errListNode: HTMLElement) {
    this.courses = courses;
    this.courListNode = 
      courListNode;
    this.courseListV = 
      new CourseListV(
        courListNode);
    this.courseListV.update(
      this.courses);
    this.errListV = new ErrListV(
      errListNode)
  }

  // Koppla händelselyssnaren till de angivna interaktiva element
  public wireAddBtn = (
    codeInp: HTMLInputElement,
    nameInp: HTMLInputElement,
    progInp: HTMLInputElement,
    syllInp: HTMLInputElement,
    addBtn: HTMLInputElement,
  ): void => {
    this.wireInps([codeInp, nameInp,
      progInp, syllInp]);
    addBtn.addEventListener(
      'click', (event) => {
      event.preventDefault();
      const errs: string [] = 
        this.courses.add(
          codeInp.value, 
          nameInp.value, 
          progInp.value, 
          syllInp.value);
      this.errListV.update(errs);
      this.courseListV.update(
        this.courses);
      this.courListNode.scrollIntoView();
    });
  }

  // Nollställs meddelanden när något av inmatningsfält fokuseras
  private wireInps = (
    inputs: HTMLInputElement[]): void => {
    inputs.forEach(input =>{
      input.addEventListener('focus', () => {
        this.errListV.clear();
      })
    });
  }
}