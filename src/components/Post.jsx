import { useState } from "react";

export default function Post() {
  const [postClicked, setPostClicked] = useState(false);

  function handlePostClicked() {
    setPostClicked(!postClicked);
  }

  return (
    <div className="w-full flex justify-center">
      {!postClicked && (
        <input
          className="bg-slate-50 w-full px-2 py-4 rounded-full"
          placeholder="Create new Post..."
          onClick={handlePostClicked}
          type="text"
        />
      )}

      {postClicked && (
        <div className="p-4 bg-slate-50 rounded-2xl w-full sm:max-w-96 md:max-w-96 text-center fixed z-20">
          <label className="font-semibold">Create A Post!</label>
          <textarea
            className="p-6 w-full h-60 resize-none bg-slate-100 focus:outline-emerald-50 text-xl"
            placeholder="Whats information you want to share!..."
          ></textarea>
          <div className="space-x-4">
            <button
              className="bg-slate-400 px-4 py-2 rounded-2xl active:bg-slate-200 transform transition-transform duration-400"
              onClick={handlePostClicked}
            >
              Close ☠️
            </button>
            <button className="bg-emerald-400 px-5 py-2 rounded-2xl active:bg-emerald-500 transform transition-transform duration-400">
              Post 🏣
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
