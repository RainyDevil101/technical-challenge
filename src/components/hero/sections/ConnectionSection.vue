<script setup lang="ts">
import { Connections } from '../../../interfaces/hero.interface';
import { InfoSection } from '../index';

const props = defineProps<{
  connections: Connections,
  title: string
}>();

const { connections, title } = props;
const info = [
  { label: 'Fullname', value: connections['group-affiliation'] },
  { label: 'Alignment', value: connections.relatives }
];
</script>

<template>
  <InfoSection :title="title" :info="info" />
</template>