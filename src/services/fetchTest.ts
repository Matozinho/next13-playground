import { sleep } from "@/utils";
import { ReactNode } from "react";

/// sleeping time in seconds
export const fetchTest = async (ms: number, dataToReturn: ReactNode) => {
  await sleep(ms);

  return dataToReturn;
};
