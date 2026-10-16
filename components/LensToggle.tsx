"use client";
import { useCallback, useEffect, useState } from "react";

type Lens = "build" | "verify";

export default function LensToggle() {
  const [lens, setLens] = useState<Lens>("build");

  const choose = useCallback((l: Lens) => {
    setLens(l);
    document.documentElement.dataset.lens = l;
    history.replaceState(null, "", `#${l}`);
  }, []);

  useEffect(() => {
    const initial: Lens = location.hash === "#verify" ? "verify" : "build";
    setLens(initial);
    document.documentElement.dataset.lens = initial;
    document.documentElement.dataset.ready = "true";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if ((e.target as HTMLElement).matches("input,textarea")) return;
      if (e.key === "b") choose("build");
      if (e.key === "v") choose("verify");
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [choose]);

  return (
    <div className="lens" role="group" aria-label="Viewing lens">
      {(["build", "verify"] as const).map((l) => (
        <button key={l} type="button" aria-pressed={lens === l} onClick={() => choose(l)}>
          {l === "build" ? "Build" : "Verify"}
        </button>
      ))}
    </div>
  );
}