import type { Courseinfo } from "../interface/Courseinfo.ts";
import { load, save } from "../utils/storage.ts";
import { MEMORY } from "../refs/memory.ts";
import { MESSAGE } from "../refs/message.ts";


export class Courses {
  private cache: Courseinfo[];

  constructor() {
    this.cache = load(
      MEMORY.COURSES) || [];
  }

  public get = (): Courseinfo[] => this.cache;

  public add = (course: Courseinfo): string  => {
    if(course === null)
      return MESSAGE.INVALID_COURSE;
    const dupicate: Courseinfo = 
      this.cache.find(cached =>
        cached.code === course.code
      );
    if(dupicate) {
      return MESSAGE.DUPLICATE;
    }
      
    try {
      const updated: Courseinfo[] = 
        [...this.cache, course];
      save(MEMORY.COURSES, updated);
      this.cache = updated;
      return MESSAGE.COURSE_ADDED;
    } catch(err) {
      console.error(err.message);
      return MESSAGE.STORAGE_FAIL;
    }
  }

  public remove = (code: string): void => {
    this.cache = this.cache.filter(
      course => course.code != code);
    save(MEMORY.COURSES, this.cache);
  }
}