const { parse } = require("csv-parser");
const fs = require("fs");

const results = [];

//Reading the file line by line
//Push the buffer data into the result array
//Even Emitter
fs.createReadStream("./kepler_data.csv")
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
