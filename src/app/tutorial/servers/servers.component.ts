import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverWasCreated = false;
  disableButton = true;
  inputData = "";
  serverName = "Intel outside"
  resetableIsSet = false;
  resetable = "";
  servers = ['AMD', 'ARM', 'Intel'];

  constructor() {
    setTimeout(() => {
      this.disableButton = false
    }, 2000)
    //this.servers.push(['AMD', 'ARM', 'Intel'])
  }

  ngOnInit(): void {
  }

  changeStatus(){
    if(this.inputData !== ""){
      this.serverWasCreated = !this.serverWasCreated;
      this.servers.push(this.inputData);
    }
  }

  onUpdateServerName(event: Event){
      this.inputData = (<HTMLInputElement>event.target).value;
      //this.inputData = (event.target).value;
      console.log(event)
  }

  changeServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    //this.inputData = (event.target).value;

}

@ViewChild('resetableElement', {static:true}) element;
//this.element = this.element.nativeElement;
addResetable(element: HTMLInputElement){
 // console.log(element.value);

  this.resetable = this.element.nativeElement.value;
  if(this.resetable !== "" ){
    this.resetableIsSet = true;
  }
}



resetResetable(){
  if(this.resetable !== ""){
    this.resetable = ""
    this.resetableIsSet = false;
  }
}

  altOnUpdateServerName(element: any){
    console.log(element); return null;
    if(element.value){
      this.inputData = element.value;
      //this.inputData = (event.target).value;
      console.log(element.value)
    }

}

getMessageColor(){
  return this.serverWasCreated? 'white':'red';
}

testVar = {name:"egal"};

}


