
export const node = (ref: string): 
  HTMLInputElement | HTMLElement | null => {
    return document.getElementById(ref);
}

export const newNode = (type: string, 
  parent: HTMLElement, 
  text: string | null):
  HTMLElement => {
  const elmnt = document.createElement(type);
  if(text) elmnt.textContent = text;
  parent.appendChild(elmnt);
  return elmnt;
}
