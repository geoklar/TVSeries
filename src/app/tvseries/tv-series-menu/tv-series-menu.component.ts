import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tv-series-menu',
  templateUrl: './tv-series-menu.component.html',
  styleUrls: ['./tv-series-menu.component.css']
})
export class TvSeriesMenuComponent implements OnInit {

  @Output() categoryChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  category = 'All';

  ngOnInit() {
  }

  showSeries(cat: string) {
    this.categoryChanged.emit(cat);
    this.category = cat;
  }

}
