/*const accordion_item = document.querySelectorAll('.accordion_item');

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector('.accordion_header');

    accordion_header_item.addEventListener('click', () => {
        const accordion_content_item = item.querySelector('.accordion_content');

        const contentAtivo = document.querySelector('.ativo');

        verificarAtivo(item, accordion_content_item, contentAtivo)

        console.log(item)
    })
})

function verificarAtivo(item, content, contentAtivo) {
    const iconItem = item.querySelector('.icon');
    
    const icons = document.querySelectorAll('.icon');

    icons.forEach((item) => (item.innerHTML = '+'));

    if(contentAtivo) {
        contentAtivo.style.height = 0
        contentAtivo.classList.remove('ativo');
    }

    if(content !== contentAtivo) {
        iconItem.innerHTML = '-'
        content.classList.add('ativo');
        content.style.height = content.scrollHeight + 10 + 'px';
    }
}*/

const accordionItem = document.querySelectorAll('.accordion_item');

accordionItem.forEach((item) => {
    const accordion_header_item = item.querySelector('.accordion_header');

    accordion_header_item.addEventListener('click', () => {
        const accordion_content_item = item.querySelector('.accordion_content');

        const active = document.querySelector('.ativo');

        verificarAtivo(item, accordion_content_item, active)
    })
})

function verificarAtivo(item, content, active) {
    const icon_item = item.querySelector('.icon');

    const icons = document.querySelectorAll('.icon');

    icons.forEach((item) => (item.innerHTML = '+'));

    if(active) {
        active.style.height = 0
        active.classList.remove('ativo')
    }

    if (content !== active) {
        icon_item.innerHTML = '-'
        content.classList.add('ativo')
        content.style.height = content.scrollHeight + 10 + 'px';
    }
}