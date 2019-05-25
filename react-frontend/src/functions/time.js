import moment from "moment";

export const pastTime = (time, subYears) => {
  const cloneTime = moment(time);
  return cloneTime.subtract(subYears, "years").unix();
};
