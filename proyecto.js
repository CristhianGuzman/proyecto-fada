/*var beneficios = [0, 31, 90, 14, 58, 1, 33, 21, 2, 34, 4, 7]
var pesos = [0, 22, 64, 7, 22, 12, 33, 33, 45, 56, 16, 32]
var mocila = 56



let actividades = [,
    act1 = {
        hora_inicio: 0,
        hora_finalizacion: 4,
        isSelected: false
    },

    act2 = {
        hora_inicio: 4,
        hora_finalizacion: 9,
        isSelected: false
    },

    act3 = {
        hora_inicio: 11,
        hora_finalizacion: 23,
        isSelected: false
    },

    act4 = {
        hora_inicio: 8,
        hora_finalizacion: 19,
        isSelected: false
    },

    act5 = {
        hora_inicio: 1,
        hora_finalizacion: 15,
        isSelected: false
    }
]


let horariosArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function comprobarHorario(horarios, hora_inic, hora_fin) {
    //retorna true si la hora de inicio o fin de una actividad se cruza con otra
    let val = false
    for (i = hora_inic; i <= hora_fin; i++) {
        if (horarios[i] === 1) {
            val = true
            i = hora_fin + 1
        }
    }
    return val
}

function modificarHorario(horarios, hora_inic, hora_fin) {
    //retorna true si la hora de inicio y fin de una actividad se cruza con otra

    var nuevoHorario = [].concat(horarios)
    for (i = hora_inic; i <= hora_fin; i++) {
        nuevoHorario[i] = 1
    }
    return nuevoHorario
}


function contarHoras(horarios) {
    //retorna true si la hora de inicio y fin de una actividad se cruza con otra
    let contador = 0
    for (i = 0; i <= horarios.length; i++) {
        if (horarios[i] === 1) {
            contador++
        }
    }
    return contador
}




function Problema_mocila(n_obj, horarios) {
    let actividad = actividades[n_obj]


    if (n_obj === 1) {

        if (comprobarHorario(horarios, actividad.hora_inicio, actividad.hora_finalizacion - 1)) {
            return horarios
        }
        else {
            return modificarHorario(horarios, actividad.hora_inicio, actividad.hora_finalizacion - 1)
        }
    }

    else {

        var no_llevar = Problema_mocila(n_obj - 1, horarios)



        var llevar
        if (comprobarHorario(horarios, actividad.hora_inicio, actividad.hora_finalizacion - 1)) {
            llevar = []
        } else {
            const nuevoHorario = modificarHorario(horarios, actividad.hora_inicio, actividad.hora_finalizacion - 1)
            llevar = Problema_mocila(n_obj - 1, nuevoHorario)
        }



        if (contarHoras(no_llevar) > contarHoras(llevar))
            return no_llevar
        else
            return llevar
    }
}*/












/*
let actividades = [,
    act1 = {
        hora_inicio: 2,
        hora_finalizacion: 5,
        nombre: 'Contabilidad'
    },

    act2 = {
        hora_inicio: 1,
        hora_finalizacion: 2,
        nombre: 'Entrada de datos'
    },

    act3 = {
        hora_inicio: 0,
        hora_finalizacion: 1,
        nombre: 'Facturas'
    },

    act4 = {
        hora_inicio: 4,
        hora_finalizacion: 21,
        nombre: 'Certificados'
    },

    act5 = {
        hora_inicio: 5,
        hora_finalizacion: 6,
        nombre: 'Revisión diaria'
    }
]



let horariosArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]




function comprobarHorario(horarios, hora_inic, hora_fin) {
    //retorna true si la hora de inicio o fin de una actividad se cruza con otra
    let val = false
    for (i = hora_inic; i <= hora_fin; i++) {
        if (horarios[i] === 1) {
            val = true
            i = hora_fin
        }
    }
    return val
}

function modificarHorario(horarios, hora_inic, hora_fin) {
    //

    var nuevoHorario = [].concat(horarios)
    for (i = hora_inic; i <= hora_fin; i++) {
        nuevoHorario[i] = 1
    }
    return nuevoHorario
}


function contarHoras(horarios) {
    //Dado un arreglo 
    let contador = 0
    for (i = 0; i <= horarios.length; i++) {
        if (horarios[i] === 1) {
            contador++
        }
    }
    return contador
}




function RoboticProcessAutomation({ n_obj, horarios }) {
    //Funcion principal
    let actividad = actividades[n_obj]
    let {hora_inicio,hora_finalizacion} = actividad


    if (n_obj === 1) {

        if (comprobarHorario(horarios, hora_inicio, hora_finalizacion - 1)) {
            const actSel = []
            return { horarios, actividadesSel: actSel }
        }
        else {
            const nuevoHorario = modificarHorario(horarios, hora_inicio, hora_finalizacion - 1)
            const actSel = []
            actSel.push(actividades[n_obj])
            return { horarios: nuevoHorario, actividadesSel: actSel }
        }
    }

    else {

        var no_llevar = RoboticProcessAutomation({ n_obj: n_obj - 1, horarios })



        var llevar
        if (comprobarHorario(horarios, hora_inicio, hora_finalizacion - 1)) {
            llevar = { horarios: [], actividadesSel: [] }

        } else {
            const nuevoHorario = modificarHorario(horarios, hora_inicio, hora_finalizacion - 1)
            llevar = RoboticProcessAutomation({ n_obj: n_obj - 1, horarios: nuevoHorario })
            llevar.actividadesSel.push(actividad)
        }



        if (contarHoras(no_llevar.horarios) > contarHoras(llevar.horarios))
            return no_llevar
        else
            return llevar
    }
}*/








let actividades = [,
    act1 = {
        hora_inicio: 2,
        hora_finalizacion: 5,
        nombre: 'Contabilidad'
    },

    act2 = {
        hora_inicio: 1,
        hora_finalizacion: 2,
        nombre: 'Entrada de datos'
    },

    act3 = {
        hora_inicio: 0,
        hora_finalizacion: 1,
        nombre: 'Facturas'
    },

    act4 = {
        hora_inicio: 4,
        hora_finalizacion: 21,
        nombre: 'Certificados'
    },

    act5 = {
        hora_inicio: 5,
        hora_finalizacion: 6,
        nombre: 'Revisión diaria'
    }
]



let horariosArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]




function comprobarHorario(horarios, hora_inic, hora_fin) {
    //retorna true si la hora de inicio o fin de una actividad se cruza con otra
    let val = false
    for (i = hora_inic; i <= hora_fin; i++) {
        if (horarios[i] === 1) {
            val = true
            i = hora_fin
        }
    }
    return val
}

function modificarHorario(horarios, hora_inic, hora_fin) {
    //

    var nuevoHorario = [].concat(horarios)
    for (i = hora_inic; i <= hora_fin; i++) {
        nuevoHorario[i] = 1
    }
    return nuevoHorario
}


function contarHoras(horarios) {
    //Dado un arreglo 
    let contador = 0
    for (i = 0; i <= horarios.length; i++) {
        if (horarios[i] === 1) {
            contador++
        }
    }
    return contador
}


function RoboticProcessAutomation2({ n_obj, horarios }) {
    //Funcion principal
    let actividad = actividades[n_obj]
    let { hora_inicio, hora_finalizacion } = actividad


    if (n_obj === 1) {

        if (comprobarHorario(horarios, hora_inicio, hora_finalizacion - 1)) {
            const actSel = []
            return { horarios, actividadesSel: actSel }
        }
        else {
            const nuevoHorario = modificarHorario(horarios, hora_inicio, hora_finalizacion - 1)
            const actSel = []
            actSel.push(actividades[n_obj])
            return { horarios: nuevoHorario, actividadesSel: actSel }
        }
    }

    else {

        var no_llevar = RoboticProcessAutomation2({ n_obj: n_obj - 1, horarios })



        var llevar
        if (comprobarHorario(horarios, hora_inicio, hora_finalizacion - 1)) {
            llevar = { horarios: [], actividadesSel: [] }

        } else {
            const nuevoHorario = modificarHorario(horarios, hora_inicio, hora_finalizacion - 1)
            llevar = RoboticProcessAutomation2({ n_obj: n_obj - 1, horarios: nuevoHorario })
            llevar.actividadesSel.push(actividad)
        }



        if (no_llevar.actividadesSel.length > llevar.actividadesSel.length)
            return no_llevar
        else
            return llevar
    }
}



















console.log(RoboticProcessAutomation2({ n_obj: 5, horarios: horariosArray }).actividadesSel)