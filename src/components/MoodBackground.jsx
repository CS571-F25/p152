import { useEffect } from "react";
import "../styles/mood.css";

/**
 * Renders a full-viewport gradient background and applies a mood class
 * to <html> so CSS variables swap. Valid moods: "happy" | "calm" | "energetic" | "sad".
 */
export default function MoodBackground({ mood = "happy" }) {
  useEffect(() => {
    const el = document.documentElement;
    const moods = ["mood-happy","mood-calm","mood-energetic","mood-sad"];
    el.classList.remove(...moods);
    el.classList.add(`mood-${mood}`);
    return () => el.classList.remove(`mood-${mood}`);
  }, [mood]);

  return <div className="mood-bg" aria-hidden="true" />;
}
