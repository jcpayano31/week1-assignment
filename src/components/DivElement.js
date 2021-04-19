// Import HTMLElement here
import HTMLElement from "./rolodex/HTMLElement.js";
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = "div";
  }
}
// Export class here

const divexp1 = new DivElement("What a wonderfull world ");

console.log(divexp1.render());
