<script setup>
import { defineProps, ref } from 'vue';
import Drawer from 'primevue/drawer';
const isOpen = ref(false);
const currentComponent = ref(null);
// Props to control if the drawer is open
const openDrawer = (component) => {
    currentComponent.value = component;
    isOpen.value = true;
};

const closeDrawer = () => {
    isOpen.value = false;
};
defineExpose({
    openDrawer
});
</script>

<template>
    <Drawer v-model:visible="isOpen" position="bottom" style="height: 90vh">
        <template #header>
            <div class="flex items-center gap-2">
                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
        </template>
        <component @close="closeDrawer" :is="currentComponent" />
        <template #footer>
            <div class="flex flex-col justify-center items-center gap-2">
                <span class="text-gray-400">Qilay Co. 2025</span>
                <span class="text-gray-400"><3 Isma</span>
            </div>
        </template>
    </Drawer>
</template>