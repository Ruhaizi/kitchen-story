import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserComponent } from './user/user.component';
// import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ItemsComponent } from './items/items.component';

import { BillingComponent } from './items/billing/billing.component';
// import { SelecteditemsComponent } from './selecteditems/selecteditems.component';
import { SelecteditemsService } from './selecteditems.service';
import { TotalPriceService } from './total-price.service';
import { PaymentComponent } from './payment/payment.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AllItemsService } from './all-items.service';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterComponent,
    UserComponent,
    // AdminComponent,
    AdminLoginComponent,
    ItemsComponent,
  
    BillingComponent,
    PaymentComponent,
    AdminPageComponent,
    ChangePasswordComponent,
    // SelecteditemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                             
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule, 
    ListViewModule, 
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'Login',
        component: LoginFormComponent
      },  
      {
        path:'Admin',
        component: AdminLoginComponent
      },  
      {
        path:'items',
        component: ItemsComponent
      },
      {
        path:'billing',
        component: BillingComponent
      },
      {
        path:'payment',
        component: PaymentComponent
      },
      {
        path:'home',
        component: HomeComponent
      }, 
     
      {
        path:'admin-page',
        component:AdminPageComponent
      },
      {
        path:'change-password',
        component:ChangePasswordComponent
      },


    ])
  ],
  providers: [SelecteditemsService, TotalPriceService,AllItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
