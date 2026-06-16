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

    const type = rand(1,10);

    // ---------------- BASIC CONCEPTS ----------------

    if(type === 1){

        const correct = "Recording financial transactions";

        const options = shuffle([
            correct,
            "Preparing tax returns",
            "Calculating profit automatically",
            "Managing payroll only"
        ]);

        return {
            question:`What is the main purpose of bookkeeping?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Assets, liabilities and equity";

        const options = shuffle([
            correct,
            "Revenue and expenses only",
            "Cash and bank only",
            "Profit and loss only"
        ]);

        return {
            question:`What are the main categories in the accounting equation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- DEBIT / CREDIT LOGIC ----------------

    if(type === 3){

        const correct = "Debit increases assets";

        const options = shuffle([
            correct,
            "Credit increases assets",
            "Debit decreases liabilities",
            "Credit increases expenses"
        ]);

        return {
            question:`Which statement about double-entry is correct?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Credit increases liabilities";

        const options = shuffle([
            correct,
            "Debit increases liabilities",
            "Credit decreases assets",
            "Debit increases revenue"
        ]);

        return {
            question:`Which statement is correct regarding liabilities?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SIMPLE TRANSACTIONS ----------------

    if(type === 5){

        const business = randomBusiness();
        const amount = rand(50,500);

        const correct = "Assets increase and capital increases";

        const options = shuffle([
            correct,
            "Assets decrease and capital decreases",
            "Liabilities increase and assets decrease",
            "Expenses increase and capital decreases"
        ]);

        return {
            question:
`${business} receives £${amount} from the owner as capital.

What is the effect on the accounting equation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const business = randomBusiness();
        const amount = rand(20,300);

        const correct = "Assets decrease and capital decreases";

        const options = shuffle([
            correct,
            "Assets increase and liabilities increase",
            "Income increases and capital increases",
            "Expenses decrease and assets increase"
        ]);

        return {
            question:
`${business} owner withdraws £${amount} from the business.

What is the effect on the accounting equation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BASIC CLASSIFICATION ----------------

    if(type === 7){

        const correct = "Asset";

        const options = shuffle([
            correct,
            "Liability",
            "Expense",
            "Revenue"
        ]);

        return {
            question:`A business bank account balance is classified as what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Liability";

        const options = shuffle([
            correct,
            "Asset",
            "Expense",
            "Income"
        ]);

        return {
            question:`Money owed to suppliers is classified as what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BASIC PRINCIPLES ----------------

    if(type === 9){

        const correct = "Every transaction affects at least two accounts";

        const options = shuffle([
            correct,
            "Only cash transactions are recorded",
            "Each transaction affects one account only",
            "Assets always equal liabilities"
        ]);

        return {
            question:`Which statement best describes double-entry bookkeeping?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Business and owner are separate entities";

        const options = shuffle([
            correct,
            "Business and owner are the same",
            "Only companies use bookkeeping",
            "Personal expenses are always included"
        ]);

        return {
            question:`What is the business entity concept?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL2CH1();
}
function generateL2CH2(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- CONTROL ACCOUNTS ----------------

    if(type === 1){

        const correct = "Sales ledger control account";

        const options = shuffle([
            correct,
            "Cash account",
            "Capital account",
            "Purchase account"
        ]);

        return {
            question:`Which account is used to check the accuracy of customer balances?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Purchase ledger control account";

        const options = shuffle([
            correct,
            "Sales revenue account",
            "Bank account",
            "Drawings account"
        ]);

        return {
            question:`Which account is used to check supplier balances?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Total receivables balance";

        const options = shuffle([
            correct,
            "Bank balance",
            "Cash sales",
            "Capital balance"
        ]);

        return {
            question:`The sales ledger control account should agree with what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- ERRORS ----------------

    if(type === 4){

        const correct = "Error of omission";

        const options = shuffle([
            correct,
            "Error of principle",
            "Compensating error",
            "Bank error"
        ]);

        return {
            question:`A transaction is completely missing from the records. What error is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 5){

        const correct = "Error of principle";

        const options = shuffle([
            correct,
            "Error of omission",
            "Casting error",
            "Suspense error"
        ]);

        return {
            question:`A non-current asset is recorded as an expense. What error is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Compensating error";

        const options = shuffle([
            correct,
            "Error of omission",
            "Error of principle",
            "Bank error"
        ]);

        return {
            question:`Two errors cancel each other out in the trial balance. What is this called?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Casting error";

        const options = shuffle([
            correct,
            "Error of omission",
            "Error of principle",
            "Control error"
        ]);

        return {
            question:`A ledger has been incorrectly added up. What type of error is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BANK RECONCILIATION ----------------

    if(type === 8){

        const cashbook = rand(2000,15000);
        const bank = cashbook + rand(-500,500);

        const correct = "Timing differences";

        const options = shuffle([
            correct,
            "Fraud",
            "Capital injection",
            "Inventory loss"
        ]);

        return {
            question:
`${business} cash book shows £${cashbook}, bank statement shows £${bank}.

What explains the difference most likely?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 9){

        const correct = "Outstanding cheque";

        const options = shuffle([
            correct,
            "Bank loan",
            "Credit note",
            "Capital contribution"
        ]);

        return {
            question:`A cheque recorded in cash book has not cleared the bank. What is it called?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Outstanding lodgement";

        const options = shuffle([
            correct,
            "Bank overdraft",
            "Petty cash",
            "Suspense account"
        ]);

        return {
            question:`A deposit is recorded in cash book but not yet on bank statement. What is it called?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SUSPENSE ACCOUNT ----------------

    if(type === 11){

        const correct = "Suspense account";

        const options = shuffle([
            correct,
            "Bank account",
            "Sales account",
            "Cash account"
        ]);

        return {
            question:`A trial balance does not balance. What account is temporarily used?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- TRIAL BALANCE ----------------

    if(type === 12){

        const correct = "To check arithmetic accuracy of ledger entries";

        const options = shuffle([
            correct,
            "To calculate profit",
            "To record transactions",
            "To pay suppliers"
        ]);

        return {
            question:`What is the purpose of a trial balance?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 13){

        const correct = "It may still contain errors";

        const options = shuffle([
            correct,
            "It guarantees no errors exist",
            "It replaces the ledger",
            "It calculates VAT"
        ]);

        return {
            question:`What is true about a trial balance that balances?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- APPLICATION SCENARIOS ----------------

    if(type === 14){

        const amount = rand(100,3000);

        const correct = "Journal entry";

        const options = shuffle([
            correct,
            "Invoice",
            "Receipt",
            "Statement"
        ]);

        return {
            question:
`A transaction of £${amount} must be corrected in the ledger.

What document is used?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Control accounts help detect errors";

        const options = shuffle([
            correct,
            "Control accounts eliminate all errors",
            "Control accounts replace invoices",
            "Control accounts store cash"
        ]);

        return {
            question:`What is the main purpose of control accounts?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Every debit has a corresponding credit";

        const options = shuffle([
            correct,
            "Only cash is recorded",
            "Only revenue is recorded",
            "Debits are optional"
        ]);

        return {
            question:`Which statement describes double-entry principles?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 17){

        const correct = "Sales ledger control account";

        const options = shuffle([
            correct,
            "Cash account",
            "Bank account",
            "Expense account"
        ]);

        return {
            question:`Which control account summarises customer balances?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Purchase ledger control account";

        const options = shuffle([
            correct,
            "Revenue account",
            "Cash account",
            "Capital account"
        ]);

        return {
            question:`Which control account summarises supplier balances?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "To locate errors in accounting records";

        const options = shuffle([
            correct,
            "To increase profit",
            "To eliminate tax",
            "To create invoices"
        ]);

        return {
            question:`Why are control systems important in bookkeeping?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Ensure accuracy of financial records";

        const options = shuffle([
            correct,
            "Guarantee profit",
            "Eliminate business risk",
            "Increase cash flow"
        ]);

        return {
            question:`What is the overall purpose of bookkeeping controls?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL2CH2();
}
function generateL2CH3(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- COST CLASSIFICATION ----------------

    if(type === 1){

        const correct = "Direct cost";

        const options = shuffle([
            correct,
            "Indirect cost",
            "Fixed cost",
            "Overhead"
        ]);

        return {
            question:`A cost that can be directly traced to a product is called what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Indirect cost";

        const options = shuffle([
            correct,
            "Direct cost",
            "Variable cost",
            "Revenue cost"
        ]);

        return {
            question:`A cost that cannot be directly traced to a product is called what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Fixed cost";

        const options = shuffle([
            correct,
            "Variable cost",
            "Direct cost",
            "Marginal cost"
        ]);

        return {
            question:`Which cost remains the same regardless of production level?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Variable cost";

        const options = shuffle([
            correct,
            "Fixed cost",
            "Capital cost",
            "Indirect cost"
        ]);

        return {
            question:`Which cost changes with production volume?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- COST BEHAVIOUR ----------------

    if(type === 5){

        const correct = "Total cost increases";

        const options = shuffle([
            correct,
            "Total cost decreases",
            "Fixed cost decreases",
            "Revenue decreases"
        ]);

        return {
            question:`When production increases, what happens to total variable cost?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Remains constant";

        const options = shuffle([
            correct,
            "Increases",
            "Decreases",
            "Becomes zero"
        ]);

        return {
            question:`What happens to fixed costs when production increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Variable cost per unit stays constant";

        const options = shuffle([
            correct,
            "Fixed cost per unit stays constant",
            "Total cost stays constant",
            "Revenue stays constant"
        ]);

        return {
            question:`What is true about variable cost per unit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Fixed cost per unit decreases as output increases";

        const options = shuffle([
            correct,
            "Fixed cost per unit increases",
            "Variable cost per unit increases",
            "Total cost per unit stays constant"
        ]);

        return {
            question:`What happens to fixed cost per unit when output increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SIMPLE CALCULATIONS ----------------

    if(type === 9){

        const units = rand(100,1000);
        const cost = rand(2,20);
        const total = units * cost;

        const options = shuffle([
            total,
            total + 100,
            total - 100,
            total + 250
        ]);

        return {
            question:
`${business} produces ${units} units at £${cost} variable cost per unit.

What is the total variable cost?`,
            options,
            correct: options.indexOf(total)
        };
    }

    if(type === 10){

        const fixed = rand(500,5000);
        const units = rand(100,1000);

        const perUnit = fixed / units;

        const options = shuffle([
            perUnit,
            perUnit + 1,
            perUnit - 1,
            perUnit + 2
        ]);

        return {
            question:
`${business} has fixed costs of £${fixed} and produces ${units} units.

What is the fixed cost per unit (approx)?`,
            options,
            correct: options.indexOf(perUnit)
        };
    }

    // ---------------- COSTING LOGIC ----------------

    if(type === 11){

        const correct = "Total cost = fixed cost + variable cost";

        const options = shuffle([
            correct,
            "Total cost = revenue - profit",
            "Total cost = assets - liabilities",
            "Total cost = cash - expenses"
        ]);

        return {
            question:`How is total cost calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Cost per unit = total cost ÷ number of units";

        const options = shuffle([
            correct,
            "Cost per unit = profit ÷ sales",
            "Cost per unit = revenue ÷ cash",
            "Cost per unit = fixed cost × units"
        ]);

        return {
            question:`How is cost per unit calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BUSINESS APPLICATION ----------------

    if(type === 13){

        const correct = "Manufacturing cost";

        const options = shuffle([
            correct,
            "Bank cost",
            "Capital cost",
            "Tax cost"
        ]);

        return {
            question:`Costs directly involved in making goods are called what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Overhead cost";

        const options = shuffle([
            correct,
            "Direct material",
            "Revenue cost",
            "Cash cost"
        ]);

        return {
            question:`Indirect costs such as rent and utilities are called what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SCENARIO APPLICATION ----------------

    if(type === 15){

        const amount = rand(100,5000);

        const correct = "Direct cost";

        const options = shuffle([
            correct,
            "Indirect cost",
            "Fixed cost",
            "Revenue cost"
        ]);

        return {
            question:
`${business} buys raw materials costing £${amount} for production.

What type of cost is this?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Fixed cost";

        const options = shuffle([
            correct,
            "Variable cost",
            "Direct cost",
            "Production cost"
        ]);

        return {
            question:`Rent paid by a factory is classified as what type of cost?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM TRICKS ----------------

    if(type === 17){

        const correct = "Total cost increases but fixed cost stays constant";

        const options = shuffle([
            correct,
            "Both decrease",
            "Fixed cost increases with output",
            "Variable cost stays constant"
        ]);

        return {
            question:`What happens when production increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Direct cost is traceable to a product";

        const options = shuffle([
            correct,
            "Indirect cost is always variable",
            "Fixed cost is always direct",
            "Revenue is a cost"
        ]);

        return {
            question:`Which statement is correct?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Cost control";

        const options = shuffle([
            correct,
            "Profit maximisation",
            "Cash generation",
            "Tax avoidance"
        ]);

        return {
            question:`Why is costing important in business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Helps in pricing decisions";

        const options = shuffle([
            correct,
            "Eliminates costs",
            "Removes risk",
            "Creates cash"
        ]);

        return {
            question:`Why do businesses calculate costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL2CH3();
}
function generateL2CH4(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- TYPES OF BUSINESS ----------------

    if(type === 1){

        const correct = "Service business";

        const options = shuffle([
            correct,
            "Manufacturing business",
            "Charity organisation",
            "Government body"
        ]);

        return {
            question:`A business that provides cleaning services is classified as what type?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Manufacturing business";

        const options = shuffle([
            correct,
            "Retail bank",
            "Charity",
            "Partnership only"
        ]);

        return {
            question:`A company that produces furniture is an example of what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Retail business";

        const options = shuffle([
            correct,
            "Charity organisation",
            "Public sector body",
            "Non-profit organisation"
        ]);

        return {
            question:`A supermarket is classified as what type of business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Public sector organisation";

        const options = shuffle([
            correct,
            "Private limited company",
            "Sole trader",
            "Retail business"
        ]);

        return {
            question:`A government-funded hospital belongs to which sector?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- OWNERSHIP ----------------

    if(type === 5){

        const correct = "Sole trader";

        const options = shuffle([
            correct,
            "Public limited company",
            "Charity",
            "Government agency"
        ]);

        return {
            question:`A business owned by one person is called what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Partnership";

        const options = shuffle([
            correct,
            "Sole trader",
            "Government body",
            "Public corporation"
        ]);

        return {
            question:`A business owned by two or more people is called what?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Limited liability company";

        const options = shuffle([
            correct,
            "Sole trader",
            "Cash business",
            "Informal organisation"
        ]);

        return {
            question:`Which type of business protects owners from unlimited personal liability?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Public limited company";

        const options = shuffle([
            correct,
            "Sole trader",
            "Partnership",
            "Charity"
        ]);

        return {
            question:`Which type of company can sell shares to the public?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- STAKEHOLDERS ----------------

    if(type === 9){

        const correct = "Customers";

        const options = shuffle([
            correct,
            "Auditors only",
            "Tax authorities only",
            "Competitors"
        ]);

        return {
            question:`Who are the primary stakeholders interested in product quality?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Employees";

        const options = shuffle([
            correct,
            "Suppliers",
            "Banks",
            "Government only"
        ]);

        return {
            question:`Who is directly affected by wage levels in a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Owners";

        const options = shuffle([
            correct,
            "Customers",
            "Competitors",
            "Auditors"
        ]);

        return {
            question:`Who has the main interest in profit generation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Government";

        const options = shuffle([
            correct,
            "Customers",
            "Employees",
            "Managers"
        ]);

        return {
            question:`Who collects taxes from businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- OBJECTIVES ----------------

    if(type === 13){

        const correct = "Profit maximisation";

        const options = shuffle([
            correct,
            "Increasing costs",
            "Reducing revenue",
            "Avoiding customers"
        ]);

        return {
            question:`What is a common objective of private sector businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Survival";

        const options = shuffle([
            correct,
            "Tax avoidance",
            "Loss making",
            "Reducing output"
        ]);

        return {
            question:`What is often the main objective of a new business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Growth";

        const options = shuffle([
            correct,
            "Decline",
            "Closure",
            "Tax reduction"
        ]);

        return {
            question:`What objective focuses on increasing market size?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Customer satisfaction";

        const options = shuffle([
            correct,
            "Reducing wages",
            "Increasing debt",
            "Ignoring quality"
        ]);

        return {
            question:`What is a key objective for most businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SCENARIO + TRAPS ----------------

    if(type === 17){

        const correct = "Limited liability protects personal assets";

        const options = shuffle([
            correct,
            "Owners are fully responsible for all debts",
            "Business and owner are the same entity",
            "Profits are guaranteed"
        ]);

        return {
            question:`What is an advantage of limited liability?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Stakeholders can have conflicting interests";

        const options = shuffle([
            correct,
            "All stakeholders want the same outcome",
            "Only owners matter",
            "Employees control profit"
        ]);

        return {
            question:`What is true about stakeholders in a business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "External environment affects business decisions";

        const options = shuffle([
            correct,
            "Businesses operate in isolation",
            "Only internal factors matter",
            "Profit is fixed"
        ]);

        return {
            question:`What is true about business environment?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Businesses must adapt to market conditions";

        const options = shuffle([
            correct,
            "Businesses never change",
            "Prices are always fixed",
            "Customers do not influence decisions"
        ]);

        return {
            question:`What is a key principle of business operation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL2CH4();
}
function generateL2CH5(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- STAKEHOLDER CONFLICTS ----------------

    if(type === 1){

        const correct = "Profit vs employee wages";

        const options = shuffle([
            correct,
            "Cash vs bank",
            "Assets vs liabilities",
            "Sales vs purchases"
        ]);

        return {
            question:`Which is a typical conflict in business objectives?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Owners and employees";

        const options = shuffle([
            correct,
            "Customers and suppliers",
            "Bank and cash",
            "Assets and expenses"
        ]);

        return {
            question:`Which groups often have conflicting interests over wages and profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Customers and shareholders";

        const options = shuffle([
            correct,
            "Cash and bank",
            "Debits and credits",
            "Assets and liabilities"
        ]);

        return {
            question:`Who may disagree over price levels and profit margins?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Government and businesses";

        const options = shuffle([
            correct,
            "Cash and capital",
            "Sales and purchases",
            "Debtors and creditors"
        ]);

        return {
            question:`Which groups may disagree over taxation and regulation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- ETHICS / CSR ----------------

    if(type === 5){

        const correct = "Corporate Social Responsibility";

        const options = shuffle([
            correct,
            "Cash flow management",
            "Profit recording",
            "Inventory control"
        ]);

        return {
            question:`What does CSR stand for?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Ethical behaviour";

        const options = shuffle([
            correct,
            "Maximising fraud",
            "Avoiding customers",
            "Reducing quality"
        ]);

        return {
            question:`What is expected from businesses in relation to society?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Reducing environmental impact";

        const options = shuffle([
            correct,
            "Increasing waste",
            "Ignoring regulations",
            "Maximising pollution"
        ]);

        return {
            question:`What is a CSR objective?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Fair treatment of employees";

        const options = shuffle([
            correct,
            "Reducing wages unfairly",
            "Ignoring contracts",
            "Avoiding safety rules"
        ]);

        return {
            question:`What is part of ethical business behaviour?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXTERNAL ENVIRONMENT ----------------

    if(type === 9){

        const correct = "Inflation";

        const options = shuffle([
            correct,
            "Depreciation",
            "Capital",
            "Revenue"
        ]);

        return {
            question:`Which external factor affects business costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Interest rates";

        const options = shuffle([
            correct,
            "Inventory levels",
            "Gross profit",
            "Cash receipts"
        ]);

        return {
            question:`What external factor affects borrowing costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Competition";

        const options = shuffle([
            correct,
            "Bank reconciliation",
            "Ledger posting",
            "Capital account"
        ]);

        return {
            question:`What external factor influences pricing decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Government legislation";

        const options = shuffle([
            correct,
            "Cash flow",
            "Profit margin",
            "Inventory cost"
        ]);

        return {
            question:`What external factor can force businesses to change operations?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BUSINESS DECISIONS ----------------

    if(type === 13){

        const correct = "Increase prices";

        const options = shuffle([
            correct,
            "Ignore costs",
            "Stop selling",
            "Remove customers"
        ]);

        return {
            question:`If costs increase, what may a business do?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Reduce costs";

        const options = shuffle([
            correct,
            "Increase waste",
            "Ignore profit",
            "Stop accounting"
        ]);

        return {
            question:`How can a business improve profitability?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Improve efficiency";

        const options = shuffle([
            correct,
            "Increase losses",
            "Reduce sales",
            "Increase debt"
        ]);

        return {
            question:`What helps a business remain competitive?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Customer demand affects sales";

        const options = shuffle([
            correct,
            "Demand has no impact",
            "Only costs matter",
            "Profit is fixed"
        ]);

        return {
            question:`What influences business revenue?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM TRICKS ----------------

    if(type === 17){

        const correct = "Stakeholder objectives may conflict";

        const options = shuffle([
            correct,
            "All stakeholders agree",
            "Only owners matter",
            "Profit is guaranteed"
        ]);

        return {
            question:`What is true about stakeholders?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "External factors are uncontrollable";

        const options = shuffle([
            correct,
            "Businesses control inflation",
            "Government is internal",
            "Competition is fixed"
        ]);

        return {
            question:`What is true about external environment?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Businesses must adapt to survive";

        const options = shuffle([
            correct,
            "Businesses never change",
            "Markets are fixed",
            "Demand is constant"
        ]);

        return {
            question:`What is a key business principle?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Balance between profit and ethics";

        const options = shuffle([
            correct,
            "Profit only matters",
            "Ethics do not matter",
            "Loss is required"
        ]);

        return {
            question:`What is a modern business challenge?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL2CH5();
}
/* ------------------------
   LEVEL 3 QUESTION BANK
------------------------ */

function generateL3CH1(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- BUSINESS STRUCTURES ----------------

    if(type === 1){

        const correct = "Sole trader";

        const options = shuffle([
            correct,
            "Public limited company",
            "Government body",
            "Charity organisation"
        ]);

        return {
            question:`Which business structure is owned by one person?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Partnership";

        const options = shuffle([
            correct,
            "Public sector organisation",
            "Charity",
            "Bank"
        ]);

        return {
            question:`Which structure involves two or more owners?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Private limited company";

        const options = shuffle([
            correct,
            "Sole trader",
            "Government department",
            "Cash business"
        ]);

        return {
            question:`Which business structure has limited liability and shares not sold publicly?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Public limited company";

        const options = shuffle([
            correct,
            "Partnership",
            "Sole trader",
            "Non-profit organisation"
        ]);

        return {
            question:`Which company type can sell shares to the public?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- STAKEHOLDERS ----------------

    if(type === 5){

        const correct = "Employees";

        const options = shuffle([
            correct,
            "Competitors",
            "Banks only",
            "Tax authorities only"
        ]);

        return {
            question:`Who is directly affected by wage decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Customers";

        const options = shuffle([
            correct,
            "Auditors",
            "Government only",
            "Banks only"
        ]);

        return {
            question:`Who is mainly concerned with product quality and price?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Government";

        const options = shuffle([
            correct,
            "Employees",
            "Customers",
            "Suppliers"
        ]);

        return {
            question:`Who regulates business activity through laws and taxation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Shareholders";

        const options = shuffle([
            correct,
            "Customers",
            "Employees",
            "Competitors"
        ]);

        return {
            question:`Who is mainly interested in dividends and profit growth?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- ENVIRONMENT ----------------

    if(type === 9){

        const correct = "Internal environment";

        const options = shuffle([
            correct,
            "External environment",
            "Global market",
            "Tax system"
        ]);

        return {
            question:`What environment is controlled by the business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "External environment";

        const options = shuffle([
            correct,
            "Internal environment",
            "Cash environment",
            "Ledger environment"
        ]);

        return {
            question:`What environment includes factors like competition and economy?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Competition";

        const options = shuffle([
            correct,
            "Bank reconciliation",
            "Depreciation",
            "Payroll"
        ]);

        return {
            question:`Which is an external factor affecting pricing decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Economic conditions";

        const options = shuffle([
            correct,
            "Inventory system",
            "Bookkeeping method",
            "Ledger balance"
        ]);

        return {
            question:`Which external factor affects business demand?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- OBJECTIVES ----------------

    if(type === 13){

        const correct = "Profit maximisation";

        const options = shuffle([
            correct,
            "Loss maximisation",
            "Cost elimination",
            "Cash removal"
        ]);

        return {
            question:`What is a key objective of private sector businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Survival";

        const options = shuffle([
            correct,
            "Tax avoidance",
            "Cash reduction",
            "Debt creation"
        ]);

        return {
            question:`What is the main objective of a new business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Growth";

        const options = shuffle([
            correct,
            "Decline",
            "Closure",
            "Loss making"
        ]);

        return {
            question:`What objective involves expanding the business?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Customer satisfaction";

        const options = shuffle([
            correct,
            "Reducing quality",
            "Increasing waste",
            "Ignoring demand"
        ]);

        return {
            question:`What is a key objective of most businesses?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SCENARIO + REASONING ----------------

    if(type === 17){

        const correct = "Stakeholders may have conflicting objectives";

        const options = shuffle([
            correct,
            "All stakeholders agree",
            "Only owners matter",
            "Profit is guaranteed"
        ]);

        return {
            question:`What is true about stakeholder objectives?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "External factors cannot be controlled";

        const options = shuffle([
            correct,
            "Businesses control inflation",
            "Government is internal",
            "Demand is fixed"
        ]);

        return {
            question:`What is true about external environment?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Businesses must adapt to survive";

        const options = shuffle([
            correct,
            "Markets never change",
            "Profit is guaranteed",
            "Costs are irrelevant"
        ]);

        return {
            question:`What is a key business principle?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Balance between profit and stakeholder needs";

        const options = shuffle([
            correct,
            "Profit only matters",
            "Ethics are irrelevant",
            "Loss is required"
        ]);

        return {
            question:`What is a modern business challenge?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL3CH1();
}

function generateL3CH2(){

    const revenue = rand(10000,40000);
    const expenses = rand(3000,9000);

    const profit =
        revenue - expenses;

    const options =
        shuffle([
            profit,
            profit + 500,
            profit - 500,
            profit + 1000
        ]);

    return {

        question:
        `Revenue equals
         ${currency(revenue)}
         and expenses equal
         ${currency(expenses)}.

         What is the profit?`,

        options:
        options.map(v=>currency(v)),

        correct:
        options.indexOf(profit)
    };
}
    function generateL3CH3(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- CONTRIBUTION BASICS ----------------

    if(type === 1){

        const correct = "Selling price - variable cost";

        const options = shuffle([
            correct,
            "Fixed cost - revenue",
            "Revenue + tax",
            "Cash - profit"
        ]);

        return {
            question:`How is contribution per unit calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Contribution covers fixed costs";

        const options = shuffle([
            correct,
            "Fixed costs create revenue",
            "Revenue removes costs",
            "Profit is fixed"
        ]);

        return {
            question:`What is the purpose of contribution?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Total contribution - fixed costs";

        const options = shuffle([
            correct,
            "Revenue - tax",
            "Assets - liabilities",
            "Cash - expenses"
        ]);

        return {
            question:`How is profit calculated in marginal costing?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Contribution increases profit";

        const options = shuffle([
            correct,
            "Fixed cost increases profit",
            "Revenue reduces contribution",
            "Costs have no effect"
        ]);

        return {
            question:`What is the effect of higher contribution?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BREAK-EVEN ----------------

    if(type === 5){

        const correct = "Break-even point";

        const options = shuffle([
            correct,
            "Profit maximum",
            "Loss limit",
            "Cash balance"
        ]);

        return {
            question:`What is the point where revenue equals total costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Fixed costs ÷ contribution per unit";

        const options = shuffle([
            correct,
            "Revenue ÷ profit",
            "Cost ÷ tax",
            "Assets ÷ liabilities"
        ]);

        return {
            question:`How is break-even output calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "No profit and no loss";

        const options = shuffle([
            correct,
            "Maximum profit",
            "Maximum loss",
            "Zero sales"
        ]);

        return {
            question:`What happens at break-even point?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Higher contribution reduces break-even point";

        const options = shuffle([
            correct,
            "Higher contribution increases break-even",
            "Fixed costs reduce contribution",
            "Revenue has no effect"
        ]);

        return {
            question:`What happens if contribution increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- PROFIT CALCULATIONS ----------------

    if(type === 9){

        const units = rand(100, 800);
        const price = rand(10, 60);
        const vc = rand(5, 30);
        const fixed = rand(500, 5000);

        const profit = (units * (price - vc)) - fixed;

        const options = shuffle([
            profit,
            profit + 100,
            profit - 100,
            profit + 250
        ]);

        return {
            question:
`${business} sells ${units} units at £${price}.
Variable cost per unit is £${vc}.
Fixed costs are £${fixed}.

What is the profit?`,
            options,
            correct: options.indexOf(profit)
        };
    }

    if(type === 10){

        const correct = "Revenue - total costs";

        const options = shuffle([
            correct,
            "Assets - liabilities",
            "Cash - tax",
            "Cost + profit"
        ]);

        return {
            question:`What is another formula for profit?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Increasing sales increases profit";

        const options = shuffle([
            correct,
            "Sales have no effect",
            "Fixed costs increase profit",
            "Revenue reduces profit"
        ]);

        return {
            question:`What happens if sales volume increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Loss occurs when costs exceed revenue";

        const options = shuffle([
            correct,
            "Loss occurs when revenue increases",
            "Loss occurs when fixed costs are zero",
            "Loss occurs when cash increases"
        ]);

        return {
            question:`When does a business make a loss?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- DECISION MAKING ----------------

    if(type === 13){

        const correct = "Choose highest contribution option";

        const options = shuffle([
            correct,
            "Choose lowest revenue",
            "Ignore costs",
            "Maximise fixed costs"
        ]);

        return {
            question:`What is the key rule in short-term decision making?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "Only relevant costs should be considered";

        const options = shuffle([
            correct,
            "All historical costs matter",
            "Fixed costs always ignored",
            "Revenue is irrelevant"
        ]);

        return {
            question:`Which costs are relevant for decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Compare incremental revenue and costs";

        const options = shuffle([
            correct,
            "Ignore revenue",
            "Ignore contribution",
            "Only fixed costs matter"
        ]);

        return {
            question:`How are decisions evaluated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Opportunity cost must be considered";

        const options = shuffle([
            correct,
            "Only cash matters",
            "Tax is irrelevant",
            "Profit is fixed"
        ]);

        return {
            question:`What should also be considered in decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM TRAPS ----------------

    if(type === 17){

        const correct = "Break-even changes with cost structure";

        const options = shuffle([
            correct,
            "Break-even is constant",
            "Profit is fixed",
            "Revenue is irrelevant"
        ]);

        return {
            question:`What affects break-even point?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Contribution must cover fixed costs first";

        const options = shuffle([
            correct,
            "Fixed costs are ignored",
            "Revenue equals profit",
            "Costs do not matter"
        ]);

        return {
            question:`What is the priority in marginal costing?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "High fixed costs increase break-even point";

        const options = shuffle([
            correct,
            "High fixed costs reduce break-even",
            "Variable costs irrelevant",
            "Revenue controls costs"
        ]);

        return {
            question:`What happens if fixed costs increase?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "CVP analysis is essential for decisions";

        const options = shuffle([
            correct,
            "Only cash matters",
            "Profit is random",
            "Costs are irrelevant"
        ]);

        return {
            question:`What is central in management accounting?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL3CH3();
}

function generateL3CH4(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- VAT BASICS ----------------

    if(type === 1){

        const correct = "Value Added Tax";

        const options = shuffle([
            correct,
            "Variable Asset Tax",
            "Volume Accounting Tax",
            "Vendor Allocation Tax"
        ]);

        return {
            question:`What does VAT stand for?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 2){

        const correct = "Tax on goods and services";

        const options = shuffle([
            correct,
            "Tax on profits only",
            "Tax on wages",
            "Tax on assets only"
        ]);

        return {
            question:`What is VAT charged on?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Registered businesses only";

        const options = shuffle([
            correct,
            "All individuals",
            "Only employees",
            "Only banks"
        ]);

        return {
            question:`Who must register for VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Output tax and input tax";

        const options = shuffle([
            correct,
            "Debit and credit tax",
            "Fixed and variable tax",
            "Cash and bank tax"
        ]);

        return {
            question:`What are the two main components of VAT accounting?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- INPUT / OUTPUT VAT ----------------

    if(type === 5){

        const correct = "VAT charged on sales";

        const options = shuffle([
            correct,
            "VAT paid on purchases",
            "VAT refunded by HMRC",
            "No VAT involved"
        ]);

        return {
            question:`What is output tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "VAT paid on purchases";

        const options = shuffle([
            correct,
            "VAT charged on sales",
            "VAT on profit",
            "VAT on wages"
        ]);

        return {
            question:`What is input tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Output tax minus input tax";

        const options = shuffle([
            correct,
            "Sales minus profit",
            "Cash minus bank",
            "Assets minus liabilities"
        ]);

        return {
            question:`How is VAT payable calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Refund from HMRC";

        const options = shuffle([
            correct,
            "Penalty payment",
            "Loan from bank",
            "Dividend income"
        ]);

        return {
            question:`What happens if input tax exceeds output tax?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- VAT CALCULATIONS ----------------

    if(type === 9){

        const net = rand(100,1000);
        const rate = 20;
        const vat = net * rate / 100;

        const correct = vat;

        const options = shuffle([
            correct,
            correct + 10,
            correct - 10,
            correct + 20
        ]);

        return {
            question:
`${business} sells goods worth £${net} (net). VAT rate is 20%.

What is the VAT amount?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const gross = rand(120,1200);
        const net = gross / 1.2;
        const vat = gross - net;

        const correct = vat;

        const options = shuffle([
            correct,
            correct + 5,
            correct - 5,
            correct + 15
        ]);

        return {
            question:
`A sale totals £${gross.toFixed(2)} including VAT.

What is the VAT amount?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "20% standard rate (UK example)";

        const options = shuffle([
            correct,
            "10% fixed rate",
            "5% universal rate",
            "No VAT exists"
        ]);

        return {
            question:`What is the standard VAT rate commonly used in UK exams?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "VAT is added to net price";

        const options = shuffle([
            correct,
            "VAT reduces profit",
            "VAT replaces revenue",
            "VAT is ignored in sales"
        ]);

        return {
            question:`How is VAT usually applied to sales?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- HMRC PROCESS ----------------

    if(type === 13){

        const correct = "HM Revenue & Customs";

        const options = shuffle([
            correct,
            "Home Market Retail Council",
            "High Management Revenue Centre",
            "Holding Monetary Regulation Committee"
        ]);

        return {
            question:`What does HMRC stand for?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 14){

        const correct = "VAT return";

        const options = shuffle([
            correct,
            "Income statement",
            "Trial balance",
            "Bank statement"
        ]);

        return {
            question:`What document is submitted to HMRC for VAT reporting?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Quarterly submission";

        const options = shuffle([
            correct,
            "Daily submission",
            "Yearly only",
            "No submission required"
        ]);

        return {
            question:`How often is VAT typically submitted?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Penalties may be charged";

        const options = shuffle([
            correct,
            "No consequences exist",
            "Tax is cancelled",
            "Profit increases"
        ]);

        return {
            question:`What happens if a VAT return is late?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- SCENARIO / EXAM TRAPS ----------------

    if(type === 17){

        const correct = "VAT must be recorded correctly in accounts";

        const options = shuffle([
            correct,
            "VAT is ignored in bookkeeping",
            "VAT replaces profit",
            "VAT is optional"
        ]);

        return {
            question:`What is true about VAT in accounting records?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Input VAT reduces VAT payable";

        const options = shuffle([
            correct,
            "Input VAT increases tax payable",
            "Output VAT is ignored",
            "VAT has no effect"
        ]);

        return {
            question:`What is the effect of input VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Businesses must keep VAT records";

        const options = shuffle([
            correct,
            "Records are optional",
            "Only cash matters",
            "Banks handle VAT automatically"
        ]);

        return {
            question:`What is required for VAT compliance?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "VAT affects pricing decisions";

        const options = shuffle([
            correct,
            "VAT has no impact on prices",
            "VAT removes costs",
            "VAT increases profit directly"
        ]);

        return {
            question:`What is a business implication of VAT?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL3CH4();
}

/* ------------------------
   LEVEL 4 QUESTION BANK
------------------------ */

function generateL4CH1(){

    const type = rand(1,20);
    const business = randomBusiness();

    // ---------------- ADVANCED CVP ----------------

    if(type === 1){

        const price = rand(20,80);
        const vc = rand(5,40);
        const fixed = rand(1000,10000);

        const contribution = price - vc;
        const bep = Math.round(fixed / contribution);

        const options = shuffle([
            bep,
            bep + 10,
            bep - 10,
            bep + 25
        ]);

        return {
            question:
`${business} sells a product at £${price}.
Variable cost is £${vc}.
Fixed costs are £${fixed}.

What is the break-even output (approx.)?`,
            options,
            correct: options.indexOf(bep)
        };
    }

    if(type === 2){

        const correct = "Increase selling price or reduce variable costs";

        const options = shuffle([
            correct,
            "Increase fixed costs",
            "Reduce sales volume",
            "Ignore costs"
        ]);

        return {
            question:`How can a business improve profitability?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 3){

        const correct = "Contribution per unit × units sold";

        const options = shuffle([
            correct,
            "Fixed cost × revenue",
            "Cash × profit",
            "Assets × liabilities"
        ]);

        return {
            question:`How is total contribution calculated?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 4){

        const correct = "Higher contribution reduces risk";

        const options = shuffle([
            correct,
            "Higher contribution increases risk",
            "Contribution has no effect",
            "Fixed costs control risk only"
        ]);

        return {
            question:`What is the effect of high contribution?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- BUDGETING ----------------

    if(type === 5){

        const correct = "A financial plan for future periods";

        const options = shuffle([
            correct,
            "A record of past transactions",
            "A tax document",
            "A bank statement"
        ]);

        return {
            question:`What is a budget?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 6){

        const correct = "Helps control costs and plan resources";

        const options = shuffle([
            correct,
            "Eliminates all expenses",
            "Guarantees profit",
            "Removes VAT"
        ]);

        return {
            question:`Why are budgets important?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 7){

        const correct = "Variance analysis compares actual vs budget";

        const options = shuffle([
            correct,
            "Variance removes budgets",
            "Variance increases profit",
            "Variance ignores costs"
        ]);

        return {
            question:`What is variance analysis?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 8){

        const correct = "Favourable and adverse variances";

        const options = shuffle([
            correct,
            "Debit and credit variances",
            "Cash and bank variances",
            "Profit and loss variances only"
        ]);

        return {
            question:`What types of variances exist?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- DECISION MAKING ----------------

    if(type === 9){

        const correct = "Choose option with highest contribution";

        const options = shuffle([
            correct,
            "Choose highest fixed cost",
            "Choose lowest revenue",
            "Ignore costs"
        ]);

        return {
            question:`What is the key rule in short-term decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 10){

        const correct = "Relevant costs only";

        const options = shuffle([
            correct,
            "All historical costs",
            "Only fixed costs",
            "Only revenue"
        ]);

        return {
            question:`Which costs are considered in decision making?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 11){

        const correct = "Opportunity cost matters";

        const options = shuffle([
            correct,
            "Only cash matters",
            "Tax is ignored",
            "Profit is fixed"
        ]);

        return {
            question:`What should also be considered in decisions?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 12){

        const correct = "Incremental analysis";

        const options = shuffle([
            correct,
            "Historical analysis",
            "Random selection",
            "Cash only analysis"
        ]);

        return {
            question:`What method is used for decision evaluation?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- MULTI STEP ----------------

    if(type === 13){

        const revenue = rand(5000,20000);
        const vc = rand(2000,8000);
        const fc = rand(1000,5000);

        const profit = revenue - vc - fc;

        const options = shuffle([
            profit,
            profit + 100,
            profit - 100,
            profit + 250
        ]);

        return {
            question:
`${business} has revenue £${revenue}, variable costs £${vc}, fixed costs £${fc}.

What is the profit?`,
            options,
            correct: options.indexOf(profit)
        };
    }

    if(type === 14){

        const correct = "Revenue - variable cost = contribution";

        const options = shuffle([
            correct,
            "Revenue - fixed cost",
            "Cash - tax",
            "Assets - liabilities"
        ]);

        return {
            question:`What is the contribution formula?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 15){

        const correct = "Fixed costs do not change with output";

        const options = shuffle([
            correct,
            "Fixed costs increase per unit",
            "Variable costs are constant",
            "Revenue is fixed"
        ]);

        return {
            question:`Which statement is correct about fixed costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 16){

        const correct = "Profit increases with volume";

        const options = shuffle([
            correct,
            "Profit is unrelated to volume",
            "Fixed costs increase profit",
            "Revenue has no effect"
        ]);

        return {
            question:`What happens when sales volume increases?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    // ---------------- EXAM TRAPS ----------------

    if(type === 17){

        const correct = "Ignoring fixed costs in short-term decisions";

        const options = shuffle([
            correct,
            "Including irrelevant costs",
            "Ignoring revenue",
            "Maximising fixed costs"
        ]);

        return {
            question:`What is a common mistake in decision making?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 18){

        const correct = "Break-even is affected by cost structure";

        const options = shuffle([
            correct,
            "Break-even is always constant",
            "Profit never changes",
            "Costs do not matter"
        ]);

        return {
            question:`What affects break-even point?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 19){

        const correct = "Higher fixed costs increase risk";

        const options = shuffle([
            correct,
            "Higher fixed costs reduce risk",
            "Variable costs remove risk",
            "Revenue controls risk"
        ]);

        return {
            question:`What is the effect of high fixed costs?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    if(type === 20){

        const correct = "Management accounting supports decision making";

        const options = shuffle([
            correct,
            "It only records history",
            "It replaces bookkeeping",
            "It removes costs"
        ]);

        return {
            question:`What is the purpose of management accounting?`,
            options,
            correct: options.indexOf(correct)
        };
    }

    return generateL4CH1();
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
