import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name: string = 'Oleg';
  showName: boolean = true;
  greeting: number = 1;

  // bind prop
  imgUrl: string = 'http://lorempixel.com/400/200/sports'
  articleHide: boolean = false;

  //ng class
  isSpecial: boolean = true;
  canSave: boolean = true;
  currentClasses = {};

  constructor() {
    this.currentClasses = {
      specialname: this.isSpecial,
      saveable: this.canSave

    }
  }
}
