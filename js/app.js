const pesoUsuario=parseFloat(prompt("ingrese su peso en kg"))
localStorage.setItem("peso", pesoUsuario)
const alturaUsuario=parseFloat(prompt("ingrese su altura en metros(mt)"))
localStorage.setItem("altura", alturaUsuario)
const resultado=(pesoUsuario/alturaUsuario**2).toFixed(1)
function calcularImc(peso, altura){
    return peso / (altura**2)
}
alert("su imc es" + resultado)

