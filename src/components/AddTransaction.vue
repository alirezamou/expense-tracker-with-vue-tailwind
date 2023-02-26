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
            />
        </div>
        <button 
            class="bg-[#9c88ff] text-white text-lg py-1 shadow block outline-none"
            type="submit"
        >
        Add Transaction 
        </button>
        </form>
    </div>
</template>