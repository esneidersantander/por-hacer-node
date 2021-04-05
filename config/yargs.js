const descripcion = {
    demand:true,
    alias:'d',
    desc:'Descripción de la tarea por hacer'
}
const completado = {
    alias:'c',
    desc:'Estado de la tarea',
    default:true
}
const argv= require("yargs")
            .command('crear','Crear un elemento por hacer', {
                descripcion
            })
            .command('actualizar','Actualiza el estado de completado de una tarea', {
                descripcion,
                completado
            })
            .command('borrar','Borra una tarea', {
                descripcion
            })
            .help()
            .argv;

module.exports={
    argv
}