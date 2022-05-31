import { Component } from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
  <p>You are successful!</p>
  `,
  styles: [`
  p{
    background-color:lightgreen;
    border:1px solid green;
    padding:20px;
  }
  `]
})
export class SuccessComponent{

}
