import { expect } from "chai";

import {
  parseResolution,
  matchesTarget,
  isUsable,
} from "../utils/resolution-data";

describe("Resolution data", function () {
  it("parses a number", function () {
    const result =
      parseResolution("4200");

    expect(result.valid)
      .to.equal(true);

    expect(result.value)
      .to.equal(4200n);
  });

  it("parses zero", function () {
    const result =
      parseResolution("0");

    expect(result.valid)
      .to.equal(true);
  });

  it("rejects empty input", function () {
    const result =
      parseResolution("");

    expect(result.valid)
      .to.equal(false);
  });

  it("rejects invalid text", function () {
    const result =
      parseResolution("hello");

    expect(result.valid)
      .to.equal(false);
  });

  it("rejects negative values", function () {
    const result =
      parseResolution("-10");

    expect(result.valid)
      .to.equal(false);
  });

  it("matches a target", function () {
    const result =
      parseResolution("5000");

    expect(
      matchesTarget(result, 4000n),
    ).to.equal(true);
  });

  it("rejects a value below target", function () {
    const result =
      parseResolution("3000");

    expect(
      matchesTarget(result, 4000n),
    ).to.equal(false);
  });

  it("reports usable data", function () {
    const result =
      parseResolution("100");

    expect(
      isUsable(result),
    ).to.equal(true);
  });
});
