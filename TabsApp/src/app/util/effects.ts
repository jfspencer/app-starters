import { environment } from "../../environments/environment";

export function trace<T>(trace: string, passThru?: T) {
  if (!environment.production) console.log(trace);
  return passThru;
}
