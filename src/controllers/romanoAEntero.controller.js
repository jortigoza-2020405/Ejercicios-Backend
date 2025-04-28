const valores = {
    I: 1, V: 5, X: 10, L: 50, 
    C: 100, D: 500, M: 1000
}

export const romanoAEntero = (req, res)=>{
    const { romano } = req.body
    if(!/^[IVXLCDM]+$/.test(romano)){
        return res.json({ message: 'No es un número romano válido' })
    }

    let total = 0
    let anterior = 0

    for(let i = romano.length - 1; i >= 0; i--){
        const actual = valores[romano[i]]
        if(actual < anterior){
            total -= actual
        }else{
            total += actual
        }
        anterior = actual
    }

    res.json({ entero: total })
}
