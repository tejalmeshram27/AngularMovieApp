import { Component, OnInit } from "@angular/core";
import { IMovies } from "./movies";
import { MovieService } from "./movie.service";
import { Subscription } from "rxjs";

@Component({
    selector:'mov-app',
    templateUrl:'./movie.component.html',
    styleUrls:[]
})

export class MovieComponent  implements OnInit
{

header:string = "EMovies";
imgWidth:number = 200;
imgHeight:number = 100;
imgBorderRadius:number = 20;
showImage:boolean = false;
private _searchTxt:string='';
searchedMovies:IMovies[]=[];
sub!:Subscription;
    errorMessage: any;
get searchTxt():string{
      return this._searchTxt;
}

set searchTxt(value:string){
this._searchTxt = value;
console.log('setter',value);
this.searchedMovies = this.Searching(value);
console.log(this.searchedMovies);
}
movies:IMovies[]=[];

//Dependency Injection
constructor(private _movService:MovieService)
{}

ngOnInit(): void {
    //From Service only
    //   console.log("At on init");
    //   this.movies = this._movService.getMovies();
    //   this.searchedMovies = this.movies;
    //   this.searchTxt = "";

    //From Service/Http Observables
    this.sub = this._movService.getMovies().subscribe({
        next:movies => {
            this.movies = movies;
            this.searchedMovies = this.movies; 
        },
        error:err=>this.errorMessage = err
    });
    }

Searching(searchBy:string):IMovies[]{

      searchBy = searchBy.toLocaleLowerCase();
      return this.movies.filter((movie:IMovies)=>
      movie.movieName.toLocaleLowerCase().includes(searchBy));

}

togglePic():void{
      this.showImage = !this.showImage; 
}

onRatingClicked(message:string):void{
     this.header = 'Message from star child' + message; 
}

}