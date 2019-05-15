import moment from "moment";

export const pastTime = (time, subYears) => time.subtract(subYears, "y").unix();
