import View from "./View.js";

class Viewek{
    constructor(szuloElem){
        szuloElem.append(`
        <article>
        </article>
        `)
        this.sorElem = szuloElem.children("article:last-child");
        new View(this.sorElem);
    }
}
export default Viewek;