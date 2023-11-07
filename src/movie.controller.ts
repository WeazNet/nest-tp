import { Controller, Get, Param } from '@nestjs/common';
import { Movie } from './Movie';
import { MovieService } from './movie.service';

@Controller("movie")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get("/movies")
  getMovies(): Promise<Movie[]> {
    return this.movieService.getMovies();
  }

  @Get("/movieDetails/:id")
  getMovieDetails(@Param("id") id:Number): Promise<Movie> {
    return this.movieService.getMovieDetails(id);
  }
}
