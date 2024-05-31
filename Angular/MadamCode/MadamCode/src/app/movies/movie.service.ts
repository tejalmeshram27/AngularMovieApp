import { Injectable } from "@angular/core";
import { IMovies } from "./movies";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class MovieService{

    private movieUrl = 'api/movies/movies.json'
   
 constructor(private http:HttpClient){}
   
    getMovies():Observable<IMovies[]>{
        return this.http.get<IMovies[]>(this.movieUrl).pipe(
            tap(data =>console.log('All', JSON.stringify(data))),
            catchError(this.handleError)

        );
        }

        getMovie(id:number):Observable<IMovies|undefined>{
            return this.getMovies()
            .pipe(
                map((movies:IMovies[])=>movies.find(m=>m.movieID === id))
            );
        }

        private handleError(err:HttpErrorResponse){
            let errorMessage = '';

            if(err.error instanceof ErrorEvent){
                errorMessage = `An error occured : ${err.error.message}`;

            }
            else{
                errorMessage = `Server code: ${err.status} ,error message: ${err.message}`;

            }
            console.log(errorMessage);
            return throwError(()=>errorMessage);
        }
    }

