const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("kepler_data.csv")
.pipe(parse({
    comment: '#',
    columns: true
}))
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    console.log(results);
    console.log("Nothing left in the file");
  })
  .on("error", (err) => {
    console.log(err, "Some issue occured");
  });
