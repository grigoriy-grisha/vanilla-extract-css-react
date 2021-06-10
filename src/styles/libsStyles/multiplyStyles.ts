import { longRunningFunction } from "../../libs/longRunningFunction";

export function multiplyStyles(...styles: any) {
  // longRunningFunction();
  // @ts-ignore
  return Object.fromEntries(styles.flatMap((styleItem: any) => Object.entries(styleItem)));
}
