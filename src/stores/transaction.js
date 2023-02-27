import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transactions", {
  state: () => ({
    // dummy transactions
    transactions: [
      { id: 1, text: "Flower", amount: -20 },
      { id: 2, text: "Salary", amount: 300 },
      { id: 3, text: "Book", amount: -10 },
      { id: 4, text: "Camera", amount: 150 },
    ],
  }),
  actions: {
    deleteTransaction(transaction) {
      this.transactions = this.transactions.filter(
        (trx) => trx.id !== transaction.id
      );
    },
  },
});
