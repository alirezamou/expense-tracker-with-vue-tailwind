<script>
import { useTransactionStore } from '../stores/transaction';
export default {
    setup() {
        const transactionStore = useTransactionStore();
        return { transactionStore };
    },
    computed: {
        transactions() { return this.transactionStore.transactions; }
    }
}
</script>

<template>
    <div>
        <h2 class="font-bold text-xl border-b-2 border-solid border-[#dedede]">History</h2>
        <ul class="mt-2">
            <li v-for="trx in transactions"
             :id="trx.id" 
             class="group relative bg-white my-2 flex justify-between p-2 shadow rounded-2 border-r-4"
             :class="trx.amount >= 0 ? 'border-green-500' : 'border-red-500'"
            >
                <span>{{ trx.text }}</span>
                <span>{{ trx.amount > 0 ? `+${trx.amount}` : trx.amount }}$</span>
                <button
                class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full px-2 py-0.5 bg-[#e74c3c] text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity ease duration-300"
                >x</button>
            </li>
        </ul>
    </div>
</template>