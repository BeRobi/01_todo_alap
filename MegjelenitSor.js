class MegjelenitSor{
    // táblázat egyetlen sorát jelenti és ennek a viselkedésést írja le
   #adat = []
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.szuloElem = szuloElem
        this.sor()


        this.sorElem=this.szuloElem.children("tr:last-child")
        //this.pipaElem=$(".kesz:last") // csak az utoljára hozzáadott pipa kell
        //console.log(this.pipaElem)

        this.pipaElem=this.sorElem.children("td").children(".kesz")
        this.pipaElem.on("click", () =>{
            console.log(this)
        })


    }

    sor(){
        let txt = `<tr>`;
        for (const kulcs in this.#adat) {
          txt += `<td>${this.#adat[kulcs]}</td>`;
        }

        txt += `<td><span class="kesz"><img src="edit.png" alt="edit" width="50" height="60"></span></td> 
        <td><span class="torol"><img src="bin.png" alt="bin" width="50" height="60"></span></td>`;
        txt += `</tr>`;

       this.szuloElem.append(txt);
      }
    }
      
    

export default MegjelenitSor;