import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../type/authenticationType";


const expiresIn = "50min";
export const generateToken = (input: AuthenticationData): string => {
   const token = jwt.sign(
      {
         id: input.id,
         role: input.role
      },
      process.env.JWT_KEY as string,
      {
         expiresIn
      }
   );
   return token
}

export const getTokenData = (token: string): AuthenticationData => {
   const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
   const result = {
     id: payload.id,
     role: payload.role,
   };
   return result;
 }