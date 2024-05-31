import { Injectable } from "@angular/core";
import { IMovies } from "./movies";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class MovieService{

    private movieUrl = 'api/movies/movies.json'

    constructor(private http: HttpClient)
    {
        
    }
        getMovies():Observable<IMovies[]>{
            return this.http.get<IMovies[]>(this.movieUrl).pipe(
                tap(data => console.log('All', JSON.stringify(data))),
                catchError(this.handleError)
            );
        }

        getMovie(id:number):Observable<IMovies | undefined>{
            return this.getMovies()
            .pipe(
                map(movies:IMovies[]=>MovieService.find(m=>m.movieID === id))
            );
        }
    static find(arg0: (m: any) => boolean): any {
        throw new Error("Method not implemented.");
    }

            private handleError(err:HttpErrorResponse){
                let errorMessage = '';
                if(err.error instanceof ErrorEvent){
                    errorMessage = `An error occured : ${err.error.message}`

                }
                else{
                    errorMessage = `Server code: ${err.status}, error message: ${err.message}`; 

                }
                console.log(errorMessage);
                return throwError(()=>errorMessage);
                
            }
        }
    

    // getMovies(): IMovies[]{
        // return[
            
    //             {"movieId":1,   
    //         "mname":"Avengers-Captain America",
    //         "mgenre": "Scifi",
    //         "rating": 4.5165,
    //         "imageUrl":".\\assets\\taj.jpg"
    // },
    //     {"movieId":2,
    //         "mname":"IronMan-3",
    //         "mgenre": "Scifi",
    //         "rating": 5.297,
    //         "imageUrl":".\\assets\\travel_2.jpg"
    // },
    //     {"movieId":3,
    //         "mname":"Antman",
    //         "mgenre": "Comedy",
    //         "rating": 6.277,
    //         "imageUrl":".\\assets\\champion-ant-man.jpg"
    // },
    //     {"movieId":4,
    //         "mname":"Spiderman",
    //         "mgenre": "Adventure",
    //         "rating": 8.674,
    //         "imageUrl":".\\assets\\spider man.jpg"
    // },
    //     {"movieId":5,
    //         "mname":"Ted",
    //         "mgenre": "Comedy",
    //         "rating": 10,
    //         "imageUrl":".\\assets\\ted.jpg"
    // },
            
        // ]
//    }
