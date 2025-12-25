<script setup lang="ts">
import {h, onMounted, ref} from "vue";

interface NugetSummary {
  packages: number,
  versions: number,
  downloadsOfAllVersions: number;
  downloadsOfLatestVersion: number;
  maxDownloadOfSinglePackage?: number;
  maxDownloadOfSingleVersion?: number;
}

export interface PackageVersionData {
  /** Absolute URL of the registration leaf for this version */
  "@id": string;

  /** Full SemVer 2.0.0 version string */
  version: string;

  /** Download count for this specific version */
  downloads: number;
}

export interface PackageData {
  /** Package ID */
  id: string;

  /** Latest package version (SemVer 2.0.0) */
  version: string;

  /** Package description */
  description?: string;

  /** Short summary */
  summary?: string;

  /** Display title */
  title?: string;

  /** Package authors */
  authors?: string | string[];

  /** Package owners */
  owners?: string | string[];

  /** Icon URL */
  iconUrl?: string;

  /** License URL */
  licenseUrl?: string;

  /** Project homepage URL */
  projectUrl?: string;

  /** Registration index URL */
  registration?: string;

  /** Package tags */
  tags?: string | string[];

  /** Total download count */
  totalDownloads?: number;

  /** Indicates whether the package is verified */
  verified: boolean;

  /** Package types defined by the author */
  packageTypes: Array<{
    name: string;
  }>;

  /** All versions matching the search query */
  versions: PackageVersionData[];
}

const properties = defineProps<{
  author: string
}>()

async function getTotalDownloads(author: string): Promise<NugetSummary | null> {
  // NuGet Search API endpoint
  const url = `https://azuresearch-usnc.nuget.org/query?q=owner:${encodeURIComponent(author)}&prerelease=true&semVerLevel=2.0.0`;

  const response = await fetch(url);
  if (!response.ok) {
    console.log(`Search failed with HTTP status: ${response.status}`);
    return null;
  }

  try {
    const packages = (await response.json())?.data as PackageData[];
    let summary: NugetSummary = {
      packages: packages.length,
      versions: packages.reduce(
          (count, current) => count + current.versions.length, 0),
      downloadsOfAllVersions: packages.reduce(
          (count, current) => count + (current.totalDownloads || 0), 0),
      downloadsOfLatestVersion: packages.reduce(
          (count, current) => count + current.versions[current.versions.length - 1].downloads, 0),
    }
    for (const packageData of packages) {
      summary.versions += packageData.versions.length;
      summary.downloadsOfAllVersions += packageData.totalDownloads || 0;
      summary.downloadsOfLatestVersion += packageData.versions[packageData.versions.length - 1].downloads;
    }
    return summary;
  } catch (error) {
    console.log(`Failed to parse JSON response: ${error}`);
  }

  return null;
}

const statisticsLoading = ref(true)
const statisticsSummary = ref<NugetSummary | null>()

onMounted(async () => {
  statisticsLoading.value = true;
  try {
    statisticsSummary.value = await getTotalDownloads(properties.author);
  } finally {
    statisticsLoading.value = false;
  }
})

const separator = () => h('t-divider', {layout: 'vertical', style: 'height:100%'})

</script>

<template>
  <t-space :size="32" :separator="separator" style="margin-top: 16px; margin-bottom: 8px">
    <t-statistic title="Total Packages"
                 :value="statisticsSummary?.packages || NaN"
                 :loading="statisticsLoading">
      <template #prefix>
        <iconify-icon icon="material-symbols-light:package-2-outline" width="24" height="24"/>
      </template>
    </t-statistic>
    <t-statistic title="Total Downloads" extra="All-time Total"
                 :value="statisticsSummary?.downloadsOfAllVersions || NaN"
                 :loading="statisticsLoading"
                 color="blue">
      <template #prefix>
        <iconify-icon icon="material-symbols-light:history-rounded" width="24" height="24"/>
      </template>
    </t-statistic>
    <t-statistic title="Recent Downloads" extra="Latest Version Only"
                 :value="statisticsSummary?.downloadsOfLatestVersion || NaN"
                 :loading="statisticsLoading"
                 color="blue">
      <template #prefix>
        <iconify-icon icon="material-symbols-light:download-rounded" width="24" height="24"/>
      </template>
    </t-statistic>
  </t-space>
</template>

<style scoped lang="scss">
.icon {
  font-size: 32px;
  color: var(--td-brand-color);
  background: var(--td-brand-color-light);
  border-radius: var(--td-radius-medium);
  padding: 12px;
}
</style>