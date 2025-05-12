type NombresProps = {
    nombres: number[]
}

export const Nombres = ({ nombres } : NombresProps) => {

    const isPerfectSquare = (x: number) => {
        return x > 0 && Math.sqrt(x) % 1 === 0;
    }
 
    const isFibonacci = (n: number) => {
        // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both is a perfect square
        return isPerfectSquare(5*n*n+4) || isPerfectSquare(5*n*n-4);
    }

    return (
        <>
        <p>Nombres saisis :</p>
            {
                nombres.map((nombre) => [
                    <>
                        {isFibonacci(nombre) ? <b>{nombre} fait partie de la suite de Fibonacci</b> : nombre + " ne fait pas partie de la suite de Fibonacci"}

                        <br />
                    </>
                ])
            }
        </>
    )
}