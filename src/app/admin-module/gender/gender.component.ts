import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, inject } from "@angular/core";
import { ApiService } from "../../shared/services/api/api.service";
import { DialogBoxService } from "src/app/shared/services/dialog-box/dialog-box.service";
import { MessageService } from 'primeng/api';
import { DialogBoxComponent } from "src/app/shared/services/dialog-box/dialog-box.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageModel } from "src/app/shared/toastermodule/_models/message.model";
import { TranslateService } from "@ngx-translate/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
// import { InputsValidationServiceService } from "src/app/shared/services/inputs-validation-service/inputs-validation-service.service"; 


@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
  providers: [MessageService]
})

export class GenderComponent implements OnInit {
  @ViewChild('genderDialogRef') genderDialogRef: any; // Assuming NgbModalRef type
  genderReport: any[] = []; // Initialize with your actual data
  genderRowData: any[] = [];
  cols:any[]=[];
  modalType!: string;
  genderForm!: FormGroup;
  genderdetails: any = [];
  dialogRef: any;
  value!:any;
  dt: any | null = null;
  // Other properties and methods...

  constructor(private modalService: NgbModal, private fb: FormBuilder,
    // public _InputsValidationServiceService: InputsValidationServiceService,
    private CDR: ChangeDetectorRef,) {
    // Populate genderReport with sample data (replace with actual data retrieval)
    this.genderReport = [
      { id: 1, gender: 'Male', description: 'Description for Male' },
      { id: 2, gender: 'Female', description: 'Description for Female' },
      // Add more data as needed
    ];
  }

  ngOnInit() {
    // Other initialization code...
    this.tableColumnHeader();
    this.initializeForm();
  }

  initializeForm() {
    this.genderForm = this.fb.group({
      fcid: ['', Validators.required], // Update with your validation requirements
      fcgender: ['', Validators.required], // Update with your validation requirements
      fcdescription: [''], // Update with your validation requirements
      fcuserprofile:[''],
      fcmail:['']
    });
  }

  

  //All Table Column Header
  async tableColumnHeader() {
    this.cols = [
      { field: 'id', translatelabel: 'LABEL.ID', header: 'Id', align: 'text-left', colwidth: '85' },
      { field: 'gender', translatelabel: 'LABEL.GENDER', header: 'Gender', align: 'text-left', colwidth: '140' },
      // { field: 'usr_dom', translatelabel: 'LABEL.USERDOMAIN', header: 'user domain', align: 'text-left' },
      { field: 'description', translatelabel: 'LABEL.DESCRIPTION', header: 'Description', align: 'text-left', colwidth: '85' },
    ];
    this.CDR.detectChanges();
  }

  //OnRowClick
  onRowClick(onRowClick: any) {
    // console.log(onRowClick, "row data !!");
  }

  //START: GRID SORT MOUSEEVENT
  onEvent(event:any) {
    event.currentTarget.children[1].classList.remove('hide');
  }

  onClick(event:any) {
    var resizableColumnList = Array.from(document.getElementsByClassName('sortclass'))
    resizableColumnList.forEach(function (value, i) {
      value.classList.add('hide');
    })
    event.currentTarget.children[1].classList.remove('hide');
  }

  onMouseout(event:any) {
    if (event.currentTarget.children[1].childNodes[0].classList.contains('pi-sort-alt'))
      event.currentTarget.children[1].classList.add('hide');
    else
      event.currentTarget.children[1].classList.remove('hide');
  }
  //END: GRID SORT MOUSEEVENT

  // showAddModal(genderRowData: any, genderDialogRef: any) {
  //   // Implement logic to open the Add modal
  //   this.openModal('Add', genderRowData, genderDialogRef);
  // }
  //Modal Popup
  showAddModal(genderRowData: any, genderDialogRef: any) {
    this.modalType = "Add User Detail";
    // this.genderForm.get('fcsgid').enable();
    this.initializeForm();
    this.genderdetails = [];
    this.genderForm.reset();
    this.genderdetails = [genderRowData];
    // this.getuserdetails();

    this.dialogRef = this.modalService.open(genderDialogRef, {
      centered: true,
      size: 'lg',
    });

  }

  showEditModal(rowData: any, genderDialogRef: any) {
    this.modalType = 'Edit';
    // Populate the form with existing data if needed
    this.genderForm.patchValue({
      fcid: rowData.id,
      fcgender: rowData.gender,
      fcdescription: rowData.description
    });
    this.dialogRef = this.modalService.open(genderDialogRef, {
      centered: true,
      size: 'lg',
    });
  }

  close() {
    console.log('close function');
    
    this.dialogRef.close();
    this.CDR.detectChanges();
  }

  save() {
    // Implement your save logic here
    // Access form values using this.genderdetailsForm.value
    // Call necessary services or methods
    // Close the modal if needed
    this.dialogRef.close();
  }

  openModal(modalType: string, rowData?: any, dialogRef?: any) {
    // Implement logic to open the modal based on modalType and pass rowData
    // Use this.genderDialogRef or userDialogRef based on the modal type
  }


  controlHasError(validation: string, controlName: string, form: FormGroup<any>): boolean {
    const control = form?.controls[controlName];

    return control.hasError(validation) && (control.dirty || control.touched);

  }
  isControlInvalid(controlName: string, form: FormGroup<any>): boolean {

    const control = form?.controls[controlName];

    return control.invalid && (control.dirty || control.touched);

  }

}
