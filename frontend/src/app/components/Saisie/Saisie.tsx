import { useState } from "react"
import { Nombres } from "../Nombres/Nombres";

export const Saisie = () => {

    const [saisie, setSaisie] = useState<number>();
    const [nombres, setNombres] = useState<number[]>([]);

    const ajouterNombre = () => {
        if(saisie) setNombres([...nombres, saisie]);
    }

    return (
        <>
            <input type="text" defaultValue={saisie} onChange={(e: any) => setSaisie(parseInt(e.target.value))}/>
            <button onClick={ajouterNombre}>Valider</button>
            <br />
            <Nombres nombres={nombres} />
        </>
    )
}