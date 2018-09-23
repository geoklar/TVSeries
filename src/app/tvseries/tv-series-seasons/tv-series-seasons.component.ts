import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVApiService } from '../../services/tvapi.service';
import { TvSerieModel } from '../../domain/tv-serie-model';

@Component({
  selector: 'app-tv-series-seasons',
  templateUrl: './tv-series-seasons.component.html',
  styleUrls: ['./tv-series-seasons.component.css']
})
export class TvSeriesSeasonsComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  tvSerie: TvSerieModel;

  constructor(private route: ActivatedRoute,
              private tvApiService: TVApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.tvApiService.getTVSerie(this.id)
                        .subscribe((tvSerieModel: TvSerieModel) => {
                          this.tvSerie = tvSerieModel;
                        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
