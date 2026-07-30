"use client";

import Image from "next/image";
import { useState } from "react";

const ProjectPreview = ({ project, shouldRender }) => {
  const [loaded, setLoaded] = useState(false);

  if (!project.live && !project.image) {
    return (
      <div className="relative w-full h-full flex items-center justify-center text-white/60">
        <p>No preview available</p>
      </div>
    );
  }

  if (!shouldRender) {
    return <div className="w-full h-full bg-black/10 animate-pulse" />;
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-[5] bg-black/10 animate-pulse" />
      )}

      {project.live ? (
        <div className="relative w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src={project.live}
            className="absolute top-0 left-0 border-0"
            style={{
              width: "1500px",
              height: "1500px",
              transform: "scale(0.4)",
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
            title={project.title}
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onLoad={() => setLoaded(true)}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="bg-black/50 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Click to interact
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            fill
            className="object-contain"
            alt={project.title}
            onLoad={() => setLoaded(true)}
          />
        </div>
      )}
    </>
  );
};

export default ProjectPreview;
