import { Component } from "./../component.js";
import { BaseComponent } from "../component.js";

// Composable: 여러 가지를 모아서 조립하고 묶을 수 있는 의미
// 다른 요소들을 함께 조립할 수 있다
export interface Composable {
  addChild(child: Component): void;
}

// 아무런 인자도 전달받지 않고 아무런 반환이 없다
type OnCloseListener = () => void;

type SectionContainerConstructor = {
  // 전달 받는게 없는 생성자, SectionContainer를 만드는 어떤 클래스라도 괜찮다
  // 생성자를 정의하는 타입
  new (): SectionContainer;
};

// Component, Composable을 상속하는 새로운 규격
// 노트, 이미지, 영상 같은 모든 컴포넌트는 무조건 Component, Composable를 구현해야한다
interface SectionContainer extends Component, Composable {
  // 무조건 setOnCloseListener API가 있어야 한다
  setOnCloseListener(listener: OnCloseListener): void;
}

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  // 외부로부터 받은 콜백함수 저장 (전달이 없을 수 도 있어서 optional)
  private closeListener?: OnCloseListener;

  constructor() {
    super(`<li class="page-item">
        <section class="page-item__body"></section>
        <div class="page-item__controls">
          <button class="close">&times;</button>
        </div>
      </li>`);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      // 전달받은 콜백함수를 호출한다
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;

    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  // 어떤 타입의 데이터를 만들 수 있는지 전달한다
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    // 외부에서 전달된 pageItemConstructor를 통해서 만든다
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
