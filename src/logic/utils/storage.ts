
export const save = (key: string, obj: any): void => {
  const json = JSON.stringify(obj);
  localStorage.setItem(key, json);
}

export const load = (key: string): any => {
  const json = localStorage.getItem(key);
  return JSON.parse(json);
}