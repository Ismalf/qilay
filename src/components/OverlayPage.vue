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
        <component :is="currentComponent" />
        <template #footer>
            <div class="flex items-center gap-2">
                <Button label="Account" icon="pi pi-user" class="flex-auto" outlined></Button>
                <Button label="Logout" icon="pi pi-sign-out" class="flex-auto" severity="danger" text></Button>
            </div>
        </template>
    </Drawer>
</template>