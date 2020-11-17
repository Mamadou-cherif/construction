import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ImagesHommComponent } from './components/images-homm/images-homm.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch:"full"},

    {path: 'portfolio', component:PortfolioComponent}, 
    {path: 'home', component:ImagesHommComponent},
    {path: "about", component: AboutUsComponent},
    {path: "testimonials", component: TestimonialsComponent},
    {path: "services", component: ServicesComponent},
    {path: "contact", component: ContactUsComponent},
    {path: "login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
