import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header-->   
  <app-header></app-header>



  <!-- home -->

  
  <!-- routes are injected -->
  <router-outlet></router-outlet>

  <!-- footer -->

  
  <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Personal-Portfolio';
}
 