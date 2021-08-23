import { genId, getFetch } from "../lib/index";

test("genId", () => {
  expect(genId().length).toBe(10);
});
