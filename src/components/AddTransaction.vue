<script>
import { useTransactionStore } from '../stores/transaction';
export default {
    setup() {
        const { addTransaction } = useTransactionStore();
        return { addTransaction };
    },
    data() {
        return {
            text: "",
            amount: "",
            errorAmount: false
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            if(!this.text || !this.amount) return;
            if(this.errorAmount) {
                return;
            }

            const trx = {
                id: Date.now(),
                text: this.text,
                amount: parseFloat(this.amount)
            }
            this.doSubmit(trx);
            
        },
        doSubmit(trx) {
            this.addTransaction(trx);
            this.text = "";
            this.amount = "";
        },
        onChangeAmount() {
            if(isNaN(+this.amount)) this.errorAmount = true;
            else this.errorAmount = false;
        }
    }
}
</script>

<template>
    <div>
        <h2 class="border-b-2 border-[#dedede] text-xl font-bold">Add new transaction</h2>
        <form class="flex flex-col gap-2">
        <div>
            <label class="inline-block my-[10px]" for="text">Text</label>
            <input 
                type="text" 
                id="text" 
                placeholder="Enter text..."
                class="block p-1.5 border w-full rounded-sm outline-none focus:border-blue-700"
                v-model="text"
            />
        </div>
        <div>
            <label class="inline-block my-[10px]" for="amount">
                Amount
                <br />
                (negative - expense, positive - income)
            </label>
            <input 
                type="text" 
                id="amount" 
                placeholder="Enter amount..."
                class="block p-1.5 border w-full rounded-sm outline-none"
                :class="errorAmount ? 'border-red-700' : 'focus:border-blue-700'"
                v-model="amount"
                @input="onChangeAmount"
            />
        </div>
        <button 
            class="bg-[#9c88ff] text-white text-lg py-1 shadow block outline-none"
            type="submit"
            @click="handleSubmit"
        >
        Add Transaction 
        </button>
        </form>
    </div>
</template>