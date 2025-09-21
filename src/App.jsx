import "./App.css";

function App() {
  return (
    <>
      <header class="bg-white border-gray-400 shadow h-12 flex items-center pl-4">
        <div class="bg-[url('/icons/podcast-.png')] bg-cover bg-center h-6 w-6 mr-1"></div>
        <div class="text-lg font-semibold">Podcast App</div>

        <div class="absolute right-3 flex space-x-3 items-center">
          <div class="bg-[url('/icons/loupe.png')] bg-cover bg-center h-4 w-4"></div>
          <div class="bg-[url('/icons/profile.png')] bg-cover bg-center h-6 w-6"></div>
        </div>
      </header>
      <main class="pl-5 pr-3 pt-6 pb-1">
        <section class="space-x-1">
          <span class="text-sm font-semibold">Filter by:</span>
          <select
            id="GenreSelect"
            class="text-sm font-semibold pl-2 pr-2 pt-1 pb-1 border border-gray-300 rounded-lg"
          >
            <option value="">All Genres</option>
            <option value="">Genre 1</option>
            <option value="">Genre 2</option>
            <option value="">Genre 3</option>
          </select>
          <select
            id="countrySelect"
            class="text-sm font-semibold pl-2 pr-2 pt-1 pb-1 border border-gray-300 rounded-lg"
          >
            <option value="">Recently Updated</option>
            <option value="">Most Popular</option>
            <option value="">Newest</option>
          </select>
        </section>
        <section aria-label="Podcast Grid">
          <div
            id="podcast-container"
            class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
          ></div>
        </section>
      </main>
    </>
  );
}

export default App;
