import MegjelenitSor from "./MegjelenitSor.js";

class ListaMegjelenit {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    this.szuloElem = szuloElem;
    szuloElem.append("<table>")
    this.tablaElem = szuloElem.children("table");
    //let txt = this.htmlOsszeallit();
    this.htmlOsszeallit();
  }

  htmlOsszeallit() {
    let txt = "";

    for (let index = 0; index < this.#list.length; index++) {
      txt += "<tr>";
      new MegjelenitSor(this.#list[index], this.tablaElem);
    }
    txt += "</table>";
  }
}

export default ListaMegjelenit;
