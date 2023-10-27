const toggle = document.querySelector('.toggle');
const navItems = document.querySelector('.nav-items');
console.log(toggle);
toggle.addEventListener('click' , ()=>{
    if(navItems.classList=="nav-items"){
        navItems.classList.add("active");
        
        toggle.innerHTML = `<i class="fa fa-close"></i>`;
    }else{
        navItems.classList.remove("active");
        toggle.innerHTML = `<i class='fa fa-bars'></i>`;
    }
});
