export type Cursor = "pointer" | "default" | "help" | "move";
export const cursor = (cursor: Cursor = "default") => {
  return { cursor };
};
