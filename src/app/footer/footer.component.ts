import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="container content has-text-centered">
      <p> Connect with me on Linkedin
          <a href="https://www.linkedin.com/in/naveen-ramanjulu-01475073/"> 
            <img src="assets/img/LI-In-Bug.png" width="20" height="20">
          </a>
      </p>

    </div>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
