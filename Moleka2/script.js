const accordions = document.querySelectorAll('.acordeon');

accordions.forEach(acordeon =>{
    acordeon.addEventListener('click', () =>{
        const body = acordeon.querySelector('.acordeon-body')
        body.classList.toggle('active');
    })
})

document.querySelectorAll('.botao-eu-quero button').forEach(button => {
    button.addEventListener('click', function () {
        const container = this.parentElement;

        // Impede múltiplas substituições
        if (container.querySelector('.quantidade-container')) return;

        this.remove(); // Remove o botão "EU QUERO"

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

        const finalizarBtn = document.createElement('button');
        finalizarBtn.textContent = 'FINALIZAR';
        finalizarBtn.className = 'finalizar-btn';

        plusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyDisplay.textContent);
            qtyDisplay.textContent = qty + 1;
        });

        minusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyDisplay.textContent);
            if (qty > 1) qtyDisplay.textContent = qty - 1;
        });

        finalizarBtn.addEventListener('click', () => {
            alert(`Pedido finalizado com ${qtyDisplay.textContent} unidade(s)!`);
        });

        qtyContainer.appendChild(minusBtn);
        qtyContainer.appendChild(qtyDisplay);
        qtyContainer.appendChild(plusBtn);

        wrapper.appendChild(qtyContainer);
        wrapper.appendChild(finalizarBtn);
        container.appendChild(wrapper);
    });
});