import { createContext, useEffect, useMemo, useState } from "react";

const SavedSongsContext = createContext({
  saved: [],
  toggle: () => {},
  isSaved: () => false,
  remove: () => {}
});

export function SavedSongsProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem("mt:saved")) ?? []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("mt:saved", JSON.stringify(saved));
  }, [saved]);

  const toggle = (track) => {
    setSaved(cur =>
      cur.some(t => t.id === track.id)
        ? cur.filter(t => t.id !== track.id)
        : [...cur, track]
    );
  };

  const remove = (id) => setSaved(cur => cur.filter(t => t.id !== id));
  const isSaved = (id) => saved.some(t => t.id === id);

  const value = useMemo(() => ({ saved, toggle, isSaved, remove }), [saved]);

  return (
    <SavedSongsContext.Provider value={value}>
      {children}
    </SavedSongsContext.Provider>
  );
}

export default SavedSongsContext;
