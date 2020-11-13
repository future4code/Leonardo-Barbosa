import { USER_ROLES } from "../data/insertUser";

export type AuthenticationData = {
  id: string,
  role: USER_ROLES
}