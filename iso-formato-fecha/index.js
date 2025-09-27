// 1.Crea y exporta una función flecha que reciba una fecha en formato ISO y la convierta a un formato legible,--------
//  por ejemplo: "28 de diciembre de 2020, 12:34:56 PM UTC".---------------------------------------------------------
// import dayjs from "dayjs";
// import { formatearFecha } from "./utils/formatearFecha.js";

// const fechaISO = "2020-12-28T12:34:56Z";
// console.log(formatearFecha(fechaISO));

// 2.Implementa una función para convertir fechas en formato relativo, como "hace 1 año".--------------------------

// import { fechaRelativa } from "./utils/formatearFecha.js";


// console.log(fechaRelativa("2022-09-25T12:00:00Z"));

// console.log(fechaRelativa("2022-09-25T12:00:00Z")); // ej: "hace 3 años"
// console.log(fechaRelativa("2025-10-01T12:00:00Z")); // ej: "en 6 días"
// console.log(fechaRelativa("2025-09-24T12:00:00Z")); // ej: "hace un día"

// 3.Implementa otra función que devuelva la fecha en formato "domingo, 28 de abril de 2024".-------------------------

// import { obtenerTiempoRelativo, obtenerFechaLarga } from "./utils/formatearFecha.js";

// console.log(obtenerTiempoRelativo("2022-09-25T12:00:00Z")); // hace 3 años
// console.log(obtenerFechaLarga("2024-04-28T12:00:00Z"));     // domingo, 28 de abril de 2024


// 4.Agrega una función que muestre la fecha en formato "04/28/2024".-----------------------------------------------------
import { obtenerFechaCorta } from "./utils/formatearFecha.js";

console.log(obtenerFechaCorta("2024-04-28T12:00:00Z")); // 04/28/2024