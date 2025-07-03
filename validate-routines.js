// validate-routines.js
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const fs = require("fs");
const path = require("path");

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schema = JSON.parse(fs.readFileSync("routine-schema.json", "utf-8"));

const examplesDir = "examples";
let failed = false;

for (const file of fs.readdirSync(examplesDir)) {
  if (file.endsWith(".json")) {
    const data = JSON.parse(fs.readFileSync(path.join(examplesDir, file), "utf-8"));
    const valid = ajv.validate(schema, data);
    if (valid) {
      console.log(`✅ ${file} is valid`);
    } else {
      console.error(`❌ ${file} has validation errors:`);
      console.error(ajv.errors);
      failed = true;
    }
  }
}

if (failed) process.exit(1); 