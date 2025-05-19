"use client";

import { Project } from "@/src/types/Project";
import { useState } from "react";
import LinkCard from "../../common/LinkCard";

export default function TabShowProjects({ projects,title_finished, title_unfinished }: { projects: Project[],title_finished:string,title_unfinished:string }) {  

    const [activeTab, setActiveTab] = useState<"finished" | "unfinished">("finished");

    const projects_finished = projects.filter((project) => project.finished);
    const projects_unfinished = projects.filter((project) => !project.finished);
  
    return (
      <div className="text-center w-full">
        {/* Barra de Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            className={`px-4 py-2 ${
              activeTab === "finished"
                ? "border-b-2  border-accent-2 text-accent-2"
                : "text-gray-500"
            }  cursor-pointer hover:border-b-2 hover:border-accent hover:text-accent`}
            onClick={() => setActiveTab("finished")}
          >
            {title_finished}
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "unfinished"
                ? "border-b-2 border-accent-2 text-accent-2"
                : "text-gray-500"
            }  cursor-pointer hover:border-b-2 hover:border-accent hover:text-accent `}
            onClick={() => setActiveTab("unfinished")}
          >
            {title_unfinished}
          </button>
        </div>
  
        {/* Contenido de la pestaña activa */}
        <div className="flex flex-col w-full mx-auto">
          {(activeTab === "finished" ? projects_finished : projects_unfinished).map((project) => (
             <LinkCard key={project.id} title={project.title} technologies={project.technologies} link={`/projects/${project.id}`}></LinkCard>
          ))}
        </div>
      </div>
    );
  }