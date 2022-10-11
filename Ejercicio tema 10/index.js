import { suma, multiplicacion } from "./controller.js";
import chalk from "chalk";

const log = console.log;

let sumA = suma(1, 2);
log(sumA);

let sumB = suma(4, 5);
log(sumB);

let multiplicaAB = multiplicacion(sumA, sumB);
log(multiplicaAB);

let multiplica = multiplicacion(suma(1, 2), suma(4, 5));
log(chalk.green(multiplicaAB));
