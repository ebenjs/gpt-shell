import { beforeAll, describe, expect, test } from "vitest";
import {
  getConfig,
  checkForRequiredEnvironmentVariables,
} from "../../utilities/get-config.js";

describe("Configuration retrieval", () => {
  let config;

  beforeAll(() => {
    config = {};
  });

  test("if getConfig() is returning config object", () => {
    config = getConfig();
    expect(config).toHaveProperty("status");
    expect(Object.keys(config).length).toBe(2);
  });

  test("if required argument function is returning false", () => {
    config = {
      apikey: "test-apikey",
      model: "test-model",
    };
    const checkResult = checkForRequiredEnvironmentVariables(config);
    expect(checkResult).toBe(false);
  });

  test("if required argument function is returning true", () => {
    config = {
      apikey: "test-apikey",
      model: "test-model",
      url: "test-url",
    };
    const checkResult = checkForRequiredEnvironmentVariables(config);
    expect(checkResult).toBe(true);
  });
});
