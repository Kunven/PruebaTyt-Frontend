import { Component, Inject } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.sass']
})
export class DialogUserComponent {
  user: any = {}
  isEmpty(obj: Object) : Object {
    return Object.keys(obj).length === 0;
}
  submit() : void {
    if (this.data.edit == true) {
      axios.put(environment.server + "/Users/" + this.data.user, this.user).then( res =>{
        console.log(res)
      })
    }else{
      if (!this.isEmpty(this.user)) {
        axios.post(environment.server + "/Users", this.user).then( res =>{
          console.log(res)
        }) 
      }      
    }     
    window.location.reload()
  }
  ngOnInit() {
    if (this.data.user != 0) {
      axios.get(environment.server + "/Users/" + this.data.user).then( res =>{
        this.user = res.data
      })
    }
  }
  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
