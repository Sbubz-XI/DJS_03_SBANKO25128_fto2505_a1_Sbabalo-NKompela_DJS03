import React from "react";
import { genres } from "../data.js";
import "./PodModal.css";

function PodModal({ podcast, onClose }) {
  if (!podcast) return null;

  const formattedDate = podcast.updated
    ? new Date(podcast.updated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const genreTitles = podcast.genres?.length
    ? podcast.genres.map(
        (id) => genres.find((g) => g.id === id)?.title || "Unknown"
      )
    : ["Unknown"];

  return (
    <dialog id="podcast-modal" open className="pod-modal p-6 bg-white">
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
            {genreTitles.map((title, index) => (
              <span
                key={index}
                className="text-md font-bold text-gray-600 px-2 py-1 rounded border bg-gray-100"
              >
                {title}
              </span>
            ))}
          </div>

          {formattedDate && (
            <p className="text-sm text-gray-500 mb-4">
              Last updated: {formattedDate}
            </p>
          )}

          {podcast.seasons?.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mb-2">Seasons</h3>
              {podcast.seasons.map((season) => (
                <div
                  key={season.id}
                  className="relative bg-white rounded-lg shadow-md p-4 mb-3"
                >
                  <h4 className="font-semibold">{season.title}</h4>
                  <p className="text-sm text-gray-700">{season.description}</p>
                  {season.episodes?.length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                      {season.episodes.map((episode) => (
                        <li key={episode.id}>
                          {episode.title} - {episode.description}
                        </li>
                      ))}
                    </ul>
                  )}
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
