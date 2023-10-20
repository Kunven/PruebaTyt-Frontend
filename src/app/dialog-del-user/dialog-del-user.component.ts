import { Component, Inject } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-del-user',
  templateUrl: './dialog-del-user.component.html',
  styleUrls: ['./dialog-del-user.component.sass']
})
export class DialogDelUserComponent {
  deleteUser() : void {
    axios.delete(environment.server + "/Users/" + this.data.user).then( res =>{
      window.location.reload()
    })
  }
  constructor(
    public dialogRef: MatDialogRef<DialogDelUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
