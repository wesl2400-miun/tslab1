import { newNode } from "../utils/utils";

// Ansvarar för felmeddelandelistan
export class ErrListV {
  private errListNode: HTMLElement;

  constructor(
    errListNode: HTMLElement) {
    this.errListNode = errListNode;
  }

  // Lägg till ett felmeddelande till felmeddelandevyn
  private addErr = (
    err: string): void => {
    const li = newNode('li', 
      this.errListNode, null);
    newNode('p', li, err);
  }

  // Uppdatera felmeddelandevyn
  public update = (
    errs: string[]): void => {
    this.clear();
    errs.forEach(err => {
      this.addErr(err);
    })
  }

  // Nollställ felmeddelandevyn
  public clear = (): void => {
    this.errListNode
      .innerHTML = '';
  }
}