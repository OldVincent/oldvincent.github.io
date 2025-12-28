---
title: Project Details
date: 2025-12-26
isOriginal: true
layout: TablePage
---

This page lists detailed information about my projects.

<!-- more -->

## Packages

<NugetStatistics author="VincentJia" />

*Your browser fetches and analyzes these statistics in real-time from [NuGet.org](https://www.nuget.org/profiles/VincentJia).*
*Refresh the page to get the latest numbers.*

## Projects

*Click the arrow to view project details.*

<ProjectTable :projects="projects"
  profile="https://www.nuget.org/profiles/VincentJia"
  withYear />

<script setup lang="ts">
import ProjectTable from "@source/.vuepress/components/ProjectTable.vue";
import NugetStatistics from "@source/.vuepress/components/NugetStatistics.vue";
import {projects} from "@source/.vuepress/data/Projects.ts";

</script>