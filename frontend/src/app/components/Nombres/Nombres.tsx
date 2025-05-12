type NombresProps = {
    nombres: number[]
}

export const Nombres = ({ nombres } : NombresProps) => {
    return (
        <>
        <p>Nombres saisis :</p>
            {
                nombres.map((nombre) => [
                    <>
                        {nombre % 2 == 0 ? <b>{nombre}</b> : nombre}
                        <br />
                    </>
                ])
            }
        </>
    )
}