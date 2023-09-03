import "jest";
import { isValidCnpj } from "../src";

describe("CNPJ", () => {
  test("números de listas negras", () => {
    expect(isValidCnpj("00000000000000")).toBeFalsy();
    expect(isValidCnpj("11111111111111")).toBeFalsy();
    expect(isValidCnpj("22222222222222")).toBeFalsy();
    expect(isValidCnpj("33333333333333")).toBeFalsy();
    expect(isValidCnpj("44444444444444")).toBeFalsy();
    expect(isValidCnpj("55555555555555")).toBeFalsy();
    expect(isValidCnpj("66666666666666")).toBeFalsy();
    expect(isValidCnpj("77777777777777")).toBeFalsy();
    expect(isValidCnpj("88888888888888")).toBeFalsy();
    expect(isValidCnpj("99999999999999")).toBeFalsy();
  });

  test("rejeita valores falsos", () => {
    expect(isValidCnpj("")).toBeFalsy();
  });

  test("valida strings formatadas", () => {
    expect(isValidCnpj("54.550.752/0001-55")).toBeTruthy();
  });

  test("valida strings não formatadas", () => {
    expect(isValidCnpj("54550752000155")).toBeTruthy();
  });

  test("valida strings confusas", () => {
    expect(isValidCnpj("54550[752#0001..$55")).toBeTruthy();
  });

  test("valida cadeias de caracteres", () => {
    expect(isValidCnpj("54550[752#0001..$55")).toBeFalsy();
    expect(isValidCnpj("54.550.752/0001-55")).toBeTruthy();
    expect(isValidCnpj("54550752000155")).toBeTruthy();
  });
});
