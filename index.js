const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

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
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results.length);
    console.log("done");
  });
