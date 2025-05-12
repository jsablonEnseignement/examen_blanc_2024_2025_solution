import { useEffect, useState } from "react"
import { Pair } from "../Pair/Pair";

export const Saisie = () => {

    const [saisie, setSaisie] = useState<string>("");
    const [majuscules, setMajuscules] = useState<boolean>(false);

    useEffect(() => {
        setSaisie("Ceci est le texte par défaut")
    }, []);

    const enMajuscules = () => {
        setSaisie(saisie.toUpperCase());
        setMajuscules(true);
    }

    const enMinuscules = () => {
        setSaisie(saisie.toLowerCase());
        setMajuscules(false);
    }

    return (
        <>
            <input type="text" value={saisie} onChange={(e) => setSaisie(e.target.value)}/>
            <button onClick={() => setSaisie("")} disabled={saisie.length === 0}>Effacer la saisie</button>
            <br />
            {
                majuscules ? 
                <button onClick={enMinuscules} disabled={saisie.length === 0}>Passer en minuscules</button>
                :
                <button onClick={enMajuscules} disabled={saisie.length === 0}>Passer en majuscules</button> 
            }
            {saisie.length === 0 ? "Aucun texte saisi" : <Pair saisie={saisie} />}
        </>
    )
}