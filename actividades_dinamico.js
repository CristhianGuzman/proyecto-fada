
let actividades = [
    ,
    {
        hora_inicio: 6,
        hora_finalizacion: 9,
        nombre: 'Certificados'
    },

    {
        hora_inicio: 0,
        hora_finalizacion: 7,
        nombre: 'Revisión diaria'
    },
    {
        hora_inicio: 1,
        hora_finalizacion: 5,
        nombre: 'Contabilidad'
    },
    {
        hora_inicio: 1,
        hora_finalizacion: 2,
        nombre: 'Entrada de datos'
    },
    {
        hora_inicio: 0,
        hora_finalizacion: 1,
        nombre: 'Facturas'
    },
]



function programacion_dinamica() {

    //var beneficios = [0, 31,90, 14, 58, 1, 33, 21, 2, 34, 4, 7]
    //var pesos = [0, 22, 64, 7, 22, 12, 33, 33, 45, 56, 16, 32]

    var horaDisponible = 10

    var matriz = new Array(actividades.length);
    var matrizAux = new Array(actividades.length);


    for (i = 1; i <= 5; i++) {
        console.log('------------------   ', i, '  ----------------')

        matriz[i] = new Array(horaDisponible);
        matrizAux[i] = new Array(horaDisponible);
        for (j = 0; j < horaDisponible; j++) {

            if (i === 1) {
                if (actividades[1].hora_inicio < j) {
                    matriz[i][j] = 0
                    matrizAux[i][j] = 0
                } else {
                    matriz[i][j] = actividades[1].hora_finalizacion - actividades[1].hora_inicio
                    matrizAux[i][j] = 1
                }
            } else
                if (i > 1) {


                    if (actividades[i].hora_inicio < j) {

                        matriz[i][j] = matriz[i - 1][j]
                        matrizAux[i][j] = 0

                    }else
                    {
                        let horas_ocupadas = actividades[i].hora_finalizacion - actividades[i].hora_inicio

                        if (matriz[i - 1][j] > matriz[i - 1][actividades[i].hora_finalizacion] + horas_ocupadas) {
                            matriz[i][j] = matriz[i - 1][j]
                            matrizAux[i][j] = 0

                        } else {
                            matriz[i][j] = matriz[i - 1][actividades[i].hora_finalizacion] + horas_ocupadas
                            matrizAux[i][j] = 1

                        }
                    }
                }

            console.log(j, '= ', matriz[i][j],'------', 'AUX= ', matrizAux[i][j])
           
        }
    }

    buscarSolucion(matrizAux)
}




function buscarSolucion(matrizAux){

    const solucion = []
    let hora = 0
    for(i=5; i >= 1; i--){

        if(i === 5){
           solucion.push (matrizAux[i][0]) 
           
        }else {
            solucion.push (matrizAux[i][hora])
            if(matrizAux[i][hora] = 1){
                hora = actividades[i].hora_finalizacion
            }
            
        }   
        
    }
    console.log(solucion)


}
programacion_dinamica()

