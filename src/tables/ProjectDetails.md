---
title: Project Details
date: 2025-12-26
isOriginal: true
layout: TablePage
---

This page lists detailed information about my projects.

<!-- more -->

*Click the arrow to view project details.*

<ProjectTable :projects="projects"
  profile="https://www.nuget.org/profiles/VincentJia"
  withYear />

<script setup lang="ts">
import ProjectTable from "@source/.vuepress/components/ProjectTable.vue";
import {projects} from "@source/.vuepress/data/projects.ts";

</script>