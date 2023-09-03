# cpf-cnpj-validator

Fork and rewrite of ![cpf-cnpj-validator](https://github.com/carvalhoviniciusluiz/cpf-cnpj-validator) with only essential code to validate CPFs and CNPJs.

Fork e reescrita somente com código essencial para validar CPFs e CNPJs.

[MIT](http://opensource.org/licenses/MIT)

## Installation

`npm i @andrebenedetti/cpf-cnpj-validator`

## Usage

```
import { isValidCnpj, isValidCpf } from "@andrebenedetti/cpf-cnpj-validator";

isValidCnpj("12345678901234");
isValidCpf("12345678901");
```

## Notes on validation

All non-numeric characters will be removed before validation. For instance, this will return true:

`isValidCpf("20@923##%14@!8,230"); // returns true`
