import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxService } from './dialog-box.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {


  @Input() header!: TemplateRef<any>
  @Input() headerclass!: TemplateRef<any>
  @Input() icon!: TemplateRef<any>
  @Input() body!: TemplateRef<any>
  @Input() footer!: TemplateRef<any>
  @Input() color!: TemplateRef<any>
  @Input() cancel!: TemplateRef<any>
  @Input() showfooter!: TemplateRef<any>

  @ViewChild('content')
  private content!: TemplateRef<any>;
  
  constructor(
    private activeModal: NgbActiveModal,
    public DIALOGBOXSERVICE: DialogBoxService
  ) {
   }

  ngOnInit() {
  } 

  dismiss() {
    this.activeModal.close(false);
  }
 okclick(){
  this.activeModal.close(true);
 }

}
