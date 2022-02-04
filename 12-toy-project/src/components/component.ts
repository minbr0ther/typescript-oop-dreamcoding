// 이렇게 interface를 규격해두고 사용하는 곳 에서는 component 타입만 사용하면 된다
export interface Component {
  // position은 optional, return은 없어서 void
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}
/**
 * HTML element 생성을 캡슐화 한다
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }

  // parent로부터 자기 자신을 지우는 기능
  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error("Parent mismatch!");
    }
    parent.removeChild(this.element);
  }
}
