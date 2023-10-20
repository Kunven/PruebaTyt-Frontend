interface cargos {
  id: number;
  codigo: string;
  nombre: string;
  activo: boolean;
  idUsuario: number
}

interface departamentos {
  id: number;
  codigo: string;
  nombre: string;
  activo: boolean;
  idUsuario: number
}

interface users {
  id: number;
  usuario: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  idDepartamento: number
  idCargo: number
}

export {cargos,departamentos,users}