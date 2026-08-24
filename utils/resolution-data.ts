export type ResolutionData = {
  value: bigint;
  valid: boolean;
};

export function parseResolution(
  input: unknown,
): ResolutionData {
  if (
    typeof input !== "string" ||
    input.trim() === ""
  ) {
    return {
      value: 0n,
      valid: false,
    };
  }

  try {
    const value = BigInt(
      input.trim(),
    );

    if (value < 0n) {
      return {
        value: 0n,
        valid: false,
      };
    }

    return {
      value,
      valid: true,
    };
  } catch {
    return {
      value: 0n,
      valid: false,
    };
  }
}

export function matchesTarget(
  data: ResolutionData,
  target: bigint,
): boolean {
  return (
    data.valid &&
    data.value >= target
  );
}

export function isUsable(
  data: ResolutionData,
): boolean {
  return data.valid;
}
