import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTvSeriesComponent } from './tvseries/my-tv-series/my-tv-series.component';
import { TvSeriesSingleComponent } from './tvseries/tv-series-single/tv-series-single.component';
import { HomeComponent } from './core/home/home.component';
import { TvSeriesEpisodesComponent } from './tvseries/tv-series-episodes/tv-series-episodes.component';
import { TvSeriesSeasonsComponent } from './tvseries/tv-series-seasons/tv-series-seasons.component';
import { UpcomingEpisodesComponent } from './tvseries/upcoming-episodes/upcoming-episodes.component';

const routes: Routes  = [
    { path: 'home', component: HomeComponent },
    { path: 'series', component: MyTvSeriesComponent },
    { path: 'series/up-coming', component: UpcomingEpisodesComponent},
    { path: 'series/:id', component: TvSeriesSeasonsComponent },
    { path: 'series/:id/:season', component: TvSeriesEpisodesComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
