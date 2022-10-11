const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

const saludar = (nombre, denominacion) => {
  if (typeof nombre === "string" && typeof denominacion === "string") {
    return `Buenas tardes ${denominacion} ${nombre}, es un gusto saludarle y tenerle de vuelta!.`;
  } else {
    throw new Error("El valor de las variables debe ser de tipo string");
  }
};

try {
  console.log("Los parámetros introducidos son correctos");
  let nombre = "Jonathan Rodríguez";
  let denominacion = "Sr";
  saludar(nombre, denominacion);
  saludar(585, 568);
} catch (e) {
  console.log(e);
  logger.error(e);
} finally {
  console.log("Esto me ha quedado muy bien!");
}
