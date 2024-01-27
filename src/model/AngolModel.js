import { szenvedoMondatok } from "./angol";

class AngolModel {
  #lista = [];
  #aktIndex = 2;
  #aktMondat = [];
  constructor() {
    this.#lista = szenvedoMondatok;
    this.setMondat();
  }

  /*  cím-témakör
        súgószöveg
        aktuális mondat
        */

  getCim() {
    return this.#lista[0];
  }

  getSugo() {
    return this.#lista[1];
  }

  setAktIndex() {
    this.#aktIndex++;
    if (this.#aktIndex >= this.#lista.length-1) {
      this.#aktIndex = 2;
    }
    this.setMondat();
  }
  setMondat() {
    console.log(this.#lista[this.#aktIndex])
    this.#aktMondat = this.#lista[this.#aktIndex];
    this.#aktMondat.helyes = this.#aktMondat.valasztas[0];
    //points.sort(function{return 0.5 - Math.random()});
    this.#aktMondat.valasztas.sort(() => {
      return 0.5 - Math.random();
    });
    this.#aktMondat.valasztas.unshift("Válassz...");

    // helyes megoldás és a választás értékei keverve legyenek

    /*   magyar: "A fiú ellopta az almát ma reggel.",
        mondat: "The boy _ an apple this morning.",
        alap: "steal",
        helyes: "stole"
        valasztas: ["was stolen", "stole", "is stolen", "steal"] */
  }

  getMondat() {
    return this.#aktMondat;
  }
}

export default AngolModel;
