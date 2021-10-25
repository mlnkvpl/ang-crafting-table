import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {

  show=false;
  clickLog = [];
  counter= 0;



  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
  }

toggleParagraph(){
  this.show = !this.show;
  this.logClick();
}

  logClick(){
    console.log('test');
    let formatedDate = this.datePipe.transform(new Date, 'dd.mm.yyyy');
    let counter = this.counter++;
    this.clickLog.push({
      index: counter,
      data:"Click counter:" + (++counter) +  ", state:" + this.show + " " + formatedDate
    });
  }

}
