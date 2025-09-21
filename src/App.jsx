import React, { useEffect, useState } from "react";
import PodcastTile from "./components/PodcastTile.jsx";
import PodModal from "./components/PodModal.jsx";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  // Fetch podcast previews
  useEffect(() => {
    async function fetchPreviews() {
      try {
        const response = await fetch("https://podcast-api.netlify.app/");
        const data = await response.json();
        setPodcasts(data);
      } catch (error) {
        console.error("Error fetching podcast previews:", error);
      }
    }
    fetchPreviews();
  }, []);

  // Open modal with full details
  const openPodcast = async (preview) => {
    try {
      const response = await fetch(
        `https://podcast-api.netlify.app/id/${preview.id}`
      );
      const fullPodcast = await response.json();
      setSelectedPodcast(fullPodcast);
    } catch (error) {
      console.error("Error fetching podcast details:", error);
    }
  };

  const closePodcast = () => {
    setSelectedPodcast(null);
  };

  return (
    <div className="p-4">
      <header className="bg-white border-gray-400 shadow h-12 flex items-center pl-4">
        <div className="bg-[url('/src/assets/podcast-.png')] bg-cover bg-center h-6 w-6 mr-1"></div>
        <div className="text-lg font-semibold">Podcast App</div>

        <div className="absolute right-3 flex space-x-3 items-center">
          <div className="bg-[url('/src/assets/loupe.png')] bg-cover bg-center h-4 w-4"></div>
          <div className="bg-[url('/src/assets/profile.png')] bg-cover bg-center h-6 w-6"></div>
        </div>
      </header>

      <main>
        <section
          aria-label="Podcast Grid"
          className="bg-grey-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {podcasts.map((podcast) => (
            <PodcastTile
              key={podcast.id}
              podcast={podcast}
              onClick={openPodcast}
            />
          ))}
        </section>

        <PodModal podcast={selectedPodcast} onClose={closePodcast} />
      </main>
    </div>
  );
}

export default App;
