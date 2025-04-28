export const generadorPassword = (req, res)=>{
    const { longitud, mayusculas, numeros, simbolos } = req.body

    let caracteres = 'abcdefghijklmnopqrstuvwxyz'
    if(mayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numeros) caracteres += '0123456789'
    if(simbolos) caracteres += '!@#$%^&*()_+{}[]<>.,'

    let password = ''
    for(let i=0; i<longitud; i++){
        const randomIndex = Math.floor(Math.random() * caracteres.length)
        password += caracteres[randomIndex]
    }

    res.json({ password })
}
