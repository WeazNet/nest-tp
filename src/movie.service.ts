import { Injectable } from '@nestjs/common';
import { Movie } from './Movie';


@Injectable()
export class MovieService {
   async getMovies():Promise<Movie[]> {
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1f39c937c2cfbeeb721a86724edb0283");
    const movies = await res.json();
    return movies.results;
  }

  async getMovieDetails(id:Number):Promise<Movie>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1f39c937c2cfbeeb721a86724edb0283`);
    const details = await res.json();
    return details;
  }
}
