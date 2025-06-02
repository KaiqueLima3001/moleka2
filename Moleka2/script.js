const accordions = document.querySelectorAll('.acordeon');

accordions.forEach(acordeon =>{
    acordeon.addEventListener('click', () =>{
        const body = acordeon.querySelector('.acordeon-body')
        body.classList.toggle('active');
    })
})

const pedidos = {};

document.querySelectorAll('.botao-eu-quero button').forEach(button => {
    button.addEventListener('click', function () {
        const container = this.parentElement;
        if (container.querySelector('.quantidade-container')) return;

        this.remove();

        const wrapper = document.createElement('div');
        wrapper.className = 'quantidade-wrapper';

        const qtyContainer = document.createElement('div');
        qtyContainer.className = 'quantidade-container';

        const minusBtn = document.createElement('button');
        minusBtn.textContent = '−';
        minusBtn.className = 'qty-btn';

        const qtyDisplay = document.createElement('span');
        qtyDisplay.textContent = '1';
        qtyDisplay.className = 'qty-number';

        const plusBtn = document.createElement('button');
        plusBtn.textContent = '+';
        plusBtn.className = 'qty-btn';

        plusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyDisplay.textContent);
            qtyDisplay.textContent = qty + 1;

            const nome = getNomeProduto(container);
            pedidos[nome] = qty + 1;
        });

        minusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyDisplay.textContent);
            if (qty > 1) {
                qtyDisplay.textContent = qty - 1;

                const nome = getNomeProduto(container);
                pedidos[nome] = qty - 1;
            }
        });

        // Salva o primeiro valor no objeto
        const nomeProduto = getNomeProduto(container);
        pedidos[nomeProduto] = 1;

        qtyContainer.appendChild(minusBtn);
        qtyContainer.appendChild(qtyDisplay);
        qtyContainer.appendChild(plusBtn);

        wrapper.appendChild(qtyContainer);
        container.appendChild(wrapper);
    });
});

function getNomeProduto(container) {
    const produtoEl = container.closest('.txt-resposta').querySelector('h2');
    return produtoEl ? produtoEl.textContent.trim() : 'Produto desconhecido';
}

// Evento do botão FINALIZAR PEDIDO
document.getElementById('finalizar-pedido').addEventListener('click', () => {
    if (Object.keys(pedidos).length === 0) {
        alert("Você ainda não selecionou nenhum produto.");
        return;
    }

    let mensagem = 'Olá! Gostaria de solicitar os seguintes produtos:\n\n';
    for (const [produto, quantidade] of Object.entries(pedidos)) {
        mensagem += `• ${quantidade}x ${produto}\n`;
    }

    const numeroWhatsApp = '5521972205183'; // Substituir pelo número que vai usar pra o teste no dia.
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
});