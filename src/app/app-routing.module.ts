import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'sobre-nos', component: AboutComponent },
  { path: 'links', component: LinksComponent },
  { path: 'contato', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
