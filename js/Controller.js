import Viewek from "./Viewek.js";

class Controller {
  #nevJo = false;
  #emailJo = false;

  constructor() {
    const szuloElem = $("main");
    new Viewek(szuloElem);

    $("#elkuld").click(() => {
      this.ellenoriz();
      if (
        this.#nevJo == true &&
        this.#emailJo == true &&
        $("#adatkez").prop("checked")
      ) {
        $("p").text("Sikeres regisztráció!");
      }
    });
  }

  ellenoriz() {
    console.log("sdsdsdsdsdsd");
    if ($("#nev").val() == "" || $("#email").val() == "") {
      console.log("Hiányzó név vagy email ");
      $("p").text("Hiányzó név vagy email cím!");
      this.#nevJo = false;
    } else {
      this.#nevJo = true;
    }
    if ($("#email_ujra").val() != $("#email").val()) {
      $("#szovegDoboz").text("Az email és a megerősítő email nem egyezik meg!");
      this.#emailJo = false;
    } else {
      this.#emailJo = true;
    }
  }
}
export default Controller;
