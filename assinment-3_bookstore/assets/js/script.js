const toggle = document.getElementById('toggle');
toggle.addEventListener('click',()=>{
    console.log("toggle")
    document.getElementById('aside').classList.toggle('active_aside');
    document.getElementById('main').classList.toggle('active_main');
})