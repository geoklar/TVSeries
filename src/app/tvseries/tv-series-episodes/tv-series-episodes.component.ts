import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVApiService } from 'src/app/services/tvapi.service';
import { Episode, TVSerieSeasonModel } from '../../domain/tv-serie-season-model';

@Component({
  selector: 'app-tv-series-episodes',
  templateUrl: './tv-series-episodes.component.html',
  styleUrls: ['./tv-series-episodes.component.css']
})
export class TvSeriesEpisodesComponent implements OnInit, OnDestroy {
  id: number;
  season: number;
  private sub: any;
  episodes: Episode[] = [];

  constructor(private route: ActivatedRoute,
              private tvApiService: TVApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.season = +params['season'];
      this.tvApiService.getTVSerieSeasonEpisodes(this.id, this.season)
                        .subscribe((tvSerieSeasonModel: TVSerieSeasonModel) => {
                          this.episodes = [...tvSerieSeasonModel.episodes];
                        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
