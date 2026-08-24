import {
  parseResolution,
  matchesTarget,
} from "../utils/resolution-data";

const inputs = [
  "4200",
  "5000",
  "3000",
  "",
  "unknown",
];

const target = 4000n;

console.log("Resolution examples");
console.log("===================");

for (const input of inputs) {
  const result =
    parseResolution(input);

  console.log(
    "input:",
    JSON.stringify(input),
  );

  console.log(
    "valid:",
    result.valid,
  );

  console.log(
    "value:",
    result.value.toString(),
  );

  console.log(
    "matches target:",
    matchesTarget(
      result,
      target,
    ),
  );

  console.log("");
}
