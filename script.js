const hamBtn=document.getElementById("hamBtn")
const mobileNav=document.querySelector(".mobileNav")

// open navbar
hamBtn.addEventListener('click',( )=>{
    mobileNav.classList.toggle("open")
})

// close nav on clicking link 
const links=document.querySelectorAll(".mobileNav li")
links.forEach((link,index)=>{
    link.addEventListener('click',( )=>{
        mobileNav.classList.remove("open")
    })
})
