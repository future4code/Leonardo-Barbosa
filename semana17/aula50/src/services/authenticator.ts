import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/authe";

export function generateToken(
  payload: AuthenticationData
): string {
  return jwt.sign(
     payload,
     process.env.JWT_KEY as string,
     {
        expiresIn: "24min"
     }
  )
}