import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) { }

	getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe( 
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) { 
    return (error: any): Observable<T> => { 

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }

  }

  getHero(id: number): Observable<Hero> { 
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)), 
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    //return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) { 
    this.messageService.add( 'HeroService: ' + message);
  }

  private heroesUrl = 'api/heroes';
}
