type EnumLiteralsOf<T extends object> = T[keyof T];

// merge implementation with "Enum" typed literal
// $ExceptType 1 | 2
export type Response = EnumLiteralsOf<typeof Response>;

// $ExpectType ReadOnly<{ No: 1; Yes: 2;}>
export const Response = Object.freeze({
  // we need to explicit cast values to get proper literal type
  No: 1 as 1,
  Yes: 2 as 2,
});

function respond(recipient: string, message: Response) {}

// merge implementation with "Enum" typed literal
// $ExpectType "RED" | "GREEN" | "BLUE"
export type Colors = EnumLiteralsOf<typeof Colors>;
// $ExpectType Readonly<{Red: "RED"; Green: "GREEN"; Blue: "BLUE";}>
export const Colors = Object.freeze({
  Red: "RED" as "RED",
  Green: "GREEN" as "GREEN",
  Blue: "BLUE" as "BLUE",
});
