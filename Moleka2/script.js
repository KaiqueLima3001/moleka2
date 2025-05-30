const accordions = document.querySelectorAll('.acordeon');

accordions.forEach(acordeon =>{
    acordeon.addEventListener('click', () =>{
        const body = acordeon.querySelector('.acordeon-body')
        body.classList.toggle('active');
    })
})