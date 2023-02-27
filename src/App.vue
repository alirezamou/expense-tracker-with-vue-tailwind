<script>
import { useTransactionStore } from "./stores/transaction";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

export default {
    setup() {
        const transactionStore = useTransactionStore();
        return { transactionStore };
    },
    components: {
        Header,
        Balance,
        IncomeExpense,
        TransactionList,
        AddTransaction
    },
    mounted() {
        this.transactionStore.$subscribe((mutation, state) => {
            localStorage.setItem('transactions', JSON.stringify(state.transactions));
        })
    }
}
</script>

<template>
    <Header title="Expense Tracker" />
    <Balance />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />
</template>
