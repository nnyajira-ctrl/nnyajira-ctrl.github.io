document.addEventListener('DOMContentLoaded', () => {
    // 1. カード切り替え処理
    const cards = document.querySelectorAll('.step-card');
    const counterBadge = document.getElementById('card-counter');
    let currentStep = 1;
    const totalSteps = cards.length;

    function updateCards() {
        cards.forEach((card, index) => {
            if (index + 1 === currentStep) {
                card.classList.remove('d-none');
            } else {
                card.classList.add('d-none');
            }
        });
        
        if (counterBadge) {
            counterBadge.textContent = `カード ${currentStep} / ${totalSteps}`;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelectorAll('.btn-next').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateCards();
            }
        });
    });

    document.querySelectorAll('.btn-prev').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateCards();
            }
        });
    });

    updateCards();

    // 2. ソースコードへの自動コピーボタン付与機能
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((codeBlock) => {
        const pre = codeBlock.parentNode;
        const copyButton = document.createElement('button');
        copyButton.className = 'btn btn-sm btn-outline-light position-absolute top-0 end-0 m-2';
        copyButton.innerHTML = '<i class="bi bi-clipboard"></i> コピー';
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                copyButton.innerHTML = '<i class="bi bi-check"></i> コピー完了！';
                copyButton.classList.replace('btn-outline-light', 'btn-success');
                
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="bi bi-clipboard"></i> コピー';
                    copyButton.classList.replace('btn-success', 'btn-outline-light');
                }, 2000);
            });
        });
    });
});