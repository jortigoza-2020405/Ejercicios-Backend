export const validarPassword = (req, res)=>{
    const { password } = req.body

    const errores = []
    if(password.length < 8) errores.push('Debe tener al menos 8 caracteres')
    if(!/[A-Z]/.test(password)) errores.push('Debe tener al menos una mayúscula')
    if(!/[a-z]/.test(password)) errores.push('Debe tener al menos una minúscula')
    if(!/[0-9]/.test(password)) errores.push('Debe tener al menos un número')
    if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errores.push('Debe tener al menos un símbolo')

    const valida = errores.length === 0

    res.json({ valida, errores })
}
