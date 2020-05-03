const foods = document.querySelectorAll('.food');

for (let i = 0; i < foods.length; i++) {
    foods[i].addEventListener('click', function(){
        window.location.href = `/recipe/${i}`;
    });
}

