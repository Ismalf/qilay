<script setup>

import Chart from 'primevue/chart';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
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
        responsive:true,
        maintainAspectRatio: false,
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

const products = ref([
    {code:1, name: 'Product 1', category: 'Category 1', quantity: 10},
    {code:2, name: 'Product 2', category: 'Category 2', quantity: 20},
    {code:3, name: 'Product 3', category: 'Category 3', quantity: 30},
    {code:4, name: 'Product 4', category: 'Category 4', quantity: 40},
    {code:4, name: 'Product 4', category: 'Category 4', quantity: 40},
    {code:4, name: 'Product 4', category: 'Category 4', quantity: 40},
    {code:4, name: 'Product 4', category: 'Category 4', quantity: 40},
    
    ]);
</script>

<template>
    
    <div class="dashboard">
        <div class="flex h-[5vh] items-center justify-between">
            <p class="income">income</p>
            <p class="outcome">outcome</p>
        </div>
        <Chart type="bar" :data="chartData" :options="chartOptions" class="w-full h-[40vh]" />
       <!--  <div class=" flex justify-center w-full h-[40vh]">
        </div> -->
        <h3>Expenses Summary</h3>
        <div class="h-[30vh] max-w-[50%] overflow-hidden">
            <DataTable :value="products" >
                <Column field="name" header="Description"></Column>
                <Column field="category" header="Amount"></Column>
            </DataTable>
            <!-- <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-transparent via-transparent to-transparent backdrop-blur-sm"></div> -->
        </div>
        
        
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
    justify-content: left;
    /* height: 100vh;
    max-height: 100%; */
    width: 90vw;
    max-width: 700px;
    justify-self: center;
    padding-bottom: 10vh;
}

</style>