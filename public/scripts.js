const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modalContent = document.querySelector('.modal-content')

for (let card of cards) {
    card.addEventListener("click", function(){

        var nomeReceita = card.getElementsByClassName('name_product')[0].textContent
        var nomeAutor = card.getElementsByClassName('by')[0].textContent
        modalOverlay.classList.add('active')
        const imagesId = card.getAttribute("id")
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `images/${imagesId}.png`

        document.getElementById('name_product').innerHTML = nomeReceita
        document.getElementById('by').innerHTML = nomeAutor
    })
}

const closeModal = document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})
