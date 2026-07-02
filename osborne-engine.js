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

function choice(array){

    return array[
        rand(0, array.length - 1)
    ];
}

function currency(v){

    return "£" +
    Number(v).toFixed(2);
}
function pick(arr){
    return arr[(0, arr.length - 1)];
}

function randomBusiness(){

    const businesses = [
        "GreenTech Ltd",
        "BlueWave Services",
        "Northstar Trading",
        "Prime Retail Ltd",
        "Summit Solutions",
        "Oakwood Supplies",
        "Pioneer Manufacturing",
        "Vertex Consulting"
    ];

    return businesses[
        rand(0, businesses.length - 1)
    ];
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

    return names[
        rand(0, names.length - 1)
    ];
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

    const customer =
    randomBusiness();

    const catalogue = [

        "Office Chairs",
        "Office Desks",
        "Computer Monitors",
        "Printer Paper",
        "Stationery Packs",
        "Desk Lamps",
        "Keyboards",
        "Storage Boxes"
    ];

    shuffle(catalogue);

    const items = [

        {
            description:catalogue[0],
            qty:rand(5,30),
            price:rand(10,250)
        },

        {
            description:catalogue[1],
            qty:rand(5,30),
            price:rand(10,250)
        },

        {
            description:catalogue[2],
            qty:rand(5,30),
            price:rand(10,250)
        }
    ];

    const net =

    items.reduce(
        (t,i)=>t+(i.qty*i.price),
        0
    );

    const vat =
    +(net * 0.20).toFixed(2);

    const gross =
    +(net + vat).toFixed(2);

    return {

        taskType:"invoice",

        question:

        "Prepare the sales invoice using the information below.",

        invoiceNumber:

        "SI" + rand(1000,9999),

        customer,

        items,

        vatRate:20,

        answers:{
            net,
            vat,
            gross
        }
    };
}
    if(type === 2){

    const supplier =
    randomBusiness();

    const catalogue = [

        "Office Chairs",
        "Office Desks",
        "Computer Monitors",
        "Printer Paper",
        "Stationery Packs",
        "Desk Lamps",
        "Keyboards",
        "Storage Boxes"
    ];

    shuffle(catalogue);

    const items = [

        {
            description:catalogue[0],
            qty:rand(5,30),
            price:rand(10,250)
        },

        {
            description:catalogue[1],
            qty:rand(5,30),
            price:rand(10,250)
        },

        {
            description:catalogue[2],
            qty:rand(5,30),
            price:rand(10,250)
        }
    ];

    const net =

    items.reduce(
        (t,i)=>t+(i.qty*i.price),
        0
    );

    const vat =
    +(net * 0.20).toFixed(2);

    const gross =
    +(net + vat).toFixed(2);

    return {

        taskType:"purchaseInvoice",

        question:

        "Prepare the purchase invoice using the information below.",

        invoiceNumber:

        "PI" + rand(1000,9999),

        supplier,

        items,

        vatRate:20,

        answers:{
            net,
            vat,
            gross
        }
    };
}
    if(type === 3){

    const customer =
    randomBusiness();

    const quantity =
    rand(1,10);

    const unitPrice =
    rand(20,150);

    const net =
    quantity * unitPrice;

    const vat =
    +(net * 0.20).toFixed(2);

    const gross =
    +(net + vat).toFixed(2);

    return {

        taskType:"creditNote",

        question:

        "The customer has returned goods. Complete the credit note.",

        creditNoteNumber:

        "CN" + rand(1000,9999),

        customer,

        quantity,

        unitPrice,

        vatRate:20,

        answers:{
            net,
            vat,
            gross
        }
    };
}

    if(type === 4){

    const opening =
    rand(500,3000);

    const invoice1 =
    rand(200,1500);

    const invoice2 =
    rand(200,1500);

    const payment =
    rand(200,1200);

    const creditNote =
    rand(100,500);

    const balance =

    opening +
    invoice1 +
    invoice2 -
    payment -
    creditNote;

    return {

        taskType:"statement",

        question:

        "Green Ltd sends the following statement to a customer. Calculate the closing balance.",

        statementTitle:

        "CUSTOMER STATEMENT",

        rows:[

            {
                description:"Opening Balance",
                amount:opening.toFixed(2)
            },

            {
                description:"Invoice",
                amount:invoice1.toFixed(2)
            },

            {
                description:"Invoice",
                amount:invoice2.toFixed(2)
            },

            {
                description:"Payment Received",
                amount:"-" + payment.toFixed(2)
            },

            {
                description:"Credit Note",
                amount:"-" + creditNote.toFixed(2)
            }
        ],

        answer:
        Number(balance.toFixed(2))
    };
}

    if(type === 5){

    const opening =
    rand(500,3000);

    const invoice1 =
    rand(200,1500);

    const invoice2 =
    rand(200,1500);

    const payment =
    rand(200,1200);

    const creditNote =
    rand(100,500);

    const balance =

    opening +
    invoice1 +
    invoice2 -
    payment -
    creditNote;

    return {

        taskType:"statement",

        question:

        "A supplier has sent the following statement. Calculate the closing balance payable.",

        statementTitle:

        "SUPPLIER STATEMENT",

        rows:[

            {
                description:"Opening Balance",
                amount:opening.toFixed(2)
            },

            {
                description:"Purchase Invoice",
                amount:invoice1.toFixed(2)
            },

            {
                description:"Purchase Invoice",
                amount:invoice2.toFixed(2)
            },

            {
                description:"Payment Made",
                amount:"-" + payment.toFixed(2)
            },

            {
                description:"Credit Note Received",
                amount:"-" + creditNote.toFixed(2)
            }
        ],

        answer:
        Number(balance.toFixed(2))
    };
}

     if(type === 6){

    const opening =
    rand(1000,5000);

    const sales =
    rand(500,3000);

    const receipts =
    rand(300,2000);

    const creditNotes =
    rand(100,800);

    const balance =

    opening +
    sales -
    receipts -
    creditNotes;

    return {

        taskType:"ledger",

        question:

        "Complete the Sales Ledger Control Account and calculate the balance carried down.",

        accountName:

        "Sales Ledger Control Account",

        rows:[

            {
                description:"Balance b/d",
                debit:opening.toFixed(2)
            },

            {
                description:"Credit Sales",
                debit:sales.toFixed(2)
            },

            {
                description:"Cash Received",
                credit:receipts.toFixed(2)
            },

            {
                description:"Credit Notes Issued",
                credit:creditNotes.toFixed(2)
            }
        ],

        answer:
        Number(balance.toFixed(2)),
        balanceSide:
"Debit"
    };
}
    
    if(type === 7){

    const opening =
    rand(1000,5000);

    const purchases =
    rand(500,3000);

    const payments =
    rand(300,2000);

    const returns =
    rand(100,800);

    const balance =

    opening +
    purchases -
    payments -
    returns;

    return {

        taskType:"ledger",

        question:

        "Complete the Purchase Ledger Control Account and calculate the balance carried down.",

        accountName:

        "Purchase Ledger Control Account",

        rows:[

            {
                description:"Balance b/d",
                credit:opening.toFixed(2)
            },

            {
                description:"Credit Purchases",
                credit:purchases.toFixed(2)
            },

            {
                description:"Payments Made",
                debit:payments.toFixed(2)
            },

            {
                description:"Purchase Returns",
                debit:returns.toFixed(2)
            }
        ],

        answer:
        Number(balance.toFixed(2)),

        balanceSide:
        "Debit"
    };
}
        
    if(type === 8){

    const a1 = rand(100,800);
    const a2 = rand(100,800);
    const a3 = rand(100,800);

    return {

        taskType:"journal",

        question:

        "Calculate the total cash receipts recorded in the journal.",

        journalTitle:

        "CASH RECEIPTS JOURNAL",

        rows:[

            {
                date:"03 Apr",
                name:randomBusiness(),
                amount:a1.toFixed(2)
            },

            {
                date:"05 Apr",
                name:randomBusiness(),
                amount:a2.toFixed(2)
            },

            {
                date:"07 Apr",
                name:randomBusiness(),
                amount:a3.toFixed(2)
            }
        ],

        answer:
        Number(
            (a1+a2+a3).toFixed(2)
        )
    };
}
    if(type === 9){

    const a1 = rand(100,800);
    const a2 = rand(100,800);
    const a3 = rand(100,800);

    return {

        taskType:"journal",

        question:

        "Calculate the total cash payments recorded in the journal.",

        journalTitle:

        "CASH PAYMENTS JOURNAL",

        rows:[

            {
                date:"03 Apr",
                name:randomBusiness(),
                amount:a1.toFixed(2)
            },

            {
                date:"06 Apr",
                name:randomBusiness(),
                amount:a2.toFixed(2)
            },

            {
                date:"09 Apr",
                name:randomBusiness(),
                amount:a3.toFixed(2)
            }
        ],

        answer:
        Number(
            (a1+a2+a3).toFixed(2)
        )
    };
}

    if(type === 10){

    const scenarios = [

        {
            text:
            "Purchased inventory on credit.",

            debit:
            "Purchases",

            credit:
            "Trade Payables"
        },

        {
            text:
            "Paid insurance by bank.",

            debit:
            "Insurance Expense",

            credit:
            "Bank"
        },

        {
            text:
            "Owner introduced cash into the business.",

            debit:
            "Bank",

            credit:
            "Capital"
        },

        {
            text:
            "Received payment from a customer.",

            debit:
            "Bank",

            credit:
            "Trade Receivables"
        }
    ];

    const entry =
    scenarios[
        rand(0, scenarios.length - 1)
    ];

    return {

        taskType:"journalEntry",

        question:
        "Complete the journal entry by selecting the correct accounts and whether each entry is a debit or a credit.",

        transaction:
        entry.text,

        answers:{

            row1Account:
            entry.debit,

            row1Side:
            "Debit",

            row2Account:
            entry.credit,

            row2Side:
            "Credit"
        }
    };
}
    
    if(type === 11){

    const opening =
    rand(1000,5000);

    const sales =
    rand(500,3000);

    const receipts =
    rand(300,2000);

    const returns =
    rand(100,800);

    const balance =

    opening +
    sales -
    receipts -
    returns;

    return {

        taskType:"ledger",

        question:

        "Calculate the closing Trade Receivables balance.",

        accountName:

        "Trade Receivables",

        rows:[

            {
                description:"Opening Balance",
                debit:opening.toFixed(2)
            },

            {
                description:"Credit Sales",
                debit:sales.toFixed(2)
            },

            {
                description:"Receipts",
                credit:receipts.toFixed(2)
            },

            {
                description:"Credit Notes",
                credit:returns.toFixed(2)
            }
        ],

        answer:
        Number(balance.toFixed(2)),

        balanceSide:
        "Debit"
    };
}

    if(type === 12){

    const opening =
    rand(1000,5000);

    const purchases =
    rand(500,3000);

    const payments =
    rand(300,2000);

    const returns =
    rand(100,800);

    const balance =

    opening +
    purchases -
    payments -
    returns;

    return {

        taskType:"ledger",

        question:

        "Calculate the closing Trade Payables balance.",

        accountName:

        "Trade Payables",

        rows:[

            {
                description:"Opening Balance",
                credit:opening.toFixed(2)
            },

            {
                description:"Credit Purchases",
                credit:purchases.toFixed(2)
            },

            {
                description:"Payments",
                debit:payments.toFixed(2)
            },

            {
                description:"Purchase Returns",
                debit:returns.toFixed(2)
            }
        ],

        answer:
        Number(balance.toFixed(2)),

        balanceSide:
        "Credit"
    };
}

    if(type === 13){

    const docs = [

        {
            body:

            'Invoice No: SI' + rand(1000,9999) + '<br>' +
            'Customer: ' + randomBusiness() + '<br>' +
            'VAT Included<br>' +
            'Amount Due: £' + rand(500,5000) + '<br>' +
            'Payment Terms: 30 Days',

            correct:"Sales Invoice"
        },

        {
            body:

            'Delivery No: DN' + rand(1000,9999) + '<br>' +
            'Items Delivered<br>' +
            'Quantity Checked<br>' +
            'Received By: __________',

            correct:"Delivery Note"
        },

        {
            body:

            'Credit Note No: CN' + rand(1000,9999) + '<br>' +
            'Goods Returned<br>' +
            'Credit Value: £' + rand(100,1500) + '<br>' +
            'Customer Account Adjustment',

            correct:"Credit Note"
        },

        {
            body:

            'Opening Balance: £' + rand(1000,5000) + '<br>' +
            'Invoices Outstanding<br>' +
            'Payments Received<br>' +
            'Closing Balance: £' + rand(500,4000),

            correct:"Supplier Statement"
        }
    ];

    const chosen =
    docs[rand(0, docs.length - 1)];

    const options = shuffle([

        chosen.correct,
        "Sales Invoice",
        "Delivery Note",
        "Credit Note",
        "Supplier Statement"

    ].filter(
        (v,i,a)=>a.indexOf(v)===i
    ));

    return {

        taskType:"documentIdentification",

        question:
        "Identify the document shown below.",

        documentBody:
        chosen.body,

        options,

        correct:
        options.indexOf(
            chosen.correct
        )
    };
}
   if(type === 14){

    const capital =
    rand(5000,15000);

    const inventoryOnCredit =
    rand(1000,4000);

    const creditSales =
    rand(1000,3000);

    const customerReceipt =
    rand(
        500,
        creditSales
    );

    const assets =

        capital +

        inventoryOnCredit +

        creditSales;

    const liabilities =

        inventoryOnCredit;

    const equity =

        capital +

        creditSales;

    return {

        taskType:"accountingEquation",

        question:

        `${business} completes the following transactions.

Owner introduces ${currency(capital)}

Inventory purchased on credit ${currency(inventoryOnCredit)}

Credit sales made ${currency(creditSales)}

Customer pays ${currency(customerReceipt)}

Complete the accounting equation.`,

        answers:{

            assets:
            Number(
                assets.toFixed(2)
            ),

            liabilities:
            Number(
                liabilities.toFixed(2)
            ),

            capital:
            Number(
                equity.toFixed(2)
            )
        }
    };
}
    
   if(type === 15){

    const customer =
    randomBusiness();

    const catalogue = [

    "Office Chairs",
    "Office Desks",
    "Computer Monitors",
    "Printer Paper",
    "Stationery Packs",
    "Filing Cabinets",
    "Desk Lamps",
    "Keyboards",
    "Mouse Devices",
    "Storage Boxes"
];

shuffle(catalogue);

const items = [

    {
        description:catalogue[0],
        qty:rand(5,50),
        price:rand(5,250)
    },

    {
        description:catalogue[1],
        qty:rand(5,50),
        price:rand(5,250)
    },

    {
        description:catalogue[2],
        qty:rand(5,50),
        price:rand(5,250)
    }
];

    const net =
    items.reduce(
        (t,i)=>t+(i.qty*i.price),
        0
    );

    const vat =
    +(net*0.20).toFixed(2);

    const gross =
    +(net+vat).toFixed(2);

    return {

        taskType:"deliveryInvoice",

        question:
        "Use the delivery note to complete the sales invoice.",

        deliveryNumber:
        "DN"+rand(1000,9999),

        invoiceNumber:
        "SI"+rand(1000,9999),

        customer,

        items,

        vatRate:20,

        answers:{
            net,
            vat,
            gross
        }
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

    const cashBook =
    rand(1500,5000);

    const outstandingLodgements =
    rand(100,800);

    const unpresentedCheques =
    rand(100,800);

    const revisedBalance =

        cashBook +

        outstandingLodgements -

        unpresentedCheques;

    return {

        taskType:"bankReconciliation",

        question:

        "Complete the bank reconciliation and calculate the revised bank balance.",

        scenario:{

            cashBook:
            cashBook,

            outstandingLodgements:
            outstandingLodgements,

            unpresentedCheques:
            unpresentedCheques
        },

        answer:
        Number(
            revisedBalance.toFixed(2)
        )
    };
}
    if(type === 2){

    const opening =
    rand(1000,5000);

    const charges =
    rand(20,150);

    const interest =
    rand(10,100);

    const revised =

        opening -
        charges +
        interest;

    return {

        taskType:"cashBookAdjustment",

        question:

        "Update the cash book balance using the information provided.",

        openingBalance:
        opening,

        bankCharges:
        charges,

        bankInterest:
        interest,

        answer:
        Number(
            revised.toFixed(2)
        )
    };
}

    /* ---------------- BANK RECONCILIATION PRACTICAL ---------------- */

    if(type === 3){

    const customer1 =
    rand(500,2000);

    const customer2 =
    rand(500,2000);

    const customer3 =
    rand(500,2000);

    const customerTotal =

        customer1 +
        customer2 +
        customer3;

    const difference =
    rand(50,300);

    const controlAccount =

        customerTotal +
        difference;

    return {

        taskType:"ledgerReconciliation",

        question:

        "Calculate the difference between the Sales Ledger Control Account and the total of customer balances.",

        accountName:

        "Sales Ledger Reconciliation",

        controlAccount:
        controlAccount,

        balances:[

            customer1,
            customer2,
            customer3
        ],

        answer:
        difference
    };
}

    if(type === 4){

    const supplier1 =
    rand(500,2000);

    const supplier2 =
    rand(500,2000);

    const supplier3 =
    rand(500,2000);

    const supplierTotal =

        supplier1 +
        supplier2 +
        supplier3;

    const difference =
    rand(50,300);

    const controlAccount =

        supplierTotal +
        difference;

    return {

        taskType:"purchaseLedgerReconciliation",

        question:

        "Calculate the difference between the Purchase Ledger Control Account and the total of supplier balances.",

        accountName:

        "Purchase Ledger Reconciliation",

        controlAccount:
        controlAccount,

        balances:[

            supplier1,
            supplier2,
            supplier3
        ],

        answer:
        difference
    };
}
    /* ---------------- ERRORS (HIGH PRACTICAL) ---------------- */

   if(type === 5){

    const difference =
    rand(100,500);

    const scenarios = [

        {
            question:

            `The trial balance does not balance.

A difference of ${currency(difference)} is placed in a suspense account.

Which account must be debited to clear the suspense account if Purchases was understated by this amount?`,

            correct:
            "Purchases"
        },

        {
            question:

            `The trial balance does not balance.

A difference of ${currency(difference)} is placed in a suspense account.

Which account must be debited to clear the suspense account if Rent Expense was omitted?`,

            correct:
            "Rent Expense"
        },

        {
            question:

            `The trial balance does not balance.

A difference of ${currency(difference)} is placed in a suspense account.

Which account must be debited to clear the suspense account if Insurance Expense was omitted?`,

            correct:
            "Insurance Expense"
        }
    ];

    const chosen =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    const options = shuffle([

        chosen.correct,

        "Trade Payables",

        "Capital",

        "Bank"

    ]);

    return {

        question:
        chosen.question,

        options,

        correct:
        options.indexOf(
            chosen.correct
        )
    };
}

    if(type === 6){

    const questions = [

        {
            question:

            "A purchase of inventory was recorded in Motor Expenses. What type of error is this?",

            correct:
            "Error of Principle"
        },

        {
            question:

            "A transaction was entered twice in the accounts. What type of error is this?",

            correct:
            "Error of Commission"
        },

        {
            question:

            "A transaction was completely omitted from the accounting records. What type of error is this?",

            correct:
            "Error of Omission"
        },

        {
            question:

            "An amount of £540 was entered as £450. What type of error is this?",

            correct:
            "Error of Original Entry"
        }
    ];

    const chosen =
    questions[
        rand(0,questions.length-1)
    ];

    const options = shuffle([

        chosen.correct,

        "Error of Principle",
        "Error of Commission",
        "Error of Omission",
        "Error of Original Entry"

    ].filter(
        (v,i,a)=>a.indexOf(v)===i
    ));

    return {

        question:
        chosen.question,

        options,

        correct:
        options.indexOf(
            chosen.correct
        )
    };
}
    if(type === 7){

    const scenarios = [

        {
            transaction:
            "Rent Expense was incorrectly posted to Purchases.",

            answers:{
                row1Account:"Rent Expense",
                row1Side:"Debit",
                row2Account:"Purchases",
                row2Side:"Credit"
            }
        },

        {
            transaction:
            "Insurance Expense was incorrectly posted to Purchases.",

            answers:{
                row1Account:"Insurance Expense",
                row1Side:"Debit",
                row2Account:"Purchases",
                row2Side:"Credit"
            }
        },

        {
            transaction:
            "A payment from a customer was incorrectly posted to Capital.",

            answers:{
                row1Account:"Trade Receivables",
                row1Side:"Debit",
                row2Account:"Capital",
                row2Side:"Credit"
            }
        }
    ];

    const chosen =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return {

        taskType:"journalEntry",

        question:

        "Complete the correcting journal entry.",

        transaction:
        chosen.transaction,

        answers:
        chosen.answers
    };
}

    /* ---------------- CONTROL ACCOUNT LOGIC ---------------- */

    if(type === 8){

    const credits =
    rand(8000,15000);

    const difference =
    rand(50,500);

    const debits =

        credits +
        difference;

    return {

        taskType:"trialBalanceDifference",

        question:

        "Calculate the difference in the trial balance.",

        debitTotal:
        debits,

        creditTotal:
        credits,

        answer:
        difference
    };
}
    if(type === 9){

    const control =
    rand(3000,7000);

    const omission =
    rand(100,500);

    return {

        taskType:"controlAccountReconciliation",

        question:

        "Calculate the corrected control account balance.",

        controlBalance:
        control,

        adjustment:
        omission,

        answer:
        Number(
            (control + omission).toFixed(2)
        )
    };
}

    /* ---------------- CALCULATION + INTERPRETATION ---------------- */

    if(type === 10){

    const opening =
    rand(500,3000);

    const sales =
    rand(1000,4000);

    const receipts =
    rand(500,2500);

    const returns =
    rand(100,800);

    const balance =

        opening +
        sales -
        receipts -
        returns;

    return {

        taskType:"controlAccount",

        question:

        "Calculate the closing balance on the Sales Ledger Control Account.",

        rows:[

            {
                description:"Opening Balance",
                amount:opening
            },

            {
                description:"Credit Sales",
                amount:sales
            },

            {
                description:"Receipts",
                amount:-receipts
            },

            {
                description:"Sales Returns",
                amount:-returns
            }
        ],

        answer:
        Number(
            balance.toFixed(2)
        )
    };
}

    /* ---------------- FINAL PRACTICAL UNDERSTANDING ---------------- */

    if(type === 11){

    const cashBook =
    rand(1000,5000);

    const bankCharges =
    rand(10,150);

    const revisedBalance =

        cashBook -
        bankCharges;

    return {

        taskType:"bankCharges",

        question:

        "Calculate the revised cash book balance after entering the bank charges.",

        cashBook:
        cashBook,

        bankCharges:
        bankCharges,

        answer:
        Number(
            revisedBalance.toFixed(2)
        )
    };
}

    if(type === 12){

    const receivables =
    rand(1500,5000);

    const cheque =
    rand(100,800);

    const revised =

        receivables +
        cheque;

    return {

        taskType:"dishonouredCheque",

        question:

        "A customer's cheque has been dishonoured by the bank. Calculate the revised Trade Receivables balance.",

        receivables:
        receivables,

        dishonouredCheque:
        cheque,

        answer:
        Number(
            revised.toFixed(2)
        )
    };
}
    if(type === 13){

    const scenarios = [

        {
            question:

            "Which internal control helps prevent fraud in cash handling?",

            correct:
            "Segregation of duties"
        },

        {
            question:

            "Which control reduces the risk of errors in bank balances?",

            correct:
            "Regular bank reconciliations"
        },

        {
            question:

            "Which control helps verify the accuracy of supplier balances?",

            correct:
            "Supplier statement reconciliation"
        },

        {
            question:

            "Which control helps detect mistakes in the accounting records?",

            correct:
            "Independent review"
        }
    ];

    const chosen =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    const options = shuffle([

        chosen.correct,

        "Segregation of duties",
        "Regular bank reconciliations",
        "Supplier statement reconciliation",
        "Independent review"

    ].filter(
        (v,i,a)=>a.indexOf(v)===i
    ));

    return {

        question:
        chosen.question,

        options,

        correct:
        options.indexOf(
            chosen.correct
        )
    };
}

    if(type === 14){

    const amount =
    rand(100,500);

    return {

        taskType:"errorCaseStudy",

        question:

        "A purchase invoice was correctly entered in Purchases but omitted from Trade Payables. Calculate the amount required to correct the error.",

        amount:
        amount,

        answer:
        amount
    };
}

    /* ---------------- HARD PRACTICAL FINAL ---------------- */

    if(type === 15){

    const cashBook =
    rand(2000,7000);

    const outstandingLodgements =
    rand(100,800);

    const unpresentedCheques =
    rand(100,800);

    const bankCharges =
    rand(20,120);

    const directDebit =
    rand(50,300);

    const revisedBalance =

        cashBook +

        outstandingLodgements -

        unpresentedCheques -

        bankCharges -

        directDebit;

    return {

        taskType:"advancedBankReconciliation",

        question:

        "Complete the bank reconciliation and calculate the revised bank balance.",

        scenario:{

            cashBook:
            cashBook,

            outstandingLodgements:
            outstandingLodgements,

            unpresentedCheques:
            unpresentedCheques,

            bankCharges:
            bankCharges,

            directDebit:
            directDebit
        },

        answer:
        Number(
            revisedBalance.toFixed(2)
        )
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

    const qty =
    rand(5,50);

    const unitPrice =
    rand(20,200);

    const tradeDiscountRate =
    [5,10,15,20][rand(0,3)];

    const netValue =

        qty *
        unitPrice;

    const tradeDiscount =

        +(netValue *
        tradeDiscountRate / 100)
        .toFixed(2);

    const discountedValue =

        +(netValue -
        tradeDiscount)
        .toFixed(2);

    const vat =

        +(discountedValue *
        0.20)
        .toFixed(2);

    const gross =

        +(discountedValue +
        vat)
        .toFixed(2);

    return {

        taskType:
        "salesInvoiceTradeDiscount",

        question:

        "Complete the sales invoice.",

        customer:
        randomBusiness(),

        invoiceNumber:
        "SI" +
        rand(1000,9999),

        qty:
        qty,

        unitPrice:
        unitPrice,

        tradeDiscountRate:
        tradeDiscountRate,

        answers:{

            netValue,
            tradeDiscount,
            discountedValue,
            vat,
            gross
        }
    };
}
    if(type === 2){

    const qty =
    rand(5,50);

    const unitPrice =
    rand(20,200);

    const tradeDiscountRate =
    [5,10,15,20][rand(0,3)];

    const netValue =

        qty *
        unitPrice;

    const tradeDiscount =

        +(netValue *
        tradeDiscountRate / 100)
        .toFixed(2);

    const discountedValue =

        +(netValue -
        tradeDiscount)
        .toFixed(2);

    const vat =

        +(discountedValue *
        0.20)
        .toFixed(2);

    const gross =

        +(discountedValue +
        vat)
        .toFixed(2);

    return {

        taskType:
        "purchaseInvoiceTradeDiscount",

        question:

        "Complete the purchase invoice.",

        supplier:
        randomBusiness(),

        invoiceNumber:
        "PI" +
        rand(1000,9999),

        qty:
        qty,

        unitPrice:
        unitPrice,

        tradeDiscountRate:
        tradeDiscountRate,

        answers:{

            netValue,
            tradeDiscount,
            discountedValue,
            vat,
            gross
        }
    };
}
    /* ---------------- LABOUR COSTING ---------------- */

    if(type === 3){

    const listPrice =
    rand(1000,10000);

    const tradeDiscountRate =
    [5,10,15,20,25][rand(0,4)];

    const discountAmount =

        +(listPrice *
        tradeDiscountRate / 100)
        .toFixed(2);

    const netInvoiceValue =

        +(listPrice -
        discountAmount)
        .toFixed(2);

    return {

        taskType:
        "tradeDiscountCalculation",

        question:

        "Calculate the trade discount and net invoice value.",

        listPrice:
        listPrice,

        tradeDiscountRate:
        tradeDiscountRate,

        answers:{

            discountAmount,
            netInvoiceValue
        }
    };
}

    /* ---------------- MATERIAL WASTE ---------------- */

    if(type === 4){

    const invoiceTotal =
    rand(1000,10000);

    const discountRate =
    [2,3,5,10][rand(0,3)];

    const discountAmount =

        +(invoiceTotal *
        discountRate / 100)
        .toFixed(2);

    const amountPayable =

        +(invoiceTotal -
        discountAmount)
        .toFixed(2);

    return {

        taskType:
        "promptPaymentDiscount",

        question:

        "Calculate the prompt payment discount and amount payable.",

        invoiceTotal:
        invoiceTotal,

        discountRate:
        discountRate,

        answers:{

            discountAmount,
            amountPayable
        }
    };
}
    /* ---------------- COST PER UNIT ---------------- */

    if(type === 5){

    const goodsReturned =
    rand(500,5000);

    const vat =

        +(goodsReturned *
        0.20)
        .toFixed(2);

    const creditNoteTotal =

        +(goodsReturned +
        vat)
        .toFixed(2);

    return {

        taskType:
        "salesReturnsCreditNote",

        question:

        "Complete the sales returns credit note.",

        customer:
        randomBusiness(),

        creditNoteNumber:
        "CN" +
        rand(1000,9999),

        goodsReturned:
        goodsReturned,

        answers:{

            vat,
            creditNoteTotal
        }
    };
}
    /* ---------------- SIMPLE PROFIT ---------------- */

    if(type === 6){

    const goodsReturned =
    rand(500,5000);

    const vat =

        +(goodsReturned *
        0.20)
        .toFixed(2);

    const creditNoteTotal =

        +(goodsReturned +
        vat)
        .toFixed(2);

    return {

        taskType:
        "purchaseReturnsCreditNote",

        question:

        "Complete the purchase returns credit note.",

        supplier:
        randomBusiness(),

        creditNoteNumber:
        "PCN" +
        rand(1000,9999),

        goodsReturned:
        goodsReturned,

        answers:{

            vat,
            creditNoteTotal
        }
    };
}

    /* ---------------- OVERHEADS ---------------- */

    if(type === 7){

    const netValue =
    rand(1000,10000);

    const vatRate =
    20;

    const vatAmount =

        +(netValue *
        vatRate / 100)
        .toFixed(2);

    const grossAmount =

        +(netValue +
        vatAmount)
        .toFixed(2);

    return {

        taskType:
        "vatCalculation",

        question:

        "Calculate the VAT amount and gross amount.",

        netValue:
        netValue,

        vatRate:
        vatRate,

        answers:{

            vatAmount,
            grossAmount
        }
    };
}
    /* ---------------- BREAK EVEN BASIC ---------------- */

    if(type === 8){

    const netValue =
    rand(1000,10000);

    const vatAmount =

        +(netValue *
        0.20)
        .toFixed(2);

    const grossAmount =

        +(netValue +
        vatAmount)
        .toFixed(2);

    return {

        taskType:
        "vatExtraction",

        question:

        "Extract the VAT and net value from the gross amount.",

        grossAmount:
        grossAmount,

        answers:{

            vatAmount,
            netValue
        }
    };
}
    /* ---------------- COST CLASSIFICATION ---------------- */

    if(type === 9){

    const netSales =
    rand(1000,10000);

    const vat =

        +(netSales *
        0.20)
        .toFixed(2);

    const totalInvoice =

        +(netSales +
        vat)
        .toFixed(2);

    return {

        taskType:
        "salesInvoicePosting",

        question:

        "Complete the double entry for the sales invoice.",

        customer:
        randomBusiness(),

        netSales:
        netSales,

        vat:
        vat,

        totalInvoice:
        totalInvoice,

        answers:{

            debitReceivables:
            totalInvoice,

            creditSales:
            netSales,

            creditVAT:
            vat
        }
    };
}
    if(type === 10){

    const netPurchases =
    rand(1000,10000);

    const vat =

        +(netPurchases *
        0.20)
        .toFixed(2);

    const totalInvoice =

        +(netPurchases +
        vat)
        .toFixed(2);

    return {

        taskType:
        "purchaseInvoicePosting",

        question:

        "Complete the double entry for the purchase invoice.",

        supplier:
        randomBusiness(),

        netPurchases:
        netPurchases,

        vat:
        vat,

        totalInvoice:
        totalInvoice,

        answers:{

            debitPurchases:
            netPurchases,

            debitVAT:
            vat,

            creditPayables:
            totalInvoice
        }
    };
}

    /* ---------------- FINAL APPLICATION ---------------- */

    if(type === 11){

    const goodsReturned =
    rand(1000,10000);

    const vat =

        +(goodsReturned *
        0.20)
        .toFixed(2);

    const creditNoteTotal =

        +(goodsReturned +
        vat)
        .toFixed(2);

    return {

        taskType:
        "salesReturnsPosting",

        question:

        "Complete the double entry for the sales returns credit note.",

        customer:
        randomBusiness(),

        goodsReturned:
        goodsReturned,

        vat:
        vat,

        creditNoteTotal:
        creditNoteTotal,

        answers:{

            debitSalesReturns:
            goodsReturned,

            debitVAT:
            vat,

            creditReceivables:
            creditNoteTotal
        }
    };
}

    if(type === 12){

    const goodsReturned =
    rand(1000,10000);

    const vat =

        +(goodsReturned *
        0.20)
        .toFixed(2);

    const creditNoteTotal =

        +(goodsReturned +
        vat)
        .toFixed(2);

    return {

        taskType:
        "purchaseReturnsPosting",

        question:

        "Complete the double entry for the purchase returns credit note.",

        supplier:
        randomBusiness(),

        goodsReturned:
        goodsReturned,

        vat:
        vat,

        creditNoteTotal:
        creditNoteTotal,

        answers:{

            debitPayables:
            creditNoteTotal,

            creditPurchaseReturns:
            goodsReturned,

            creditVAT:
            vat
        }
    };
}
    if(type === 13){

    const vatOnSales =
    rand(1000,8000);

    const vatOnPurchases =
    rand(500,4000);

    const vatPayable =

        vatOnSales -
        vatOnPurchases;

    return {

        taskType:
        "vatLedgerPosting",

        question:

        "Calculate the VAT payable to the tax authority.",

        vatOnSales:
        vatOnSales,

        vatOnPurchases:
        vatOnPurchases,

        answer:
        vatPayable
    };
}

if(type === 14){

    const opening =
    rand(1000,5000);

    const creditSales =
    rand(1000,5000);

    const cashReceived =
    rand(500,3000);

    const returnsValue =
    rand(100,1000);

    const closing =

        opening +
        creditSales -
        cashReceived -
        returnsValue;

    return {

        taskType:
        "tradeReceivablesLedger",

        question:

        "Calculate the closing balance on the Trade Receivables account.",

        opening,
        creditSales,
        cashReceived,
        returnsValue,

        answer:
        closing
    };
}

if(type === 15){

    const opening =
    rand(1000,5000);

    const creditPurchases =
    rand(1000,5000);

    const payments =
    rand(500,3000);

    const purchaseReturns =
    rand(100,1000);

    const closing =

        opening +
        creditPurchases -
        payments -
        purchaseReturns;

    return {

        taskType:
        "tradePayablesLedger",

        question:

        "Calculate the closing balance on the Trade Payables account.",

        opening,
        creditPurchases,
        payments,
        purchaseReturns,

        answer:
        closing
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

    return {

        taskType:
        "stakeholderPriority",

        question:
        "ABC Ltd wants to increase dividends paid to investors. Which stakeholder group is most interested?",

        answer:
        "shareholders"
    };
}

if(type === 2){

    return {

        taskType:
        "stakeholderClassification",

        question:
        "Classify each stakeholder as Internal or External.",

        rows:[

            {
                stakeholder:"Employee",
                answer:"internal"
            },

            {
                stakeholder:"Supplier",
                answer:"external"
            },

            {
                stakeholder:"Manager",
                answer:"internal"
            }
        ]
    };
}

if(type === 3){

    return {

        taskType:
        "businessObjective",

        question:
        "A business is focused on staying operational during a recession and avoiding closure. Identify the business objective.",

        answer:
        "survival"
    };
}

if(type === 4){

    return {

        taskType:
        "missionStatement",

        mission:
        "To provide the highest quality customer service and build long-term customer relationships.",

        answer:
        "customer satisfaction"
    };
}

if(type === 5){

    return {

        taskType:
        "swotClassification",

        items:[

            {
                text:"Strong brand reputation",
                answer:"S"
            },

            {
                text:"New competitor enters market",
                answer:"T"
            },

            {
                text:"Growing customer demand",
                answer:"O"
            },

            {
                text:"Outdated equipment",
                answer:"W"
            }
        ]
    };
}

    if(type === 6){

    return {

        taskType:
        "pestClassification",

        items:[

            {
                text:"Corporation tax increases",
                answer:"P"
            },

            {
                text:"Interest rates rise",
                answer:"E"
            },

            {
                text:"Population ageing",
                answer:"S"
            },

            {
                text:"New AI software released",
                answer:"T"
            }
        ]
    };
}

if(type === 7){

    return {

        taskType:
        "ethicalIssue",

        scenario:

        "A manager instructs employees to hide product defects from customers.",

        answer:
        "honesty"
    };
}

if(type === 8){

    return {

        taskType:
        "dataProtection",

        question:
        "Identify the data protection principle being breached.",

        scenario:
        "Customer information is shared with another company without permission.",

        answer:
        "consent"
    };
}

if(type === 9){

    return {

        taskType:
        "healthSafety",

        question:
        "Identify the health and safety issue.",

        scenario:
        "A fire exit is blocked by storage boxes.",

        answer:
        "fire exit"
    };
}

if(type === 10){

    return {

        taskType:
        "professionalBehaviour",

        scenario:

        "An employee receives a confidential document by mistake.",

        answer:
        "report"
    };
}

    /* ---------------- ETHICS / RESPONSIBILITY ---------------- */

    if(type === 11){

    return {

        taskType:
        "csrActivity",

        scenario:
        "A company replaces plastic packaging with recyclable materials.",

        answer:
        "environment"
    };
}

if(type === 12){

    return {

        taskType:
        "communicationMethod",

        scenario:
        "A cyber attack has occurred and all employees must be informed immediately.",

        answer:
        "meeting"
    };
}

if(type === 13){

    return {

        taskType:
        "teamworkScenario",

        scenario:
        "A project team is missing deadlines because members are not sharing information.",

        answer:
        "communication"
    };
}

if(type === 14){

    return {

        taskType:
        "conflictResolution",

        scenario:
        "Two employees disagree about how a task should be completed.",

        answer:
        "discussion"
    };
}

if(type === 15){

    return {

        taskType:
        "businessCaseStudy",

        scenario:

        "Sales are falling, customer complaints are increasing and a new competitor has entered the market.",

        answers:{

            objective:
            "survival",

            stakeholder:
            "customers",

            risk:
            "competition",

            action:
            "improve service"
        }
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

    const scenarios = [

        {
            scenario:
            "A sales invoice was completely omitted from the accounting records.",
            answer: "error of omission"
        },

        {
            scenario:
            "Rent expense was posted to Repairs Expense.",
            answer: "error of principle"
        },

        {
            scenario:
            "A payment of £540 was entered as £450.",
            answer: "transposition error"
        },

        {
            scenario:
            "A receipt was entered on the credit side instead of the debit side.",
            answer: "error of reversal"
        }

    ];

    const q = choice(scenarios);

    return {
        taskType: "identifyErrorType",
        question:
        "Identify the type of accounting error.",
        scenario: q.scenario,
        answer: q.answer
    };
}
    /* ---------------- SCENARIO 2: CUSTOMER PROBLEMS ---------------- */

    if(type === 2){

    const difference = rand(20,250);

    const debit =
    rand(5000,9000);

    const credit =
    debit - difference;

    return {

        taskType:
        "trialBalanceDifference",

        question:
        "Calculate the difference in the trial balance.",

        debitTotal: debit,

        creditTotal: credit,

        answer: difference
    };
}

    /* ---------------- SCENARIO 3: COST PRESSURE ---------------- */

    if(type === 3){

    const amount =
    rand(150,950);

    return {

        taskType:
        "errorCorrectionAmount",

        question:
        "Calculate the amount required to correct the error.",

        scenario:
        "A purchase invoice was correctly entered in Purchases but omitted from Trade Payables.",

        amount: amount,

        answer: amount
    };
}

    /* ---------------- SCENARIO 4: COMPETITION ---------------- */

    if(type === 4){

    const entries = [

        {
            transaction:
            "Insurance Expense was incorrectly posted to Purchases.",

            debit:
            "Insurance Expense",

            credit:
            "Purchases"
        },

        {
            transaction:
            "Motor Expenses were incorrectly posted to Office Expenses.",

            debit:
            "Motor Expenses",

            credit:
            "Office Expenses"
        },

        {
            transaction:
            "Rent Expense was incorrectly posted to General Expenses.",

            debit:
            "Rent Expense",

            credit:
            "General Expenses"
        }

    ];

    const q = choice(entries);

    return {

        taskType:
        "journalCorrection",

        question:
        "Complete the correcting journal entry.",

        transaction:
        q.transaction,

        answers: {

            debit:
            q.debit,

            credit:
            q.credit
        }
    };
}

    /* ---------------- SCENARIO 5: EXPANSION DECISION ---------------- */

    if(type === 5){

    const difference =
    rand(30,180);

    return {

        taskType:
        "suspenseBalance",

        question:
        "Calculate the balance on the suspense account.",

        scenario:
        "The trial balance did not agree and a suspense account was opened.",

        difference:
        difference,

        answer:
        difference
    };
}
    /* ---------------- SCENARIO 6: EMPLOYEES ---------------- */

    if(type === 6){

    const originalBalance =
    rand(1000,5000);

    const missingEntry =
    rand(100,500);

    return {

        taskType:
        "ledgerExtraction",

        question:
        "Calculate the corrected ledger balance.",

        originalBalance:
        originalBalance,

        missingEntry:
        missingEntry,

        answer:
        originalBalance + missingEntry
    };
}

if(type === 7){

    return {

        taskType:
        "identifyOmission",

        question:
        "Identify the omitted entry.",

        scenario:
        "A credit sale has been recorded in the Sales Account but not in the customer's account.",

        answer:
        "sales ledger"
    };
}

if(type === 8){

    const balance =
    rand(2000,6000);

    const adjustment =
    rand(50,250);

    return {

        taskType:
        "extendedAdjustment",

        question:
        "Calculate the revised balance after the adjustment.",

        balance:
        balance,

        adjustment:
        adjustment,

        answer:
        balance + adjustment
    };
}

if(type === 9){

    return {

        taskType:
        "locateError",

        question:
        "Identify where the error occurred.",

        scenario:
        "A purchase invoice was entered in the Sales Day Book.",

        answer:
        "day book"
    };
}

if(type === 10){

    return {

        taskType:
        "principleError",

        question:
        "Identify the type of error.",

        scenario:
        "Motor vehicle repairs were debited to Motor Vehicles.",

        answer:
        "error of principle"
    };
}

    /* ---------------- SCENARIO 11: CUSTOMER RETENTION ---------------- */

    if(type === 11){

    const amount = rand(120,850);

    return {

        taskType:
        "reversalError",

        question:
        "Identify the type of error.",

        scenario:
        "A cash receipt of £" + amount +
        " was entered on the credit side of Cash and the debit side of Sales.",

        answer:
        "error of reversal"
    };
}

if(type === 12){

    const correct =
    rand(300,900);

    const wrong =
    parseInt(
        correct.toString().split('').reverse().join('')
    );

    return {

        taskType:
        "transpositionError",

        question:
        "A transaction was entered as £" +
        wrong +
        " instead of £" +
        correct +
        ". Identify the error.",

        answer:
        "transposition error"
    };
}

if(type === 13){

    const balance =
    rand(3000,7000);

    const correction =
    rand(100,500);

    return {

        taskType:
        "controlCorrection",

        question:
        "Calculate the corrected control account balance.",

        controlBalance:
        balance,

        adjustment:
        correction,

        answer:
        balance + correction
    };
}

if(type === 14){

    const scenarios = [

        {
            scenario:
            "A purchase invoice was omitted from the Purchases Account.",

            answer:
            "error of omission"
        },

        {
            scenario:
            "Office equipment was recorded as Office Expenses.",

            answer:
            "error of principle"
        },

        {
            scenario:
            "A payment of £264 was entered as £246.",

            answer:
            "transposition error"
        }

    ];

    const q =
    choice(scenarios);

    return {

        taskType:
        "multiErrorCase",

        question:
        "Identify the error type.",

        scenario:
        q.scenario,

        answer:
        q.answer
    };
}

if(type === 15){

    const tbDifference =
    rand(50,250);

    return {

        taskType:
        "integratedErrorCase",

        question:
        "The trial balance does not agree. Calculate the suspense account balance and identify the error type.",

        difference:
        tbDifference,

        answer:
        tbDifference,

        errorType:
        "error of omission"
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

    const scenarios = [

        {
            scenario:
            "A business wants to maximise long-term profitability whilst maintaining customer satisfaction.",

            options:[
                "Survival",
                "Profit",
                "Market share",
                "Social responsibility"
            ],

            answer:1
        },

        {
            scenario:
            "A new business has entered a highly competitive market and wants to become the largest supplier within five years.",

            options:[
                "Profit",
                "Growth",
                "Survival",
                "Ethics"
            ],

            answer:1
        },

        {
            scenario:
            "A charity-owned trading company wants to generate sufficient income to continue operating.",

            options:[
                "Market dominance",
                "Survival",
                "Expansion overseas",
                "Dividend maximisation"
            ],

            answer:1
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "businessObjective",

        question:
        "Identify the main business objective.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 2){

    const scenarios = [

        {
            scenario:
            "Employees are requesting improved health and safety procedures.",

            options:[
                "Customers",
                "Employees",
                "Suppliers",
                "Government"
            ],

            answer:1
        },

        {
            scenario:
            "Investors are asking why profits have fallen this year.",

            options:[
                "Customers",
                "Shareholders",
                "Suppliers",
                "Competitors"
            ],

            answer:1
        },

        {
            scenario:
            "Residents complain about noise created by a factory during the night.",

            options:[
                "Local community",
                "Employees",
                "Customers",
                "Banks"
            ],

            answer:0
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "stakeholder",

        question:
        "Identify the stakeholder.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 3){

    const scenarios = [

        {
            scenario:
            "The government increases corporation tax.",

            options:[
                "Political",
                "Economic",
                "Social",
                "Technological"
            ],

            answer:0
        },

        {
            scenario:
            "Interest rates increase significantly.",

            options:[
                "Environmental",
                "Economic",
                "Legal",
                "Social"
            ],

            answer:1
        },

        {
            scenario:
            "Consumers increasingly prefer online shopping.",

            options:[
                "Political",
                "Technological",
                "Social",
                "Legal"
            ],

            answer:2
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "pestle",

        question:
        "Identify the PESTLE factor.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 4){

    const scenarios = [

        {
            scenario:
            "A business installs solar panels to reduce carbon emissions.",

            options:[
                "CSR",
                "Marketing",
                "Outsourcing",
                "Recruitment"
            ],

            answer:0
        },

        {
            scenario:
            "Employees receive two paid volunteering days each year.",

            options:[
                "CSR",
                "Cost reduction",
                "Business expansion",
                "Automation"
            ],

            answer:0
        },

        {
            scenario:
            "The business removes unnecessary plastic packaging.",

            options:[
                "CSR",
                "Pricing",
                "Budgeting",
                "Forecasting"
            ],

            answer:0
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "csr",

        question:
        "Identify the CSR activity.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 5){

    const sales =
    rand(180000,350000);

    const lastSales =
    sales-rand(10000,50000);

    const growth =
    (((sales-lastSales)/lastSales)*100);

    return{

        taskType:
        "salesGrowth",

        question:
        "Calculate the sales growth percentage (nearest whole %).",

        sales:
        sales,

        lastSales:
        lastSales,

        answer:
        Math.round(growth)
    };
}
    /* ---------------- BASIC ACCOUNTING EQUATION ---------------- */

    if(type === 6){

    const scenarios = [

        {
            scenario:
            "A company has separate Finance, Marketing and HR departments.",

            options:[
                "Flat structure",
                "Functional structure",
                "Matrix structure",
                "Divisional structure"
            ],

            answer:1
        },

        {
            scenario:
            "Employees report to both a project manager and a departmental manager.",

            options:[
                "Matrix structure",
                "Flat structure",
                "Functional structure",
                "Tall structure"
            ],

            answer:0
        },

        {
            scenario:
            "Each geographical region operates as an independent business unit.",

            options:[
                "Functional structure",
                "Divisional structure",
                "Flat structure",
                "Centralised structure"
            ],

            answer:1
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "organisationStructure",

        question:
        "Identify the organisational structure.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 7){

    const scenarios = [

        {
            scenario:
            "Recruiting new employees.",

            options:[
                "Finance",
                "Marketing",
                "Human Resources",
                "Operations"
            ],

            answer:2
        },

        {
            scenario:
            "Preparing the annual budget.",

            options:[
                "Finance",
                "Sales",
                "Operations",
                "IT"
            ],

            answer:0
        },

        {
            scenario:
            "Launching an advertising campaign.",

            options:[
                "Marketing",
                "Finance",
                "HR",
                "Operations"
            ],

            answer:0
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "businessFunction",

        question:
        "Identify the department responsible.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 8){

    const scenarios = [

        {
            scenario:
            "A competitor reduces prices.",

            options:[
                "Internal",
                "External"
            ],

            answer:1
        },

        {
            scenario:
            "Staff turnover increases significantly.",

            options:[
                "Internal",
                "External"
            ],

            answer:0
        },

        {
            scenario:
            "Inflation rises sharply.",

            options:[
                "Internal",
                "External"
            ],

            answer:1
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "internalExternal",

        question:
        "Identify whether the factor is internal or external.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 9){

    const scenarios = [

        {
            scenario:
            "A supplier becomes insolvent.",

            options:[
                "Financial risk",
                "Operational risk",
                "Reputational risk",
                "Compliance risk"
            ],

            answer:1
        },

        {
            scenario:
            "Customer data is leaked online.",

            options:[
                "Operational risk",
                "Reputational risk",
                "Financial risk",
                "Strategic risk"
            ],

            answer:1
        },

        {
            scenario:
            "Cash flow is insufficient to pay suppliers.",

            options:[
                "Financial risk",
                "Compliance risk",
                "Operational risk",
                "Environmental risk"
            ],

            answer:0
        }

    ];

    const q =
    scenarios[
        rand(0,scenarios.length-1)
    ];

    return{

        taskType:
        "businessRisk",

        question:
        "Identify the business risk.",

        scenario:
        q.scenario,

        options:
        q.options,

        answer:
        q.answer
    };
}

if(type === 10){

    const revenue =
    rand(450000,900000);

    const expenses =
    rand(300000,revenue-50000);

    return{

        taskType:
        "profitCalculation",

        question:
        "Calculate the profit.",

        revenue:
        revenue,

        expenses:
        expenses,

        answer:
        revenue-expenses
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
