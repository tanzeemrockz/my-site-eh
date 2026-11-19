"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/data/projects";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Platforms" },
  { id: "ecommerce", label: "E-Commerce & Lookbooks" },
  { id: "software", label: "Software & Tools" },
  { id: "ai", label: "AI & Automation" },
];

export function ProjectFilterGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = projects.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "software") return p.category === "software" || p.category === "apps";
    return p.category === activeCategory;
  });

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-white text-black shadow-lg"
                  : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
              {cat.id === "all" ? ` (${projects.length})` : ""}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-[#0c0c10] p-12 text-center text-sm text-white/50">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
