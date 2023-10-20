create database prueba 
go

use prueba
go

create table Cargos
(
    id        int identity
        constraint PK_Cargos
            primary key,
    codigo    nvarchar(max),
    nombre    nvarchar(max),
    activo    bit not null,
    idUsuario int not null
)
go

create table Departamentos
(
    id        int identity
        constraint PK_Departamentos
            primary key,
    codigo    nvarchar(max),
    nombre    nvarchar(max),
    activo    bit not null,
    idUsuario int not null
)
go

create table Users
(
    id              int identity
        constraint PK_Users
            primary key,
    usuario         nvarchar(max),
    primerNombre    nvarchar(max),
    segundoNombre   nvarchar(max),
    primerApellido  nvarchar(max),
    segundoApellido nvarchar(max),
    idDepartamento  int not null,
    idCargo         int not null,
    email           nvarchar(max)
)
go

INSERT INTO prueba.dbo.Cargos (codigo, nombre, activo, idUsuario) VALUES (N'AD', N'Administrador', 1, 1);
INSERT INTO prueba.dbo.Cargos (codigo, nombre, activo, idUsuario) VALUES (N'LF', N'Lider Frontend', 1, 1);
INSERT INTO prueba.dbo.Cargos (codigo, nombre, activo, idUsuario) VALUES (N'DF', N'Desarrollador Frontend', 1, 1);
INSERT INTO prueba.dbo.Cargos (codigo, nombre, activo, idUsuario) VALUES (N'AB', N'Abogado', 1, 1);
INSERT INTO prueba.dbo.Cargos (codigo, nombre, activo, idUsuario) VALUES (N'GU', N'Guardia', 1, 1);
INSERT INTO prueba.dbo.Cargos (codigo, nombre, activo, idUsuario) VALUES (N'PO', N'Pollero', 1, 1);

INSERT INTO prueba.dbo.Departamentos (codigo, nombre, activo, idUsuario) VALUES (N'TI', N'Tecnologias de la Informacion', 1, 1);
INSERT INTO prueba.dbo.Departamentos (codigo, nombre, activo, idUsuario) VALUES (N'LE', N'Legal', 1, 1);
INSERT INTO prueba.dbo.Departamentos (codigo, nombre, activo, idUsuario) VALUES (N'SE', N'Seguridad', 1, 1);
INSERT INTO prueba.dbo.Departamentos (codigo, nombre, activo, idUsuario) VALUES (N'EB', N'Eventos y Buffets', 1, 1);

INSERT INTO prueba.dbo.Users (usuario, primerNombre, segundoNombre, primerApellido, segundoApellido, idDepartamento, idCargo, email) VALUES (N'ppicapiedra', N'Pedro', null, N'Picapiedra', null, 1, 1, N'ppicapiedra@mail.com');
INSERT INTO prueba.dbo.Users (usuario, primerNombre, segundoNombre, primerApellido, segundoApellido, idDepartamento, idCargo, email) VALUES (N'pmarmol', N'Pablo', N'', N'Marmol', null, 1, 1, N'pmarmol@mail.com');
INSERT INTO prueba.dbo.Users (usuario, primerNombre, segundoNombre, primerApellido, segundoApellido, idDepartamento, idCargo, email) VALUES (N'jalimana', N'Juanito', N'', N'Alimaña', null, 1, 3, N'jalimana@mail.com');