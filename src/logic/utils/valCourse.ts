import type { Courseinfo } from "../interface/Courseinfo.js";
import { Course } from "../model/Course.js";

const codes: string[] = [
  'dt207g', 
  'dt003g',
  'dt211g',
  'dt084g',
  'dt200g',
  'dt208g',
  'dt068g'
] as const;

const names: string[] = [
  'backend-baserad webbutveckling',
  'frontend-baserad webbutveckling',
  'databaser',
  'webbanvändbarhet',
  'grafisk teknik för webb',
  'introduktion till programmering i javascript',
  'programmering i typescript'
] as const;

const progs: string[] = [
  'a', 
  'b', 
  'c'
] as const;

export const valCourse = (
  code: string,
  name: string,
  progression: string,
  syllabus: string
): Courseinfo | null => {
  try { 
    new URL(syllabus); 
  } catch(err) { 
    return null; 
  }
  const valid: boolean = codes.includes(
    code.toLowerCase()) 
    && names.includes(
      name.toLowerCase())
    && progs.includes(
      progression.toLowerCase());
  if (valid) return new Course(code, 
    name, progression, syllabus);
  else return null;
}