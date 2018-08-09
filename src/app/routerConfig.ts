import { Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes =[
 {
   path : 'header',
   component : HeaderComponent
 },

 {
 	path : 'footer',
 	component : FooterComponent
 },

 {
 	path: 'main',
 	component: MainComponent
 },

  {
 	path: '',
 	component: MainComponent
 }
];
