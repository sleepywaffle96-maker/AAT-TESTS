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

    return names[rand(0, names.length - 1)];
}
/* ------------------------
   LEVEL 2 QUESTION BANK
------------------------ */

function generateL2CH1(){

    const type = rand(1,15);
    const business = randomBusiness();

    /* ---------------- EASY CONCEPT + CONTEXT ---------------- */

    if(type === 1){

        const correct = "Recording financial transactions";

        const options = shuffle([
            correct,
            "Calculating tax automatically",
            "Preparing audit reports",
            "Managing payroll only"
        ]);

        return {
            question:
            `What is the main purpose of bookkeeping in a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Assets";

        const options = shuffle([
            correct,
            "Liabilities",
            "Expenses",
            "Revenue"
        ]);

        return {
            question:
            `A business purchases equipment. How is this classified?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Double-entry bookkeeping";

        const options = shuffle([
            correct,
            "Single-entry bookkeeping",
            "Cash accounting only",
            "Management accounting"
        ]);

        return {
            question:
            `Every transaction affects at least two accounts. Which principle is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Capital";

        const options = shuffle([
            correct,
            "Expenses",
            "Liabilities",
            "Drawings"
        ]);

        return {
            question:
            `${business} owner introduces personal funds into the business. Which account increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 5){

        const correct = "Drawings";

        const options = shuffle([
            correct,
            "Sales",
            "Purchases",
            "Revenue"
        ]);

        return {
            question:
            `The owner takes money out of the business for personal use. Which account is affected?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- MICRO NUMERIC BASIC (OSBORNE STYLE) ---------------- */

    if(type === 6){

        const amount = rand(100,900);

        const correct = amount;

        const options = shuffle([
            correct,
            correct + 50,
            correct - 30,
            correct + 100
        ]);

        return {
            question:
            `A cash sale of £${amount} is recorded. What value should be entered in sales?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const amount = rand(200,1200);

        const correct = amount;

        const options = shuffle([
            correct,
            correct + 100,
            correct - 50,
            correct + 200
        ]);

        return {
            question:
            `${business} purchases goods for £${amount} on credit. What value is recorded in purchases?`,
            options: options.map(v => currency(v)),
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CONTROL UNDERSTANDING ---------------- */

    if(type === 8){

        const correct = "Sales invoice";

        const options = shuffle([
            correct,
            "Bank statement",
            "Payroll record",
            "Petty cash voucher"
        ]);

        return {
            question:
            `Which document is issued when goods are sold on credit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 9){

        const correct = "Purchase invoice";

        const options = shuffle([
            correct,
            "Sales invoice",
            "Receipt",
            "Credit note"
        ]);

        return {
            question:
            `Which document is received when goods are bought on credit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- ACCOUNTING EQUATION BASIC ---------------- */

    if(type === 10){

        const amount = rand(100,1000);

        const correct = "Assets increase and capital increases";

        const options = shuffle([
            correct,
            "Assets decrease and capital decreases",
            "Liabilities increase and assets decrease",
            "Revenue decreases and capital decreases"
        ]);

        return {
            question:
            `${business} receives £${amount} from the owner as capital. What is the effect?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- CLASSIFICATION QUICK FIRE ---------------- */

    if(type === 11){

        const correct = "Asset";

        const options = shuffle([
            correct,
            "Expense",
            "Revenue",
            "Liability"
        ]);

        return {
            question:
            `A trade receivable is classified as which type of account?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Liability";

        const options = shuffle([
            correct,
            "Asset",
            "Expense",
            "Capital"
        ]);

        return {
            question:
            `A trade payable is classified as which type of account?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- VERY LIGHT APPLICATION ---------------- */

    if(type === 13){

        const amount = rand(50,300);

        const correct = "Expense";

        const options = shuffle([
            correct,
            "Asset",
            "Revenue",
            "Capital"
        ]);

        return {
            question:
            `${business} pays £${amount} for stationery. How is this classified?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "To provide reliable financial information";

        const options = shuffle([
            correct,
            "To increase profit automatically",
            "To avoid paying tax",
            "To eliminate all errors"
        ]);

        return {
            question:
            `Why is bookkeeping important for a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    /* ---------------- FINAL CHECK ---------------- */

    if(type === 15){

        const correct = "At least two accounts";

        const options = shuffle([
            correct,
            "Only one account",
            "Only cash accounts",
            "Only revenue accounts"
        ]);

        return {
            question:
            `In double-entry bookkeeping, how many accounts are affected by each transaction?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    throw new Error("L2-CH1 type not implemented: " + type);
}
function generateL2CH2(){

    const type = rand(1,15);
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
function generateL2CH3(){

    const type = rand(1,15);
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
function generateL2CH4(){

    const type = rand(1,15);
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
function generateL2CH5(){

    const type = rand(1,15);
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

function generateL3CH1(){

    const type = rand(1,15);
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

function generateL3CH2(){

    const type = rand(1,15);
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
    function generateL3CH3(){

    const type = rand(1,15);
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
function generateL4CH2(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- P&L STRUCTURE ----------------

    if(type === 1){

        const correct = "Revenue - expenses = profit";

        const options = shuffle([
            correct,
            "Assets - liabilities = cash",
            "Cash - VAT = revenue",
            "Capital - bank = profit"
        ]);

        return {
            question:`How is profit calculated in an income statement?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Gross profit comes before expenses";

        const options = shuffle([
            correct,
            "Expenses come before revenue",
            "Tax comes first",
            "Assets are included"
        ]);

        return {
            question:`Where does gross profit appear in the income statement?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Operating expenses reduce profit";

        const options = shuffle([
            correct,
            "Expenses increase profit",
            "Revenue reduces costs",
            "Assets increase profit"
        ]);

        return {
            question:`What is the effect of expenses in P&L?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Net profit is final result";

        const options = shuffle([
            correct,
            "Net profit is before revenue",
            "Net profit equals assets",
            "Net profit is cash balance"
        ]);

        return {
            question:`What does net profit represent?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BALANCE SHEET ----------------

    if(type === 5){

        const correct = "Assets = Liabilities + Capital";

        const options = shuffle([
            correct,
            "Revenue = Expenses + Tax",
            "Cash = Profit",
            "Income = Assets"
        ]);

        return {
            question:`What is the accounting equation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Non-current assets and current assets";

        const options = shuffle([
            correct,
            "Revenue and expenses",
            "Profit and loss",
            "Debits and credits"
        ]);

        return {
            question:`What are the main categories of assets?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Current liabilities are short-term obligations";

        const options = shuffle([
            correct,
            "Current liabilities are assets",
            "They are long-term investments",
            "They are revenue items"
        ]);

        return {
            question:`What are current liabilities?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Capital represents owner’s investment";

        const options = shuffle([
            correct,
            "Capital is bank overdraft",
            "Capital is revenue",
            "Capital is expenses"
        ]);

        return {
            question:`What does capital represent?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- ACCRUALS / PREPAYMENTS ----------------

    if(type === 9){

        const correct = "Accrual increases expenses";

        const options = shuffle([
            correct,
            "Accrual increases revenue",
            "Accrual reduces assets",
            "Accrual has no effect"
        ]);

        return {
            question:`What is the effect of an accrual?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Prepayment is an asset";

        const options = shuffle([
            correct,
            "Prepayment is a liability",
            "Prepayment is revenue",
            "Prepayment is expense only"
        ]);

        return {
            question:`How is a prepayment treated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Match expenses to correct accounting period";

        const options = shuffle([
            correct,
            "Increase profit artificially",
            "Ignore timing differences",
            "Record cash only"
        ]);

        return {
            question:`Why are accruals and prepayments used?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "They adjust profit for correct period";

        const options = shuffle([
            correct,
            "They increase revenue always",
            "They remove liabilities",
            "They eliminate assets"
        ]);

        return {
            question:`What is the purpose of adjustments?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- DEPRECIATION ----------------

    if(type === 13){

        const correct = "Spreads cost over useful life";

        const options = shuffle([
            correct,
            "Increases cash balance",
            "Removes VAT",
            "Creates revenue"
        ]);

        return {
            question:`What is depreciation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Non-current asset value decreases over time";

        const options = shuffle([
            correct,
            "Asset value increases over time",
            "Cash increases automatically",
            "Liabilities increase"
        ]);

        return {
            question:`What happens to assets due to depreciation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Depreciation is a non-cash expense";

        const options = shuffle([
            correct,
            "Depreciation involves cash payment",
            "It increases revenue",
            "It is a liability"
        ]);

        return {
            question:`What type of expense is depreciation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Accumulated depreciation reduces asset value";

        const options = shuffle([
            correct,
            "It increases profit",
            "It increases revenue",
            "It increases cash"
        ]);

        return {
            question:`What is accumulated depreciation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- INTERPRETATION ----------------

    if(type === 17){

        const correct = "Profitability measures efficiency";

        const options = shuffle([
            correct,
            "Profitability measures cash only",
            "Profitability ignores costs",
            "Profitability is fixed"
        ]);

        return {
            question:`What does profitability indicate?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Liquidity is ability to pay short-term debts";

        const options = shuffle([
            correct,
            "Liquidity is profit level",
            "Liquidity is revenue",
            "Liquidity is assets only"
        ]);

        return {
            question:`What is liquidity?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Higher profit improves financial performance";

        const options = shuffle([
            correct,
            "Profit has no effect",
            "Profit reduces assets",
            "Profit is irrelevant"
        ]);

        return {
            question:`What does higher profit indicate?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Financial statements support decision making";

        const options = shuffle([
            correct,
            "They only record cash",
            "They replace bookkeeping",
            "They remove taxes"
        ]);

        return {
            question:`What is the purpose of financial statements?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH2();
}
   function generateL4CH3(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- INTERNAL CONTROL BASICS ----------------

    if(type === 1){

        const correct = "To prevent fraud and errors";

        const options = shuffle([
            correct,
            "To increase profit",
            "To reduce tax",
            "To increase sales"
        ]);

        return {
            question:`What is the main purpose of internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "To safeguard assets";

        const options = shuffle([
            correct,
            "To increase revenue",
            "To reduce wages",
            "To avoid VAT"
        ]);

        return {
            question:`Why do businesses use internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "To ensure reliable financial reporting";

        const options = shuffle([
            correct,
            "To increase cash flow",
            "To avoid expenses",
            "To maximise sales"
        ]);

        return {
            question:`What is another aim of internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Reduce risk of misstatement";

        const options = shuffle([
            correct,
            "Increase tax payments",
            "Increase liabilities",
            "Reduce revenue"
        ]);

        return {
            question:`What do controls help reduce?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SEGREGATION OF DUTIES ----------------

    if(type === 5){

        const correct = "Different people handle recording and approval";

        const options = shuffle([
            correct,
            "One person does everything",
            "Only managers record transactions",
            "No recording is needed"
        ]);

        return {
            question:`What is segregation of duties?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Reduces risk of fraud";

        const options = shuffle([
            correct,
            "Increases fraud risk",
            "Removes accounting records",
            "Increases cash usage"
        ]);

        return {
            question:`Why is segregation of duties important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Authorisation should be separate from recording";

        const options = shuffle([
            correct,
            "Same person should authorise and record",
            "No authorisation is needed",
            "Only cash transactions matter"
        ]);

        return {
            question:`What is good control practice?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Prevents manipulation of records";

        const options = shuffle([
            correct,
            "Increases manipulation",
            "Removes documentation",
            "Stops auditing"
        ]);

        return {
            question:`What is a benefit of segregation of duties?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- FRAUD & ERROR PREVENTION ----------------

    if(type === 9){

        const correct = "Authorisation of transactions";

        const options = shuffle([
            correct,
            "Ignoring transactions",
            "Removing controls",
            "Increasing cash usage"
        ]);

        return {
            question:`Which control helps prevent fraud?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Reconciliations detect errors";

        const options = shuffle([
            correct,
            "Reconciliations increase errors",
            "Reconciliations remove accounts",
            "Reconciliations increase fraud"
        ]);

        return {
            question:`What is the purpose of reconciliations?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Physical security of assets";

        const options = shuffle([
            correct,
            "Leaving assets unprotected",
            "Removing records",
            "Ignoring stock"
        ]);

        return {
            question:`What helps prevent theft?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Regular reviews of accounts";

        const options = shuffle([
            correct,
            "No reviews needed",
            "Only annual checks",
            "Ignore discrepancies"
        ]);

        return {
            question:`How can errors be detected?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- AUDIT TRAIL & SYSTEMS ----------------

    if(type === 13){

        const correct = "Audit trail shows transaction history";

        const options = shuffle([
            correct,
            "Audit trail hides transactions",
            "Audit trail deletes records",
            "Audit trail increases cash"
        ]);

        return {
            question:`What is an audit trail?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Traceability of transactions";

        const options = shuffle([
            correct,
            "Random record keeping",
            "Cash-only tracking",
            "No documentation"
        ]);

        return {
            question:`What does an audit trail provide?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Computerised systems improve accuracy";

        const options = shuffle([
            correct,
            "Increase manual errors",
            "Remove records",
            "Stop accounting"
        ]);

        return {
            question:`What is a benefit of computerised accounting systems?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Backup systems protect data";

        const options = shuffle([
            correct,
            "Data is never saved",
            "Backups increase fraud",
            "Backups remove records"
        ]);

        return {
            question:`Why are backups important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM SCENARIOS ----------------

    if(type === 17){

        const correct = "Weak controls increase fraud risk";

        const options = shuffle([
            correct,
            "Weak controls reduce fraud",
            "Controls are irrelevant",
            "Fraud is impossible"
        ]);

        return {
            question:`What happens if internal controls are weak?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Lack of segregation increases risk";

        const options = shuffle([
            correct,
            "Risk decreases",
            "Profit increases",
            "Errors disappear"
        ]);

        return {
            question:`What is the effect of no segregation of duties?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Controls must be regularly reviewed";

        const options = shuffle([
            correct,
            "Controls never change",
            "Controls are optional",
            "Controls are only for audits"
        ]);

        return {
            question:`What is important for internal control systems?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Internal controls support accurate reporting";

        const options = shuffle([
            correct,
            "Controls reduce accuracy",
            "Controls remove accounting",
            "Controls increase fraud"
        ]);

        return {
            question:`What is the overall benefit of internal controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH3();
}

function generateL4CH4(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- VAT BASICS ----------------

    if(type === 1){

        const correct = "Output VAT is charged on sales";

        const options = shuffle([
            correct,
            "Input VAT is charged on sales",
            "VAT is ignored in business",
            "VAT only applies to expenses"
        ]);

        return {
            question:`What is output VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Input VAT is reclaimable on purchases";

        const options = shuffle([
            correct,
            "Input VAT is never recoverable",
            "VAT is only on profit",
            "VAT replaces income tax"
        ]);

        return {
            question:`What is input VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const amount = rand(100,5000);

        const correct = "VAT must be added to sales price";

        const options = shuffle([
            correct,
            "VAT reduces sales price",
            "VAT is deducted from profit only",
            "VAT is ignored in invoices"
        ]);

        return {
            question:
`${business} sells goods worth £${amount} (excluding VAT).
What is the correct VAT treatment?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "VAT is a liability to HMRC";

        const options = shuffle([
            correct,
            "VAT is an asset always",
            "VAT is revenue",
            "VAT is profit"
        ]);

        return {
            question:`How is VAT treated in accounts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- TAXABLE PROFIT ----------------

    if(type === 5){

        const correct = "Accounting profit adjusted for tax rules";

        const options = shuffle([
            correct,
            "Cash received only",
            "Revenue minus VAT",
            "Assets minus liabilities only"
        ]);

        return {
            question:`What is taxable profit based on?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Some expenses are disallowed for tax";

        const options = shuffle([
            correct,
            "All expenses are always allowed",
            "Only cash expenses count",
            "Revenue is ignored"
        ]);

        return {
            question:`What is true about taxable profit adjustments?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Capital expenditure is not fully deductible immediately";

        const options = shuffle([
            correct,
            "Capital expenditure is always fully deductible",
            "Capital is treated as revenue",
            "All assets are expenses immediately"
        ]);

        return {
            question:`How is capital expenditure treated for tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Depreciation is not tax deductible directly";

        const options = shuffle([
            correct,
            "Depreciation is always tax deductible",
            "Depreciation increases VAT",
            "Depreciation is revenue"
        ]);

        return {
            question:`What is true about depreciation and tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- CORPORATION TAX ----------------

    if(type === 9){

        const correct = "Tax on company profits";

        const options = shuffle([
            correct,
            "Tax on sales only",
            "Tax on assets",
            "Tax on cash flow"
        ]);

        return {
            question:`What is corporation tax charged on?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Paid on taxable profit";

        const options = shuffle([
            correct,
            "Paid on revenue only",
            "Paid on VAT collected",
            "Paid on bank balance"
        ]);

        return {
            question:`Corporation tax is calculated on:`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Higher profit leads to higher tax liability";

        const options = shuffle([
            correct,
            "Tax is fixed regardless of profit",
            "Tax decreases with profit",
            "Profit has no effect"
        ]);

        return {
            question:`What is the relationship between profit and tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Tax liability is a current liability";

        const options = shuffle([
            correct,
            "Tax is an asset",
            "Tax is revenue",
            "Tax is capital"
        ]);

        return {
            question:`How is corporation tax recorded?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- COMPLIANCE & PENALTIES ----------------

    if(type === 13){

        const correct = "Late filing penalties apply";

        const options = shuffle([
            correct,
            "No consequences for late filing",
            "Profit increases automatically",
            "VAT is removed"
        ]);

        return {
            question:`What happens if tax returns are filed late?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Accurate records are legally required";

        const options = shuffle([
            correct,
            "Records are optional",
            "Only cash records matter",
            "VAT replaces records"
        ]);

        return {
            question:`Why must businesses keep records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "HMRC can investigate records";

        const options = shuffle([
            correct,
            "Records cannot be checked",
            "Only banks can audit",
            "No inspections exist"
        ]);

        return {
            question:`Who can inspect business records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Deadlines must be strictly followed";

        const options = shuffle([
            correct,
            "Deadlines are optional",
            "Tax can be ignored",
            "Profit removes deadlines"
        ]);

        return {
            question:`What is important in tax compliance?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM SCENARIOS ----------------

    if(type === 17){

        const correct = "VAT collected must be paid to HMRC";

        const options = shuffle([
            correct,
            "VAT belongs to the owner",
            "VAT is profit",
            "VAT is ignored"
        ]);

        return {
            question:`What happens to VAT collected from customers?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Tax adjustments increase accuracy of profit";

        const options = shuffle([
            correct,
            "Tax adjustments reduce accuracy",
            "Tax removes accounting rules",
            "Tax has no effect"
        ]);

        return {
            question:`Why are tax adjustments made?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Different rules apply for accounting and tax profit";

        const options = shuffle([
            correct,
            "They are always identical",
            "Tax ignores accounting",
            "Profit is always cash based"
        ]);

        return {
            question:`What is true about accounting vs taxable profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Compliance ensures legal operation";

        const options = shuffle([
            correct,
            "Compliance increases fraud",
            "Compliance reduces profit",
            "Compliance is optional"
        ]);

        return {
            question:`Why is tax compliance important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH4();
}
function generateL4CH5(){

    const type = rand(1,20);
    const business = randomBusiness();
    const person = randomPerson();

    // ---------------- INCOME TAX BASICS ----------------

    if(type === 1){

        const correct = "Tax paid on personal income";

        const options = shuffle([
            correct,
            "Tax paid on company revenue",
            "Tax on assets only",
            "Tax on VAT"
        ]);

        return {
            question:`What is personal income tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Higher income leads to higher tax";

        const options = shuffle([
            correct,
            "Tax is fixed for everyone",
            "Tax decreases with income",
            "Income has no effect"
        ]);

        return {
            question:`How does income affect tax liability?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const amount = rand(15000,60000);

        const correct = "Gross income before deductions";

        const options = shuffle([
            correct,
            "Net income after tax only",
            "Cash in bank",
            "Profit after VAT"
        ]);

        return {
            question:
`${person} earns £${amount} per year.
What is gross income?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Net income is after tax deductions";

        const options = shuffle([
            correct,
            "Net income is before tax",
            "Net income is revenue",
            "Net income is VAT"
        ]);

        return {
            question:`What is net income?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- PAYE vs SELF-ASSESSMENT ----------------

    if(type === 5){

        const correct = "PAYE is tax deducted by employer";

        const options = shuffle([
            correct,
            "PAYE is paid annually by self-employed only",
            "PAYE is VAT system",
            "PAYE is optional tax"
        ]);

        return {
            question:`What is PAYE?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Self-employed complete tax returns";

        const options = shuffle([
            correct,
            "Employees complete VAT returns",
            "Employers pay all tax",
            "No records are needed"
        ]);

        return {
            question:`What is self-assessment?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Employees pay tax through payroll";

        const options = shuffle([
            correct,
            "Employees pay tax manually each month",
            "Employees avoid tax",
            "Employees set tax rates"
        ]);

        return {
            question:`How do employees usually pay tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Self-employed income is not taxed at source";

        const options = shuffle([
            correct,
            "Tax is always deducted automatically",
            "No tax applies",
            "VAT replaces income tax"
        ]);

        return {
            question:`What is true for self-employed individuals?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- DEDUCTIONS & ALLOWANCES ----------------

    if(type === 9){

        const correct = "Personal allowance reduces taxable income";

        const options = shuffle([
            correct,
            "Allowance increases tax",
            "Allowance is a penalty",
            "Allowance removes income"
        ]);

        return {
            question:`What is a personal allowance?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Allowable expenses reduce taxable profit";

        const options = shuffle([
            correct,
            "Expenses increase tax",
            "Expenses are ignored",
            "Expenses are revenue"
        ]);

        return {
            question:`What is the effect of allowable expenses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Some expenses are not tax deductible";

        const options = shuffle([
            correct,
            "All expenses are deductible",
            "No expenses are allowed",
            "Expenses increase tax automatically"
        ]);

        return {
            question:`What is true about tax deductions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Charitable donations may reduce tax";

        const options = shuffle([
            correct,
            "Donations increase tax",
            "Donations are ignored",
            "Donations are liabilities"
        ]);

        return {
            question:`How can donations affect tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- NATIONAL INSURANCE & NET INCOME ----------------

    if(type === 13){

        const correct = "NI contributes to state benefits";

        const options = shuffle([
            correct,
            "NI is a business tax",
            "NI is VAT",
            "NI is optional income"
        ]);

        return {
            question:`What is National Insurance used for?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Net pay is after tax and NI";

        const options = shuffle([
            correct,
            "Net pay is before deductions",
            "Net pay equals gross income",
            "Net pay excludes salary"
        ]);

        return {
            question:`What is net pay?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Gross pay minus deductions";

        const options = shuffle([
            correct,
            "Gross pay plus VAT",
            "Cash received only",
            "Revenue minus expenses"
        ]);

        return {
            question:`How is net income calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Higher earnings increase NI contributions";

        const options = shuffle([
            correct,
            "NI is fixed",
            "NI decreases with income",
            "NI is unrelated to earnings"
        ]);

        return {
            question:`What happens to NI with higher income?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM SCENARIOS ----------------

    if(type === 17){

        const correct = "Incorrect tax reporting leads to penalties";

        const options = shuffle([
            correct,
            "No consequences exist",
            "Profit increases automatically",
            "Tax is ignored"
        ]);

        return {
            question:`What happens if personal tax is misreported?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Records must be kept for tax compliance";

        const options = shuffle([
            correct,
            "Records are optional",
            "Only banks keep records",
            "HMRC does not require records"
        ]);

        return {
            question:`Why must individuals keep tax records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Tax systems differ between employees and self-employed";

        const options = shuffle([
            correct,
            "They are identical",
            "Employees pay no tax",
            "Self-employed are exempt"
        ]);

        return {
            question:`What is true about tax systems?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Tax compliance ensures legal income reporting";

        const options = shuffle([
            correct,
            "Compliance increases fraud",
            "Compliance is optional",
            "Compliance removes income tax"
        ]);

        return {
            question:`Why is tax compliance important for individuals?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH5();
}
function generateL4CH6(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- AUDIT BASICS ----------------

    if(type === 1){

        const correct = "To verify financial statements are accurate";

        const options = shuffle([
            correct,
            "To prepare tax returns for HMRC",
            "To increase profit",
            "To manage payroll"
        ]);

        return {
            question:`What is the main purpose of an external audit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "To provide an independent opinion";

        const options = shuffle([
            correct,
            "To change accounting records",
            "To reduce tax",
            "To create budgets"
        ]);

        return {
            question:`What does an external auditor provide?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "To ensure accounts show a true and fair view";

        const options = shuffle([
            correct,
            "To guarantee profit",
            "To increase revenue",
            "To manage cash flow"
        ]);

        return {
            question:`What is the audit opinion based on?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Audit detects but does not prevent fraud";

        const options = shuffle([
            correct,
            "Audit prevents all fraud",
            "Audit creates fraud",
            "Audit removes records"
        ]);

        return {
            question:`What is a limitation of an audit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- INDEPENDENCE & ETHICS ----------------

    if(type === 5){

        const correct = "Auditor must be independent of the business";

        const options = shuffle([
            correct,
            "Auditor works as manager",
            "Auditor is owner of business",
            "Auditor prepares accounts only"
        ]);

        return {
            question:`Why must auditors be independent?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "To avoid bias in reporting";

        const options = shuffle([
            correct,
            "To increase profit",
            "To reduce tax liability",
            "To increase sales"
        ]);

        return {
            question:`What is the purpose of auditor independence?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Conflicts of interest must be avoided";

        const options = shuffle([
            correct,
            "Conflicts are encouraged",
            "Auditors must be employees",
            "Auditors control cash"
        ]);

        return {
            question:`What is an ethical requirement for auditors?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Auditors cannot prepare the accounts they audit";

        const options = shuffle([
            correct,
            "Auditors must prepare accounts",
            "Auditors are management",
            "Auditors ignore records"
        ]);

        return {
            question:`What is a key rule in auditing ethics?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- AUDIT EVIDENCE ----------------

    if(type === 9){

        const correct = "Invoices and receipts provide audit evidence";

        const options = shuffle([
            correct,
            "Opinions only",
            "Verbal statements only",
            "Estimates only"
        ]);

        return {
            question:`What is audit evidence?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Physical inspection of assets";

        const options = shuffle([
            correct,
            "Guessing values",
            "Ignoring records",
            "Creating reports"
        ]);

        return {
            question:`How can auditors verify assets?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Bank statements are key evidence";

        const options = shuffle([
            correct,
            "Only forecasts",
            "Only budgets",
            "Only verbal claims"
        ]);

        return {
            question:`What is strong audit evidence?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Sampling is used due to time limits";

        const options = shuffle([
            correct,
            "All transactions are always checked",
            "No records are checked",
            "Only cash is checked"
        ]);

        return {
            question:`Why do auditors use sampling?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- PROCESS & LIMITATIONS ----------------

    if(type === 13){

        const correct = "Audit includes planning, testing, reporting";

        const options = shuffle([
            correct,
            "Audit is only reporting",
            "Audit is only planning",
            "Audit is only bookkeeping"
        ]);

        return {
            question:`What are the stages of an audit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Audits are not 100% error proof";

        const options = shuffle([
            correct,
            "Audits guarantee perfection",
            "Audits remove all fraud",
            "Audits are optional checks only"
        ]);

        return {
            question:`What is a limitation of auditing?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Materiality affects audit focus";

        const options = shuffle([
            correct,
            "All items are equally important",
            "Materiality is irrelevant",
            "Only cash matters"
        ]);

        return {
            question:`What is materiality in auditing?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Audit risk cannot be fully eliminated";

        const options = shuffle([
            correct,
            "Risk can be fully removed",
            "Risk is not considered",
            "Risk is always zero"
        ]);

        return {
            question:`What is audit risk?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM SCENARIOS ----------------

    if(type === 17){

        const correct = "Errors may still exist after audit";

        const options = shuffle([
            correct,
            "All errors are removed",
            "Audits create errors",
            "Records are destroyed"
        ]);

        return {
            question:`What may happen even after an audit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Auditor issues an audit report";

        const options = shuffle([
            correct,
            "Auditor prepares tax returns",
            "Auditor sets prices",
            "Auditor manages payroll"
        ]);

        return {
            question:`What is the final output of an audit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Audit increases credibility of accounts";

        const options = shuffle([
            correct,
            "Audit reduces reliability",
            "Audit removes transparency",
            "Audit has no effect"
        ]);

        return {
            question:`What is the benefit of auditing?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Stakeholders rely on audited accounts";

        const options = shuffle([
            correct,
            "Only managers use them",
            "They are never used",
            "They are irrelevant"
        ]);

        return {
            question:`Who uses audited financial statements?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH6();
}
function generateL4CH7(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- CASH & LIQUIDITY ----------------

    if(type === 1){

        const correct = "Cash is required for daily operations";

        const options = shuffle([
            correct,
            "Cash is only needed annually",
            "Cash is irrelevant in business",
            "Cash is only profit"
        ]);

        return {
            question:`Why is cash important for a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Liquidity refers to ability to pay short-term debts";

        const options = shuffle([
            correct,
            "Liquidity is profit",
            "Liquidity is assets only",
            "Liquidity is long-term loans"
        ]);

        return {
            question:`What is liquidity?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Cash flow measures movement of cash in and out";

        const options = shuffle([
            correct,
            "Cash flow is profit only",
            "Cash flow is VAT",
            "Cash flow is assets"
        ]);

        return {
            question:`What is cash flow?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "A profitable business can still run out of cash";

        const options = shuffle([
            correct,
            "Profit always equals cash",
            "Cash and profit are identical",
            "Cash is always unlimited"
        ]);

        return {
            question:`What is a key cash flow concept?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- WORKING CAPITAL ----------------

    if(type === 5){

        const correct = "Current assets minus current liabilities";

        const options = shuffle([
            correct,
            "Total revenue minus expenses",
            "Fixed assets minus capital",
            "Cash minus VAT"
        ]);

        return {
            question:`What is working capital?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Positive working capital supports operations";

        const options = shuffle([
            correct,
            "Negative working capital is always good",
            "Working capital is irrelevant",
            "It only affects tax"
        ]);

        return {
            question:`Why is working capital important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Inventory increases working capital needs";

        const options = shuffle([
            correct,
            "Inventory reduces cash needs to zero",
            "Inventory has no effect",
            "Inventory removes liabilities"
        ]);

        return {
            question:`What is the effect of high inventory?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Receivables delay cash inflow";

        const options = shuffle([
            correct,
            "Receivables increase immediate cash",
            "Receivables are liabilities",
            "Receivables are expenses"
        ]);

        return {
            question:`How do receivables affect cash flow?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BANKING & OVERDRAFT ----------------

    if(type === 9){

        const correct = "Overdraft allows spending beyond balance";

        const options = shuffle([
            correct,
            "Overdraft increases profit",
            "Overdraft removes debt",
            "Overdraft is free cash"
        ]);

        return {
            question:`What is a bank overdraft?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Overdraft is a short-term liability";

        const options = shuffle([
            correct,
            "Overdraft is an asset",
            "Overdraft is revenue",
            "Overdraft is equity"
        ]);

        return {
            question:`How is an overdraft classified?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Interest is charged on overdrafts";

        const options = shuffle([
            correct,
            "Overdrafts are interest-free",
            "Overdrafts increase revenue",
            "Overdrafts are tax-free income"
        ]);

        return {
            question:`What is true about overdrafts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Bank reconciliation identifies timing differences";

        const options = shuffle([
            correct,
            "Bank reconciliation removes profit",
            "It replaces bookkeeping",
            "It ignores bank statements"
        ]);

        return {
            question:`What is the purpose of bank reconciliation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- CASH FLOW DECISIONS ----------------

    if(type === 13){

        const correct = "Delaying payments improves short-term cash";

        const options = shuffle([
            correct,
            "Paying early improves cash",
            "Ignoring suppliers improves cash",
            "Cash flow is unaffected"
        ]);

        return {
            question:`How can a business improve cash flow?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Fast collection of receivables improves liquidity";

        const options = shuffle([
            correct,
            "Slower collections improve liquidity",
            "Receivables have no effect",
            "Cash flow ignores customers"
        ]);

        return {
            question:`Why is quick debt collection important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Cash budgeting helps predict shortages";

        const options = shuffle([
            correct,
            "Cash budgeting is unnecessary",
            "Cash budgets are profit reports",
            "Budgets remove risk entirely"
        ]);

        return {
            question:`What is the purpose of a cash budget?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Maintaining cash reserves reduces risk";

        const options = shuffle([
            correct,
            "Cash reserves increase risk",
            "Cash reserves are liabilities",
            "Cash reserves are profit"
        ]);

        return {
            question:`Why do businesses keep cash reserves?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM SCENARIOS ----------------

    if(type === 17){

        const correct = "Cash shortage can cause business failure";

        const options = shuffle([
            correct,
            "Cash shortage increases profit",
            "Cash shortage is irrelevant",
            "Cash shortage improves liquidity"
        ]);

        return {
            question:`What is the risk of poor cash management?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Cash flow differs from profit";

        const options = shuffle([
            correct,
            "Cash flow equals profit always",
            "Cash flow is irrelevant",
            "Profit is always cash"
        ]);

        return {
            question:`What is true about cash flow and profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Strong liquidity improves survival chances";

        const options = shuffle([
            correct,
            "Liquidity has no effect",
            "Liquidity reduces survival",
            "Liquidity is irrelevant"

        ]);

        return {
            question:`Why is liquidity important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Treasury management ensures cash availability";

        const options = shuffle([
            correct,
            "Treasury removes cash needs",
            "Treasury is only tax-related",
            "Treasury replaces accounting"
        ]);

        return {
            question:`What is the role of treasury management?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH7();
}
function generateL4CH8(){

    const type = rand(1,20);
    const business = randomBusiness();
    const customer = randomPerson();

    // ---------------- CREDIT BASICS ----------------

    if(type === 1){

        const correct = "Credit sales allow customers to pay later";

        const options = shuffle([
            correct,
            "Credit sales require immediate payment",
            "Credit sales are cash only",
            "Credit sales eliminate risk"
        ]);

        return {
            question:`What are credit sales?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Trade receivables represent money owed by customers";

        const options = shuffle([
            correct,
            "Trade receivables are debts owed to suppliers",
            "Trade receivables are expenses",
            "Trade receivables are cash in bank"
        ]);

        return {
            question:`What are trade receivables?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Credit increases sales but increases risk";

        const options = shuffle([
            correct,
            "Credit reduces sales",
            "Credit removes customers",
            "Credit eliminates profit"
        ]);

        return {
            question:`What is the effect of offering credit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Credit policy sets rules for lending to customers";

        const options = shuffle([
            correct,
            "Credit policy removes accounting",
            "Credit policy sets tax rates",
            "Credit policy controls wages"
        ]);

        return {
            question:`What is a credit policy?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- RECEIVABLES & RISK ----------------

    if(type === 5){

        const amount = rand(500,8000);

        const correct = "Higher receivables increase risk of non-payment";

        const options = shuffle([
            correct,
            "Receivables eliminate risk",
            "Receivables guarantee cash",
            "Receivables reduce sales"
        ]);

        return {
            question:
`${business} has £${amount} in trade receivables.
What is the risk implication?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Late payment reduces cash flow";

        const options = shuffle([
            correct,
            "Late payment increases profit",
            "Late payment has no effect",
            "Late payment increases VAT"
        ]);

        return {
            question:`What is the effect of late customer payments?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Credit checks reduce risk of bad debts";

        const options = shuffle([
            correct,
            "Credit checks increase debt",
            "Credit checks remove customers",
            "Credit checks eliminate sales"
        ]);

        return {
            question:`Why do businesses perform credit checks?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Credit limits restrict maximum debt per customer";

        const options = shuffle([
            correct,
            "Credit limits increase sales automatically",
            "Credit limits remove cash",
            "Credit limits increase VAT"
        ]);

        return {
            question:`What is a credit limit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BAD DEBTS ----------------

    if(type === 9){

        const correct = "Irrecoverable debt is written off";

        const options = shuffle([
            correct,
            "Irrecoverable debt is ignored",
            "Irrecoverable debt increases profit",
            "Irrecoverable debt becomes cash"
        ]);

        return {
            question:`What happens to irrecoverable debts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Bad debts reduce profit";

        const options = shuffle([
            correct,
            "Bad debts increase profit",
            "Bad debts increase revenue",
            "Bad debts have no effect"
        ]);

        return {
            question:`What is the effect of bad debts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Provision is made for doubtful debts";

        const options = shuffle([
            correct,
            "Provision eliminates sales",
            "Provision increases cash",
            "Provision removes VAT"
        ]);

        return {
            question:`Why is a provision for doubtful debts created?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Bad debts are an expense";

        const options = shuffle([
            correct,
            "Bad debts are revenue",
            "Bad debts are assets",
            "Bad debts are liabilities"
        ]);

        return {
            question:`How are bad debts classified?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- CREDIT CONTROL ----------------

    if(type === 13){

        const correct = "Prompt invoicing improves cash collection";

        const options = shuffle([
            correct,
            "Delayed invoicing improves cash",
            "Invoicing has no effect",
            "Invoices reduce profit"
        ]);

        return {
            question:`How can credit control be improved?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Debt collection procedures recover overdue amounts";

        const options = shuffle([
            correct,
            "Debt collection increases sales automatically",
            "Debt collection removes customers",
            "Debt collection is illegal"
        ]);

        return {
            question:`What is debt collection?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Stricter credit reduces sales but improves cash flow";

        const options = shuffle([
            correct,
            "Stricter credit increases risk",
            "Stricter credit removes profit",
            "Credit has no effect"
        ]);

        return {
            question:`What is the effect of stricter credit terms?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Monitoring receivables improves control";

        const options = shuffle([
            correct,
            "Monitoring increases debt",
            "Monitoring removes cash",
            "Monitoring is unnecessary"
        ]);

        return {
            question:`Why monitor receivables?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM SCENARIOS ----------------

    if(type === 17){

        const correct = "High receivables can cause liquidity problems";

        const options = shuffle([
            correct,
            "Receivables improve liquidity instantly",
            "Receivables eliminate risk",
            "Receivables increase cash immediately"
        ]);

        return {
            question:`What is a risk of high receivables?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Credit customers may default on payments";

        const options = shuffle([
            correct,
            "Credit removes all risk",
            "Credit guarantees profit",
            "Credit eliminates customers"
        ]);

        return {
            question:`What is credit risk?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Cash sales reduce credit risk";

        const options = shuffle([
            correct,
            "Cash sales increase credit risk",
            "Cash sales increase receivables",
            "Cash sales create debt"
        ]);

        return {
            question:`Why are cash sales safer?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Poor credit control increases bad debts";

        const options = shuffle([
            correct,
            "Poor credit reduces sales risk",
            "Poor credit improves cash flow",
            "Poor credit eliminates debt"
        ]);

        return {
            question:`What is the effect of poor credit control?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH8();
}
