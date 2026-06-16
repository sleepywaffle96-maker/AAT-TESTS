// =====================
// HELPERS
// =====================

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr){
    return arr.sort(() => Math.random() - 0.5);
}

function pick(arr){
    return arr[rand(0, arr.length - 1)];
}

function randomBusiness(){
    return pick([
        "Green Ltd",
        "Alpha Traders",
        "Blue Services",
        "North Supplies",
        "Delta Retail",
        "Prime Solutions",
        "Oak Enterprises",
        "River Trading"
    ]);
}

function randomPerson(){
    return pick([
        "James Smith",
        "Emma Wilson",
        "Oliver Brown",
        "Sophia Taylor",
        "Jack Harris",
        "Emily Jones",
        "Harry Evans",
        "Grace Walker",
        "Noah White",
        "Amelia Green"
    ]);
}

// =====================
// L2 CH2 GENERATOR
// (1 domanda = 1 scenario completo)
// =====================

function generateDynamicL2CH2(){

    const type = rand(1,3);
    const business = randomBusiness();

    // TYPE 1 - Bank reconciliation
    if(type === 1){

        const cashbook = rand(5000,15000);
        const bank = cashbook + rand(-500,500);
        const diff = bank - cashbook;

        const options = shuffle([
            "Timing difference",
            "Compensating error",
            "Error of principle",
            "Fraud"
        ]);

        return {
            question:
            `${business} is preparing a bank reconciliation.

Cash book balance: £${cashbook}
Bank statement: £${bank}

What best explains the difference of £${diff}?`,

            options,
            correct: 0
        };
    }

    // TYPE 2 - Bad debt
    if(type === 2){

        const person = randomPerson();
        const amount = rand(500,5000);

        const options = shuffle([
            "Irrecoverable debt",
            "Accrual",
            "Prepayment",
            "Contra entry"
        ]);

        return {
            question:
            `${person} owes ${business} £${amount}.

The business believes the amount will not be recovered.

How should this be recorded?`,

            options,
            correct: 0
        };
    }

    // TYPE 3 - Suspense account
    if(type === 3){

        const diff = rand(50,500);

        const options = shuffle([
            `Open suspense account for £${diff}`,
            "Ignore difference",
            "Adjust bank statement",
            "Write off difference"
        ]);

        return {
            question:
            `${business} prepares a trial balance.

The debit total exceeds the credit total by £${diff}.

What is the correct immediate action?`,

            options,
            correct: 0
        };
    }
}
