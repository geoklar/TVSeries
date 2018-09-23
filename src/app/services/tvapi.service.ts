import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvSerieModel } from '../domain/tv-serie-model';
import { TVSerieSeasonModel, Episode } from 'src/app/domain/tv-serie-season-model';

@Injectable({
  providedIn: 'root'
})
export class TVApiService {

  endpoint = 'https://api.themoviedb.org/3/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
   }

   private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getTVSerie(id): Observable<TvSerieModel> {
    return this.http.get<TvSerieModel>(this.endpoint + 'tv/' + id + '?api_key=e90c7cf1a1ce9b065a86c196a2a6f020&language=en-US');
  }

  getTVSerieSeasonEpisodes(id: number, season: number): Observable<TVSerieSeasonModel> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<TVSerieSeasonModel>(this.endpoint + 'tv/' + id + '/season/' + season + '?api_key=e90c7cf1a1ce9b065a86c196a2a6f020&language=en-US');
  }

  getEpisode(tvId, season, episodeId): Observable<Episode> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Episode>(this.endpoint + 'tv/' + tvId + '/season/' + season  + '/episode/' + episodeId + '?api_key=e90c7cf1a1ce9b065a86c196a2a6f020&language=en-US');
  }
}
