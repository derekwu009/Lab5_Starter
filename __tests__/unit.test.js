// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
// phone # test true
test("111-222-3333 is valid", () => {
  expect(isPhoneNumber("111-222-3333")).toBe(true);
});
test("(111) 222-3333 is valid", () => {
  expect(isPhoneNumber("(111) 222-3333")).toBe(true);
});

// phone # test false
test("1-22-333 is invalid", () => {
  expect(isPhoneNumber("1-22-333")).toBe(false);
});
test("1232233333 is invalid", () => {
  expect(isPhoneNumber("1232233333")).toBe(false);
});

// email test true
test("user@example.com valid", () => {
  expect(isEmail("user@example.com")).toBe(true);
});
test("user2@ex.com valid", () => {
  expect(isEmail("user2@ex.com")).toBe(true);
});

// email test false
test("user@@example.com invalid", () => {
  expect(isEmail("user@@example.com")).toBe(false);
});
test("user2ex.com invalid", () => {
  expect(isEmail("user2ex.com")).toBe(false);
});

// password test true
test("strOngpass123 is strong", () => {
  expect(isStrongPassword("strOngpass123")).toBe(true);
});
test("a123 is strong", () => {
  expect(isStrongPassword("a123")).toBe(true);
});

// password test false
test("123 is weak", () => {
  expect(isStrongPassword("123")).toBe(false);
});
test("!23 is weak", () => {
  expect(isStrongPassword("!23")).toBe(false);
});

// date test true
test("1/1/1111 is valid", () => {
  expect(isDate("1/1/1111")).toBe(true);
});
test("2/2/2222 is valid", () => {
  expect(isDate("2/2/2222")).toBe(true);
});

// date test false
test("1111/1/1 is invalid", () => {
  expect(isDate("1111/1/1")).toBe(false);
});
test("2-2-2222 is invalid", () => {
  expect(isDate("2-2-2222")).toBe(false);
});

// hexcolor test true
test("#FFF is valid", () => {
  expect(isHexColor("#FFF")).toBe(true);
});
test("abcdef is valid", () => {
  expect(isHexColor("abcdef")).toBe(true);
});

// hexcolor test false
test("#1234 is invalid", () => {
  expect(isHexColor("#1234")).toBe(false);
});
test("#WXYZ is invalid", () => {
  expect(isHexColor("#WXYZ")).toBe(false);
});
