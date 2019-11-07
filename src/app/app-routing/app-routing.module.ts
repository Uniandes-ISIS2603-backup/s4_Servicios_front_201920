import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AdminListaComponent } from "../admin/admin-lista/admin-lista.component";
import { AdminDetailComponent } from "../admin/admin-detail/admin-detail.component";

const routes: Routes = [
  {
    path: "admins",
    children: [
      {
        path: "lista",
        component: AdminListaComponent
      },
      {
        path: ":id",
        component: AdminDetailComponent,
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
