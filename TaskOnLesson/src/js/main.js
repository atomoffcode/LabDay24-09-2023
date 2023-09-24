let search = document.getElementById('search')
let clse = document.getElementById('close')
let modal = document.getElementById('modal')


search.addEventListener('click', ()=>{
    modal.classList.add('show')
})

clse.addEventListener('click',()=>{
    modal.classList.remove('show');
})
