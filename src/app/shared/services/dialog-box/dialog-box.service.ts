import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'; 
import { Observable, Subject, Subscription } from 'rxjs';
import { DialogBoxComponent } from './dialog-box.component';

@Injectable({
  providedIn: 'root'
})

export class DialogBoxService {

  isfooter:boolean=  false;
  bodycontent:any = '';
  headercontent:any = '';
  iconcontent:any = '';
  contentRef:any;
  hederclass:any ='';
  cancel:boolean =false;
  showfooter:boolean =false;

  constructor(
    public MODALDIALOG:NgbModal, 
  ) { }

  private _subscriptions: Subscription[] = [];
  private modalResultSubject: Subject<any> = new Subject<any>();
  public modalResult$: Observable<any> = this.modalResultSubject.asObservable();
  
   
  
  opendialog(header='',body:any,footer='',icon= '',color='',duration=0,size='',hederclass='',cancel=false,showfooter=false): Promise<boolean>{

    // size?: 'sm' | 'lg' | 'xl';
    
    this.bodycontent = '';
    if(footer != ''){
      this.isfooter = true;
    }

    this.headercontent = header;
    this.iconcontent = icon;
    this.hederclass = hederclass;
    const modalRef =  this.MODALDIALOG.open(DialogBoxComponent, 
      { size: size ?? '100%', centered: true,  keyboard : false, animation: true });
       if (body instanceof TemplateRef) {
      modalRef.componentInstance.body = body;
    } else {
      this.bodycontent = body;
    } 
    
    modalRef.componentInstance.header = header;
    modalRef.componentInstance.footer = footer;
    modalRef.componentInstance.icon = icon; 
    modalRef.componentInstance.hederclass = hederclass; 
    modalRef.componentInstance.cancel = cancel; 
    modalRef.componentInstance.showfooter = showfooter; 

    // modalRef.componentInstance.color = color;
    (document.querySelector('.modal-content') as HTMLElement).style.color = color;

    if(duration != 0){
      setTimeout(() => {
        modalRef.close();
      }, duration * 1000);
    } 
    return modalRef.result;
  }
  closedialog(){
    try {
    this.MODALDIALOG.dismissAll();
  } catch(e) {
    console.log(e);
}
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._subscriptions.forEach(sb => sb.unsubscribe()); 
  }

}
