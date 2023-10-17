import OpcioView from "./OpcioView.js";

class View {
  constructor(szuloElem) {
    szuloElem.append(`
        <h1>Regisztráció</h1>
        <form id="regisztracio" name="regisztracio">
        <label for="nev">Név:</label>
        <input type="text" id="nev" name="nev" placeholder="Kis Julianna" required>
        <label for="email">Email cím:</label>
        <input type="email" id="email" name="email" placeholder="minta@gmail.com" required>
        <label for="email_ujra">Email cím megerősítés:</label>
        <input type="email_ujra" id="email_ujra" name="email_ujra" placeholder="minta@gmail.com"required>
        <label for="honnan">Honnan hallott rólunk:</label>
        <select name="honnan" id="honnan">
        </select>
        <label for="adatkez" id="elfogad" >Elfogadom az <a href="#" target="_blank">adatkezelési szabályzatot</a></label>
        <input type="checkbox" id="adatkez" name="adatkez" >
        <input type="button" id="elkuld" value="Elküld">
        </form>
        <p id="szovegDoboz"></p>
        `);
    this.formElem = szuloElem.children("form:last");
    this.selectElem = this.formElem.children("select");
    new OpcioView(this.selectElem);
  }
}

export default View;
