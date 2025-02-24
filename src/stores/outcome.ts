import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import { Outcome } from "@/core/models/Outcome";

export const useOutcomeStore = defineStore("outcome", () => {
  const outcomeRef: Ref<Outcome[], Outcome[]> = ref([new Outcome("1", 10, "Lunch", new Date(), "Food")]);

  const totalOutcome = computed(() =>
    outcomeRef.value.length === 0
      ? 0
      : outcomeRef.value.reduce((acc, outcome) => acc + outcome.amount, 0)
  );

  function add(expense: Outcome) {
    outcomeRef.value.push(expense);
  }

  return { outcomeRef, totalOutcome, add };
});
