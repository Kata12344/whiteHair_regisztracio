class OpcioView {
  constructor(szuloElem) {
    console.log("opcio");
    szuloElem.append(`
        <option value="internet">Internet</option>
        <option value="tv">TV</option>
        <option value="egyeb">Egyéb</option>
        `);
    this.opcioElem = szuloElem.children("option");
  }
}
export default OpcioView;
