import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { ButtonComponent } from './button/button.component';

import { BarsService } from './service/bars.service';
import { CommonService } from './service/common.service';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BarsService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
