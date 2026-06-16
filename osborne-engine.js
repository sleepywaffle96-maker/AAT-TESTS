// ======================
// HELPERS
// ======================

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

function money(n){
    return `£${n}`;
}

function month(){
    return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][rand(0,11)];
}

// ======================
// LEVEL 3 CH2 ENGINE
// ======================

function generateOsborneL2CH2(type){

    const business = randomBusiness();

    if(type === 1){

        const cashbook = rand(5000,15000);
        const charges = rand(10,80);
        const lodgement = rand(100,900);

        const adjusted = cashbook - charges + lodgement;

        return {
            scenario:
            `${business} is preparing a bank reconciliation for ${month()}.

Cash book balance: ${money(cashbook)}
Bank charges not recorded: ${money(charges)}
Outstanding lodgement: ${money(lodgement)}`,

            question: "What is the adjusted cash book balance?",

            options: shuffle([
                money(adjusted),
                money(cashbook),
                money(cashbook - charges),
                money(cashbook + lodgement)
            ]),

            correct: 0
        };
    }

    if(type === 2){

        const receivables = rand(20000,50000);
        const sales = rand(5000,15000);
        const receipts = rand(3000,12000);
        const writeoff = rand(100,900);

        const balance = receivables + sales - receipts - writeoff;

        return {
            scenario:
            `${business} sales ledger movements for ${month()}.`,

            question: "What is the closing receivables balance?",

            options: shuffle([
                money(balance),
                money(receivables + sales),
                money(receivables - receipts),
                money(receivables + receipts)
            ]),

            correct: 0
        };
    }

    if(type === 3){

        const diff = rand(50,500);

        return {
            scenario:
            `${business} trial balance does not agree.`,

            question:
            `What is the correct action when the difference is ${money(diff)}?`,

            options: shuffle([
                `Open suspense account for ${money(diff)}`,
                "Ignore difference",
                "Adjust bank statement",
                "Write off as expense"
            ]),

            correct: 0
        };
    }

    throw new Error("Type not implemented: " + type);
}
