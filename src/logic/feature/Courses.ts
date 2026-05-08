import type { CourseInfo } from "../interface/CourseInfo.ts";
import { load, save } from "../utils/storage.ts";
import { MEMORY } from "../refs/memory.ts";
import { ERROR } from "../refs/error.ts";
import { valCourse } from "../utils/valCourse.ts";

// Ansvarar för appens huvudfunktionalitet
export class Courses {
  private cache: CourseInfo[];

  constructor() {
    this.cache = load(
      MEMORY.COURSES) || [];
  }

  // Hämta kurslistan
  public get = (): CourseInfo[] => this.cache;

  // Lägg till kursen
  public add = (code: string,
    name: string,prog: string,
    url: string): string[]  => {
    const { course, errs } = 
      valCourse(code, 
        name, prog, url);
    if(!course) return errs;
    const dupicate = 
      this.cache.find(cached =>
        cached.code === course.code
      ) as CourseInfo || null;
    if(dupicate) {
      errs.push(ERROR.DUPLICATE);
    } else {
      this.trySave(errs, course);
    }  
    return errs;
  }

  // Försökt att spara kursen i localStorage
  private trySave = (
    errs: string[], 
    course: CourseInfo): void => {
    try {
      const updated: CourseInfo[] = 
        [...this.cache, course];
      save(MEMORY.COURSES, updated);
      this.cache = updated;
    } catch(err: any) {
      console.error(err.message);
      errs.push(ERROR.STORAGE_FAIL);
    }
  }

  // Ta bort kursen
  public remove = (code: string): void => {
    this.cache = this.cache.filter(
      course => course.code != code);
    save(MEMORY.COURSES, this.cache);
  }
}