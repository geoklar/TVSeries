import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyTvSeriesComponent } from './my-tv-series/my-tv-series.component';
import { CoreModule } from '../core/core.module';
import { TvSeriesMenuComponent } from './tv-series-menu/tv-series-menu.component';
import { TvSerieItemComponent } from './tv-serie-item/tv-serie-item.component';
import { TvSeriesSingleComponent } from './tv-series-single/tv-series-single.component';
import { TvSeriesEpisodesComponent } from './tv-series-episodes/tv-series-episodes.component';
import { TvSerieEpisodeItemComponent } from './tv-series-episodes/tv-serie-episode-item/tv-serie-episode-item.component';
import { TvSeriesSeasonsComponent } from './tv-series-seasons/tv-series-seasons.component';
import { TvSeriesSeasonItemComponent } from './tv-series-seasons/tv-series-season-item/tv-series-season-item.component';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { UpcomingEpisodesComponent } from './upcoming-episodes/upcoming-episodes.component';
import { UpcomingItemComponent } from './upcoming-episodes/upcoming-item/upcoming-item.component';
import { UpcomingItemInfoComponent } from './upcoming-episodes/upcoming-item-info/upcoming-item-info.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    MyTvSeriesComponent,
    TvSeriesMenuComponent,
    TvSerieItemComponent,
    TvSeriesSingleComponent,
    TvSeriesEpisodesComponent,
    TvSerieEpisodeItemComponent,
    TvSeriesSeasonsComponent,
    TvSeriesSeasonItemComponent,
    OrderByPipe,
    UpcomingEpisodesComponent,
    UpcomingItemComponent,
    UpcomingItemInfoComponent
  ],
  exports: [
    MyTvSeriesComponent
  ]
})
export class TVSeriesModule { }
