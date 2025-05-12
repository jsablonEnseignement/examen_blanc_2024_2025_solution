type PairProps = {
    saisie: string
}

export const Pair = ({ saisie } : PairProps) => {

    const estPair = (value: string) => {
        return saisie.length % 2 === 0;
    }

    return (
        <>
            <p>La phrase "<b>{saisie}</b>" contient un nombre {estPair(saisie) ? "pair" : "impair"} de caractères.</p>
        </>
    )
}