import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { MessagemodalComponent } from "../messagemodal/messagemodal.component";
import { IMessageStatus } from "../_interface/IMessage.interface";

export class MessageModel {

    messageType!: IMessageStatus;
    sizevalue!:string;

    constructor(
        protected translate: TranslateService,
        protected modalService: NgbModal) { }

    /*
    * Show UI Level Validation Message
    */
    showUIMessage(messageType: IMessageStatus) {
        // debugger;
        // messageType.size = this.translate.instant(messageType.size);
        // this.sizevalue = messageType.size;
        messageType.errordescription = this.translate.instant(messageType.errordescription);
        this.displayModel(messageType);
    }

    /*
    * Show DB Response Message
    */
    showMessage(messageType: IMessageStatus) {
        this.displayModel(messageType);
    }

    private displayModel(messageType: IMessageStatus) {
        // debugger;
        // let sizevalue = messageType.size;
        const modalRef = this.modalService.open(MessagemodalComponent, { centered: true, size:'md', backdrop: 'static',});
        modalRef.componentInstance.messageResponse = messageType;
        modalRef.result.then(
        );
    }
}
