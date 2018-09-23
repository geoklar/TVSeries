import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TvSerieModel } from '../../../domain/tv-serie-model';
import { TVApiService } from '../../../services/tvapi.service';
import { TVSerieSeasonModel } from 'src/app/domain/tv-serie-season-model';

@Component({
  selector: 'app-tv-series-season-item',
  templateUrl: './tv-series-season-item.component.html',
  styleUrls: ['./tv-series-season-item.component.css']
})
export class TvSeriesSeasonItemComponent implements OnInit, OnChanges {
  @Input() tvSerie: TvSerieModel;
  seasons: TVSerieSeasonModel[] = [];

  constructor(private tvApiService: TVApiService) { }

  ngOnInit() {
    if (this.tvSerie !== undefined) {
      for (let i = 1; i <= this.tvSerie.number_of_seasons; i++) {
        this.tvApiService.getTVSerieSeasonEpisodes(this.tvSerie.id, i)
                        .subscribe((tvSerieSeasonModel: TVSerieSeasonModel) => {
                          this.seasons.push(tvSerieSeasonModel);
                        });
      }
    }

    }

  ngOnChanges() {
    if (this.tvSerie !== undefined) {
      for (let i = 1; i <= this.tvSerie.number_of_seasons; i++) {
        this.tvApiService.getTVSerieSeasonEpisodes(this.tvSerie.id, i)
                        .subscribe((tvSerieSeasonModel: TVSerieSeasonModel) => {
                          this.seasons.push(tvSerieSeasonModel);
                        });
      }
    }
  }
  }
