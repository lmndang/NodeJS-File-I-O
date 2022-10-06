const { parse } = require("csv-parse");
const fs = require("fs");

//const results = [];

const habitablePlanet = [];

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

//Reading the file line by line
//Push the buffer data into the result array
//Even Emitter
fs.createReadStream("./kepler_data.csv")
  //Connect two streams
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanet.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanet.length);
    console.log("done");
  });
