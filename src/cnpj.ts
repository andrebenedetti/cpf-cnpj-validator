const BLACKLIST = [
  "00000000000000",
  "11111111111111",
  "22222222222222",
  "33333333333333",
  "44444444444444",
  "55555555555555",
  "66666666666666",
  "77777777777777",
  "88888888888888",
  "99999999999999",
];

function verifierDigit(digits: string): number {
  const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  digits.length === 13 && weights.unshift(6);

  const sum = digits
    .split("")
    .reduce((acc, curr, index) => acc + Number(curr) * weights[index], 0);

  const mod = sum % 11;

  return mod < 2 ? 0 : 11 - mod;
}

export function isValidCnpj(cnpj: string): boolean {
  const stripped = (cnpj || "").replace(/[-\\/.]/g, "");

  if (stripped.length !== 14) {
    return false;
  }

  if (BLACKLIST.includes(stripped)) {
    return false;
  }

  let numbers = stripped.slice(0, 12);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers === stripped;
}
