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
}    






function programacion_dinamica() {

    if(comprobarHorario(horarios, hora_inic, hora_fin)){

        


    }
}