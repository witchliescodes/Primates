import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { AcknowledgeComponent } from './components/acknowledge/acknowledge.component';
import { SocialComponent } from './components/social/social.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'tenant', component: TenantComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'info', component: InfoComponent },
    { path: 'acknowledge', component: AcknowledgeComponent },
    { path: 'social', component: SocialComponent }
];
