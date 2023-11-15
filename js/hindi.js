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


let array = [

{
    songName:"Tum Hi Ho",
    filePath:"../Assets/songs/hindi/0.mp3",
    coverPath:"../Assets/covers/hindi/tum hi ho.jpg",
    timeStamp:"04:27",
},

{
    songName:"Banjaara",
    filePath:"../Assets/songs/hindi/1.mp3",
    coverPath:"../Assets/covers/hindi/banjaara.jpg",
    timeStamp:"04:27",
},

{
    songName:"Mann Mera",
    filePath:"../Assets/songs/2.mp3",
    coverPath:"../Assets/covers/hindi/mann mera.jpg",
    timeStamp:"03:09",
},


{
    songName:"Phir Mohabbat",
    filePath:"../Assets/songs/hindi/3.mp3",
    coverPath:"../Assets/covers/hindi/phr mohabbat.jpg",
    timeStamp:"05:48",
},


{
    songName:"Kaho Na Kaho",
    filePath:"../Assets/songs/hindi/4.mp3",
    coverPath:"../Assets/covers/hindi/kahonakaho.jpg",
    timeStamp:"04:26",
},

{  
    songName:"Baatein Ye Kabhi Na",
    filePath:"../Assets/songs/hindi/5.mp3",
    coverPath:"../Assets/covers/hindi/baateinye.jpg",
    timeStamp:"05:45",
},

{
    songName:"Kabhi Kabhi Aditi",
    filePath:"../Assets/songs/hindi/6.mp3",
    coverPath:"../Assets/covers/hindi/kabhikabhiaditi.jpg",
    timeStamp:"03:29",
},

{
    songName:"Tum Hi Ho Bandhu",
    filePath:"../Assets/songs/hindi/7.mp3",
    coverPath:"../Assets/covers/hindi/tumhihobandhu.jpg",
    timeStamp:"05:01",
},

{
    songName:"Dilbara",
    filePath:"../Assets/songs/hindi/8.mp3",
    coverPath:"../Assets/covers/hindi/dilbara.jpg",
    timeStamp:"04:35",
},

{
    songName:"Labon ko",
    filePath:"../Assets/songs/hindi/9.mp3",
    coverPath:"../Assets/covers/hindi/labon ko.jpg",
    timeStamp:"05:35",
},

{
    songName:"Janam Janam",
    filePath:"../Assets/songs/hindi/10.mp3",
    coverPath:"../Assets/covers/hindi/janam janam.jpg",
    timeStamp:"04:13",
},

{
    songName:"Tu Jo Mila",
    filePath:"../Assets/songs/hindi/11.mp3",
    coverPath:"../Assets/covers/hindi/tu jo mila.jpg",
    timeStamp:"04:17",
},

{
    songName:"Jeena Jeena",
    filePath:"../Assets/songs/hindi/12.mp3",
    coverPath:"../Assets/covers/hindi/jeena jeena.jpg",
    timeStamp:"03:55",
},

{
    songName:"Nashe Si Chadh Gyi",
    filePath:"../Assets/songs/hindi/13.mp3",
    coverPath:"../Assets/covers/hindi/nashe si.jpg",
    timeStamp:"03:47",
},

{
    songName:"Binte Dil",
    filePath:"../Assets/songs/hindi/14.mp3",
    coverPath:"../Assets/covers/hindi/binte dil.jpg",
    timeStamp:"02:46",
},

{
    songName:"Dil Ibaadat",
    filePath:"../Assets/songs/hindi/15.mp3",
    coverPath:"../Assets/covers/hindi/dil ibaadat.jpg",
    timeStamp:"03:52",
},

{
    songName:"Laapata",
    filePath:"../Assets/songs/hindi/16.mp3",
    coverPath:"../Assets/covers/hindi/laapata.jpg",
    timeStamp:"04:11",
},

{
    songName:"Khuda Jaane",
    filePath:"../Assets/songs/hindi/17.mp3",
    coverPath:"../Assets/covers/hindi/khuda jaane.jpg",
    timeStamp:"05:13",
},

{
    songName:"Tujhe Sochta hu",
    filePath:"../Assets/songs/hindi/18.mp3",
    coverPath:"../Assets/covers/hindi/tujhe sochta.jpg",
    timeStamp:"04:12",
},

{
    songName:"Tera Chehra",
    filePath:"../Assets/songs/hindi/19.mp3",
    coverPath:"../Assets/covers/hindi/tera chehra.jpg",
    timeStamp:"04:49",
},

{
    songName:"Shayad",
    filePath:"../Assets/songs/hindi/20.mp3",
    coverPath:"../Assets/covers/hindi/shayad.jpg",
    timeStamp:"03:10",
},

{
    songName:"Sau Tarah ke",
    filePath:"../Assets/songs/hindi/21.mp3",
    coverPath:"../Assets/covers/hindi/sau tarah k.jpg",
    timeStamp:"03:56",
},

{
    songName:"Mareez-e-Ishq",
    filePath:"../Assets/songs/hindi/22.mp3",
    coverPath:"../Assets/covers/hindi/mareeze ishq.jpg",
    timeStamp:"02:33",
},

{
    songName:"Mai Rahu Ya Na Rahu",
    filePath:"../Assets/songs/hindi/23.mp3",
    coverPath:"../Assets/covers/hindi/mai rahu ya na.jpg",
    timeStamp:"05:19",
},

{
    songName:"Hasi",
    filePath:"../Assets/songs/hindi/24.mp3",
    coverPath:"../Assets/covers/hindi/hasi.jpg",
    timeStamp:"04:32",
},

{
    songName:"Heeriye",
    filePath:"../Assets/songs/hindi/25.mp3",
    coverPath:"../Assets/covers/hindi/heeriye.jpg",
    timeStamp:"03:19",
},

{
    songName:"Kabhi Jo Badal Barse",
    filePath:"../Assets/songs/hindi/26.mp3",
    coverPath:"../Assets/covers/hindi/kabhi jo badal.jpg",
    timeStamp:"02:22",
},

]



// songs data

let song = Array.from(document.querySelectorAll('.song'))

song.forEach(function(e,i){
    e.querySelector('img').src = array[i].coverPath
    e.querySelector('h3').innerHTML = array[i].songName
    e.querySelector('h5').innerHTML = array[i].timeStamp
})


//Masterplay

let audioElement = new Audio('../Assets/songs/hindi/0.mp3')
let mplay = document.querySelector("#mplay")
let mpause = document.querySelector("#mpause")
let gif = document.querySelector("#gif")
let mname = document.querySelector("#mname")

let masterPlay = ()=>{
    

mplay.addEventListener("click", function(){
    audioElement.play()
    mplay.classList.add("hidden")
    mpause.classList.remove("hidden")
    gif.classList.remove("hidden")
    mname.classList.remove("hidden")
    mname.innerHTML = array[songIndex].songName
})

mpause.addEventListener("click", function(e){
    audioElement.pause()
    mplay.classList.remove("hidden")
    mpause.classList.add("hidden")
    gif.classList.add("hidden")
    mname.classList.add("hidden")
})

} 

masterPlay()



//seekbar

let range = document.querySelector("#range")

audioElement.addEventListener("timeupdate", function(){
    let progress = (audioElement.currentTime / audioElement.duration) * 100
    range.value = progress

    range.addEventListener('change', function(){
        audioElement.currentTime = (range.value * audioElement.duration) / 100
    })

    if(range.value == 100){
        gif.classList.add('hidden')
        mname.classList.add('hidden')
        mplay.classList.remove('hidden')
        mpause.classList.add('hidden')
        nextPlay()
    }
 })


//listed songs

let songIndex = 0

let playPause = ()=>{

    song.forEach(function(items, i){

        items.childNodes[5].childNodes[1].addEventListener("click", function(e){
            items.childNodes[5].childNodes[1].style.display = "none"
            items.childNodes[5].childNodes[3].style.display = "block"
            songIndex = parseInt(e.target.id)
            audioElement.src = `../Assets/songs/hindi/${songIndex}.mp3`
            mname.classList.remove('hidden')
            gif.classList.remove('hidden')
            mname.innerHTML = array[i].songName
            mplay.classList.add("hidden")
            mpause.classList.remove("hidden")
            audioElement.play()
        })
        
        items.childNodes[5].childNodes[3].addEventListener("click", function(){
            items.childNodes[5].childNodes[1].style.display = "block"
            items.childNodes[5].childNodes[3].style.display = "none"
            audioElement.pause()
            mname.classList.add("hidden")
            gif.classList.add("hidden")
            mplay.classList.remove("hidden")
            mpause.classList.add("hidden")

        })
    })

}

playPause()


//next track

let next = document.querySelector("#next")

next.addEventListener('click', function(){
    if(songIndex >= (array.length-1)){
        songIndex = 0
    }
    else{
        songIndex += 1

    }

    audioElement.src = `../Assets/songs/hindi/${songIndex}.mp3`
    audioElement.play()
    mname.innerHTML = array[songIndex].songName
    gif.classList.remove('hidden')
    mname.classList.remove('hidden')
    mplay.classList.add('hidden')
    mpause.classList.remove('hidden')

})

//autoplay

function nextPlay(){
    if(songIndex >= (array.length-1)){
        songIndex = 0
    }
    else{
        songIndex += 1

    }

    audioElement.src = `../Assets/songs/hindi/${songIndex}.mp3`
    audioElement.play()
    mname.innerHTML = array[songIndex].songName
    gif.classList.remove('hidden')
    mname.classList.remove('hidden')
    mplay.classList.add('hidden')
    mpause.classList.remove('hidden')


}


//prevoius track

let prev = document.querySelector("#prev")

prev.addEventListener("click", function(){
    if(songIndex <= 0){
        songIndex = 0
    }else{
        songIndex -= 1
    }

    audioElement.src = `../Assets/songs/hindi/${songIndex}.mp3`
    audioElement.play()
    mname.innerHTML = array[songIndex].songName
    gif.classList.remove('hidden')
    mname.classList.remove('hidden')
    mplay.classList.add('hidden')
    mpause.classList.remove('hidden')
})






