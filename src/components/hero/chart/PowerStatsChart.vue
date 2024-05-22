<template>
  <div class="chart-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import {
  Chart as ChartJS,
  registerables,
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartTypeRegistry,
} from 'chart.js';

ChartJS.register(...registerables);

const props = defineProps<{
  type: keyof ChartTypeRegistry;
  data: ChartData;
  options?: ChartOptions;
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
let chart: ChartJS | null = null;

const renderChart = () => {
  if (canvas.value) {
    const config: ChartConfiguration = {
      type: props.type,
      data: props.data,
      options: props.options,
    };
    chart = new ChartJS(canvas.value, config);
  }
};

onMounted(renderChart);

watch(
  () => [props.data, props.options],
  () => {
    if (chart) {
      chart.destroy();
      renderChart();
    }
  },
  { deep: true }
);
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
