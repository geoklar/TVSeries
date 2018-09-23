import { Component, OnInit } from '@angular/core';
import { Episode } from '../../domain/tv-serie-season-model';

@Component({
  selector: 'app-upcoming-episodes',
  templateUrl: './upcoming-episodes.component.html',
  styleUrls: ['./upcoming-episodes.component.css']
})
export class UpcomingEpisodesComponent implements OnInit {

  episode: Episode;
  constructor() { }

  ngOnInit() {
  }

  onSelectedEpisode(selectedEpisode: Episode) {
    this.episode = selectedEpisode;
    window.scrollTo(0, 310);
  }

}
