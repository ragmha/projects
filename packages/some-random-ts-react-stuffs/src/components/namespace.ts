export interface StringValidator {
  isAcceptable: (s: string) => boolean;
}

export class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return true;
  }
}

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return false;
  }
}

// Idiomatic JS namespace via object
export const Validation = {
  LettersOnlyValidator,
  ZipCodeValidator,
};

// merge types with implementation namespace
export interface Validation {
  StringValidator: StringValidator;
}

let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
