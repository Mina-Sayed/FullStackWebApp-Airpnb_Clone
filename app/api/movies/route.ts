import { NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export async function GET() {
  try {
    const response = await fetch(
      `${TMDB_API_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    
    const movies = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      voteAverage: movie.vote_average,
      releaseDate: movie.release_date,
    }));

    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movies' },
      { status: 500 }
    );
  }
}