import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../../domain/tv-serie-season-model';

@Component({
  selector: 'app-upcoming-item-info',
  templateUrl: './upcoming-item-info.component.html',
  styleUrls: ['./upcoming-item-info.component.css']
})
export class UpcomingItemInfoComponent implements OnInit {

  @Input() selectedEpisode: Episode;
  constructor() { }

  ngOnInit() {
    this.selectedEpisode = null;
  }

}
