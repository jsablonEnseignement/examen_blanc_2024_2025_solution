import { useState } from "react"
import { Nombres } from "../Nombres/Nombres";

export const Saisie = () => {

    const [saisie, setSaisie] = useState<string>("");
    const [nombres, setNombres] = useState<number[]>([]);

    const ajouterNombre = () => {
        if(saisie) setNombres([...nombres, parseInt(saisie)]);
    }

    const estUnNombre = (value: string) => {
        return value.match(/^[0-9]+$/) ? false : true
    }

    return (
        <>
            Saisir un nombre : 
            <br />
            <input type="text" defaultValue={saisie} onChange={(e: any) => setSaisie(e.target.value)}/>
            <button onClick={ajouterNombre} disabled={estUnNombre(saisie)}>Ajouter</button>
            <br />
            { nombres.length > 0 && <Nombres nombres={nombres} />}
        </>
    )
}