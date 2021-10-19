import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routing, ModuleRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FunkopopComponent } from './components/funkopop/funkopop.component';
import { AllFunkoComponent } from './components/all-funko/all-funko.component';
import { SagaFunkoComponent } from './components/saga-funko/saga-funko.component';
import { CardFunkoComponent } from './components/card-funko/card-funko.component';
import { FunkoAddComponent } from './components/funko-add/funko-add.component';
import { EditFunkoComponent } from './components/edit-funko/edit-funko.component';
import { LoginComponent } from './components/login/login.component';
import { CompraformComponent } from './components/compraform/compraform.component';

@NgModule({
  declarations: [
    AppComponent,
    FunkopopComponent,
    AllFunkoComponent,
    SagaFunkoComponent,
    CardFunkoComponent,
    FunkoAddComponent,
    EditFunkoComponent,
    LoginComponent,
    CompraformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing,
    BrowserAnimationsModule
  ],
  providers: [ ModuleRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
