<script setup>

import Chart from 'primevue/chart';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref, onMounted, computed } from "vue";
import MeterGroup from 'primevue/metergroup';
import Card from 'primevue/card';
import Button from 'primevue/button';
onMounted(() => {
    
});

const value = ref([
    { label: 'Groceries', color1: '#34d399', color2: '#fbbf24', value: 10, icon: 'pi pi-table' },
    { label: 'Entertainment', color1: '#fbbf24', color2: '#dedede', value: 11, icon: 'pi pi-game' },
    { label: 'House', color1: '#dedede', color2: '#c084fc', value: 20, icon: 'pi pi-home' },
    { label: 'Other', color1: '#c084fc', color2: '#c084fc', value: 0, icon: 'pi pi-cog' }
]);

import { useIncomeStore } from '@/stores/income';
const incomeStore = useIncomeStore();

import { useExpenseStore } from '@/stores/expense';
const expenseStore = useExpenseStore();

const balance = computed(() => {
    return incomeStore.incomeRef.amount - expenseStore.totalExpense;
});
</script>

<template>

    <div class="flex flex-col justify-left w-[90vw] pb-[10vh] max-w-[700px] self-center">
        <h1 class="text-3xl font-bold">Hello! :)</h1>
        <div class="grid  grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div class=" md:col-span-2">
                <div class="flex flex-col">
                    <h2 class="text-4xl font-bold">Balance</h2>
                    <p class="text-gray-500 dark:text-gray-400">Your current balance</p>
                    <span class="text-5xl font-bold underline">$ {{balance}}</span>
                </div>
            </div>
            <div class=" md:col-span-2">
                <div class="flex justify-between items-center ">
                    <div class="flex flex-col w-full items-end">
                        <span class="text-xl font-bold income">+ $ {{incomeStore.incomeRef.amount}}</span>
                        <span class="text-gray-500 dark:text-gray-400">Income - {{incomeStore.formattedPayday}}</span>
                        <span class="text-xl font-bold outcome">- $ {{expenseStore.totalExpense}}</span>
                        <span class="text-gray-500 dark:text-gray-400">Outcome - up to date</span>
                        <div class="flex justify-end w-full">
                            <Button label="Income" icon="pi pi-plus" variant="text" severity="contrast" class="mt-4" />
                            <Button label="Outcome" icon="pi pi-minus" variant="text" severity="contrast" class="mt-4" />
                        </div>
                    </div>
                    <!-- <div class="flex flex-col">    
                    </div>
                    <div class="flex flex-col">
                        <span class="text-2xl font-bold">$ 500.00</span>
                        <span class="text-gray-500 dark:text-gray-400">Balance</span>
                    </div> -->
                </div>
            </div>
            <!-- <div class="col-span-1 bg-green-200 p-4">
                <h2 class="text-xl font-bold">Extras</h2>
                <p>N/A.</p>
            </div> -->
        </div>
        <Card class="flex-1 border border-surface shadow-none">
            <template #content>
                <div class="flex justify-between gap-8">
                    <div class="flex flex-col gap-1 justify-center">
                        Upcoming expenses
                    </div>
                    <div class="flex flex-col gap-1">
                        <span class="text-gray-300"> Spotify - Mar. 30th </span>
                        <span > Netflix +1 - Feb. 25th </span>
                        <span class="text-gray-300"> Xbox - Jan. 22th </span>
                    </div>
                </div>

            </template>
        </Card>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            <div class="flex flex-col ">
                <h2 class="text-3xl font-bold">Expenses Summary</h2>
                <p class="text-gray-500 dark:text-gray-400">Latest purchases</p>
                <div class="h-[30vh] min-h-[250px]  overflow-hidden">
                    <DataTable :value="expenseStore.expenseRef">
                        <Column field="description" header="Description"></Column>
                        <Column field="amount" header="Amount"></Column>
                    </DataTable>
                </div>
            </div>
            <div class="flex flex-col ">
                <h2 class="text-3xl font-bold">Category detail</h2>
                <p class="text-gray-500 dark:text-gray-400">Your purchases by category</p>
                <MeterGroup :value="value" labelPosition="start">
                    <template #label="{ value }">
                        <div class="flex flex-wrap gap-4">
                            <template v-for="val of value" :key="val.label">
                                <Card class="flex-1 border border-surface shadow-none">
                                    <template #content>
                                        <div class="flex justify-between gap-8">
                                            <div class="flex flex-col gap-1">
                                                <span class="text-surface-500 dark:text-surface-400 text-sm">{{
                                                    val.label }}</span>
                                                <span class="font-bold text-lg">{{ val.value }}%</span>
                                            </div>
                                            <span
                                                class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center"
                                                :style="{ backgroundColor: `${val.color1}`, color: `${val.color2}` }">
                                                <i :class="val.icon" />
                                            </span>
                                        </div>
                                    </template>
                                </Card>
                            </template>
                        </div>
                    </template>
                    <template #meter="slotProps">
                        <span :class="slotProps.class"
                            :style="{ background: `linear-gradient(to right, ${slotProps.value.color1}, ${slotProps.value.color2})`, width: slotProps.size }" />
                    </template>
                    <template #start="{ totalPercent }">
                        <div class="flex justify-between mt-4 mb-2 relative">
                            <span>Monthly budget</span>
                            <!-- <span :style="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent
                            }}%</span> -->
                            <span class="font-medium">$ 1000.00</span>
                        </div>
                    </template>
                    <!-- <template #end>
                        <div class="flex justify-between mt-4">
                            <Button label="Manage Storage" outlined size="small" />
                            <Button label="Update Plan" size="small" />
                        </div>
                    </template> -->
                </MeterGroup>
                <!-- <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full h-[40vh]" /> -->
            </div>
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