import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

function Card({ _id, name, prompt, image }) {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={image}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group:hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-f h-7 bg-green-700 justify-center items-center text-white text-xs font-bold">
              {name[0].toUpperCase()}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              downloadImage(_id, image);
            }}
            className="outline-none focus:outline-none bg-transparent border-none"
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
