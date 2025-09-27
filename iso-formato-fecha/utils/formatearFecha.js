// // 1.Import
// import dayjs from "dayjs";
// import localizedFormat from "dayjs/plugin/localizedFormat.js";
// import "dayjs/locale/es.js";

// //1.Activar plugin e idioma
// dayjs.extend(localizedFormat);
// dayjs.locale("es");

// //1.Funcion flecha exportada
// export const formatearFecha = (fechaISO) => {
//     return dayjs(fechaISO).format("D [de] MMM [de] YYYY, h:mm:ss A [UTC]");
// };
// ----------------------------------------------------------------------------------

//2.Import
// import dayjs from "dayjs";
// import  relativeTime from "dayjs/plugin/relativeTime.js";
// import "dayjs/plugin/relativeTime.js";

// //2.Activar plugin e idioma
// dayjs.extend(relativeTime);
// dayjs.locale("es");

// //2. función flecha exportada
// export const fechaRelativa = (fechaISO) => {
//     return dayjs(fechaISO).fromNow();
// };
// -----------------------------------------------------------------------------------

// 3.

// import gestorFechas from "dayjs";
// import localizedFormat from "dayjs/plugin/localizedFormat.js";
// import "dayjs/locale/es.js";

// // activar plugin e idioma
// gestorFechas.extend(localizedFormat);
// gestorFechas.locale("es");

// // función flecha exportada: relativa
// export const obtenerTiempoRelativo = (fechaEnISO) => {
//     return gestorFechas(fechaEnISO).fromNow();
// };

// // función flecha exportada: formato largo con día de la semana
// export const obtenerFechaLarga = (fechaEnISO) => {
//     return gestorFechas(fechaEnISO).format("dddd, D [de] MMMM [de] YYYY");
// };


// 4.-----------------------------------------------------------------------------------
import gestorFechas from "dayjs";

// función: formato numérico MM/DD/YYYY
export const obtenerFechaCorta = (fechaISO) => {
    return gestorFechas(fechaISO).format("MM/DD/YYYY");
};


// --------------------------------------------------------------------------------------
//Example - Me muestra el tiempo en el momento actual
// const ahora = dayjs();

// console.log("Hoy es:", ahora.format("YYYY/MM/DD"));