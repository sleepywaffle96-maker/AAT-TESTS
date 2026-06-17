// =====================
// HELPERS (UNA SOLA VOLTA)
// =====================

function rand(min,max){

    return Math.floor(
        Math.random()*(max-min+1)
    ) + min;
}

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j =
        Math.floor(Math.random()*(i+1));

        [array[i],array[j]] =
        [array[j],array[i]];
    }

    return array;
}

function currency(v){

    return "£" +
    Number(v).toFixed(2);
}
function pick(arr){
    return arr[(0, arr.length - 1)];
}

function RandomBusiness(){
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
    function RandomPerson(){

    const names = [
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
    ];

    return names[(0, names.length - 1)];
}
/* ------------------------
   LEVEL 2 QUESTION BANK
------------------------ */

function generateL2CH1(type = null){

    if(type === null){
        type = rand(1,15);
    }

    const business = randomBusiness();

    if(type === 1){

        const amount = rand(2000,15000);

        const correct =
            "Assets increase and capital increases";

        const options = shuffle([
            correct,
            "Assets decrease and capital increases",
            "Liabilities increase only",
            "Expenses increase"
        ]);

        return {
            question:
            `${business} owner introduces ${currency(amount)} into the business bank account.

What is the effect on the accounting equation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const amount = rand(100,2000);

        const correct =
            "Assets decrease and owner's equity decreases";

        const options = shuffle([
            correct,
            "Assets increase and income increases",
            "Liabilities increase",
            "Expenses decrease"
        ]);

        return {
            question:
            `The owner withdraws ${currency(amount)} from the business bank account for personal use.

Which statement is correct?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const amount = rand(300,5000);

        const correct =
            "Cash increases and sales income increases";

        const options = shuffle([
            correct,
            "Cash decreases and sales increase",
            "Liabilities increase",
            "Expenses increase"
        ]);

        return {
            question:
            `${business} makes a cash sale of ${currency(amount)}.

What is the effect on the records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const amount = rand(100,2500);

        const correct =
            "Cash decreases and expenses increase";

        const options = shuffle([
            correct,
            "Cash increases and expenses increase",
            "Income increases",
            "Capital increases"
        ]);

        return {
            question:
            `${business} purchases office supplies for cash costing ${currency(amount)}.

What happens in the accounts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 5){

        const amount = rand(2000,12000);

        const correct =
            "Equipment increases and cash decreases";

        const options = shuffle([
            correct,
            "Income increases",
            "Expenses increase immediately",
            "Liabilities increase"
        ]);

        return {
            question:
            `${business} purchases equipment costing ${currency(amount)} using the business bank account.

What is the immediate effect?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const assets = rand(12000,30000);
        const liabilities = rand(2000,8000);

        const capital =
            assets - liabilities;

        const options = shuffle([
            capital,
            capital + 1000,
            capital - 1000,
            capital + 2000
        ]);

        return {
            question:
            `Assets = ${currency(assets)}
Liabilities = ${currency(liabilities)}

Calculate capital.`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(capital)
        };
    }

    if(type === 7){

        const capital = rand(5000,18000);
        const liabilities = rand(1000,7000);

        const assets =
            capital + liabilities;

        const options = shuffle([
            assets,
            assets + 1000,
            assets - 1000,
            assets + 1500
        ]);

        return {
            question:
            `Capital = ${currency(capital)}
Liabilities = ${currency(liabilities)}

Calculate total assets.`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(assets)
        };
    }

    if(type === 8){

        const correct =
            "Assets increase and liabilities increase";

        const options = shuffle([
            correct,
            "Assets decrease and income increases",
            "Capital decreases",
            "Expenses decrease"
        ]);

        return {
            question:
            `${business} purchases inventory on credit from a supplier.

What is the immediate effect on the accounting equation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 9){

        const correct =
            "Asset";

        const options = shuffle([
            correct,
            "Liability",
            "Income",
            "Expense"
        ]);

        return {
            question:
            `${business} buys a delivery van for business use.

How should the van be classified?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct =
            "Liability";

        const options = shuffle([
            correct,
            "Asset",
            "Income",
            "Expense"
        ]);

        return {
            question:
            `${business} owes a supplier money for goods purchased on credit.

How should this balance be classified?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const capital = rand(8000,15000);
        const equipment = rand(1000,5000);

        const correct =
            "Total assets remain greater than zero";

        const options = shuffle([
            correct,
            "All assets disappear",
            "Capital becomes zero",
            "Liabilities automatically increase"
        ]);

        return {
            question:
            `${business} starts trading.

Step 1:
The owner introduces ${currency(capital)}.

Step 2:
Equipment costing ${currency(equipment)} is purchased using business cash.

Which statement is correct?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const sales = rand(1000,5000);
        const expenses = rand(200,1500);

        const correct =
            "Income exceeds expenses";

        const options = shuffle([
            correct,
            "Expenses exceed income",
            "Assets become zero",
            "Liabilities must increase"
        ]);

        return {
            question:
            `${business} makes cash sales of ${currency(sales)} and pays expenses of ${currency(expenses)}.

Which statement is correct?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 13){

        const capital = rand(5000,12000);
        const drawings = rand(500,2000);

        const correct =
            "Owner's equity decreases";

        const options = shuffle([
            correct,
            "Income increases",
            "Liabilities increase",
            "Sales increase"
        ]);

        return {
            question:
            `A business owner introduces ${currency(capital)} and later withdraws ${currency(drawings)} for personal use.

What is the overall effect?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct =
            "To record business transactions accurately";

        const options = shuffle([
            correct,
            "To increase profits automatically",
            "To remove liabilities",
            "To reduce taxes automatically"
        ]);

        return {
            question:
            `${business} wants reliable financial records.

What is the primary purpose of bookkeeping?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct =
            "The business and owner are treated separately";

        const options = shuffle([
            correct,
            "Personal expenses belong in business records",
            "The owner and business are the same accounting entity",
            "Only companies apply bookkeeping rules"
        ]);

        return {
            question:
            `The owner pays for a personal holiday using a personal bank account.

How should this be treated under the business entity concept?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L2-CH1 type not implemented: " + type);
}

function generateL2CH2(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- CONTROL ACCOUNTS + PRACTICAL ---------------- */

    if(type === 1){

        const opening = rand(8000,15000);
        const sales = rand(2000,6000);
        const cash = rand(1000,4000);

        const closing = opening + sales - cash;

        const options = shuffle([
            closing,
            closing + 200,
            closing - 300,
            closing + 500
        ]);

        return {
            question:
            `${business} has:
Opening balance £${opening}
Sales £${sales}
Cash received £${cash}

What is the closing balance of the sales ledger control account?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(closing)
        };
    }

    if(type === 2){

        const opening = rand(5000,12000);
        const purchases = rand(2000,5000);
        const payments = rand(1000,4000);

        const closing = opening + purchases - payments;

        const options = shuffle([
            closing,
            closing + 150,
            closing - 200,
            closing + 400
        ]);

        return {
            question:
            `${business} purchase ledger control account:
Opening £${opening}
Purchases £${purchases}
Payments £${payments}

What is the closing balance?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(closing)
        };
    }

    /* ---------------- BANK RECONCILIATION PRACTICAL ---------------- */

    if(type === 3){

        const cashbook = rand(4000,9000);
        const bank = cashbook - rand(100,800);

        const correct = "Unpresented cheques";

        const options = shuffle([
            correct,
            "Capital injection",
            "Inventory error",
            "Depreciation"
        ]);

        return {
            question:
            `Cash book balance £${cashbook}
Bank statement £${bank}

What is the most likely reason for the difference?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const cashbook = rand(3000,8000);
        const bank = cashbook + rand(100,600);

        const correct = "Outstanding lodgements";

        const options = shuffle([
            correct,
            "Bank charges error",
            "Overstated capital",
            "Sales return"
        ]);

        return {
            question:
            `Cash book £${cashbook}
Bank statement £${bank}

What explains the difference?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERRORS (HIGH PRACTICAL) ---------------- */

    if(type === 5){

        const correct = "Error of omission";

        const options = shuffle([
            correct,
            "Error of principle",
            "Bank reconciliation error",
            "VAT error"
        ]);

        return {
            question:
            `${business} completely forgot to record a purchase invoice. What type of error is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Error of principle";

        const options = shuffle([
            correct,
            "Error of omission",
            "Compensating error",
            "Cash error"
        ]);

        return {
            question:
            `A non-current asset purchase has been recorded as an expense. What type of error is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Suspense account";

        const diff = rand(50,500);

        const options = shuffle([
            correct,
            "Capital account",
            "Sales account",
            "Bank account"
        ]);

        return {
            question:
            `A trial balance does not balance by £${diff}. Where is the difference temporarily recorded?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CONTROL ACCOUNT LOGIC ---------------- */

    if(type === 8){

        const correct = "Sales invoices";

        const options = shuffle([
            correct,
            "Bank statements",
            "Payroll reports",
            "VAT returns"
        ]);

        return {
            question:
            `What increases the sales ledger control account?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 9){

        const correct = "Purchase invoices";

        const options = shuffle([
            correct,
            "Sales invoices",
            "Receipts",
            "Cash book only"
        ]);

        return {
            question:
            `What increases the purchase ledger control account?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CALCULATION + INTERPRETATION ---------------- */

    if(type === 10){

        const diff = rand(100,800);

        const options = shuffle([
            "Investigate differences in control accounts",
            "Ignore difference",
            "Adjust profit immediately",
            "Write off balance"
        ]);

        return {
            question:
            `A control account differs from subsidiary records by £${diff}. What should be done first?`,
            options,
            correct: options.indexOf("Investigate differences in control accounts")
        };
    }

    /* ---------------- FINAL PRACTICAL UNDERSTANDING ---------------- */

    if(type === 11){

        const correct = "Reconciliation between control accounts and subsidiary ledgers";

        const options = shuffle([
            correct,
            "Tax calculation",
            "Payroll processing",
            "Budget preparation"
        ]);

        return {
            question:
            `What is the purpose of reconciling control accounts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Timing difference";

        const options = shuffle([
            correct,
            "Capital error",
            "Profit manipulation",
            "Inventory loss"
        ]);

        return {
            question:
            `A payment has been recorded in the cash book but not yet on the bank statement. What is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 13){

        const correct = "Ledger accuracy";

        const options = shuffle([
            correct,
            "Profit maximisation",
            "Tax avoidance",
            "Cash generation"
        ]);

        return {
            question:
            `What is the main purpose of control accounts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "At least two accounts are affected";

        const options = shuffle([
            correct,
            "Only one account is affected",
            "Only cash accounts",
            "Only expense accounts"
        ]);

        return {
            question:
            `In double-entry bookkeeping, what is always true?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- HARD PRACTICAL FINAL ---------------- */

    if(type === 15){

        const opening = rand(10000,20000);
        const sales = rand(3000,8000);
        const cash = rand(2000,7000);

        const closing = opening + sales - cash;

        const options = shuffle([
            closing,
            closing + 300,
            closing - 400,
            closing + 600
        ]);

        return {
            question:
            `${business} control account:
Opening £${opening}
Sales £${sales}
Cash £${cash}

What is the correct closing balance?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(closing)
        };
    }

    throw new Error("L2-CH2 type not implemented: " + type);
}
function generateL2CH3(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- UNIT COSTING BASIC ---------------- */

    if(type === 1){

        const materials = rand(2,15);
        const labour = rand(3,20);
        const overhead = rand(1,10);

        const total = materials + labour + overhead;

        const options = shuffle([
            total,
            total + 2,
            total - 3,
            total + 5
        ]);

        return {
            question:
            `A product has:
Materials £${materials}
Labour £${labour}
Overheads £${overhead}

What is the total cost per unit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    if(type === 2){

        const cost = rand(10,50);
        const markup = rand(20,100);

        const selling = cost + (cost * markup / 100);

        const options = shuffle([
            Math.round(selling),
            Math.round(selling + 5),
            Math.round(selling - 5),
            Math.round(selling + 10)
        ]);

        return {
            question:
            `A product costs £${cost} and has a markup of ${markup}%.

What is the selling price (approx.)?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(Math.round(selling))
        };
    }

    /* ---------------- LABOUR COSTING ---------------- */

    if(type === 3){

        const hours = rand(5,20);
        const rate = rand(8,25);

        const cost = hours * rate;

        const options = shuffle([
            cost,
            cost + 10,
            cost - 15,
            cost + 20
        ]);

        return {
            question:
            `A worker is paid £${rate} per hour for ${hours} hours.

What is the total labour cost?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(cost)
        };
    }

    /* ---------------- MATERIAL WASTE ---------------- */

    if(type === 4){

        const used = rand(10,40);
        const waste = rand(1,5);

        const total = used + waste;

        const options = shuffle([
            total,
            total + 2,
            total - 1,
            total + 4
        ]);

        return {
            question:
            `A process uses ${used}kg of material and wastes ${waste}kg.

What is total material input?`,
            options: options.map(v => total + " kg"),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- COST PER UNIT ---------------- */

    if(type === 5){

        const totalCost = rand(200,800);
        const units = rand(20,80);

        const unitCost = totalCost / units;

        const options = shuffle([
            unitCost,
            unitCost + 2,
            unitCost - 1,
            unitCost + 3
        ]);

        return {
            question:
            `Total production cost is £${totalCost} for ${units} units.

What is cost per unit (approx.)?`,
            options: options.map(v => currency(v.toFixed(2))),
            correct: options.indexOf(unitCost)
        };
    }

    /* ---------------- SIMPLE PROFIT ---------------- */

    if(type === 6){

        const cost = rand(5,30);
        const selling = cost + rand(5,20);

        const profit = selling - cost;

        const options = shuffle([
            profit,
            profit + 2,
            profit - 1,
            profit + 3
        ]);

        return {
            question:
            `A product costs £${cost} and sells for £${selling}.

What is the profit per unit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- OVERHEADS ---------------- */

    if(type === 7){

        const rent = rand(100,500);
        const utilities = rand(50,200);

        const total = rent + utilities;

        const options = shuffle([
            total,
            total + 10,
            total - 20,
            total + 30
        ]);

        return {
            question:
            `A business has:
Rent £${rent}
Utilities £${utilities}

What are total overhead costs?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- BREAK EVEN BASIC ---------------- */

    if(type === 8){

        const fixed = rand(100,500);
        const contrib = rand(5,20);

        const breakEven = Math.round(fixed / contrib);

        const options = shuffle([
            breakEven,
            breakEven + 2,
            breakEven - 3,
            breakEven + 5
        ]);

        return {
            question:
            `Fixed costs are £${fixed}.
Contribution per unit is £${contrib}.

What is the break-even point (units)?`,
            options: options.map(v => options),
            correct: options.indexOf(breakEven)
        };
    }

    /* ---------------- COST CLASSIFICATION ---------------- */

    if(type === 9){

        const correct = "Direct cost";

        const options = shuffle([
            correct,
            "Indirect cost",
            "Fixed cost only",
            "Capital cost"
        ]);

        return {
            question:
            `Raw materials used in production are classified as what type of cost?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Indirect cost";

        const options = shuffle([
            correct,
            "Direct cost",
            "Revenue cost",
            "Variable income"
        ]);

        return {
            question:
            `Electricity used in a factory is classified as what type of cost?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 11){

        const cost = rand(20,60);
        const markup = 50;

        const selling = cost * 1.5;

        const options = shuffle([
            Math.round(selling),
            Math.round(selling + 5),
            Math.round(selling - 5),
            Math.round(selling + 10)
        ]);

        return {
            question:
            `${business} applies a 50% markup.
Cost is £${cost}.

What is selling price?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(Math.round(selling))
        };
    }

    /* ---------------- SAFETY ---------------- */

    throw new Error("L2-CH3 type not implemented: " + type);
}
function generateL2CH4(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- BUSINESS DECISIONS ---------------- */

    if(type === 1){

        const correct = "Increase sales revenue";

        const options = shuffle([
            correct,
            "Increase fixed costs",
            "Reduce assets",
            "Ignore customers"
        ]);

        return {
            question:
            `${business} wants to improve profitability. What is the most appropriate objective?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Higher demand for products";

        const options = shuffle([
            correct,
            "Lower customer base",
            "Reduced competition only",
            "Higher taxes"
        ]);

        return {
            question:
            `What is most likely to improve a business's revenue?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BUSINESS TYPES ---------------- */

    if(type === 3){

        const correct = "Sole trader";

        const options = shuffle([
            correct,
            "Public limited company",
            "Government agency",
            "Charity only"
        ]);

        return {
            question:
            `${business} is owned and controlled by one person. What type of business is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Limited liability";

        const options = shuffle([
            correct,
            "Unlimited liability",
            "No liability",
            "Government protection"
        ]);

        return {
            question:
            `What is a key advantage of a limited company?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- STAKEHOLDERS ---------------- */

    if(type === 5){

        const correct = "Customers";

        const options = shuffle([
            correct,
            "Banks only",
            "Government only",
            "Suppliers only"
        ]);

        return {
            question:
            `Who is most affected by product quality?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Suppliers";

        const options = shuffle([
            correct,
            "Customers",
            "Employees only",
            "Competitors only"
        ]);

        return {
            question:
            `Who provides goods or services to a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BUSINESS OBJECTIVES ---------------- */

    if(type === 7){

        const correct = "Profit maximisation";

        const options = shuffle([
            correct,
            "Random spending",
            "Loss creation",
            "No objectives"
        ]);

        return {
            question:
            `What is a common objective of a private sector business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Customer satisfaction";

        const options = shuffle([
            correct,
            "Increasing errors",
            "Reducing quality",
            "Ignoring feedback"
        ]);

        return {
            question:
            `Why is customer satisfaction important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- MARKET FACTORS ---------------- */

    if(type === 9){

        const correct = "Competition";

        const options = shuffle([
            correct,
            "Weather only",
            "Internal bookkeeping only",
            "Accounting standards"
        ]);

        return {
            question:
            `What external factor affects business pricing decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Supply and demand";

        const options = shuffle([
            correct,
            "Bank reconciliation",
            "Depreciation rules",
            "Payroll systems"
        ]);

        return {
            question:
            `What determines the price of most goods in a market economy?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ETHICS / RESPONSIBILITY ---------------- */

    if(type === 11){

        const correct = "Ethical behaviour";

        const options = shuffle([
            correct,
            "Tax avoidance",
            "Misreporting profits",
            "Ignoring laws"
        ]);

        return {
            question:
            `What is expected from businesses in society?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Corporate Social Responsibility (CSR)";

        const options = shuffle([
            correct,
            "Profit hiding",
            "Expense inflation",
            "Tax evasion"
        ]);

        return {
            question:
            `What term describes a business acting responsibly towards society?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BASIC SCENARIOS ---------------- */

    if(type === 13){

        const correct = "Increase marketing";

        const options = shuffle([
            correct,
            "Reduce customers",
            "Ignore sales",
            "Close business"
        ]);

        return {
            question:
            `${business} wants to increase awareness of its products. What should it do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Expand market share";

        const options = shuffle([
            correct,
            "Reduce output",
            "Stop advertising",
            "Increase losses"
        ]);

        return {
            question:
            `What does a business aim to achieve in growth strategy?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 15){

        const correct = "Improve efficiency and reduce costs";

        const options = shuffle([
            correct,
            "Increase waste",
            "Ignore competition",
            "Reduce customers"
        ]);

        return {
            question:
            `${business} wants to improve performance. What is the best strategy?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L2-CH4 type not implemented: " + type);
}
function generateL2CH5(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- SCENARIO 1: BUSINESS GROWTH ---------------- */

    if(type === 1){

        const correct = "Increase advertising and marketing";

        const options = shuffle([
            correct,
            "Reduce product quality",
            "Increase waste",
            "Stop selling products"
        ]);

        return {
            question:
            `${business} is experiencing a decline in sales over the last 3 months.

What is the best action to improve performance?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 2: CUSTOMER PROBLEMS ---------------- */

    if(type === 2){

        const correct = "Improve customer service";

        const options = shuffle([
            correct,
            "Ignore complaints",
            "Increase prices without reason",
            "Reduce staff training"
        ]);

        return {
            question:
            `${business} has received many customer complaints about service delays.

What should the business do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 3: COST PRESSURE ---------------- */

    if(type === 3){

        const correct = "Reduce unnecessary costs";

        const options = shuffle([
            correct,
            "Increase all costs",
            "Ignore expenses",
            "Stop budgeting"
        ]);

        return {
            question:
            `${business} profits are falling due to high operating costs.

What is the most appropriate action?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 4: COMPETITION ---------------- */

    if(type === 4){

        const correct = "Differentiate products";

        const options = shuffle([
            correct,
            "Copy competitors exactly",
            "Reduce product range to zero",
            "Ignore competitors"
        ]);

        return {
            question:
            `A new competitor has entered the market with lower prices.

What should ${business} do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 5: EXPANSION DECISION ---------------- */

    if(type === 5){

        const correct = "Open new markets";

        const options = shuffle([
            correct,
            "Close existing markets",
            "Reduce customer base",
            "Stop selling products"
        ]);

        return {
            question:
            `${business} has stable profits and wants to grow.

What is the best strategy?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 6: EMPLOYEES ---------------- */

    if(type === 6){

        const correct = "Increase staff training";

        const options = shuffle([
            correct,
            "Reduce employee skills",
            "Ignore performance issues",
            "Cut all wages"
        ]);

        return {
            question:
            `Productivity at ${business} has decreased due to staff errors.

What should the business do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 7: QUALITY ISSUES ---------------- */

    if(type === 7){

        const correct = "Improve quality control systems";

        const options = shuffle([
            correct,
            "Ignore defects",
            "Increase defective products",
            "Reduce inspections"
        ]);

        return {
            question:
            `${business} has noticed an increase in product defects.

What is the best response?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 8: CASH FLOW ---------------- */

    if(type === 8){

        const correct = "Improve cash flow management";

        const options = shuffle([
            correct,
            "Ignore cash shortages",
            "Spend without planning",
            "Remove budgeting systems"
        ]);

        return {
            question:
            `${business} is struggling to pay suppliers on time due to cash shortages.

What should be done?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 9: PRICING ---------------- */

    if(type === 9){

        const correct = "Review pricing strategy";

        const options = shuffle([
            correct,
            "Ignore market changes",
            "Set random prices",
            "Eliminate pricing structure"
        ]);

        return {
            question:
            `Sales are falling because customers think prices are too high.

What should ${business} do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 10: TECHNOLOGY ---------------- */

    if(type === 10){

        const correct = "Invest in new technology";

        const options = shuffle([
            correct,
            "Avoid automation",
            "Reduce efficiency",
            "Ignore innovation"
        ]);

        return {
            question:
            `${business} is using outdated systems that slow down production.

What is the best action?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 11: CUSTOMER RETENTION ---------------- */

    if(type === 11){

        const correct = "Build customer loyalty programmes";

        const options = shuffle([
            correct,
            "Ignore existing customers",
            "Increase complaints",
            "Reduce service quality"
        ]);

        return {
            question:
            `${business} is losing repeat customers.

What should it focus on?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 12: PROFIT DECLINE ---------------- */

    if(type === 12){

        const correct = "Analyse financial performance";

        const options = shuffle([
            correct,
            "Ignore financial reports",
            "Increase losses",
            "Stop accounting records"
        ]);

        return {
            question:
            `Profits at ${business} have decreased significantly.

What is the first step?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 13: SUPPLY ISSUES ---------------- */

    if(type === 13){

        const correct = "Find alternative suppliers";

        const options = shuffle([
            correct,
            "Stop production permanently",
            "Ignore shortages",
            "Increase delays"
        ]);

        return {
            question:
            `${business} is experiencing delays from current suppliers.

What should it do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SCENARIO 14: BUSINESS ETHICS ---------------- */

    if(type === 14){

        const correct = "Act ethically and legally";

        const options = shuffle([
            correct,
            "Ignore laws",
            "Reduce transparency",
            "Increase fraud"
        ]);

        return {
            question:
            `What should all businesses ensure in their operations?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL MIXED SCENARIO ---------------- */

    if(type === 15){

        const correct = "Improve overall business efficiency";

        const options = shuffle([
            correct,
            "Increase waste",
            "Ignore performance",
            "Reduce planning"
        ]);

        return {
            question:
            `${business} is facing multiple issues: declining sales, rising costs, and customer complaints.

What is the best overall response?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L2-CH5 type not implemented: " + type);
}
/* ------------------------
   LEVEL 3 QUESTION BANK
------------------------ */

function generateL3CH1(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- BASIC ACCOUNTING UNDERSTANDING ---------------- */

    if(type === 1){

        const correct = "Provide financial information for decision making";

        const options = shuffle([
            correct,
            "Increase profit automatically",
            "Avoid all business risks",
            "Replace management decisions"
        ]);

        return {
            question:
            `What is the main purpose of financial accounting?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BUSINESS STRUCTURE ---------------- */

    if(type === 2){

        const correct = "Limited liability company";

        const options = shuffle([
            correct,
            "Sole trader",
            "Unregistered partnership",
            "Informal group"
        ]);

        return {
            question:
            `${business} is owned by shareholders and has separate legal identity. What type of business is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- PRACTICAL PROFIT LOGIC ---------------- */

    if(type === 3){

        const revenue = rand(5000,20000);
        const costs = rand(3000,15000);

        const profit = revenue - costs;

        const options = shuffle([
            profit,
            profit + 500,
            profit - 400,
            profit + 800
        ]);

        return {
            question:
            `${business} has revenue of £${revenue} and costs of £${costs}.

What is the profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- USERS OF ACCOUNTS ---------------- */

    if(type === 4){

        const correct = "Investors";

        const options = shuffle([
            correct,
            "Only employees",
            "Only customers",
            "Only suppliers"
        ]);

        return {
            question:
            `Who uses financial statements to decide whether to invest in a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH VS PROFIT ---------------- */

    if(type === 5){

        const correct = "Profit includes non-cash items";

        const options = shuffle([
            correct,
            "Cash equals profit always",
            "Profit ignores revenue",
            "Cash is never recorded"
        ]);

        return {
            question:
            `Why is profit different from cash?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BASIC ACCOUNTING EQUATION ---------------- */

    if(type === 6){

        const assets = rand(10000,20000);
        const liabilities = rand(3000,8000);

        const capital = assets - liabilities;

        const options = shuffle([
            capital,
            capital + 500,
            capital - 300,
            capital + 800
        ]);

        return {
            question:
            `A business has assets of £${assets} and liabilities of £${liabilities}.

What is capital?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(capital)
        };
    }

    /* ---------------- INCOME STATEMENT LOGIC ---------------- */

    if(type === 7){

        const revenue = rand(8000,15000);
        const expenses = rand(3000,9000);

        const profit = revenue - expenses;

        const options = shuffle([
            profit,
            profit + 200,
            profit - 300,
            profit + 500
        ]);

        return {
            question:
            `Revenue £${revenue}
Expenses £${expenses}

What is operating profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- ACCURACY & RECORDING ---------------- */

    if(type === 8){

        const correct = "Reliable financial reporting";

        const options = shuffle([
            correct,
            "Random guessing",
            "Profit manipulation",
            "Ignoring records"
        ]);

        return {
            question:
            `Why is accuracy important in accounting records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- USERS OF ACCOUNTING ---------------- */

    if(type === 9){

        const correct = "Managers";

        const options = shuffle([
            correct,
            "Only government",
            "Only competitors",
            "Only customers"
        ]);

        return {
            question:
            `Who uses financial information for internal decision making?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BASIC ANALYSIS ---------------- */

    if(type === 10){

        const profit = rand(1000,6000);
        const trend = "increasing";

        const options = shuffle([
            "Business is performing well",
            "Business is failing immediately",
            "No information available",
            "Costs are zero"
        ]);

        return {
            question:
            `A business reports increasing profits of £${profit}.

What can be concluded?`,
            options,
            correct: options.indexOf("Business is performing well")
        };
    }

    /* ---------------- COST VS REVENUE UNDERSTANDING ---------------- */

    if(type === 11){

        const correct = "Revenue must exceed costs for profit";

        const options = shuffle([
            correct,
            "Costs must exceed revenue",
            "Revenue is irrelevant",
            "Profit is always fixed"
        ]);

        return {
            question:
            `What must be true for a business to make a profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SIMPLE FINANCIAL POSITION ---------------- */

    if(type === 12){

        const assets = rand(5000,12000);
        const capital = rand(2000,7000);

        const liabilities = assets - capital;

        const options = shuffle([
            liabilities,
            liabilities + 200,
            liabilities - 300,
            liabilities + 500
        ]);

        return {
            question:
            `Assets £${assets}
Capital £${capital}

What are liabilities?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(liabilities)
        };
    }

    /* ---------------- STAKEHOLDERS ---------------- */

    if(type === 13){

        const correct = "Employees";

        const options = shuffle([
            correct,
            "Only banks",
            "Only government",
            "Only competitors"
        ]);

        return {
            question:
            `Who benefits from job security and wages information?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 14){

        const revenue = rand(10000,20000);
        const costs = rand(5000,15000);

        const profit = revenue - costs;

        const options = shuffle([
            profit,
            profit + 400,
            profit - 500,
            profit + 700
        ]);

        return {
            question:
            `${business} financial summary:
Revenue £${revenue}
Costs £${costs}

What is net profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- FINAL CONCEPT ---------------- */

    if(type === 15){

        const correct = "Support decision making";

        const options = shuffle([
            correct,
            "Replace accounting",
            "Eliminate reporting",
            "Increase errors"
        ]);

        return {
            question:
            `What is the ultimate role of accounting information?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L3-CH1 type not implemented: " + type);
}

function generateL3CH2(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- DOUBLE ENTRY BASICS ---------------- */

    if(type === 1){

        const correct = "Debit expense, Credit cash";

        const options = shuffle([
            correct,
            "Debit cash, Credit expense",
            "Debit revenue, Credit capital",
            "Debit liability, Credit asset"
        ]);

        return {
            question:
            `A business pays rent in cash. What is the correct double entry?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- PURCHASE ON CREDIT ---------------- */

    if(type === 2){

        const correct = "Debit purchases, Credit trade payables";

        const options = shuffle([
            correct,
            "Debit cash, Credit purchases",
            "Debit sales, Credit cash",
            "Debit expense, Credit revenue"
        ]);

        return {
            question:
            `${business} buys goods on credit. What is the correct entry?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SALES ON CREDIT ---------------- */

    if(type === 3){

        const correct = "Debit trade receivables, Credit sales";

        const options = shuffle([
            correct,
            "Debit cash, Credit sales",
            "Debit purchases, Credit cash",
            "Debit expense, Credit liability"
        ]);

        return {
            question:
            `${business} sells goods on credit. What is the correct entry?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH FLOW ENTRY ---------------- */

    if(type === 4){

        const amount = rand(200,2000);

        const correct = "Debit cash, Credit capital";

        const options = shuffle([
            correct,
            "Debit capital, Credit cash",
            "Debit expense, Credit cash",
            "Debit revenue, Credit expense"
        ]);

        return {
            question:
            `${business} owner introduces £${amount} into the business bank account.

What is the correct journal entry?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ACCRUALS ---------------- */

    if(type === 5){

        const correct = "Expense is recorded even if not yet paid";

        const options = shuffle([
            correct,
            "Expense is ignored until paid",
            "Revenue is deleted",
            "Cash is not recorded"
        ]);

        return {
            question:
            `What is an accrual?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const expense = rand(100,600);
        const accrual = rand(50,200);

        const total = expense + accrual;

        const options = shuffle([
            total,
            total + 50,
            total - 30,
            total + 80
        ]);

        return {
            question:
            `Utility expense £${expense} plus accrual £${accrual}.

What is total expense to be recorded?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- PREPAYMENTS ---------------- */

    if(type === 7){

        const correct = "Expense paid in advance";

        const options = shuffle([
            correct,
            "Expense never recorded",
            "Revenue delay",
            "Capital injection"
        ]);

        return {
            question:
            `What is a prepayment?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const total = rand(300,1200);
        const prepaid = rand(50,300);

        const expense = total - prepaid;

        const options = shuffle([
            expense,
            expense + 40,
            expense - 60,
            expense + 90
        ]);

        return {
            question:
            `Insurance paid £${total}, prepayment £${prepaid}.

What is the expense for the period?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(expense)
        };
    }

    /* ---------------- LEDGER LOGIC ---------------- */

    if(type === 9){

        const correct = "Records all transactions by account";

        const options = shuffle([
            correct,
            "Stores only cash transactions",
            "Deletes errors automatically",
            "Only used for tax"
        ]);

        return {
            question:
            `What is the purpose of a ledger?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TRIAL BALANCE UNDERSTANDING ---------------- */

    if(type === 10){

        const correct = "Total debits equal total credits";

        const options = shuffle([
            correct,
            "Debits are always higher",
            "Credits are ignored",
            "Only cash is recorded"
        ]);

        return {
            question:
            `What must be true in a trial balance?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERROR DETECTION ---------------- */

    if(type === 11){

        const correct = "Error of commission";

        const options = shuffle([
            correct,
            "Error of principle",
            "Accrual error",
            "Capital error"
        ]);

        return {
            question:
            `A transaction is recorded in the wrong account type but correct class.

What type of error is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- JOURNAL REASONING ---------------- */

    if(type === 12){

        const correct = "To correct accounting errors";

        const options = shuffle([
            correct,
            "To increase profit",
            "To avoid taxes",
            "To remove invoices"
        ]);

        return {
            question:
            `What is the purpose of a journal entry?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH VS CREDIT ---------------- */

    if(type === 13){

        const correct = "Cash increases assets immediately";

        const options = shuffle([
            correct,
            "Cash decreases liabilities",
            "Cash removes revenue",
            "Cash has no effect"
        ]);

        return {
            question:
            `What happens when cash is received?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 14){

        const revenue = rand(2000,8000);
        const expense = rand(1000,5000);

        const profit = revenue - expense;

        const options = shuffle([
            profit,
            profit + 200,
            profit - 300,
            profit + 500
        ]);

        return {
            question:
            `${business} records revenue £${revenue} and expenses £${expense}.

What is profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- FINAL THEORY APPLICATION ---------------- */

    if(type === 15){

        const correct = "Accurate financial reporting for stakeholders";

        const options = shuffle([
            correct,
            "Random number generation",
            "Tax elimination",
            "Profit manipulation"
        ]);

        return {
            question:
            `Why is financial accounting important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L3-CH2 type not implemented: " + type);
}
    function generateL3CH3(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- COST TYPES ---------------- */

    if(type === 1){

        const correct = "Fixed costs do not change with output";

        const options = shuffle([
            correct,
            "Fixed costs increase with sales",
            "Fixed costs are always zero",
            "Fixed costs depend on revenue"
        ]);

        return {
            question:
            `What is a characteristic of fixed costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VARIABLE COSTS ---------------- */

    if(type === 2){

        const correct = "They increase as output increases";

        const options = shuffle([
            correct,
            "They stay constant always",
            "They decrease when sales increase",
            "They are unrelated to production"
        ]);

        return {
            question:
            `What happens to variable costs when production increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CONTRIBUTION ---------------- */

    if(type === 3){

        const selling = rand(10,50);
        const varCost = rand(5,30);

        const contribution = selling - varCost;

        const options = shuffle([
            contribution,
            contribution + 2,
            contribution - 3,
            contribution + 5
        ]);

        return {
            question:
            `A product sells for £${selling} and has variable cost £${varCost}.

What is contribution per unit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(contribution)
        };
    }

    /* ---------------- BREAK EVEN UNITS ---------------- */

    if(type === 4){

        const fixed = rand(1000,5000);
        const selling = rand(20,80);
        const varCost = rand(10,40);

        const contribution = selling - varCost;
        const breakEven = Math.ceil(fixed / contribution);

        const options = shuffle([
            breakEven,
            breakEven + 5,
            breakEven - 3,
            breakEven + 10
        ]);

        return {
            question:
            `${business} has fixed costs £${fixed}.
Selling price £${selling}
Variable cost £${varCost}

What is break-even output (units)?`,
            options,
            correct: options.indexOf(breakEven)
        };
    }

    /* ---------------- BREAK EVEN REVENUE ---------------- */

    if(type === 5){

        const fixed = rand(2000,6000);
        const contributionRatio = rand(20,60) / 100;

        const breakEvenRevenue = Math.round(fixed / contributionRatio);

        const options = shuffle([
            breakEvenRevenue,
            breakEvenRevenue + 500,
            breakEvenRevenue - 400,
            breakEvenRevenue + 800
        ]);

        return {
            question:
            `Fixed costs £${fixed}
Contribution ratio ${(contributionRatio*100).toFixed(0)}%

What is break-even revenue?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(breakEvenRevenue)
        };
    }

    /* ---------------- PROFIT USING CONTRIBUTION ---------------- */

    if(type === 6){

        const units = rand(100,500);
        const selling = rand(10,40);
        const varCost = rand(5,25);
        const fixed = rand(1000,4000);

        const profit = (selling - varCost) * units - fixed;

        const options = shuffle([
            profit,
            profit + 200,
            profit - 300,
            profit + 500
        ]);

        return {
            question:
            `Units sold: ${units}
Selling price: £${selling}
Variable cost: £${varCost}
Fixed costs: £${fixed}

What is profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- DECISION MAKING ---------------- */

    if(type === 7){

        const correct = "Choose option with higher contribution";

        const options = shuffle([
            correct,
            "Choose lowest revenue",
            "Ignore costs completely",
            "Choose highest fixed cost"
        ]);

        return {
            question:
            `How should a business choose between two products?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- COST BEHAVIOUR ---------------- */

    if(type === 8){

        const correct = "Semi-variable costs contain both fixed and variable elements";

        const options = shuffle([
            correct,
            "They are always fixed",
            "They are always variable",
            "They do not exist in accounting"
        ]);

        return {
            question:
            `What is a semi-variable cost?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- PROFIT IMPACT ---------------- */

    if(type === 9){

        const change = rand(50,300);

        const options = shuffle([
            "Profit increases",
            "Profit decreases",
            "No change in profit",
            "Costs become zero"
        ]);

        return {
            question:
            `If variable costs increase by £${change} per unit, what happens to profit (assuming selling price is unchanged)?`,
            options,
            correct: options.indexOf("Profit decreases")
        };
    }

    /* ---------------- CONTRIBUTION INTERPRETATION ---------------- */

    if(type === 10){

        const correct = "Amount available to cover fixed costs";

        const options = shuffle([
            correct,
            "Total revenue",
            "Total costs",
            "Tax amount"
        ]);

        return {
            question:
            `What does contribution represent?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL BREAK EVEN INSIGHT ---------------- */

    if(type === 11){

        const correct = "Where profit is zero";

        const options = shuffle([
            correct,
            "Where revenue is zero",
            "Where costs are zero",
            "Where cash is negative"
        ]);

        return {
            question:
            `What is the break-even point?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SIMPLE CALCULATION ---------------- */

    if(type === 12){

        const fixed = rand(1000,3000);
        const profit = rand(500,2000);

        const totalContribution = fixed + profit;

        const options = shuffle([
            totalContribution,
            totalContribution + 100,
            totalContribution - 200,
            totalContribution + 300
        ]);

        return {
            question:
            `Fixed costs £${fixed}
Profit £${profit}

What total contribution is needed?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(totalContribution)
        };
    }

    /* ---------------- INTERPRETATION ---------------- */

    if(type === 13){

        const correct = "Helps managers make pricing decisions";

        const options = shuffle([
            correct,
            "Replaces accounting system",
            "Removes costs",
            "Guarantees profit"
        ]);

        return {
            question:
            `Why is management accounting useful?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 14){

        const selling = rand(20,60);
        const varCost = rand(10,30);
        const units = rand(100,400);

        const fixed = rand(1000,5000);

        const profit = (selling - varCost) * units - fixed;

        const options = shuffle([
            profit,
            profit + 200,
            profit - 300,
            profit + 500
        ]);

        return {
            question:
            `${business}:
Selling price £${selling}
Variable cost £${varCost}
Units ${units}
Fixed costs £${fixed}

What is profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- FINAL THEORY ---------------- */

    if(type === 15){

        const correct = "Supports planning and decision making";

        const options = shuffle([
            correct,
            "Eliminates accounting",
            "Removes pricing",
            "Guarantees revenue"
        ]);

        return {
            question:
            `What is the main purpose of management accounting?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L3-CH3 type not implemented: " + type);
}

function generateL3CH4(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- VAT BASICS ---------------- */

    if(type === 1){

        const correct = "Output VAT is charged on sales";

        const options = shuffle([
            correct,
            "Input VAT is charged on sales",
            "VAT is not recorded in accounting",
            "VAT replaces revenue"
        ]);

        return {
            question:
            `What is output VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- INPUT VAT ---------------- */

    if(type === 2){

        const correct = "VAT paid on purchases";

        const options = shuffle([
            correct,
            "VAT charged on sales",
            "VAT on wages",
            "VAT on profit"
        ]);

        return {
            question:
            `What is input VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VAT CALCULATION ---------------- */

    if(type === 3){

        const net = rand(100,1000);
        const vatRate = 0.20;
        const vat = net * vatRate;
        const total = net + vat;

        const options = shuffle([
            total,
            total + 20,
            total - 15,
            total + 30
        ]);

        return {
            question:
            `${business} sells goods with net value £${net}.
VAT is 20%.

What is the total price including VAT?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- VAT LIABILITY ---------------- */

    if(type === 4){

        const input = rand(50,300);
        const output = rand(100,500);

        const liability = output - input;

        const options = shuffle([
            liability,
            liability + 20,
            liability - 30,
            liability + 40
        ]);

        return {
            question:
            `A business has output VAT £${output} and input VAT £${input}.

What is the VAT payable to HMRC?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(liability)
        };
    }

    /* ---------------- TAX PURPOSE ---------------- */

    if(type === 5){

        const correct = "Fund government spending";

        const options = shuffle([
            correct,
            "Increase profit",
            "Reduce costs",
            "Replace accounting records"
        ]);

        return {
            question:
            `What is the purpose of taxation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX DEADLINES ---------------- */

    if(type === 6){

        const correct = "Must be submitted to HMRC on time";

        const options = shuffle([
            correct,
            "Can be ignored",
            "Only voluntary",
            "Used for payroll only"
        ]);

        return {
            question:
            `What is required for tax returns?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX RECORDS ---------------- */

    if(type === 7){

        const correct = "Accurate financial records";

        const options = shuffle([
            correct,
            "Estimated guesses",
            "No documentation",
            "Only cash records"
        ]);

        return {
            question:
            `What is required to complete a tax return?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERRORS IN TAX ---------------- */

    if(type === 8){

        const correct = "Penalties or fines";

        const options = shuffle([
            correct,
            "Profit increase",
            "No impact",
            "Automatic correction always"
        ]);

        return {
            question:
            `What can happen if tax returns are incorrect?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VAT REGISTRATION ---------------- */

    if(type === 9){

        const correct = "When turnover exceeds threshold";

        const options = shuffle([
            correct,
            "When profit is negative",
            "Only at start of business",
            "Never required"
        ]);

        return {
            question:
            `When must a business register for VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH FLOW TAX IMPACT ---------------- */

    if(type === 10){

        const vat = rand(50,200);

        const options = shuffle([
            "Reduces cash balance",
            "Increases profit directly",
            "No impact on cash",
            "Eliminates expenses"
        ]);

        return {
            question:
            `${business} pays £${vat} VAT to HMRC.

What is the effect on cash?`,
            options,
            correct: options.indexOf("Reduces cash balance")
        };
    }

    /* ---------------- INPUT VS OUTPUT DISTINCTION ---------------- */

    if(type === 11){

        const correct = "Output VAT is collected on sales";

        const options = shuffle([
            correct,
            "Input VAT is income",
            "VAT is optional",
            "VAT is profit"
        ]);

        return {
            question:
            `Which statement is correct about VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- RECORDING REQUIREMENT ---------------- */

    if(type === 12){

        const correct = "VAT must be recorded separately";

        const options = shuffle([
            correct,
            "VAT is ignored in accounts",
            "VAT replaces expenses",
            "VAT is only estimated"
        ]);

        return {
            question:
            `How should VAT be treated in accounting records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX SYSTEM UNDERSTANDING ---------------- */

    if(type === 13){

        const correct = "Self-assessment system";

        const options = shuffle([
            correct,
            "Random tax system",
            "Optional system",
            "No reporting system"
        ]);

        return {
            question:
            `What type of system is UK tax based on for businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL CALCULATION ---------------- */

    if(type === 14){

        const net = rand(500,2000);
        const vat = net * 0.2;
        const total = net + vat;

        const options = shuffle([
            total,
            total + 50,
            total - 40,
            total + 80
        ]);

        return {
            question:
            `A business buys goods for £${net} + VAT 20%.

What is the total cost?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- FINAL THEORY APPLICATION ---------------- */

    if(type === 15){

        const correct = "Ensures compliance with legal requirements";

        const options = shuffle([
            correct,
            "Increases profit automatically",
            "Removes accounting rules",
            "Eliminates VAT system"
        ]);

        return {
            question:
            `Why must businesses follow tax regulations?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L3-CH4 type not implemented: " + type);
}
/* ------------------------
   LEVEL 4 QUESTION BANK
------------------------ */

function generateL3CH4(){

    const type = rand(1,15);
    const business = randomBusiness();

    /* ---------------- VAT BASICS ---------------- */

    if(type === 1){

        const correct = "Output VAT is charged on sales";

        const options = shuffle([
            correct,
            "Input VAT is charged on sales",
            "VAT is not recorded in accounting",
            "VAT replaces revenue"
        ]);

        return {
            question:
            `What is output VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- INPUT VAT ---------------- */

    if(type === 2){

        const correct = "VAT paid on purchases";

        const options = shuffle([
            correct,
            "VAT charged on sales",
            "VAT on wages",
            "VAT on profit"
        ]);

        return {
            question:
            `What is input VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VAT CALCULATION ---------------- */

    if(type === 3){

        const net = rand(100,1000);
        const vatRate = 0.20;
        const vat = net * vatRate;
        const total = net + vat;

        const options = shuffle([
            total,
            total + 20,
            total - 15,
            total + 30
        ]);

        return {
            question:
            `${business} sells goods with net value £${net}.
VAT is 20%.

What is the total price including VAT?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- VAT LIABILITY ---------------- */

    if(type === 4){

        const input = rand(50,300);
        const output = rand(100,500);

        const liability = output - input;

        const options = shuffle([
            liability,
            liability + 20,
            liability - 30,
            liability + 40
        ]);

        return {
            question:
            `A business has output VAT £${output} and input VAT £${input}.

What is the VAT payable to HMRC?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(liability)
        };
    }

    /* ---------------- TAX PURPOSE ---------------- */

    if(type === 5){

        const correct = "Fund government spending";

        const options = shuffle([
            correct,
            "Increase profit",
            "Reduce costs",
            "Replace accounting records"
        ]);

        return {
            question:
            `What is the purpose of taxation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX DEADLINES ---------------- */

    if(type === 6){

        const correct = "Must be submitted to HMRC on time";

        const options = shuffle([
            correct,
            "Can be ignored",
            "Only voluntary",
            "Used for payroll only"
        ]);

        return {
            question:
            `What is required for tax returns?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX RECORDS ---------------- */

    if(type === 7){

        const correct = "Accurate financial records";

        const options = shuffle([
            correct,
            "Estimated guesses",
            "No documentation",
            "Only cash records"
        ]);

        return {
            question:
            `What is required to complete a tax return?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERRORS IN TAX ---------------- */

    if(type === 8){

        const correct = "Penalties or fines";

        const options = shuffle([
            correct,
            "Profit increase",
            "No impact",
            "Automatic correction always"
        ]);

        return {
            question:
            `What can happen if tax returns are incorrect?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VAT REGISTRATION ---------------- */

    if(type === 9){

        const correct = "When turnover exceeds threshold";

        const options = shuffle([
            correct,
            "When profit is negative",
            "Only at start of business",
            "Never required"
        ]);

        return {
            question:
            `When must a business register for VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH FLOW TAX IMPACT ---------------- */

    if(type === 10){

        const vat = rand(50,200);

        const options = shuffle([
            "Reduces cash balance",
            "Increases profit directly",
            "No impact on cash",
            "Eliminates expenses"
        ]);

        return {
            question:
            `${business} pays £${vat} VAT to HMRC.

What is the effect on cash?`,
            options,
            correct: options.indexOf("Reduces cash balance")
        };
    }

    /* ---------------- INPUT VS OUTPUT DISTINCTION ---------------- */

    if(type === 11){

        const correct = "Output VAT is collected on sales";

        const options = shuffle([
            correct,
            "Input VAT is income",
            "VAT is optional",
            "VAT is profit"
        ]);

        return {
            question:
            `Which statement is correct about VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- RECORDING REQUIREMENT ---------------- */

    if(type === 12){

        const correct = "VAT must be recorded separately";

        const options = shuffle([
            correct,
            "VAT is ignored in accounts",
            "VAT replaces expenses",
            "VAT is only estimated"
        ]);

        return {
            question:
            `How should VAT be treated in accounting records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX SYSTEM UNDERSTANDING ---------------- */

    if(type === 13){

        const correct = "Self-assessment system";

        const options = shuffle([
            correct,
            "Random tax system",
            "Optional system",
            "No reporting system"
        ]);

        return {
            question:
            `What type of system is UK tax based on for businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL CALCULATION ---------------- */

    if(type === 14){

        const net = rand(500,2000);
        const vat = net * 0.2;
        const total = net + vat;

        const options = shuffle([
            total,
            total + 50,
            total - 40,
            total + 80
        ]);

        return {
            question:
            `A business buys goods for £${net} + VAT 20%.

What is the total cost?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- FINAL THEORY APPLICATION ---------------- */

    if(type === 15){

        const correct = "Ensures compliance with legal requirements";

        const options = shuffle([
            correct,
            "Increases profit automatically",
            "Removes accounting rules",
            "Eliminates VAT system"
        ]);

        return {
            question:
            `Why must businesses follow tax regulations?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L3-CH4 type not implemented: " + type);
}
function generateL4CH1(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    if(type === 1){

        const selling = rand(20,80);
        const variable = rand(5,selling-5);

        const contribution =
            selling - variable;

        const options = shuffle([
            contribution,
            contribution + 5,
            contribution - 5,
            selling
        ]);

        return {
            question:
            `${business} sells a product for ${currency(selling)} per unit.

Variable cost per unit is ${currency(variable)}.

Calculate contribution per unit.`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(contribution)
        };
    }

    if(type === 2){

        const contribution = rand(10,50);
        const units = rand(100,1000);

        const total =
            contribution * units;

        const options = shuffle([
            total,
            total + 1000,
            total - 1000,
            contribution
        ]);

        return {
            question:
            `Contribution per unit is ${currency(contribution)}.

${units} units are sold.

Calculate total contribution.`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    if(type === 3){

        const fixed = rand(5000,25000);
        const contribution = rand(10,50);

        const breakeven =
            Math.round(fixed / contribution);

        const options = shuffle([
            breakeven,
            breakeven + 100,
            breakeven - 100,
            fixed
        ]);

        return {
            question:
            `${business} has fixed costs of ${currency(fixed)}.

Contribution per unit is ${currency(contribution)}.

Calculate break-even units.`,
            options,
            correct: options.indexOf(breakeven)
        };
    }

    if(type === 4){

        const fixed = rand(5000,20000);
        const contributionRatio = rand(20,70)/100;

        const breakevenRevenue =
            Math.round(fixed / contributionRatio);

        const options = shuffle([
            breakevenRevenue,
            breakevenRevenue + 1000,
            breakevenRevenue - 1000,
            fixed
        ]);

        return {
            question:
            `Fixed costs are ${currency(fixed)}.

Contribution to sales ratio is ${(contributionRatio*100).toFixed(0)}%.

Calculate break-even revenue.`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(breakevenRevenue)
        };
    }

    if(type === 5){

        const actual = rand(10000,50000);
        const breakeven = rand(5000,actual-1000);

        const mos =
            actual - breakeven;

        const options = shuffle([
            mos,
            mos + 1000,
            mos - 1000,
            actual
        ]);

        return {
            question:
            `Actual sales are ${currency(actual)}.

Break-even sales are ${currency(breakeven)}.

Calculate margin of safety.`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(mos)
        };
    }

    if(type === 6){

        const correct =
            "Variable costs change with activity levels";

        const options = shuffle([
            correct,
            "Variable costs remain constant",
            "Variable costs are always fixed",
            "Variable costs are irrelevant"
        ]);

        return {
            question:
            `${business} increases production from 1,000 units to 2,000 units.

Which statement is correct?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const productA = rand(15,50);
        const productB = rand(15,50);

        const answer =
            productA > productB
            ? "Prioritise Product A"
            : "Prioritise Product B";

        const options = shuffle([
            answer,
            "Produce equal quantities regardless",
            "Stop production",
            "Ignore contribution"
        ]);

        return {
            question:
            `A production bottleneck exists.

Contribution per limiting factor unit:

Product A = ${currency(productA)}
Product B = ${currency(productB)}

Which product should be prioritised?`,
            options,
            correct: options.indexOf(answer)
        };
    }

    if(type === 8){

        const correct =
            "Contribution is key when selecting product mix";

        const options = shuffle([
            correct,
            "Revenue only matters",
            "Ignore costs completely",
            "Fixed costs determine every decision"
        ]);

        return {
            question:
            `${business} has limited production capacity.

What is the most important factor when selecting products?`,
            options,
            correct: options.indexOf(correct)
        };
    }
        if(type === 9){

        const budget = rand(10000,50000);
        const actual = budget + rand(1000,5000);

        const correct =
            "Adverse variance";

        const options = shuffle([
            correct,
            "Favourable variance",
            "No variance",
            "Break-even variance"
        ]);

        return {
            question:
            `Budgeted costs = ${currency(budget)}

Actual costs = ${currency(actual)}

Interpret the variance.`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct =
            "Rent is normally a fixed cost";

        const options = shuffle([
            correct,
            "Direct materials are fixed costs",
            "Sales commission is fixed",
            "Packaging is fixed"
        ]);

        return {
            question:
            `${business} reviews cost behaviour.

Which cost is usually fixed?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const make = rand(15,40);
        const buy = rand(15,40);

        const answer =
            make < buy
            ? "Manufacture internally"
            : "Purchase externally";

        const options = shuffle([
            answer,
            "Ignore cost comparison",
            "Always outsource",
            "Always manufacture"
        ]);

        return {
            question:
            `Cost to manufacture = ${currency(make)} per unit.

Cost to purchase = ${currency(buy)} per unit.

What is the preferred option?`,
            options,
            correct: options.indexOf(answer)
        };
    }

    if(type === 12){

        const spareCapacity = rand(0,1);

        const answer =
            spareCapacity
            ? "Accept if contribution is positive"
            : "Consider capacity impact carefully";

        const options = shuffle([
            answer,
            "Reject all special orders",
            "Accept all special orders",
            "Ignore contribution"
        ]);

        return {
            question:
            `${business} receives a special order below the normal selling price.

What should management consider?`,
            options,
            correct: options.indexOf(answer)
        };
    }

    if(type === 13){

        const selling = rand(40,100);
        const variable = rand(10,40);
        const units = rand(500,3000);

        const contribution =
            (selling-variable)*units;

        const answer =
            contribution > 20000
            ? "Strong contribution performance"
            : "Contribution performance is modest";

        const options = shuffle([
            answer,
            "Business is at break-even",
            "Contribution is negative",
            "Profit equals sales"
        ]);

        return {
            question:
            `${business} sells ${units} units.

Selling price = ${currency(selling)}

Variable cost = ${currency(variable)}

Step 1: Calculate contribution.

Step 2: Evaluate performance.`,
            options,
            correct: options.indexOf(answer)
        };
    }

    if(type === 14){

        const fixed = rand(10000,25000);
        const contribution = rand(20,60);
        const actual = rand(500,1500);

        const breakeven =
            Math.round(fixed/contribution);

        const answer =
            actual > breakeven
            ? "Operating above break-even"
            : "Operating below break-even";

        const options = shuffle([
            answer,
            "Profit cannot be determined",
            "Contribution is irrelevant",
            "Sales equal fixed costs"
        ]);

        return {
            question:
            `Fixed costs = ${currency(fixed)}

Contribution per unit = ${currency(contribution)}

Actual sales volume = ${actual} units

Step 1: Estimate break-even.

Step 2: Evaluate performance.`,
            options,
            correct: options.indexOf(answer)
        };
    }

    if(type === 15){

        const contributionA = rand(15000,50000);
        const contributionB = rand(10000,45000);

        const answer =
            contributionA > contributionB
            ? "Project A should be preferred"
            : "Project B should be preferred";

        const options = shuffle([
            answer,
            "Choose randomly",
            "Ignore contribution data",
            "Select the lowest revenue option"
        ]);

        return {
            question:
            `Management is comparing two projects.

Project A contribution = ${currency(contributionA)}

Project B contribution = ${currency(contributionB)}

Step 1: Compare contribution.

Step 2: Recommend the stronger option.`,
            options,
            correct: options.indexOf(answer)
        };
    }

    throw new Error("L4-CH1 type not implemented: " + type);
}
function generateL4CH2(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- GROSS PROFIT ---------------- */

    if(type === 1){

        const sales = rand(5000,20000);
        const cogs = rand(2000,15000);

        const gp = sales - cogs;

        const options = shuffle([
            gp,
            gp + 500,
            gp - 400,
            gp + 800
        ]);

        return {
            question:
            `${business} has sales £${sales} and cost of sales £${cogs}.

What is gross profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(gp)
        };
    }

    /* ---------------- NET PROFIT ---------------- */

    if(type === 2){

        const sales = rand(8000,20000);
        const cogs = rand(3000,12000);
        const expenses = rand(1000,5000);

        const profit = sales - cogs - expenses;

        const options = shuffle([
            profit,
            profit + 500,
            profit - 600,
            profit + 900
        ]);

        return {
            question:
            `${business}:
Sales £${sales}
Cost of sales £${cogs}
Expenses £${expenses}

What is net profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- ACCRUAL ADJUSTMENT ---------------- */

    if(type === 3){

        const expense = rand(500,3000);
        const accrual = rand(100,800);

        const total = expense + accrual;

        const options = shuffle([
            total,
            total + 200,
            total - 150,
            total + 300
        ]);

        return {
            question:
            `Expense recorded £${expense}
Accrued expense £${accrual}

What is total expense?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- PREPAYMENT ---------------- */

    if(type === 4){

        const paid = rand(1000,5000);
        const prepayment = rand(200,1000);

        const expense = paid - prepayment;

        const options = shuffle([
            expense,
            expense + 200,
            expense - 150,
            expense + 300
        ]);

        return {
            question:
            `Insurance paid £${paid}
Prepayment £${prepayment}

What is expense for the period?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(expense)
        };
    }

    /* ---------------- ACCRUED INCOME ---------------- */

    if(type === 5){

        const income = rand(500,3000);
        const accrued = rand(100,800);

        const total = income + accrued;

        const options = shuffle([
            total,
            total + 100,
            total - 200,
            total + 250
        ]);

        return {
            question:
            `Income earned £${income}
Accrued income £${accrued}

What is total income?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(total)
        };
    }

    /* ---------------- STATEMENT STRUCTURE ---------------- */

    if(type === 6){

        const correct = "Income Statement shows profit for a period";

        const options = shuffle([
            correct,
            "Shows only cash",
            "Shows only assets",
            "Shows VAT only"
        ]);

        return {
            question:
            `What does an income statement show?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TRADING ACCOUNT ---------------- */

    if(type === 7){

        const correct = "Calculates gross profit";

        const options = shuffle([
            correct,
            "Calculates cash flow",
            "Calculates tax",
            "Calculates assets"
        ]);

        return {
            question:
            `What is the purpose of a trading account?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- MULTI STEP PROFIT ---------------- */

    if(type === 8){

        const sales = rand(10000,30000);
        const cogs = rand(5000,20000);
        const expenses = rand(2000,8000);

        const profit = sales - cogs - expenses;

        const options = shuffle([
            profit,
            profit + 500,
            profit - 600,
            profit + 900
        ]);

        return {
            question:
            `${business}:
Sales £${sales}
COGS £${cogs}
Expenses £${expenses}

What is net profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- ERROR IDENTIFICATION ---------------- */

    if(type === 9){

        const correct = "Overstating expenses reduces profit";

        const options = shuffle([
            correct,
            "Expenses increase profit",
            "Revenue removes costs",
            "Assets affect profit directly"
        ]);

        return {
            question:
            `What is the effect of overstating expenses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ADJUSTMENT LOGIC ---------------- */

    if(type === 10){

        const correct = "Match income and expenses to correct period";

        const options = shuffle([
            correct,
            "Ignore timing",
            "Only record cash",
            "Remove accruals"
        ]);

        return {
            question:
            `Why are adjustments made in financial statements?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- WORKING CAPITAL STYLE ---------------- */

    if(type === 11){

        const correct = "Assets minus current liabilities";

        const options = shuffle([
            correct,
            "Revenue minus expenses",
            "Cash minus VAT",
            "Profit minus tax"
        ]);

        return {
            question:
            `What is working capital?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL PROFIT RECONSTRUCTION ---------------- */

    if(type === 12){

        const sales = rand(10000,25000);
        const cogs = rand(4000,15000);
        const expenses = rand(2000,9000);

        const profit = sales - cogs - expenses;

        const options = shuffle([
            profit,
            profit + 800,
            profit - 700,
            profit + 1000
        ]);

        return {
            question:
            `Reconstruct profit:
Sales £${sales}
COGS £${cogs}
Expenses £${expenses}

What is profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(profit)
        };
    }

    /* ---------------- INTERPRETATION ---------------- */

    if(type === 13){

        const correct = "Helps stakeholders understand performance";

        const options = shuffle([
            correct,
            "Removes accounting rules",
            "Guarantees cash",
            "Eliminates profit"

        ]);

        return {
            question:
            `Why are financial statements prepared?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SIMPLE CALCULATION ---------------- */

    if(type === 14){

        const sales = rand(5000,15000);
        const cogs = rand(2000,10000);

        const gp = sales - cogs;

        const options = shuffle([
            gp,
            gp + 300,
            gp - 400,
            gp + 600
        ]);

        return {
            question:
            `Sales £${sales}
COGS £${cogs}

What is gross profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(gp)
        };
    }

    /* ---------------- FINAL THEORY APPLICATION ---------------- */

    if(type === 15){

        const correct = "Financial statements summarise business performance";

        const options = shuffle([
            correct,
            "Replace bookkeeping",
            "Eliminate costs",
            "Increase cash automatically"
        ]);

        return {
            question:
            `What is the main purpose of financial statements?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L4-CH2 type not implemented: " + type);
}
function generateL4CH3(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- INTERNAL CONTROL PURPOSE ---------------- */

    if(type === 1){

        const correct = "To prevent and detect errors and fraud";

        const options = shuffle([
            correct,
            "To increase profit automatically",
            "To eliminate bookkeeping",
            "To avoid tax payments"
        ]);

        return {
            question:
            `What is the purpose of internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SEGREGATION OF DUTIES ---------------- */

    if(type === 2){

        const correct = "Different people handle authorisation and recording";

        const options = shuffle([
            correct,
            "One person does everything",
            "Only managers record transactions",
            "Cash is never recorded"
        ]);

        return {
            question:
            `What is segregation of duties?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH CONTROLS ---------------- */

    if(type === 3){

        const correct = "Bank reconciliations detect differences between records and bank statement";

        const options = shuffle([
            correct,
            "Cash is never checked",
            "Bank statements are ignored",
            "Profit is adjusted automatically"
        ]);

        return {
            question:
            `Why are bank reconciliations performed?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FRAUD SCENARIO ---------------- */

    if(type === 4){

        const missing = rand(100,1000);

        const options = shuffle([
            "Cash has been stolen",
            "Revenue increased",
            "Expenses decreased",
            "Profit increased"
        ]);

        return {
            question:
            `${business} finds £${missing} missing from cash records.

What is the most likely issue?`,
            options,
            correct: options.indexOf("Cash has been stolen")
        };
    }

    /* ---------------- ERROR DETECTION ---------------- */

    if(type === 5){

        const correct = "Incorrect recording of transactions";

        const options = shuffle([
            correct,
            "Higher sales",
            "Tax increase",
            "More cash inflow"
        ]);

        return {
            question:
            `What is a common cause of discrepancies in accounting records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- AUTHORISATION ---------------- */

    if(type === 6){

        const correct = "All transactions must be approved before processing";

        const options = shuffle([
            correct,
            "Anyone can approve payments",
            "Approval is optional",
            "Cash does not need approval"
        ]);

        return {
            question:
            `What is meant by authorisation control?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ASSET SAFEGUARDING ---------------- */

    if(type === 7){

        const correct = "Protecting assets from theft or misuse";

        const options = shuffle([
            correct,
            "Increasing liabilities",
            "Reducing profit",
            "Ignoring stock levels"
        ]);

        return {
            question:
            `What is asset safeguarding?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- DOCUMENTATION CONTROL ---------------- */

    if(type === 8){

        const correct = "Using invoices and receipts to support transactions";

        const options = shuffle([
            correct,
            "Verbal agreements only",
            "No records kept",
            "Estimates instead of documents"
        ]);

        return {
            question:
            `Why are source documents important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH HANDLING SCENARIO ---------------- */

    if(type === 9){

        const loss = rand(50,500);

        const options = shuffle([
            "Cash not properly recorded",
            "Revenue increased",
            "Expenses reduced",
            "No issue detected"
        ]);

        return {
            question:
            `${business} discovers cash shortages of £${loss}.

What is the most likely control weakness?`,
            options,
            correct: options.indexOf("Cash not properly recorded")
        };
    }

    /* ---------------- CONTROL IMPROVEMENT ---------------- */

    if(type === 10){

        const correct = "Introduce regular internal audits";

        const options = shuffle([
            correct,
            "Remove accounting records",
            "Allow one person full control",
            "Ignore discrepancies"
        ]);

        return {
            question:
            `How can a business improve internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- BANK CONTROL ---------------- */

    if(type === 11){

        const correct = "Restrict access to bank accounts";

        const options = shuffle([
            correct,
            "Give all staff access",
            "Remove bank statements",
            "Avoid reconciliation"
        ]);

        return {
            question:
            `What is a control over bank transactions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERROR IMPACT ---------------- */

    if(type === 12){

        const correct = "Financial statements become unreliable";

        const options = shuffle([
            correct,
            "Profit always increases",
            "Cash increases automatically",
            "VAT is removed"
        ]);

        return {
            question:
            `What is the impact of weak internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- STOCK CONTROL ---------------- */

    if(type === 13){

        const correct = "Regular stock counts help prevent theft and errors";

        const options = shuffle([
            correct,
            "Stock is never checked",
            "Stock is irrelevant",
            "Stock is always assumed correct"
        ]);

        return {
            question:
            `Why are stock counts performed?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SYSTEM PURPOSE ---------------- */

    if(type === 14){

        const correct = "To ensure accuracy and reliability of records";

        const options = shuffle([
            correct,
            "To increase revenue automatically",
            "To eliminate costs",
            "To avoid reporting"
        ]);

        return {
            question:
            `What is the purpose of an accounting system?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 15){

        const correct = "Controls reduce risk of fraud and error";

        const options = shuffle([
            correct,
            "Controls increase profit",
            "Controls remove accounting rules",
            "Controls eliminate cash"
        ]);

        return {
            question:
            `Why are internal controls important in a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L4-CH3 type not implemented: " + type);
}

function generateL4CH4(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- TAXABLE PROFIT ---------------- */

    if(type === 1){

        const profit = rand(5000,20000);
        const expenses = rand(500,3000);

        const taxable = profit - expenses;

        const options = shuffle([
            taxable,
            taxable + 500,
            taxable - 400,
            taxable + 800
        ]);

        return {
            question:
            `${business} reports accounting profit of £${profit}.
Non-allowable expenses £${expenses}.

What is taxable profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(taxable)
        };
    }

    /* ---------------- TAX PAYABLE ---------------- */

    if(type === 2){

        const taxable = rand(5000,15000);
        const rate = 0.2;

        const tax = Math.round(taxable * rate);

        const options = shuffle([
            tax,
            tax + 200,
            tax - 300,
            tax + 400
        ]);

        return {
            question:
            `Taxable profit £${taxable}
Tax rate 20%

What is tax payable?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(tax)
        };
    }

    /* ---------------- VAT OUTPUT ---------------- */

    if(type === 3){

        const sales = rand(1000,8000);
        const vatRate = 0.2;

        const vat = Math.round(sales * vatRate);

        const options = shuffle([
            vat,
            vat + 50,
            vat - 60,
            vat + 100
        ]);

        return {
            question:
            `Sales £${sales} (excluding VAT)
VAT rate 20%

What is VAT payable to tax authority?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(vat)
        };
    }

    /* ---------------- VAT INPUT ---------------- */

    if(type === 4){

        const purchases = rand(1000,6000);
        const vat = Math.round(purchases * 0.2);

        const options = shuffle([
            vat,
            vat + 50,
            vat - 50,
            vat + 100
        ]);

        return {
            question:
            `Purchases £${purchases} (excluding VAT)
VAT rate 20%

What is input VAT?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(vat)
        };
    }

    /* ---------------- VAT NET PAYMENT ---------------- */

    if(type === 5){

        const output = rand(500,2000);
        const input = rand(200,1000);

        const net = output - input;

        const options = shuffle([
            net,
            net + 100,
            net - 150,
            net + 200
        ]);

        return {
            question:
            `Output VAT £${output}
Input VAT £${input}

What is VAT payable?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- TAX ADJUSTMENT ---------------- */

    if(type === 6){

        const correct = "Add back non-allowable expenses";

        const options = shuffle([
            correct,
            "Deduct all expenses",
            "Ignore revenue",
            "Remove capital"
        ]);

        return {
            question:
            `What is done when calculating taxable profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ALLOWABLE EXPENSE ---------------- */

    if(type === 7){

        const correct = "Expenses incurred wholly and exclusively for business";

        const options = shuffle([
            correct,
            "Personal shopping",
            "Private travel",
            "Family expenses"
        ]);

        return {
            question:
            `What is an allowable expense?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- NON ALLOWABLE ---------------- */

    if(type === 8){

        const correct = "Personal expenses of owner";

        const options = shuffle([
            correct,
            "Office rent",
            "Electricity bill",
            "Wages"
        ]);

        return {
            question:
            `Which is a non-allowable expense?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX EFFECT ---------------- */

    if(type === 9){

        const correct = "Reduces profit available for distribution";

        const options = shuffle([
            correct,
            "Increases sales",
            "Removes expenses",
            "Creates cash automatically"
        ]);

        return {
            question:
            `What is the effect of business tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VAT PURPOSE ---------------- */

    if(type === 10){

        const correct = "Tax on consumption collected by businesses";

        const options = shuffle([
            correct,
            "Tax on profit only",
            "Bank charge",
            "Salary deduction"
        ]);

        return {
            question:
            `What is VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX LIABILITY ---------------- */

    if(type === 11){

        const taxable = rand(8000,20000);
        const tax = Math.round(taxable * 0.25);

        const options = shuffle([
            tax,
            tax + 500,
            tax - 400,
            tax + 700
        ]);

        return {
            question:
            `Taxable profit £${taxable}
Tax rate 25%

What is tax liability?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(tax)
        };
    }

    /* ---------------- CASH IMPACT ---------------- */

    if(type === 12){

        const correct = "Tax reduces cash in bank";

        const options = shuffle([
            correct,
            "Tax increases revenue",
            "Tax increases assets",
            "Tax removes liabilities"
        ]);

        return {
            question:
            `What is the cash effect of paying tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX CALC STEP ---------------- */

    if(type === 13){

        const profit = rand(10000,25000);
        const adj = rand(1000,5000);

        const taxable = profit - adj;

        const options = shuffle([
            taxable,
            taxable + 500,
            taxable - 600,
            taxable + 800
        ]);

        return {
            question:
            `Profit £${profit}
Non-allowable expenses £${adj}

What is taxable profit?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(taxable)
        };
    }

    /* ---------------- TAX INTERPRETATION ---------------- */

    if(type === 14){

        const correct = "Paid to government based on taxable profit";

        const options = shuffle([
            correct,
            "Paid to suppliers",
            "Paid to employees",
            "Paid to customers"
        ]);

        return {
            question:
            `What is business tax paid on?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL EXAM STYLE ---------------- */

    if(type === 15){

        const correct = "Ensures businesses contribute to government revenue";

        const options = shuffle([
            correct,
            "Increases sales automatically",
            "Removes accounting rules",
            "Eliminates profit"
        ]);

        return {
            question:
            `Why do businesses pay tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L4-CH4 type not implemented: " + type);
}
function generateL4CH5(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- GROSS TO NET PAY ---------------- */

    if(type === 1){

        const gross = rand(1500,5000);
        const tax = Math.round(gross * 0.2);
        const net = gross - tax;

        const options = shuffle([
            net,
            net + 100,
            net - 120,
            net + 200
        ]);

        return {
            question:
            `Employee gross pay £${gross}
Income tax 20%

What is net pay?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- NATIONAL INSURANCE ---------------- */

    if(type === 2){

        const gross = rand(2000,6000);
        const ni = Math.round(gross * 0.1);
        const net = gross - ni;

        const options = shuffle([
            net,
            net + 150,
            net - 200,
            net + 300
        ]);

        return {
            question:
            `Gross pay £${gross}
National Insurance 10%

What is take-home pay?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- TAX + NI COMBINED ---------------- */

    if(type === 3){

        const gross = rand(3000,8000);
        const tax = Math.round(gross * 0.2);
        const ni = Math.round(gross * 0.1);

        const net = gross - tax - ni;

        const options = shuffle([
            net,
            net + 200,
            net - 250,
            net + 350
        ]);

        return {
            question:
            `Gross pay £${gross}
Income tax 20%
NI 10%

What is net pay?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- PAYE PURPOSE ---------------- */

    if(type === 4){

        const correct = "Tax deducted from wages before employee receives pay";

        const options = shuffle([
            correct,
            "Tax paid directly by employee at end of year",
            "Tax optional for employees",
            "Tax only on profits"
        ]);

        return {
            question:
            `What is PAYE?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- DEDUCTIONS EFFECT ---------------- */

    if(type === 5){

        const correct = "Reduces take-home pay";

        const options = shuffle([
            correct,
            "Increases gross pay",
            "Removes salary",
            "Has no effect"
        ]);

        return {
            question:
            `What is the effect of deductions on wages?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- PENSION DEDUCTION ---------------- */

    if(type === 6){

        const gross = rand(2000,6000);
        const pension = Math.round(gross * 0.05);
        const net = gross - pension;

        const options = shuffle([
            net,
            net + 100,
            net - 150,
            net + 200
        ]);

        return {
            question:
            `Gross pay £${gross}
Pension contribution 5%

What is net pay?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- SIMPLE PAYSLIP INTERPRETATION ---------------- */

    if(type === 7){

        const correct = "Shows gross pay and deductions";

        const options = shuffle([
            correct,
            "Shows only bank balance",
            "Shows only profit",
            "Shows only VAT"
        ]);

        return {
            question:
            `What does a payslip show?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- TAX RATE CHANGE ---------------- */

    if(type === 8){

        const gross = rand(2500,7000);
        const taxRate = 0.25;
        const tax = Math.round(gross * taxRate);

        const options = shuffle([
            tax,
            tax + 100,
            tax - 120,
            tax + 250
        ]);

        return {
            question:
            `Gross pay £${gross}
Income tax 25%

How much tax is deducted?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(tax)
        };
    }

    /* ---------------- REAL-LIFE SCENARIO ---------------- */

    if(type === 9){

        const correct = "Employee receives less cash due to deductions";

        const options = shuffle([
            correct,
            "Employee receives more cash",
            "Tax increases gross pay",
            "NI increases salary"
        ]);

        return {
            question:
            `${business} processes payroll.

What happens after deductions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- DIFFERENCE GROSS VS NET ---------------- */

    if(type === 10){

        const correct = "Gross pay is before deductions, net pay is after";

        const options = shuffle([
            correct,
            "Net pay is higher than gross",
            "Gross pay includes tax refunds",
            "They are always equal"
        ]);

        return {
            question:
            `What is the difference between gross and net pay?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SIMPLE NET CALC ---------------- */

    if(type === 11){

        const gross = rand(1800,4500);
        const tax = Math.round(gross * 0.2);

        const net = gross - tax;

        const options = shuffle([
            net,
            net + 100,
            net - 90,
            net + 150
        ]);

        return {
            question:
            `Gross pay £${gross}
Tax 20%

What is net pay?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- EMPLOYER ROLE ---------------- */

    if(type === 12){

        const correct = "Deducts tax and pays it to government";

        const options = shuffle([
            correct,
            "Keeps all tax",
            "Pays employee full gross only",
            "Ignores tax rules"
        ]);

        return {
            question:
            `What is the employer's role in PAYE?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- WHY TAX EXISTS ---------------- */

    if(type === 13){

        const correct = "Funds government services";

        const options = shuffle([
            correct,
            "Increases wages",
            "Removes expenses",
            "Creates profit"
        ]);

        return {
            question:
            `Why do employees pay income tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- MULTI DEDUCTION SCENARIO ---------------- */

    if(type === 14){

        const gross = rand(3000,9000);
        const tax = Math.round(gross * 0.2);
        const ni = Math.round(gross * 0.1);
        const pension = Math.round(gross * 0.05);

        const net = gross - tax - ni - pension;

        const options = shuffle([
            net,
            net + 200,
            net - 300,
            net + 400
        ]);

        return {
            question:
            `Gross pay £${gross}
Tax 20%
NI 10%
Pension 5%

What is net pay?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- FINAL EXAM STYLE ---------------- */

    if(type === 15){

        const correct = "Ensures correct tax is collected from employees";

        const options = shuffle([
            correct,
            "Increases salary automatically",
            "Removes deductions",
            "Eliminates payroll"
        ]);

        return {
            question:
            `Why is PAYE used?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L4-CH5 type not implemented: " + type);
}
function generateL4CH6(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- PURPOSE OF AUDIT ---------------- */

    if(type === 1){

        const correct = "To provide independent assurance on financial statements";

        const options = shuffle([
            correct,
            "To prepare management accounts",
            "To increase profit",
            "To calculate tax"
        ]);

        return {
            question:
            `What is the purpose of an external audit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- AUDITOR INDEPENDENCE ---------------- */

    if(type === 2){

        const correct = "Auditors must be independent of the business";

        const options = shuffle([
            correct,
            "Auditors work for management",
            "Auditors prepare payroll",
            "Auditors set prices"
        ]);

        return {
            question:
            `Why must auditors be independent?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- EVIDENCE ---------------- */

    if(type === 3){

        const correct = "Audit evidence must be sufficient and appropriate";

        const options = shuffle([
            correct,
            "Evidence can be verbal only",
            "No evidence is required",
            "Estimates are enough"
        ]);

        return {
            question:
            `What is required for audit evidence?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERROR DETECTION ---------------- */

    if(type === 4){

        const missing = rand(500,5000);

        const options = shuffle([
            "Financial statements may be incorrect",
            "Profit always increases",
            "Tax is removed",
            "Cash increases automatically"
        ]);

        return {
            question:
            `${business} has missing transactions worth £${missing}.

What is the main risk?`,
            options,
            correct: options.indexOf("Financial statements may be incorrect")
        };
    }

    /* ---------------- AUDIT REPORT ---------------- */

    if(type === 5){

        const correct = "Provides opinion on truth and fairness of accounts";

        const options = shuffle([
            correct,
            "Sets employee wages",
            "Calculates VAT",
            "Approves purchases"
        ]);

        return {
            question:
            `What does an audit report provide?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FRAUD RISK ---------------- */

    if(type === 6){

        const correct = "Weak internal controls increase fraud risk";

        const options = shuffle([
            correct,
            "Strong controls increase fraud",
            "Audits create fraud",
            "Reports remove cash"
        ]);

        return {
            question:
            `What is the relationship between internal controls and fraud?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- AUDITOR ROLE ---------------- */

    if(type === 7){

        const correct = "Checks financial records and issues opinion";

        const options = shuffle([
            correct,
            "Runs the business",
            "Prepares invoices",
            "Manages payroll"
        ]);

        return {
            question:
            `What does an external auditor do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- MATERIALITY ---------------- */

    if(type === 8){

        const correct = "Errors that could influence user decisions";

        const options = shuffle([
            correct,
            "Any small typo",
            "Only cash errors",
            "Only payroll errors"
        ]);

        return {
            question:
            `What is materiality in auditing?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- AUDIT TRAIL ---------------- */

    if(type === 9){

        const correct = "A record showing all transaction steps";

        const options = shuffle([
            correct,
            "A list of employees",
            "A tax form",
            "A profit report only"
        ]);

        return {
            question:
            `What is an audit trail?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- INDEPENDENCE THREAT ---------------- */

    if(type === 10){

        const correct = "Conflict of interest reduces audit reliability";

        const options = shuffle([
            correct,
            "Independence improves sales",
            "Auditors must work for management",
            "Conflict increases profit"
        ]);

        return {
            question:
            `What happens if auditors are not independent?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- SAMPLING ---------------- */

    if(type === 11){

        const correct = "Checking a sample of transactions instead of all";

        const options = shuffle([
            correct,
            "Checking only one transaction",
            "Checking no transactions",
            "Checking only cash"
        ]);

        return {
            question:
            `What is audit sampling?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ERROR IMPACT ---------------- */

    if(type === 12){

        const correct = "Users may make incorrect decisions";

        const options = shuffle([
            correct,
            "Profit increases",
            "Cash increases automatically",
            "Tax disappears"
        ]);

        return {
            question:
            `What is the impact of inaccurate financial statements?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- AUDITOR RESPONSIBILITY ---------------- */

    if(type === 13){

        const correct = "They provide reasonable assurance, not absolute guarantee";

        const options = shuffle([
            correct,
            "They guarantee no fraud exists",
            "They manage the business",
            "They prepare accounts only"
        ]);

        return {
            question:
            `What is the auditor's responsibility?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- QUALIFIED OPINION ---------------- */

    if(type === 14){

        const correct = "Financial statements are mostly correct with some issues";

        const options = shuffle([
            correct,
            "Accounts are perfect",
            "Accounts are completely false",
            "No audit is needed"
        ]);

        return {
            question:
            `What is a qualified audit opinion?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL EXAM STYLE ---------------- */

    if(type === 15){

        const correct = "Audits increase confidence in financial reporting";

        const options = shuffle([
            correct,
            "Audits increase profit",
            "Audits remove tax",
            "Audits replace bookkeeping"
        ]);

        return {
            question:
            `Why are external audits important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L4-CH6 type not implemented: " + type);
}
function generateL4CH7(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- CASH POSITION ---------------- */

    if(type === 1){

        const cash = rand(2000,15000);
        const payable = rand(1000,8000);

        const net = cash - payable;

        const options = shuffle([
            net,
            net + 500,
            net - 600,
            net + 900
        ]);

        return {
            question:
            `${business} has cash £${cash} and payables £${payable}.

What is the net cash position?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- OVERDRAFT SCENARIO ---------------- */

    if(type === 2){

        const overdraft = rand(1000,8000);
        const cash = rand(500,3000);

        const position = cash - overdraft;

        const options = shuffle([
            position,
            position + 500,
            position - 400,
            position + 800
        ]);

        return {
            question:
            `${business} has overdraft £${overdraft} and cash £${cash}.

What is the overall cash position?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(position)
        };
    }

    /* ---------------- CASH FLOW PURPOSE ---------------- */

    if(type === 3){

        const correct = "To ensure the business can meet short-term obligations";

        const options = shuffle([
            correct,
            "To increase profit automatically",
            "To calculate tax",
            "To replace income statement"
        ]);

        return {
            question:
            `What is the purpose of cash management?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- LIQUIDITY ---------------- */

    if(type === 4){

        const correct = "Ability to pay short-term debts when due";

        const options = shuffle([
            correct,
            "Total profit earned",
            "Long-term investment value",
            "Tax liability"
        ]);

        return {
            question:
            `What is liquidity?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH SHORTAGE ---------------- */

    if(type === 5){

        const missing = rand(500,3000);

        const options = shuffle([
            "Poor cash control or overspending",
            "Higher revenue",
            "Lower tax rate",
            "Increased profit"
        ]);

        return {
            question:
            `${business} reports a cash shortage of £${missing}.

What is the most likely cause?`,
            options,
            correct: options.indexOf("Poor cash control or overspending")
        };
    }

    /* ---------------- CASH SURPLUS ---------------- */

    if(type === 6){

        const correct = "Business can invest or repay liabilities";

        const options = shuffle([
            correct,
            "Business must close",
            "Tax increases automatically",
            "Expenses increase"
        ]);

        return {
            question:
            `What can a business do with cash surplus?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- WORKING CAPITAL LINK ---------------- */

    if(type === 7){

        const correct = "Current assets minus current liabilities";

        const options = shuffle([
            correct,
            "Revenue minus expenses",
            "Cash minus tax",
            "Profit minus dividends"
        ]);

        return {
            question:
            `What is working capital?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH FORECAST ---------------- */

    if(type === 8){

        const inflow = rand(5000,15000);
        const outflow = rand(3000,12000);

        const net = inflow - outflow;

        const options = shuffle([
            net,
            net + 400,
            net - 500,
            net + 700
        ]);

        return {
            question:
            `Cash inflow £${inflow}
Cash outflow £${outflow}

What is net cash flow?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(net)
        };
    }

    /* ---------------- BANK DECISION ---------------- */

    if(type === 9){

        const correct = "Use overdraft to cover short-term shortage";

        const options = shuffle([
            correct,
            "Ignore shortage",
            "Stop bookkeeping",
            "Increase tax"
        ]);

        return {
            question:
            `What should a business do if it has a short-term cash shortage?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH CONTROL ---------------- */

    if(type === 10){

        const correct = "Regular bank reconciliations";

        const options = shuffle([
            correct,
            "Ignore bank statements",
            "Keep no records",
            "Estimate cash only"
        ]);

        return {
            question:
            `What is a key cash control?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- LIQUIDITY RISK ---------------- */

    if(type === 11){

        const correct = "Risk of not being able to pay debts on time";

        const options = shuffle([
            correct,
            "Higher profit",
            "Lower revenue",
            "Tax savings"
        ]);

        return {
            question:
            `What is liquidity risk?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH VS PROFIT ---------------- */

    if(type === 12){

        const correct = "Profit does not always equal cash flow";

        const options = shuffle([
            correct,
            "Profit always equals cash",
            "Cash is always higher than profit",
            "They are identical always"
        ]);

        return {
            question:
            `What is the difference between cash and profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- INVESTMENT DECISION ---------------- */

    if(type === 13){

        const correct = "Invest surplus cash to earn return";

        const options = shuffle([
            correct,
            "Store cash without use",
            "Destroy surplus cash",
            "Increase liabilities"
        ]);

        return {
            question:
            `What can a business do with surplus cash?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CASH IMPACT ---------------- */

    if(type === 14){

        const correct = "Cash decreases when expenses are paid";

        const options = shuffle([
            correct,
            "Cash increases with expenses",
            "Cash is unaffected",
            "Profit increases automatically"
        ]);

        return {
            question:
            `What is the effect of paying expenses in cash?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL EXAM STYLE ---------------- */

    if(type === 15){

        const correct = "Ensures business can operate without liquidity problems";

        const options = shuffle([
            correct,
            "Increases profit automatically",
            "Removes tax obligations",
            "Eliminates accounting system"
        ]);

        return {
            question:
            `Why is cash management important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L4-CH7 type not implemented: " + type);
}
function generateL4CH8(type = null){
    if(type === null){
        type = rand(1,15);
    }
    const business = randomBusiness();

    /* ---------------- MULTI-STEP 1: CREDIT SALES → RECEIVABLES → RISK ---------------- */

    if(type === 1){

        const sales = rand(4000,12000);
        const paid = rand(2000,8000);

        const receivables = sales - paid;

        const risk =
            receivables > 5000
            ? "High risk of bad debt"
            : "Manageable credit exposure";

        const options = shuffle([
            risk,
            "No credit risk exists",
            "Profit automatically increases",
            "Cash increases immediately"
        ]);

        return {
            question:
            `${business} makes credit sales of £${sales}.
£${paid} is received immediately.
Outstanding invoices remain unpaid.

Step 1: Calculate receivables.
Step 2: Assess credit risk.`,
            options,
            correct: options.indexOf(risk)
        };
    }

    /* ---------------- MULTI-STEP 2: BAD DEBT + PROFIT IMPACT ---------------- */

    if(type === 2){

        const debt = rand(500,3000);

        const options = shuffle([
            "Expense increases and profit decreases",
            "Cash increases",
            "Liabilities increase",
            "Revenue increases"
        ]);

        return {
            question:
            `${business} writes off a bad debt of £${debt}.

Step 1: Identify accounting treatment.
Step 2: Determine impact on profit.`,
            options,
            correct: options.indexOf("Expense increases and profit decreases")
        };
    }

    /* ---------------- MULTI-STEP 3: CREDIT TERMS → CASH FLOW TIMING ---------------- */

    if(type === 3){

        const creditDays = rand(15,90);
        const cashDelay =
            creditDays > 60
            ? "Severe cash flow delay"
            : "Moderate cash delay";

        const options = shuffle([
            cashDelay,
            "Immediate cash inflow",
            "No effect on liquidity",
            "Profit increases instantly"
        ]);

        return {
            question:
            `${business} offers ${creditDays} days credit to customers.

Step 1: Identify timing of cash inflow.
Step 2: Assess liquidity impact.`,
            options,
            correct: options.indexOf(cashDelay)
        };
    }

    /* ---------------- MULTI-STEP 4: CREDIT CONTROL DECISION ---------------- */

    if(type === 4){

        const overdue = rand(1000,9000);

        const decision =
            overdue > 5000
            ? "Tighten credit control and chase debts"
            : "Maintain current credit policy";

        const options = shuffle([
            decision,
            "Stop issuing invoices",
            "Ignore receivables",
            "Increase tax rates"
        ]);

        return {
            question:
            `${business} has £${overdue} overdue receivables.

Step 1: Evaluate situation.
Step 2: Recommend action.`,
            options,
            correct: options.indexOf(decision)
        };
    }

    /* ---------------- MULTI-STEP 5: CREDIT LIMIT + SALES STRATEGY ---------------- */

    if(type === 5){

        const limit = rand(1000,10000);
        const request = rand(2000,12000);

        const decision =
            request > limit
            ? "Reject or reduce credit sale"
            : "Approve credit sale";

        const options = shuffle([
            decision,
            "Always approve all sales",
            "Ignore credit limits",
            "Convert all sales to cash immediately"
        ]);

        return {
            question:
            `${business} sets a credit limit of £${limit}.
Customer requests £${request} credit.

Step 1: Compare request to limit.
Step 2: Decide action.`,
            options,
            correct: options.indexOf(decision)
        };
    }

    /* ---------------- MULTI-STEP 6: CASH IMPACT OF CREDIT SALES ---------------- */

    if(type === 6){

        const sales = rand(3000,15000);
        const cash = rand(1000,6000);

        const netCash = cash - (sales - cash);

        const interpretation =
            netCash < 0
            ? "Negative cash flow due to credit sales"
            : "Positive but delayed liquidity impact";

        const options = shuffle([
            interpretation,
            "Cash increases immediately",
            "Profit equals cash",
            "No financial impact"
        ]);

        return {
            question:
            `${business} makes £${sales} sales, but only £${cash} is received in cash.

Step 1: Determine cash flow effect.
Step 2: Interpret liquidity position.`,
            options,
            correct: options.indexOf(interpretation)
        };
    }

    /* ---------------- MULTI-STEP 7: COLLECTION STRATEGY ---------------- */

    if(type === 7){

        const overdue = rand(500,7000);

        const action =
            overdue > 3000
            ? "Send reminders and escalate collection process"
            : "Monitor account normally";

        const options = shuffle([
            action,
            "Write off immediately",
            "Ignore customer",
            "Increase credit limit automatically"
        ]);

        return {
            question:
            `${business} has overdue debt of £${overdue}.

Step 1: Assess severity.
Step 2: Choose collection method.`,
            options,
            correct: options.indexOf(action)
        };
    }

    /* ---------------- MULTI-STEP 8: CREDIT POLICY IMPACT ---------------- */

    if(type === 8){

        const policy = rand(1,2);

        const result =
            policy === 1
            ? "Strict credit policy reduces risk but may reduce sales"
            : "Lenient credit policy increases sales but raises risk";

        const options = shuffle([
            result,
            "Credit policy has no effect",
            "Profit is unaffected",
            "Cash is immediate in all cases"
        ]);

        return {
            question:
            `Step 1: Evaluate impact of credit policy.
Step 2: Identify business trade-off.`,
            options,
            correct: options.indexOf(result)
        };
    }

    /* ---------------- FINAL MULTI-STEP EXAM SCENARIO ---------------- */

    if(type === 9){

        const sales = rand(5000,20000);
        const paid = rand(1000,8000);
        const overdue = sales - paid;

        const conclusion =
            overdue > 8000
            ? "High credit risk, poor cash flow control"
            : "Controlled credit environment with acceptable risk";

        const options = shuffle([
            conclusion,
            "No receivables exist",
            "Cash equals profit",
            "Tax eliminates debt"
        ]);

        return {
            question:
            `${business} reports:
Credit sales £${sales}
Cash received £${paid}

Step 1: Calculate receivables.
Step 2: Evaluate credit health.`,
            options,
            correct: options.indexOf(conclusion)
        };
    }
    /* ---------------- MULTI-STEP 10: AGEING ANALYSIS ---------------- */

    if(type === 10){

        const current = rand(1000,4000);
        const over30 = rand(1000,5000);
        const over60 = rand(1000,5000);

        const highRisk =
            over60 > current;

        const answer =
            highRisk
            ? "Receivables collection requires urgent action"
            : "Receivables position appears manageable";

        const options = shuffle([
            answer,
            "All debts will be collected immediately",
            "Cash flow is guaranteed",
            "Credit control is unnecessary"
        ]);

        return {
            question:
            `${business} receivables ageing report:

Current: £${current}
31–60 days: £${over30}
Over 60 days: £${over60}

Step 1: Review ageing profile.
Step 2: Assess collection risk.`,
            options,
            correct: options.indexOf(answer)
        };
    }

    /* ---------------- MULTI-STEP 11: EARLY PAYMENT DISCOUNT ---------------- */

    if(type === 11){

        const invoice = rand(2000,10000);
        const discount = rand(2,10);

        const discountValue =
            Math.round(invoice * discount / 100);

        const answer =
            "Improve cash collection speed";

        const options = shuffle([
            answer,
            "Increase bad debts",
            "Delay customer payments",
            "Remove receivables completely"
        ]);

        return {
            question:
            `${business} offers ${discount}% discount
for early payment on an invoice of £${invoice}.

Step 1: Calculate benefit offered (£${discountValue}).
Step 2: Identify business objective.`,
            options,
            correct: options.indexOf(answer)
        };
    }

    /* ---------------- MULTI-STEP 12: CUSTOMER CREDIT ASSESSMENT ---------------- */

    if(type === 12){

        const latePayments = rand(0,12);

        const decision =
            latePayments > 6
            ? "Refuse or restrict credit"
            : "Credit may be approved";

        const options = shuffle([
            decision,
            "Always grant unlimited credit",
            "Ignore payment history",
            "Increase credit automatically"
        ]);

        return {
            question:
            `A customer has made ${latePayments}
late payments during the last year.

Step 1: Assess creditworthiness.
Step 2: Decide whether credit should be granted.`,
            options,
            correct: options.indexOf(decision)
        };
    }

    /* ---------------- MULTI-STEP 13: CASH COLLECTION PERFORMANCE ---------------- */

    if(type === 13){

        const invoices = rand(10000,30000);
        const collected = rand(5000,25000);

        const rate =
            Math.round(
                collected / invoices * 100
            );

        const result =
            rate >= 80
            ? "Collection performance is strong"
            : "Collection performance needs improvement";

        const options = shuffle([
            result,
            "All debts have been written off",
            "Cash flow is irrelevant",
            "Credit sales should stop immediately"
        ]);

        return {
            question:
            `${business} issued invoices of £${invoices}.
Cash collected was £${collected}.

Step 1: Assess collection rate.
Step 2: Evaluate performance.`,
            options,
            correct: options.indexOf(result)
        };
    }

    /* ---------------- MULTI-STEP 14: DEBT RECOVERY DECISION ---------------- */

    if(type === 14){

        const overdue = rand(3000,12000);
        const months = rand(3,12);

        const action =
            months > 6
            ? "Escalate debt recovery procedures"
            : "Continue standard collection process";

        const options = shuffle([
            action,
            "Ignore overdue balance",
            "Increase customer's credit limit",
            "Issue refund"
        ]);

        return {
            question:
            `${business} is owed £${overdue}.
The balance has been overdue for ${months} months.

Step 1: Assess seriousness.
Step 2: Select recovery action.`,
            options,
            correct: options.indexOf(action)
        };
    }

    /* ---------------- MULTI-STEP 15: FULL EXAM SCENARIO ---------------- */

    if(type === 15){

        const sales = rand(10000,25000);
        const collected = rand(4000,15000);

        const receivables =
            sales - collected;

        const answer =
            receivables > sales * 0.5
            ? "Credit control performance is weak"
            : "Credit control performance is acceptable";

        const options = shuffle([
            answer,
            "No receivables exist",
            "Profit equals cash collected",
            "Bad debts cannot occur"
        ]);

        return {
            question:
            `${business} reports:

Credit sales: £${sales}
Cash collected: £${collected}

Step 1: Calculate outstanding receivables.
Step 2: Evaluate overall credit control effectiveness.`,
            options,
            correct: options.indexOf(answer)
        };
    }
    throw new Error("L4-CH8 multi-step type not implemented: " + type);
}
