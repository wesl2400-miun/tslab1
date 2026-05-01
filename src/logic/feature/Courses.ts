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

  get = (): Courseinfo[] => this.cache;

  add = (course: Courseinfo): string  => {
    if(course === null) {
      console.error(
        MESSAGE.INVALID_COURSE);
      return MESSAGE.INVALID_COURSE;
    }
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

  remove = (code: string): string => {
    const len: number = 
      this.cache.length;
    let index = -1;
    for(let i = 0; i < len; i++) {
      if(this.cache[i].code === code) {
        index = i;
        break;
      }
    }
    if(index === -1) 
      return MESSAGE.REMOVAL_FAILED;
    this.cache.splice(index, 1);
    save(MEMORY.COURSES, this.cache);
    return MESSAGE.COURSE_REMOVED;
  }
}