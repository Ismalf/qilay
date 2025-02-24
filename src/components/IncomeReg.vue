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
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
const emit = defineEmits();
import { monthLastDay } from '@/core/libs/date';
import { useIncomeStore } from '@/stores/income';
const incomeStore = useIncomeStore();
const initialValues = ref(incomeStore.incomeRef);
const lastDay = monthLastDay();
const resolver = zodResolver(
    z.object({
        description: z.string().min(1, { message: 'Description is required.' }),
        amount: z.number().min(0, { message: 'Amount is required.' }),
        payday: z.number().min(1, { message: 'Payday is required.' }),
        lastday: z.boolean()
    })
);

const onFormSubmit = (e) => {

    if (e.valid) {
        //toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
        incomeStore.save(e.values);
        emit('close');
    }

};




</script>
<template>
    <div class="max-w-[700px] w-full justify-self-center">
        <h2 class="text-4xl font-bold">Income registry</h2>

        <Form class="w-full py-4" v-slot="$form" @submit="onFormSubmit" :resolver :initialValues>
            <Fluid class="w-full">
                <span class=" text-2xl font-bold py-2 block">Monthly paycheck</span>
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
                                <i class="pi pi-calendar"></i>
                            </InputGroupAddon>

                            <FloatLabel variant="on">
                                <InputNumber v-if="$form.lastday?.value" :default-value="lastDay" name="payday" disabled
                                    placeholder="{{lastDay}}" locale="en-US" />
                                <InputNumber v-if="!$form.lastday?.value" name="payday" :min="1" :max="28"
                                    locale="en-US" />
                                <label for="payday">Payday</label>
                            </FloatLabel>
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup>

                            <InputGroupAddon>
                                <Checkbox name="lastday" id="lastDay" binary  />
                            </InputGroupAddon>

                            <FloatLabel variant="on">
                                <InputText disabled="true" locale="en-US" />
                                <label for="lastDay">Last day of month</label>
                            </FloatLabel>

                        </InputGroup>
                    </div>
                    <Button label="Track expenses" severity="contrast" type="submit" class="col-span-full" />
                </div>
                {{ $form }}
                {{ lastDay }}
            </Fluid>
        </Form>
    </div>
</template>