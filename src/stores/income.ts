import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Income } from "@/core/models/Income";

export const useIncomeStore = defineStore("income", () => {
  const incomeRef = ref(new Income(0, "Qilay & Co.", 10, false));

  const payday = computed(() =>
    incomeRef.value.lastday
      ? new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      : new Date(new Date().getFullYear(), new Date().getMonth() , incomeRef.value.payday)
  );

  const formattedPayday = computed(() => {
    const day = payday.value.getDate();
    const month = payday.value.toLocaleString("default", { month: "short" });
    const daySuffix = (day: number) => {
      if (day > 3 && day < 21) return "th"; // 11th, 12th, 13th, etc.
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${daySuffix(day)} ${month}`;
  });

  function save(income: Income) {
    incomeRef.value = income;
  }

  return { incomeRef, payday, formattedPayday, save };
});
