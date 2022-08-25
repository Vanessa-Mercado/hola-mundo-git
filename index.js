let nombre = "Juan Perez";
let edad = 25;
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad + " años");
console.log("se le pagara: "+calcularSalario(8, 30000));

function calcularEdad(anioNacimiento){
    return new Date().getFullYear() - anioNacimiento;
}

function calcularSalario(horasTrabajadas, montoPorHora){
    return horasTrabajadas * montoPorHora;
}