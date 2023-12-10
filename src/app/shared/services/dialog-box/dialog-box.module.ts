import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"; 
import { DialogBoxComponent } from "./dialog-box.component";
import { DialogBoxService } from "./dialog-box.service";


@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [DialogBoxComponent],
  exports: [DialogBoxComponent],
  providers:[DialogBoxService],
  bootstrap: []
})
export class DialogBoxModule { }
