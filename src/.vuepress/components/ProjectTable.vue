<script setup lang="ts">
import {CheckboxGroup, FilterValue, RadioGroup, TableProps, TableRowData} from "tdesign-vue-next";
import {
  ChevronRightCircleIcon,
  ChevronRightIcon,
  CheckCircleFilledIcon,
  ErrorCircleFilledIcon,
  CloseCircleFilledIcon,
} from 'tdesign-icons-vue-next';
import enConfig from 'tdesign-vue-next/es/locale/en_US';
import {ProjectData, ProjectStatus} from "./ProjectData";
import "../styles/t-design.scss"
import {ref} from "vue";

const properties = withDefaults(defineProps<{
  projects: ProjectData[]
  withYear: boolean | string
}>(), {
  withYear: false
})

const tableColumns: TableProps['columns'] = []

const projects = properties.projects.map((project, index) => ({...project, index}));

const tagNames = [...new Set(projects.flatMap((project) => project.tags))];
const colors: string[] = [
  "Navy",
  "DarkGreen",
  "Teal",
  "DarkCyan",
  "MidnightBlue",
  "DodgerBlue",
  "LightSeaGreen",
  "ForestGreen",
  "DarkSlateGreen",
  "Indigo",
  "CadetBlue",
  "OliveDrab"
]

const tagColors: { [key: string]: string } = {}
tagNames.forEach((tagName, index) => {
  tagColors[tagName] = colors[index % colors.length];
});

if (properties.withYear ?? false)
  tableColumns.push({colKey: 'year', title: 'Year', align: 'center', width: "4rem", sorter: true})

tableColumns.push(
    {colKey: 'name', title: 'Name', cell: "columnName", width: "30%"},
    {
      colKey: 'status', title: 'Status', align: 'center', cell: "columnStatus", width: "6rem",
      filter: {
        component: RadioGroup,
        showConfirmAndReset: true,
        props: {
          options: [
            {label: ProjectStatus.Developing.toString(), value: ProjectStatus.Developing},
            {label: ProjectStatus.Released.toString(), value: ProjectStatus.Released},
            {label: ProjectStatus.Deprecated.toString(), value: ProjectStatus.Deprecated},
          ]
        }
      }
    },
    {colKey: 'description', title: 'Description', cell: 'columnDescription'},
    {
      colKey: 'tags', title: 'Tags', cell: 'columnTags',
      filter: {
        component: CheckboxGroup,
        showConfirmAndReset: true,
        props: {
          options: tagNames.map(tag => ({label: tag, value: tag}))
        }
      }
    }
)


const tableFilterRow = ref<TableProps['filterRow']>();
const tableFilterValue = ref<TableProps['filterValue']>({});

const tableData = ref<TableProps['data']>([...projects]);

const tablePagination = ref<TableProps['pagination']>({
  defaultPageSize: 10,
  total: projects.length,
  defaultCurrent: 1,
});

function setTableData(data: TableRowData[]) {
  tableData.value = data;
  if (tablePagination.value != undefined)
    tablePagination.value.total = data.length;
}

function onFilterData(filters: FilterValue) {
  const selectedTags = filters.tags as string[];
  const selectedStatus = filters.status as ProjectStatus;
  const conditions: string[] = []

  // 'No tag is selected.' = 'All tags are selected.'
  let isFilteredByTags = false;
  if (selectedTags && selectedTags.length > 0) {
    isFilteredByTags = true;
    conditions.push(`Tags: ${selectedTags.join(', ')}`);
  }
  let isFilteredByStatus = false;
  if (selectedStatus) {
    isFilteredByStatus = true;
    conditions.push(`Status: ${selectedStatus}`);
  }

  if (conditions.length == 0)
    return {
      conditions: conditions,
      data: projects
    };

  return {
    conditions: conditions,
    data: projects.filter((item) => {
      let selected = true;
      // Item is selected if it contains any of the selected tags.
      if (isFilteredByTags &&
          selectedTags.some(selectedTag => !item.tags.includes(selectedTag)))
        selected = false;
      if (isFilteredByStatus && item.status != selectedStatus)
        selected = false;
      return selected;
    })
  };
}

const onFilterChange: TableProps['onFilterChange'] = (filters, context) => {
  tableFilterValue.value = {
    ...filters,
    tags: filters.tags || []
  };
  tableFilterRow.value = undefined
  const timer = setTimeout(() => {
    clearTimeout(timer);
    const filterResult = onFilterData(filters);
    setTableData(filterResult.data)
    if (filterResult.conditions.length > 0) {
      if (filterResult.data.length == 0) {
        tableFilterRow.value = (h) => h('div', {}, [
          `Search for '${filterResult.conditions.join(' & ')}'. No results found.  `,
          h('a', {
            onClick: onResetFilters,
            style: {
              marginLeft: "10px"
            }
          }, ["Clear Filters"])
        ])
      } else {
        tableFilterRow.value = (h) => h('div', {}, [
          `Search for '${filterResult.conditions.join(' & ')}'. Found ${filterResult.data.length} items.  `,
          h('a', {
            onClick: onResetFilters,
            style: {
              marginLeft: "10px"
            }
          }, ["Clear Filters"])
        ])
      }
    }
  }, 100);
};

const onResetFilters = () => {
  tableFilterValue.value = {};
  setTableData(projects);
}

const tableExpandableRow: TableProps['expandedRow'] = (h, {row}) => {
  return (row as ProjectData).details;
}

const tableExpandIcon = ref<TableProps['expandIcon']>(true);
tableExpandIcon.value = (h, {index}) => {
  if (projects[index].details === undefined)
    return false;
  return h(ChevronRightCircleIcon);
};

const tableSort = ref<TableProps['sort']>({
  sortBy: 'year',
  descending: true,
});

function onSortData(sort: TableProps['sort']) {
  if (Array.isArray(sort))
    return;
  const timer = setTimeout(() => {
    if (sort?.sortBy === "year") {
      tableData.value = tableData.value!
          .concat()
          .sort((a, b) =>
              (sort!.descending ? b[sort.sortBy] - a[sort.sortBy] : a[sort.sortBy] - b[sort.sortBy]));
    }
    else {
      tableData.value = tableData.value!.concat();
    }
    clearTimeout(timer);
  }, 100);
}

const onSortChange: TableProps['onSortChange'] = (value) => {
  tableSort.value = value;
  onSortData(value);
};

</script>

<template>
  <div class=".t-customized">
    <t-config-provider :global-config="enConfig">
      <t-table
          row-key="index"
          :data="tableData"
          :pagination="tablePagination"
          :columns="tableColumns"
          :filter-value="tableFilterValue"
          :filter-row="tableFilterRow"
          @filter-change="onFilterChange"
          :expanded-row="tableExpandableRow"
          :expand-icon="tableExpandIcon"
          :sort="tableSort"
          @sortChange="onSortChange"
          lazy-load>
        <template #columnName="{row}">
          <div>
            <p>
              <iconify-icon icon="jam:github"/>
              <a :href="(row as ProjectData).repository.toString()">{{ (row as ProjectData).title }}</a>
              : {{ (row as ProjectData).description }}
            </p>
            <t-link
                v-if="(row as ProjectData).package !== undefined && (row as ProjectData).status === ProjectStatus.Released"
                :href="`https://www.nuget.org/packages${(row as ProjectData).package!.toString()}`"
                target="_blank">
              <t-image
                  :src="`https://img.shields.io/nuget/dt/${(row as ProjectData).package!.toString()}?logo=nuget&color=blue&&label=Downloads`"/>
            </t-link>
          </div>
        </template>
        <template #columnStatus="{row}">
          <t-tag v-if="(row as ProjectData).status === ProjectStatus.Released" variant="outline" theme="success">
            <template #icon>
              <iconify-icon icon="material-symbols:new-releases"/>
            </template>
            {{ (row as ProjectData).status }}
          </t-tag>
          <t-tag v-else-if="(row as ProjectData).status === ProjectStatus.Deprecated"
                 variant="outline" theme="warning">
            <template #icon>
              <iconify-icon icon="material-symbols:warning-rounded"/>
            </template>
            {{ (row as ProjectData).status }}
          </t-tag>
          <t-tag v-else variant="outline" theme="primary">
            <template #icon>
              <iconify-icon icon="material-symbols:build-rounded"/>
            </template>
            {{ (row as ProjectData).status }}
          </t-tag>
        </template>
        <template #columnDescription="{row}">
          <div>
            <ul>
              <li v-for="remark in (row as ProjectData).remarks" :key="remark" v-html="remark"/>
            </ul>
          </div>
        </template>
        <template #columnTags="{row}">
          <div>
            <t-tag :color="tagColors[tag]" v-for="tag in (row as ProjectData).tags" :key="tag"
                   variant="light-outline" style="margin: 2px">{{ tag }}
            </t-tag>
          </div>
        </template>
      </t-table>
    </t-config-provider>
  </div>
</template>

<style scoped lang="scss">

</style>