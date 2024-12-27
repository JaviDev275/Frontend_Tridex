// formatearFecha.js
export function formatearFecha(fechaISO) {
    const fecha = fechaISO ? new Date(fechaISO) : new Date(); // Usa la fecha actual si no se proporciona fechaISO
    const dia = fecha.getDate(); // Día del mes
    const mes = fecha.toLocaleString('es-ES', { month: 'long' }); // Nombre del mes
    const año = fecha.getFullYear(); // Año completo
    return `${dia} de ${mes} del ${año}`;
}