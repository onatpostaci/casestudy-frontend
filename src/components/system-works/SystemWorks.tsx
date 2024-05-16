import React from "react";
import Image from "next/image";

const SystemWorks = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full overflow-hidden">
        <Image
          src="/xaver-diagram.png"
          alt="System Architecture Diagram"
          layout="responsive"
          width={200}
          height={100}
          objectFit="contain"
        />
      </div>
      <p className="text-lg">
        This diagram illustrates the architecture of our system where the NestJS
        server utilizes a Gateway Module with Socket.IO to facilitate real-time
        data communication with the Next.js client. The server also interacts
        with MongoDB for data persistence and OpenAIs API for generating content
        based on user requests. The communication between the server and the
        client is done asynchronously to ensure a responsive user experience.
      </p>
    </div>
  );
};

export default SystemWorks;
