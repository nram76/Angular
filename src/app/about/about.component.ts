import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
<section class="hero is-medium is-warning">
    <div class="hero-body is-large">
      <p class="title">
      Naveen Ramanjulu
      </p>
      <p class="subtitle">
        Developer with a B.Sc. in Computer Science
      </p>
        <ul>
          <p> other skills: </p>
          <li>Java (OOP)</li>
          <li>SQL/T-SQL</li>
          <li>C++/C#</li>
          <li>Python</li>
          <li>PowerBI</li>
          <li>R</li>
        </ul>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
