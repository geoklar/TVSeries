import { Component, OnInit } from '@angular/core';
import { TVSERIES } from '../../domain/mock-data/tv-serie-mock-data';

@Component({
  selector: 'app-my-tv-series',
  templateUrl: './my-tv-series.component.html',
  styleUrls: ['./my-tv-series.component.css']
})
export class MyTvSeriesComponent implements OnInit {

  tvSerieList = TVSERIES;
  constructor() { }

  ngOnInit() {
  }

  onCategoryChanged(cat: string) {
    switch (cat) {
      case 'All':
      default: {
        this.tvSerieList = TVSERIES;
        break;
      }
      case 'G':
      case 'N': {
        this.tvSerieList = TVSERIES.filter(x => x.owner === cat);
        break;
      }
    }
  }

}
