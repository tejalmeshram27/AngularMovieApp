import { Component, OnInit } from "@angular/core";
import { IMovies } from "./movies";
import { MovieService } from "./movie.service";
import { Subscription } from "rxjs";

@Component({
    selector:'mov-app',
    templateUrl: './movie.component.html',
    styleUrls: []
})

export class MovieComponent implements OnInit{
    header: string = "EMovies"; 
    imageWidth: number = 200;
    imageHeight: number = 100;
    imageBorderRadius:number = 20;
    showImage:boolean = false;
    private _searchTxt : string='';
    searchedMovie:IMovies[]=[];
    sub!: Subscription;

    get searchTxt():string{
        return this._searchTxt;
    }

    set searchTxt(value:string){
        this._searchTxt = value;
        this.searchedMovie = this.Searching(value);
    }

    movies : IMovies[] = [
    //     {"movieId":1,   
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
    ]

    // Dependency Injection
    constructor(private _movService : MovieService){

    }

    ngOnInit():void{
        this.searchTxt = "";
        // this.movies = this._movService.getMovies();
        this.searchedMovie = this.movies;

        this.sub = this._movService.getMovies().subscribe({
            next: response => {
                this.movies = response;
                this.searchedMovie= this.movies;

            },
        });

    }

    Searching(searchBy:string) {
        searchBy = searchBy.toLocaleLowerCase();
        return this.movies.filter((movie:IMovies) =>
        movie.mname.toLocaleLowerCase().includes(searchBy));
        
    }

    togglePic():void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message:string):void{
        this.header = 'Message from child' + message;
    }
}