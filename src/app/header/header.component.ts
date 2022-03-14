import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-danger">
   <!-- logo -->
   <div class="navbar-brand">
    <a class="navbar-item" href="https://github.com/nram76">
    <img src="assets/img/GitHub-Mark.png">
     Naveen Ramanjulu
    </a>

    <a (click)="toggleNavbar()"role="button" #navBurger class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
   </div>


   <div class="navbar-menu" #navMenu>
    <div class="navbar-start">
      <a class="navbar-item" routerLink="/">Home</a>
      <a class="navbar-item" routerLink="/about">About Me</a>
      <a class="navbar-item" routerLink="/contact">Contact</a>
    </div>
    </div>
  </div>

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar(){
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
