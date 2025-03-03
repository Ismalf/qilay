<script setup>

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Fluid from 'primevue/fluid';
import Button from 'primevue/button';
import { ref, onMounted } from "vue";
import Select from 'primevue/select';
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
const emit = defineEmits();
import { useExpenseStore } from '@/stores/expense';
const expenseStore = useExpenseStore();
const initialValues = ref({
    description: '',
    amount: 0,
    category: { name: 'Entertainment', code: 'NY' }
});

const resolver = zodResolver(
    z.object({
        description: z.string().min(1, { message: 'Description is required.' }),
        amount: z.number().min(0, { message: 'Amount is required.' }),
        category: z.union([
            z.object({ name: z.string().min(1, 'Category is required') }),
            z.any().refine((val) => false, { message: 'Category is required.' })
        ]),

    })
);
const onFormSubmit = (e) => {
    if (e.valid) {
        //toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
        expenseStore.add(e.values);
        emit('close');
    }
};

const categories = ref([
    { name: 'Entertainment', code: 'NY' },
    { name: 'Home', code: 'RM' },
    { name: 'Food', code: 'LDN' },
    { name: 'Movility', code: 'IST' },
    { name: 'Health', code: 'PRS' }
]);

</script>

<template>
    <div class="max-w-[700px] w-full justify-self-center">
        <h2 class="text-4xl font-bold">Expense registry</h2>
        <Form class="w-full py-4" v-slot="$form" @submit="onFormSubmit" :resolver :initialValues>
            <Fluid class="w-full">
                <span class=" text-2xl font-bold py-2 block">What did we buy?</span>
                <div class="grid grid-cols-2 gap-4 w-full py-4">
                    <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-money-bill"></i>
                            </InputGroupAddon>
                            <FloatLabel variant="on">
                                <InputNumber name="amount" mode="currency" currency="USD" locale="en-US" />
                                <label for="amount">Amount</label>
                            </FloatLabel>
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-pencil"></i>
                            </InputGroupAddon>
                            <FloatLabel variant="on">
                                <InputText name="description" />
                                <label for="description">Description</label>
                            </FloatLabel>
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-objects-column"></i>
                            </InputGroupAddon>

                            <FloatLabel variant="on">
                                <Select name="category" :options="categories" optionLabel="name" fluid />
                                <label for="category">Category</label>
                            </FloatLabel>
                        </InputGroup>
                    </div>
                    <!--  <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <Checkbox name="lastday" id="lastDay" binary  />
                            </InputGroupAddon>

                            <FloatLabel variant="on">
                                <InputText disabled="true" locale="en-US" />
                                <label for="lastDay">Is a suscription?</label>
                            </FloatLabel>
                        </InputGroup>
                    </div> -->
                    <Button label="Add this expense" severity="contrast" type="submit" class="col-span-full" />
                </div>

            </Fluid>
        </Form>
    </div>
</template>