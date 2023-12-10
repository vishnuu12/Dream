import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IMessageStatus } from '../_interface/IMessage.interface';

@Component({
  selector: 'app-messagemodal',
  templateUrl: './messagemodal.component.html'
})
export class MessagemodalComponent {

  @Input() messageResponse!: IMessageStatus;

  constructor(public modal: NgbActiveModal) { }


}
