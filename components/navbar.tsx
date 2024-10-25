"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { UserNav } from "@/components/user-nav";
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-600">NETFLIX</span>
          </Link>
          {session && (
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/tv-shows" className="text-sm font-medium">
                TV Shows
              </Link>
              <Link href="/movies" className="text-sm font-medium">
                Movies
              </Link>
              <Link href="/my-list" className="text-sm font-medium">
                My List
              </Link>
            </div>
          )}
        </div>

        {session && (
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center">
              <Search className="h-5 w-5" />
            </button>
            <UserNav />
          </div>
        )}
      </div>
    </nav>
  );
}