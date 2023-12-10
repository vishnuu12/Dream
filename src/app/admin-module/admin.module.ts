import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { GenderComponent } from './gender/gender.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApiService } from '../shared/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollerModule } from 'primeng/scroller';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastModule,
    AccordionModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    PaginatorModule,
    ScrollerModule
  ],
  providers: [ApiService]
})
export class AdminModule { }
