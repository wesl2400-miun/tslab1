import type { Courseinfo } from "../interface/Courseinfo.ts";

export class Course implements Courseinfo {
  public code: string;
  public name: string;
  public progression: string;
  public syllabus: string;

  constructor(
    code: string, 
    name: string, 
    progression: string, 
    syllabus: string) {
      this.code = code;
      this.name = name;
      this.progression = progression;
      this.syllabus = syllabus;
    }
}