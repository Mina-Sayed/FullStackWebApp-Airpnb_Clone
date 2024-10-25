"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    voteAverage: number;
  };
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="aspect-[2/3] relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-semibold line-clamp-1">{movie.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {movie.overview}
            </p>
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="w-full">
                <Play className="w-4 h-4 mr-2" /> Play
              </Button>
              <Button size="sm" variant="outline">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}