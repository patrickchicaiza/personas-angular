export interface Person {
  id?: number;  // El signo ? es importante porque al CREAR no enviamos id
  nombre: string;
  cedula: string;
  correo: string;
}