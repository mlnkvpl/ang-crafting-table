import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  //templateUrl: './message.component.html',
  //styleUrls: ['./message.component.css'],
  styles: ['.op{color:red}'],
  template: '<p class="op"> {{message}} </p>'
})
export class MessageComponent implements OnInit {

  message = 'error';

  constructor() { }

  ngOnInit(): void {
  }

}
