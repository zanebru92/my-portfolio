let navBtn = document.getElementById('nav-btn');
let closeBtn = document.getElementById('close-btn');
let sideBar = document.getElementById('sidebar');

navBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('showSideBar')
})
closeBtn.addEventListener('click', ()=> {
    sideBar.classList.remove('showSideBar');
})