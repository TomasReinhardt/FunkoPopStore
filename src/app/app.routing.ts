import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FunkopopComponent } from "./components/funkopop/funkopop.component";
import { SagaFunkoComponent } from "./components/saga-funko/saga-funko.component";
import { AllFunkoComponent } from "./components/all-funko/all-funko.component";
import { FunkoAddComponent } from "./components/funko-add/funko-add.component";
import { EditFunkoComponent } from "./components/edit-funko/edit-funko.component";
import { CompraformComponent } from "./components/compraform/compraform.component";

const appRoutes: Routes = [
    {   path: '', component: AllFunkoComponent},
    {   path: 'collections/:saga', component: SagaFunkoComponent},
    {   path: 'funkopop/:id', component: FunkopopComponent},
    {   path: 'funkopop/:id/edit', component: EditFunkoComponent},
    {   path: 'funkopop/:id/buy', component: CompraformComponent},
    {   path: 'addfunko', component: FunkoAddComponent},
    {   path: '**', component: AllFunkoComponent}
];

export const ModuleRoutingProviders: any = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 