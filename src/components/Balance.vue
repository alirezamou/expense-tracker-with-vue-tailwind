<script>
import { useTransactionStore } from '../stores/transaction';
export default {
    setup() {
        const transactionStore = useTransactionStore();
        return { transactionStore };
    },
    computed: {
        balanceAmount() {
            const amounts = this.transactionStore.transactions.map(trx => trx.amount);
            return amounts.reduce((acc, curVal) => acc += curVal, 0);
        }
    }
}

</script>

<template>
    <div>
        <h1 class="uppercase">Your balance is: </h1>
        <h4 class="font-bold text-3xl tracking-wider">{{ balanceAmount > 0 ? `+${balanceAmount}` : balanceAmount }}</h4>
    </div>
</template>