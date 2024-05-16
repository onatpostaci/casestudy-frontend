import React from "react";
import TechCard from "../tech-card/TechCard";

const TechStack = () => {
  const techStack = [
    {
      tech: "NestJS",
      image: "/nestjs_logo.jpg",
    },
    {
      tech: "NextJS",
      image: "/Nextjs-logo.png",
    },
    {
      tech: "OpenAI API",
      image: "/OpenAI_Logo.png",
    },
    {
      tech: "MongoDB",
      image: "/MongoDB_Logo.png",
    },
    {
      tech: "Socket.IO",
      image: "/socketio_logo.png",
    },
  ];

  return (
    <section className="flex flex-nowrap overflow-x-auto py-4 px-4 gap-6">
      {techStack.map((tech, index) => (
        <TechCard key={index} tech={tech.tech} imageSource={tech.image} />
      ))}
    </section>
  );
};

export default TechStack;
