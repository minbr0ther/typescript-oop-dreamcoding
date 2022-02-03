import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("Note Title", "Note Body");
        note.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent("Todo Title", "Todo Item");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
// 동적으로 만드는 것이 아니라 개발할때 명시하기 때문에 무조건 null이 아니라고 Type Assertion
