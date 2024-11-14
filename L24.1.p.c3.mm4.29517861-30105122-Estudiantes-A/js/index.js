let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Maria', semestre: 6, nota: 15},
    {nombre: 'Pedro', semestre: 5, nota: 9},
    {nombre: 'Jose', semestre: 8, nota: 10},
    {nombre: 'David', semestre: 5, nota: 18},
    {nombre: 'Fernanda', semestre: 10, nota: 17},
]

let estudiantesSemestre = (estudiantes, semestre) => {
        let estudiantesfiltrados = [];
        estudiantes.forEach(estudiantes => {
            if(estudiantes.semestre == semestre){
                estudiantesfiltrados.push(estudiantes);
            }
        });
        return estudiantesfiltrados;
}


let salida = document.getElementById('salida');
let estudiantes5 = estudiantesSemestre(estudiantes, 5);
salida.innerHTML = '<h2>Personas del 5to semestre: <br></h2>'
estudiantes5.forEach(estudiante => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} <br> Semestre: ${estudiante.semestre} <br> Nota: ${estudiante.nota} <br> <br>`
})