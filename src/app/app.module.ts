import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DialogBoxModule } from './shared/services/dialog-box/dialog-box.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { NgbdToastGlobalModule } from './shared/toastermodule/toaster-global.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    DialogBoxModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    NgbdToastGlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
