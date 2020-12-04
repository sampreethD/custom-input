import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { imports } from './config/import';
import { LayoutComponent } from './components/layout/layout.component';
import { InputwrapComponent } from './components/inputwrap/inputwrap.component';
import { ObjArrPipe } from './components/obj-arr.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InputwrapComponent,
    ObjArrPipe
  ],
  imports: [
    imports,
  ],
  providers: [],
  entryComponents: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
