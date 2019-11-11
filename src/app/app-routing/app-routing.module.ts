import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { TrabajadorListaComponent } from "../trabajador/trabajador-lista/trabajador-lista.component";
import { TrabajadorDetailComponent } from "../trabajador/trabajador-detail/trabajador-detail.component";

const routes: Routes = [
  {
    path: "trabajadores",
    children: [
      {
        path: "lista",
        component: TrabajadorListaComponent
      },
      {
        path: ":id",
        component: TrabajadorDetailComponent,
        outlet: "detail"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
