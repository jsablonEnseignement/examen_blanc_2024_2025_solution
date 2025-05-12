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
            <input type="text" defaultValue={saisie} onChange={(e) => setSaisie(e.target.value)}/>
            <br />
            {
                majuscules ? 
                <button onClick={enMinuscules}>Passer en minuscules</button>
                :
                <button onClick={enMajuscules}>Passer en majuscules</button> 
            }
            {saisie.length === 0 ? "Aucun texte saisi" : <Pair saisie={saisie} />}
        </>
    )
}