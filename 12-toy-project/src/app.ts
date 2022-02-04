import { Component } from "./components/component.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { VideoComponent } from "./components/page/item/video.js";

class App {
  // Component이면서 addChild가 가능한 Composable
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    // PageComponent가 만들 수 있는 컴포넌트는 PageItemComponent이다
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    this.page.addChild(video);

    const note = new NoteComponent("Note Title", "Note Body");
    this.page.addChild(note);

    const todo = new TodoComponent("Todo Title", "Todo Item");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
// 동적으로 만드는 것이 아니라 개발할때 명시하기 때문에 무조건 null이 아니라고 Type Assertion
