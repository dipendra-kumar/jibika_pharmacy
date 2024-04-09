import { NextRequest } from "next/server";
import { IUser } from "..";

export interface Request extends NextRequest {
  user?: IUser;
}
