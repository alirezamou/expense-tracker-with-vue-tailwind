<script>
import { useTransactionStore } from '../stores/transaction';
export default {
    setup() {
        const transactionStore = useTransactionStore();
        return { transactionStore };
    },
    computed: {
        amounts() { return this.transactionStore.transactions.map(trx => trx.amount) },
        incomeAmount() { return this.amounts.filter(amnt => amnt > 0).reduce((acc, curVal) => acc += curVal, 0) },
        expenseAmount() { return this.amounts.filter(amnt => amnt < 0).reduce((acc, curVal) => acc += curVal, 0) },
    }
}
</script>

<template>
    <div class="flex justify-between gap-4 bg-white shadow p-[20px] my-[20px] mx-0">
        <div class="flex-1 text-center border-r border-solid border-[#dedede]">
            <h2 class="font-bold uppercase text-xl">Income</h2>
            <p class="text-green-600 text-xl">{{ incomeAmount ? `+${incomeAmount}` : '0' }}</p>
        </div>
        <div class="flex-1 text-center">
            <h2 class="font-bold uppercase text-xl">Expense</h2>
            <p class="text-red-600 text-xl">{{ expenseAmount }}</p>
        </div>
    </div>
</template>