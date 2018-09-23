import { Component, OnInit, Input } from '@angular/core';
import { TVApiService } from '../../services/tvapi.service';
import { TvSerieModel } from '../../domain/tv-serie-model';
import { TvSerie } from '../../domain/TvSerie';

@Component({
  selector: 'app-tv-serie-item',
  templateUrl: './tv-serie-item.component.html',
  styleUrls: ['./tv-serie-item.component.css']
})
export class TvSerieItemComponent implements OnInit {

  @Input() tvSerieList = [];
  constructor(private tvApiService: TVApiService) { }

  ngOnInit() {
    this.tvSerieList.forEach((serie: TvSerie) => {
      this.tvApiService.getTVSerie(serie.id)
                       .subscribe((tvSerieModel: TvSerieModel) => {
                          serie.image = tvSerieModel.poster_path;
                          serie.dateReleased = new Date(tvSerieModel.first_air_date + 'T00:00:00');
                       });
    });
  }

}
