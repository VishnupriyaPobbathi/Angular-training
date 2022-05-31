import { Component } from "@angular/core";

@Component({
  selector:'app-warning-alert',
  template: `
  <p>This is a warning message, you are in danger</p>
  `,
  styles: [`
p{
  background-color:#ffb6c1;
  padding:20px;
  border:1px solid red;
}
`]

})
export class WarningComponent{

}
