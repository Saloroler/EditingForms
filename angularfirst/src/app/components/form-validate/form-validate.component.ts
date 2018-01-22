import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
}
interface Change {
  edition: boolean;
}

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent {

  user: User = {
    name: '',
    email: ''
  };

  users: User[] = [
    {
    name: 'Denis',
    email: 'test@test.com',

    },
    {
      name: 'Oleg',
      email: 'test@test.com',

    }
];
  edit: Change = {
    edition: false
};
  constructor() { }

  onSubmit(form) {
    this.users.push({
      name: this.user.name,
      email: this.user.email
    });

    form.resetForm();
  }

  removeUser(i) {
    this.users.splice(i, 1);
  }

  setName() {
    this.edit.edition = !this.edit.edition;
  }
}
