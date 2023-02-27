import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transactions", {
  state: () => ({
    transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  }),
  actions: {
    deleteTransaction(transaction) {
      this.transactions = this.transactions.filter(
        (trx) => trx.id !== transaction.id
      );
    },
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
  },
});
