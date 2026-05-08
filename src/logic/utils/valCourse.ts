import type { CourseInfo } from "../interface/CourseInfo.ts";
import { Course } from "../model/Course.ts";
import { ERROR } from "../refs/error.ts";

// Tillåtna kurskoder
const codes: string[] = [
  'dt207g', 
  'dt003g',
  'dt211g',
  'dt084g',
  'dt200g',
  'dt208g',
  'dt068g'
] as const;

// Tillåtna kursnamn
const names: string[] = [
  'backend-baserad webbutveckling',
  'frontend-baserad webbutveckling',
  'databaser',
  'webbanvändbarhet',
  'grafisk teknik för webb',
  'introduktion till programmering i javascript',
  'programmering i typescript'
] as const;

// Tillåtna kursprogressioner
const progs: string[] = [
  'a', 
  'b', 
  'c'
] as const;

// Kolla om det angivna värdet är giltigt
const isValid = (valVals: string[], 
  value: string): boolean => {
  return valVals.includes(
    value.toLowerCase());
}

// Valdiera en URL
const isURL = (
  syllabus: string): boolean => {
  try { 
    new URL(syllabus); 
    return true;
  } catch(err) { 
    return false;
  }
}

// Validera den kurs som matas in av användaren
export const valCourse = (
  code: string,
  name: string,
  progression: string,
  syllabus: string
): any => {
  const errs = errors(
    isValid(codes, code),
    isValid(names, name),
    isValid(progs, progression),
    isURL(syllabus));
  let course: any = null;
  if(errs.length === 0) {
    course = new Course(
      code, name, progression,
      syllabus) as CourseInfo;
  } 
  return { course, errs };
}

// Uppdatera felmeddelanden och returnera dem
const errors = (
  valCode: boolean,
  valName: boolean,
  valProg: boolean,
  valURL: boolean): string[] => {
  const errs = [];
  if(!valCode) errs.push(
    ERROR.INAVLID_CODE);
  if(!valName) errs.push(
    ERROR.INAVLID_NAME);
  if(!valProg) errs.push(
    ERROR.INAVLID_PROG);
  if(!valURL) errs.push(
    ERROR.INAVLID_URL);
  return errs;
}