import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastsContainer } from "./toasts-container.component";
import { MessagemodalComponent } from './messagemodal/messagemodal.component';

@NgModule({
    imports: [CommonModule, NgbModule],
    declarations: [ToastsContainer, MessagemodalComponent],
    exports: [ToastsContainer, MessagemodalComponent],
    bootstrap: []
})

export class NgbdToastGlobalModule{}