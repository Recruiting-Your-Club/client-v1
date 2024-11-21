"use client";

import React from "react";
import SearchBar from "../../components/search/SearchBar";
export default function Home() {
  return (
    <div className="bg-white min-h-screen relative">
      <main className="p-4 flex">
        <div className="flex-1 pt-9">
          <div className="pl-9">
            <SearchBar />
          </div>
        </div>
      </main>
    </div>
  );
}
