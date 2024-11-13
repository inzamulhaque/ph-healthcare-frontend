import { jwtDecode, JwtPayload } from "jwt-decode";

export const decodedToken = (token: string): JwtPayload & { role: string } => {
  const decoded: JwtPayload & { role: string } = jwtDecode(token);
  return decoded;
};
