let bar = document.querySelector("#bar")
let x = document.querySelector("#x")
let sidebar = document.querySelector("#sidebar")
let searchbar = document.querySelector("#searchbar")
let search = document.querySelectorAll(".search")
let searcher = document.querySelector("#searcher")
let searcherimg = document.querySelector("#searcherimg")

//navbar

bar.addEventListener('click', function(e){
    sidebar.classList.remove("hidden")
    bar.classList.add("hidden")
    x.classList.remove("hidden")
    gsap.to("#sidebar",{
        x:"0",
        opacity:1,
        ease:Power3
    })
})

x.addEventListener('click', function(e){
    bar.classList.remove("hidden")
    x.classList.add("hidden")
    gsap.to("#sidebar",{
        x:"100%",
        opacity:0,
        ease:Power4
    })
    setTimeout(() => {
        sidebar.classList.add("hidden")
    }, 300);
})

// search bar

search.forEach(function(e){
    e.addEventListener("click", function(){
        searchbar.classList.toggle("hidden")
    })
})

searcher.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault()
        searcherimg.click()
    }
})

document.querySelector("#sideSearch").addEventListener("click", function(){
    document.querySelector("#logo h1").classList.toggle("hidden")
})