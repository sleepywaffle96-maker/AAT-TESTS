document.addEventListener("DOMContentLoaded", function() {
    // 1. Iniezione degli stili grafici e della veste a contrasto (Bolla Chiara su Sfondo Scuro)
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        body { background-color: #0B0F19 !important; color: #F3F4F6 !important; font-family: 'Inter', sans-serif; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; min-height: 100vh; margin: 0; box-sizing: border-box; }
        .test-card-container { width: 100%; max-width: 720px; background: #FFFFFF !important; color: #1E293B !important; border-radius: 16px; padding: 30px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); border: 1px solid #E2E8F0; box-sizing: border-box; display: none; margin: 20px auto; }
        .test-card-container.active { display: block !important; }
        .header-area { border-bottom: 2px dashed #E2E8F0; padding-bottom: 12px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; }
        .level-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; color: #FFFFFF; background: #0D9488; }
        .difficulty-tag { font-size: 11px; font-weight: 700; color: #4B5563; background: #F1F5F9; padding: 4px 10px; border-radius: 6px; border: 1px solid #E5E7EB; }
        .question-title { font-size: 17px; font-weight: 800; color: #0F172A; margin: 5px 0; }
        
        .fixed-input-row { display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; border: 1px solid #D1D5DB; border-radius: 6px; padding: 12px 16px; margin-bottom: 10px; }
        .fixed-input-label { font-size: 13.5px; font-weight: 600; color: #334155; }
        .fixed-input-field { width: 140px; padding: 8px; border: 1px solid #CBD5E1; border-radius: 4px; text-align: right; font-weight: 700; outline: none; }
        
        .feedback-marker { font-size: 16px; font-weight: bold; margin-left: 10px; display: inline-block; }
        .feedback-correct { color: #10B981; }
        .feedback-wrong { color: #EF4444; }
        
        .osborne-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; width: 100%; max-width: 720px; margin-top: 20px; }
        .osborne-btn { border: 1px solid #CBD5E1; border-radius: 6px; padding: 12px 4px; font-size: 11.5px; font-weight: 700; cursor: pointer; text-align: center; background: #F8FAFC; color: #334155; outline: none; }
        .osborne-btn:hover { background: #F1F5F9; }
        .btn-verify { background: #1E293B; color: #FFFFFF; border-color: #1E293B; }
        .btn-verify:hover { background: #0F172A; }
        .btn-solution { background: #0284C7; color: #FFFFFF; border-color: #0284C7; }
        .btn-solution:hover { background: #0369A1; }
        
        .calc-widget-floating { position: fixed; bottom: 20px; right: 20px; width: 280px; z-index: 9999; background: rgba(16, 24, 48, 0.9); backdrop-filter: blur(16px); border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 10px; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6); overflow: hidden; color: #FFFFFF; }
        .calc-widget-header { background: rgba(0, 242, 254, 0.15); padding: 0.8rem 1rem; font-weight: 600; font-size: 0.9rem; color: #00f2fe; cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(0, 242, 254, 0.15); user-select: none; }
        .calc-widget-body { padding: 1rem; display: none; }
        .calc-display { width: 100%; padding: 0.6rem; background: #070b14; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 4px; color: #00f2fe; font-family: 'Courier New', Courier, monospace; font-size: 1.4rem; text-align: right; margin-bottom: 1rem; box-sizing: border-box; }
        .calc-btn-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
        .calc-btn { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 4px; padding: 0.6rem; color: #f8fafc; font-size: 1rem; font-weight: 600; cursor: pointer; }
        .btn-sci { color: #4facfe; background: rgba(79, 172, 254, 0.05); }
        .btn-op { color: #00f2fe; background: rgba(0, 242, 254, 0.05); }
        .btn-equals { background: #00f2fe; color: #0a0f1d; }
    `;
    document.head.appendChild(styleTag);
    // 2. Motore algoritmico di intercettazione e avvolgimento dei quesiti sfusi
    const bodyContent = document.body.innerHTML;
    document.body.innerHTML = '<div id="questions-root-wrapper" style="width:100%;"></div>';
    const rootWrapper = document.getElementById("questions-root-wrapper");

    // Array di soluzioni fisse per la verifica dei test numerici della cartella level-2
    const fixedSolutions = [
        { q: 1, fields: [ { id: "net", ans: "900.00" }, { id: "vat", ans: "180.00" } ] },
        { q: 2, fields: [ { id: "net", ans: "630.00" }, { id: "vat", ans: "126.00" } ] },
        { q: 3, fields: [ { id: "vat", ans: "130.00" }, { id: "gross", ans: "990.00" } ] },
        { q: 4, fields: [ { id: "cash", ans: "564.00" } ] },
        { q: 5, fields: [ { id: "net", ans: "255.00" }, { id: "gross", ans: "306.00" } ] },
        { q: 6, fields: [ { id: "gross", ans: "1600.00" } ] }
    ];

    const questionBlocks = bodyContent.split(/Q\d+\s+of\s+15/g);
    let validIndex = 0;

    questionBlocks.forEach((blockText, idx) => {
        if (idx === 0 || blockText.trim().length < 30) return;
        
        const qNum = validIndex + 1;
        const cardDiv = document.createElement("div");
        cardDiv.className = `test-card-container ${validIndex === 0 ? 'active' : ''}`;
        cardDiv.id = `card_task_${validIndex}`;
        
        cardDiv.innerHTML = `
            <div class="header-area">
                <span class="level-tag">AAT Level 2 Fixed Test • Task ${qNum}/15</span>
                <span class="difficulty-tag">🟢 Framework Target</span>
            </div>
            <div class="question-title">Assessment Question Block ${qNum}</div>
            <div class="clean-block-body" style="font-size:14px; color:#4B5563; line-height:1.6; margin-bottom:20px;">
                ${blockText.trim()}
            </div>
        `;
        
        rootWrapper.appendChild(cardDiv);

        // RIPULITURA CHIRURGICA: Rimuove i pulsantini vecchi (Back, Check Answer, Next) e i vecchi tag button/submit rimasti dentro la bolla
        cardDiv.querySelectorAll("button, input[type='button'], input[type='submit']").forEach(oldBtn => oldBtn.remove());

        // Converte i vecchi campi di testo in righe Osborne
        const inputs = cardDiv.querySelectorAll("input[type='text']");
        inputs.forEach((input, inputIdx) => {
            const row = document.createElement("div");
            row.className = "fixed-input-row";
            row.innerHTML = `
                <span class="fixed-input-label">Accounting Ledger Value Entry #${inputIdx + 1}:</span>
                <div style="display:flex; align-items:center;">
                    <input type="text" class="fixed-input-field" id="user_ans_${validIndex}_${inputIdx}" placeholder="0.00">
                    <span class="feedback-marker" id="mark_${validIndex}_${inputIdx}"></span>
                </div>
            `;
            input.replaceWith(row);
        });

        validIndex++;
    });

    const totalQuestions = validIndex;
    // 3. Generazione e iniezione della barra inferiore Osborne e della calcolatrice fluttuante ciano
    const footerGrid = document.createElement("div");
    footerGrid.className = "osborne-footer-grid";
    footerGrid.innerHTML = `
        <button id="osb-verify" class="osborne-btn btn-verify">Am I right?</button>
        <button id="osb-solution" class="osborne-btn btn-solution">Show Solution</button>
        <button id="osb-reset" class="osborne-btn">Reset</button>
        <button id="osb-prev" class="osborne-btn">&larr;&larr;&larr; previous question</button>
        <button id="osb-next" class="osborne-btn">next question &rarr;&rarr;&rarr;</button>
    `;
    document.body.appendChild(footerGrid);

    const calcWidget = document.createElement("div");
    calcWidget.id = "floatingCalcWidget";
    calcWidget.className = "calc-widget-floating";
    calcWidget.innerHTML = `
        <div class="calc-widget-header" id="calc-header-trigger"><span>🧮 AAT Exam Calculator</span><span id="calcToggleArrow">▲</span></div>
        <div id="calcWidgetBody" class="calc-widget-body">
            <input type="text" id="calcDisplayScreen" class="calc-display" readonly value="0">
            <div class="calc-btn-grid" id="calc-buttons-root"></div>
        </div>
    `;
    document.body.appendChild(calcWidget);

    const btnRoot = document.getElementById("calc-buttons-root");
    const layout = [
        ['√','sqrt'],['x²','pow'],['%','percent'],['C','clear'],
        ['7','7'],['8','8'],['9','9'],['/','/'],
        ['4','4'],['5','5'],['6','6'],['*','*'],
        ['1','1'],['2','2'],['3','3'],['-','-'],
        ['0','0'],['.','.'],['=','equal'],['+','+']
    ];
    layout.forEach(b => {
        let cls = "calc-btn";
        if(['√','x²','%','C'].includes(b)) cls += " btn-sci";
        if(['/','*','-','+'].includes(b)) cls += " btn-op";
        if(b==='=') cls += " btn-equals";
        btnRoot.innerHTML += `<button class="${cls}" data-action="${b}">${b}</button>`;
    });

    let currentActiveIndex = 0;
    document.getElementById("osb-next").onclick = () => changeQuestion(1);
    document.getElementById("osb-prev").onclick = () => changeQuestion(-1);
    document.getElementById("osb-reset").onclick = () => resetCurrentForm();
    document.getElementById("osb-solution").onclick = () => showCurrentSolution();
    document.getElementById("osb-verify").onclick = () => verifyCurrentInline();

    function changeQuestion(step) {
        const target = currentActiveIndex + step;
        if (target >= 0 && target < totalQuestions) {
            document.getElementById("card_task_" + currentActiveIndex).classList.remove("active");
            currentActiveIndex = target;
            document.getElementById("card_task_" + currentActiveIndex).classList.add("active");
        }
    }

    // Soluzioni fisse
    function showCurrentSolution() {
        const sol = fixedSolutions.find(s => s.q === (currentActiveIndex + 1));
        if (!sol) return;
        sol.fields.forEach((f, idx) => {
            const field = document.getElementById(`user_ans_${currentActiveIndex}_${idx}`);
            if (field) { field.value = f.ans; field.style.backgroundColor = "#DCFCE7"; field.style.borderColor = "#10B981"; }
        });
    }

    function verifyCurrentInline() {
        const sol = fixedSolutions.find(s => s.q === (currentActiveIndex + 1));
        if (!sol) return;
        sol.fields.forEach((f, idx) => {
            const field = document.getElementById(`user_ans_${currentActiveIndex}_${idx}`);
            const marker = document.getElementById(`mark_${currentActiveIndex}_${idx}`);
            if (field && marker) {
                marker.style.display = "inline-block";
                const isCorrect = (parseFloat(field.value) || 0) === parseFloat(f.ans);
                marker.innerHTML = isCorrect ? '<span class="feedback-correct">✔️</span>' : '<span class="feedback-wrong">❌</span>';
            }
        });
    }

    function resetCurrentForm() {
        const card = document.getElementById(`card_task_${currentActiveIndex}`);
        card.querySelectorAll(".fixed-input-field").forEach(f => { f.value = ""; f.style.backgroundColor = ""; f.style.borderColor = ""; });
        card.querySelectorAll(".feedback-marker").forEach(m => m.style.display = "none");
    }

    let isCalcExpanded = false;
    let calcStr = "";
    document.getElementById("calc-header-trigger").onclick = () => {
        isCalcExpanded = !isCalcExpanded;
        document.getElementById("calcWidgetBody").style.display = isCalcExpanded ? "block" : "none";
        document.getElementById("calcToggleArrow").textContent = isCalcExpanded ? "▼" : "▲";
    };

    btnRoot.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
            const act = btn.getAttribute("data-action");
            const scr = document.getElementById("calcDisplayScreen");
            if(!isNaN(act) || act==='.') {
                if(scr.value==="0" && act!=='.') calcStr = act; else calcStr += act;
                scr.value = calcStr;
            } else if(act==='clear') {
                calcStr = ""; scr.value = "0";
            } else if(act==='equal') {
                try { scr.value = Number(new Function('return (' + calcStr + ')')().toFixed(6)).toString(); } catch(e) { scr.value = "Error"; }
            } else {
                let v = parseFloat(scr.value) || 0;
                if(act==='sqrt') v = Math.sqrt(v);
                if(act==='pow') v = Math.pow(v, 2);
                if(act==='percent') v = v / 100;
                calcStr = Number(v.toFixed(6)).toString(); scr.value = calcStr;
            }
        };
    });
});
