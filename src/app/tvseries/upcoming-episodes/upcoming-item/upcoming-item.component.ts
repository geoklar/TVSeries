import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Episode, TVSerieSeasonModel } from '../../../domain/tv-serie-season-model';
import { TVApiService } from 'src/app/services/tvapi.service';
import { TvSerieModel } from 'src/app/domain/tv-serie-model';
import { TVSERIES } from 'src/app/domain/mock-data/tv-serie-mock-data';
import { TvSerie } from 'src/app/domain/TvSerie';

@Component({
  selector: 'app-upcoming-item',
  templateUrl: './upcoming-item.component.html',
  styleUrls: ['./upcoming-item.component.css']
})
export class UpcomingItemComponent implements OnInit {

  episodes: Episode[] = [];
  @Output() selectedEpisode: EventEmitter<Episode> = new EventEmitter<Episode>();
  constructor(private tvApiService: TVApiService) { }

  ngOnInit() {
    TVSERIES.forEach((serie: TvSerie) => {
      this.tvApiService.getTVSerie(serie.id)
                       .subscribe((tvSerieModel: TvSerieModel) => {
                         if (tvSerieModel.next_episode_to_air) {
                            // tslint:disable-next-line:max-line-length
                            this.tvApiService.getTVSerieSeasonEpisodes(tvSerieModel.next_episode_to_air.show_id, tvSerieModel.next_episode_to_air.season_number)
                            .subscribe((tvSerieSeason: TVSerieSeasonModel) => {
                              const episode = tvSerieSeason.episodes.filter(x => x.id === tvSerieModel.next_episode_to_air.id)[0];
                              episode.poster_path = tvSerieModel.poster_path;
                              episode.serie_name = serie.description;
                              this.episodes.push(episode);
                              // tslint:disable-next-line:max-line-length
                              this.episodes.sort((ep1: Episode, ep2: Episode) => new Date(ep1.air_date).getTime() - new Date(ep2.air_date).getTime());
                            });
                          }
                       });
    });
  }

  onSelectEpisode(episode: Episode) {
    this.selectedEpisode.emit(episode);
  }

}
