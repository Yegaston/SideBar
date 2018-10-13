const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', () => {
    var sideBar = document.getElementById('sidebar');
    sideBar.classList.toggle('active');
})