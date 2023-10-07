class ListaMegjelenit {
    constructor(TODOLIST, szuloElem) {
      this.TODOLIST = TODOLIST;
      this.szuloElem = szuloElem;
      let txt = this.htmlOsszeallit();
      this.szuloElem.html(txt);
    }
  
    htmlOsszeallit() {
      let txt = "";
  
      txt += `<table>`;
    /*   txt += `<tr>`;
      for (const kulcs in this.TODOLIST[0]) {
        txt += `<th>${this.TODOLIST[0][kulcs]}</th>`;
      }
      txt += `</tr>`; */
      for (let index = 0; index < this.TODOLIST.length; index++) {
        txt += `<tr>`;
        for (const kulcs in this.TODOLIST[index]) {
          txt += `<td>${this.TODOLIST[index][kulcs]}</td>`;
        }
        txt += `</tr>`;
      }
      txt += `</table>`;
      return txt;
    }
  }
  
  export default ListaMegjelenit;