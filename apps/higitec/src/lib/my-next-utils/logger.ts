import pino from "pino";
import pretty from "pino-pretty";

const logger = pino(
  {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
  },
  pretty({
    colorize: true,
    translateTime: true,
    ignore: "pid,hostname",
    singleLine: process.env.NODE_ENV === "production",
  }),
);

export default logger;
