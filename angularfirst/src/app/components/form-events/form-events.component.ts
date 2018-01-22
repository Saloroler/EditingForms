import { Component } from '@angular/core';

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent {

  text: string;
  userName: string;
  users: string[] = [];

  constructor() { }

  formEvent( e ) {
    console.log(e);
    this.text = e.target.value;
  }
  onSubmit(form) {
    this.users.push(this.userName);
    console.log(this.users);
    // this.userName = '';
    form.resetForm();
  }

  removeUser(i) {
  this.users.splice(i, 1);
  }
}
