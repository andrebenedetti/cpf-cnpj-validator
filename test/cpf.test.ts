import "jest";

import { isValidCpf } from "../src";

describe("CPF", () => {
  test("números de listas negras", () => {
    expect(isValidCpf("00000000000")).toBeFalsy();
    expect(isValidCpf("11111111111")).toBeFalsy();
    expect(isValidCpf("22222222222")).toBeFalsy();
    expect(isValidCpf("33333333333")).toBeFalsy();
    expect(isValidCpf("44444444444")).toBeFalsy();
    expect(isValidCpf("55555555555")).toBeFalsy();
    expect(isValidCpf("66666666666")).toBeFalsy();
    expect(isValidCpf("77777777777")).toBeFalsy();
    expect(isValidCpf("88888888888")).toBeFalsy();
    expect(isValidCpf("99999999999")).toBeFalsy();
    expect(isValidCpf("12345678909")).toBeFalsy();
  });

  test("rejeita valores falsos", () => {
    expect(isValidCpf("")).toBeFalsy();
  });

  test("valida strings formatadas", () => {
    expect(isValidCpf("295.379.955-93")).toBeTruthy();
  });

  test("valida strings não formatadas", () => {
    expect(isValidCpf("29537995593")).toBeTruthy();
  });

  test("valida strings de caracteres confusas", () => {
    expect(isValidCpf("295$379\n955...93")).toBeTruthy();
  });

  test("valida cadeias de caracteres", () => {
    expect(isValidCpf("295$379\n955...93", true)).toBeFalsy();
    expect(isValidCpf("295.379.955-93", true)).toBeTruthy();
    expect(isValidCpf("29537995593", true)).toBeTruthy();
  });
});
