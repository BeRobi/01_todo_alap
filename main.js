import { TODOLIST2 } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";

$(function () {
  const szuloElem = $(".ujadat");
  new ListaMegjelenit(TODOLIST2, szuloElem);
});