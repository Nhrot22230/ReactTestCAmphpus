export interface User {
  id: number;
  nombre: string;
  apellido: string;
  avatar?: string;
  email: string;
  estado: boolean;
  external_id?: string;
  external_auth?: string;
}
