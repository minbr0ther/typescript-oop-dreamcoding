import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `<section class="image">
          <div class="image__holder">
              <img class="image__thumbnail">
          </div>
          <h2 class="image__title"></h2>
      </section>`
    );

    // image__thumbnail를 불러와서 url, title 속성 부여
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    // image__title를 불러와서 title 부여
    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
