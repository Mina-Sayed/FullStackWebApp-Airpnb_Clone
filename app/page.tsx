import { Navbar } from "@/components/navbar";
import { MovieGrid } from "@/components/movie-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <MovieGrid />
      </div>
    </main>
  );
}