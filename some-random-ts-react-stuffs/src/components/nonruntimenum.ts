type MessageResponse = 1 | 2;
export function respond(recipient: string, message: MessageResponse) {}

type Colors = "RED" | "GREEN" | "BLUE";
export function favoriteColor(name: string, colors: Colors) {}
