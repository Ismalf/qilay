<script setup>
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';

import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}

const products = ref([{}]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
</script>

<template>
    <div class="dashboard">
        <img src="../assets/logoqilay-white.svg" class="logo" alt="">
        <h2>Hello</h2>
        <div class="summary">
            <p class="income">income</p>
            <p class="outcome">outcome</p>
        </div>
        <Carousel :value="products" :numVisible="1" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="chartProps">
                <Chart type="bar" :data="chartData" :options="chartOptions" />
            </template>
        </Carousel>
    </div>
</template>

<style scoped>
.income {
    color: rgb(126, 216, 126);
}

.outcome {
    color: rgb(248, 145, 145);
}

.dashboard {
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: left;
    height: 100vh;
    font-size: 20px;
    width: 90vw;
    max-width: 700px;
    justify-self: center;
}

.summary {
    display: flex;
    justify-content: space-between;
}

.logo {
    align-self: center;
    width: 100px;
}
</style>