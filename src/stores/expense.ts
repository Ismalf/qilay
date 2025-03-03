import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import { Expense } from "@/core/models/Expense";

export const useExpenseStore = defineStore("expense", () => {
  const expenseRef: Ref<Expense[], Expense[]> = ref([]);

  const totalExpense = computed(() =>
    expenseRef.value.length === 0
      ? 0
      : expenseRef.value.reduce((acc, expense) => acc + expense.amount, 0)
  );

  function add(expense: Expense) {
    expenseRef.value.unshift(expense);
  }

  return { expenseRef, totalExpense, add };
});
