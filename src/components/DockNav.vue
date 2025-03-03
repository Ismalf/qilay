<script setup>
import { defineEmits } from 'vue';
import Button from 'primevue/button';
import IncomeReg from './IncomeReg.vue';
import ExpenseReg from './ExpenseReg.vue';
const emit = defineEmits();
const components = {
    IncomeReg,
    ExpenseReg
};

let loadComponent = (component) => {
    console.log(component);
    emit('loadComponent', components[component]);
}
</script>
<template>
    <div
        class="fixed inset-x-0 bottom-0 z-50 backdrop-blur-md shadow-lg py-4 flex justify-center items-center w-[100vw]">
        <div class="flex max-w-[700px] w-full justify-around items-center">

            <div class="flex flex-col items-center h-full w-[15%]">
                <Button icon="pi pi-dollar" rounded class="p-button-rounded p-button-text p-button-lg" severity="contrast" variant="text" @click="loadComponent('IncomeReg')" />
            </div>

            <!-- Search Icon -->
            <div class="flex flex-col items-center cursor-pointer h-full w-[15%]">
                <Button icon="pi pi-plus" rounded class="p-button-rounded p-button-text p-button-lg" severity="contrast" variant="text" @click="loadComponent('ExpenseReg')"/>
            </div>

            <!-- Profile Icon -->
            <div class="flex flex-col items-center cursor-pointer h-full w-[15%]">
                <Button icon="pi pi-cog" rounded class="p-button-rounded p-button-text p-button-lg" severity="contrast" variant="text" />
            </div>
        </div>
        <!-- Home Icon -->

    </div>
</template>

<style scoped>
.bottom-nav-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-self: center;
    align-content: center;
    max-width: fit-content;
    padding: 1rem;
}

@media (max-width: 475px) {
    .bottom-nav-bar {
        position: fixed;
        top: 0vh;
        width: 100%;
        justify-self: right;
        align-content: center;
        max-width: fit-content;
        padding: 1rem;
    }
}
</style>