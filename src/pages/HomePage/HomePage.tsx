import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = (): React.ReactElement => {
  return (
    <main className="flex flex-col gap-7 min-h-screen w-full px-[15px] mb-20">
      <SearchBar />
    </main>
  );
};

export default HomePage;
