import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { WhatOfferComponent } from './pages/what-offer/what-offer.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'what-offer' , component: WhatOfferComponent },
  { path: 'prices' , component: PricesComponent },
  { path: 'contact' , component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
