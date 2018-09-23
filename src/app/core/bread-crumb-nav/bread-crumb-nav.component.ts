import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb-nav',
  templateUrl: './bread-crumb-nav.component.html',
  styleUrls: ['./bread-crumb-nav.component.css']
})
export class BreadCrumbNavComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
