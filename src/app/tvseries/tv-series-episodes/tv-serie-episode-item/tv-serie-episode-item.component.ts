import { Component, OnInit, Input } from '@angular/core';
import { TVApiService } from '../../../services/tvapi.service';
import { Episode } from '../../../domain/tv-serie-season-model';

@Component({
  selector: 'app-tv-serie-episode-item',
  templateUrl: './tv-serie-episode-item.component.html',
  styleUrls: ['./tv-serie-episode-item.component.css']
})
export class TvSerieEpisodeItemComponent implements OnInit {

  @Input() tvSerieSeasonEpisodes: Episode[] = [];
  constructor(private tvApiService: TVApiService) { }

  ngOnInit() {
  }
}
