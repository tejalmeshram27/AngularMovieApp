  import { Component, OnInit } from '@angular/core';
import { IMovies } from '../movies/movies';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  header:string = "Movie Info of ";
  movie:IMovies | undefined;
  id:number |undefined;
  errorMessage: any;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private movservice:MovieService){}
  ngOnInit(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));
 //   this.header += ` :${id}`;
if(id){
  this.getMovie(id);
}
  }

  getMovie(id:number):void{
    this.movservice.getMovie(id).subscribe({
      next:movie => this.movie = movie,
      error:err => this.errorMessage = err
    })
  }



onBack():void{
  this.router.navigate(['/movies']);
}              


}
