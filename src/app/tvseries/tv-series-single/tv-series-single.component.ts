import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVApiService } from '../../services/tvapi.service';
import { TvSerie } from '../../domain/TvSerie';
import { TvSerieModel } from '../../domain/tv-serie-model';

@Component({
  selector: 'app-tv-series-single',
  templateUrl: './tv-series-single.component.html',
  styleUrls: ['./tv-series-single.component.css']
})
export class TvSeriesSingleComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  serie: TvSerieModel;

  constructor(private route: ActivatedRoute,
              private tvApiService: TVApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.tvApiService.getTVSerie(this.id)
                        .subscribe((tvSerieModel: TvSerieModel) => {
                          this.serie = tvSerieModel;
                        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
