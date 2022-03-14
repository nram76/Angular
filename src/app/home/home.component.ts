import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-medium is-info">
    <div class="hero-body is-large">
      <p class="title">
      Angular Developer
      </p>
      <p class="subtitle">
      West Chester University Graduate
      </p>
      <div class="content is-medium">
      <img src="../assets/img/cli.png" width="25%" height="auto"align="right">
      <img src="../assets/img/html5.png" width="25%" height="auto" align="right">
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>nodeJS</li>
          <li>bootstrap</li>
          <li>REST APIs</li>
        </ul>
      </div>
      <button class="button is-primary is-rounded">
      <a href="https://docs.google.com/document/d/1olJVnFMQlCo40QhsjLUCh8jM2VCXAX5I/edit?usp=sharing&ouid=114104816221497797811&rtpof=true&sd=true">
        Resume
      </a>
      </button>
      <img src="https://img.icons8.com/color/48/000000/google-docs--v1.png"/>
    </div>
  </section>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
