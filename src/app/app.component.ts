import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from './../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import { DialogUserComponent } from './dialog-user/dialog-user.component'
import { DialogDelUserComponent } from './dialog-del-user/dialog-del-user.component';
import type {cargos, departamentos, users} from "../types/pruebaDB"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'PruebaTyt-Frontend';  
  displayedColumns: string[] = ['Usuario', 'Nombres', 'Apellidos', 'Departamento', 'Cargo', 'Email' , 'Acciones'];
  cargos: cargos[] = []
  filterCargo: number = 0
  filterDep: number = 0
  departamentos: departamentos[] = []
  users: any[] = []
  totalUsers : number = 0
  usersCopy: users[] = []
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data: {user: 0, cargos: this.cargos, departamentos: this.departamentos, edit: false},
    });
  }
  filterUsers() :void {      
    this.users = this.usersCopy    
    if (this.filterCargo != 0) {
      this.users = this.users.filter( e => e.idCargo == this.filterCargo)
    }
    if (this.filterDep != 0) {
      this.users = this.users.filter( e => e.idDepartamento == this.filterDep)
    }
    this.totalUsers = this.users.length
  }
  openDialogDel(id: number ): void {
    const dialogRef = this.dialog.open(DialogDelUserComponent, {
      data: {user: id},
    });
  }
  editUser(id: number) : void {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      data: {user: id, cargos: this.cargos, departamentos: this.departamentos, edit: true},
    });
  }
  deleteUser(id: number) : void {
    axios.delete(environment.server + "/Users/" + id).then( res =>{
      window.location.reload()
    })
  }
  async ngOnInit() {
    await axios.get(environment.server + "/Cargos").then( res =>{
      this.cargos = res.data      
    })
    await axios.get(environment.server + "/Departamentos").then( res =>{
      this.departamentos = res.data
    })
    await axios.get(environment.server + "/Users").then( res =>{
      this.users = res.data      
      this.users = this.users.map(e =>{        
        let cargo : any = this.cargos.filter( cargo => cargo.id == e.idCargo)
        let departamento : any = this.departamentos.filter( departamento => departamento.id == e.idDepartamento)
        if (cargo != null) {
          e = {cargo: cargo[0].nombre, ...e}
        }
        if (departamento != null) {
          e = {departamento: departamento[0].nombre, ...e}
        }        
        return e
      })
      this.usersCopy = this.users
      this.totalUsers = this.usersCopy.length
    })
  }  
}
