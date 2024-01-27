import AngolModel from "../model/AngolModel";
import KivalasztoMondat from "./KivalasztoMondat";
import { useState } from "react";

//xhtml - jsx

const angolModel = new AngolModel();

export default function Kivalaszto() {
  const [mondat, setMondat] = useState({...angolModel.getMondat()});
  const [pont, setPont] = useState(0);
  //let mondat = angolModel.getMondat();
  function kovMondat(p) {
    // Ezt a metódust hívja majd a gyerek komponens, amikor megtörténik az esemény.
    //console.log("Következő mondat");
    // akt index növelése és lekérdezése

    angolModel.setAktIndex();
    //mondat = angolModel.getMondat();
    setMondat({...angolModel.getMondat()});
    //console.log(mondat);
    //alap hiba, hogy a state-et közvetlen módosítjuk pont=pont+p
    setPont(pont + p)
  }

  return (
    <div className="jatekter">
      <div className="cim">{angolModel.getCim()}</div>
      <KivalasztoMondat mondat={mondat} kovMondat={kovMondat} />
      <div className="pontok">
        <p>Elért pontok: {pont}</p>
      </div>
    </div>
  );
}
