export const conversorTemperatura = (req, res)=>{
    const { valor, unidad } = req.body

    if(!['C', 'F', 'K'].includes(unidad)){
        return res.json({ message: 'No es una unidad válida' })
    }

    let C, F, K

    if(unidad === 'C'){
        C = valor
        F = (valor * 9/5) + 32
        K = valor + 273.15
    }
    if(unidad === 'F'){
        C = (valor - 32) * 5/9
        F = valor
        K = (valor - 32) * 5/9 + 273.15
    }
    if(unidad === 'K'){
        C = valor - 273.15
        F = (valor - 273.15) * 9/5 + 32
        K = valor
    }

    res.json({ C, F, K })
}
