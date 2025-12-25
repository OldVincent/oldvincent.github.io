import {VNode} from "vue";

export enum ProjectStatus {
  Developing = "Developing",
  Released = "Released",
  Deprecated = "Deprecated"
}

export interface ProjectData {
  // Year when the project was started.
  year: number,
  // Project name.
  title: string,
  // One sentence to describe the project.
  description: string,
  // Manually counted downloads, typically used to get the total framework downloads from each component module.
  downloads?: string,
  // Bullet points of key features or achievements.
  remarks: string[],
  // Details hidden in the expandable panels.
  details?: VNode,
  // URL of the GitHub repository.
  repository: URL,
  // Name of the NuGet package.
  package?: string,
  // Current project status.
  status: ProjectStatus,
  // Tags of this project.
  tags: string[]
}