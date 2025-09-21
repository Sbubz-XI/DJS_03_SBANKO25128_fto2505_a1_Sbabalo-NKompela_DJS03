import React from "react";

function PodModal({ podcast, onClose }) {
  if (!podcast) return null;

  const formattedDate = podcast.updated
    ? new Date(podcast.updated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <dialog
      open
      className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto relative"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-600 hover:bg-gray-200 rounded-full px-2 text-xl"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4">{podcast.title}</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-4">{podcast.description}</p>

          <h3 className="text-lg font-semibold mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
            {podcast.genres?.length ? (
              podcast.genres.map((genre, index) => (
                <span
                  key={index}
                  className="text-md font-bold text-gray-600 px-2 py-1 rounded border bg-gray-100"
                >
                  {genre}
                </span>
              ))
            ) : (
              <span>No genres listed</span>
            )}
          </div>

          {formattedDate && (
            <p className="text-sm text-gray-500 mb-4">
              Last updated: {formattedDate}
            </p>
          )}

          {podcast.seasons?.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mb-2">Seasons</h3>
              {podcast.seasons.map((season, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg shadow-md p-4 mb-3"
                >
                  <h3 className="font-semibold">{season.title}</h3>
                  <p className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium">
                    {season.episodes} episodes
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default PodModal;
