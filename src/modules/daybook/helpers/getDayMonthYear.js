const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes']

const getDayMonthYear = ( dateString ) => {
    const date = new Date(dateString)

    return {
        day: date.getDay(),
        month: months[ date.getMonth() ],
        yearDay: `${ date.getFullYear() }, ${ days[ date.getDay() ] }`
    }
}

export default getDayMonthYear