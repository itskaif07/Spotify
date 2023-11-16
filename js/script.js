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
    songName:"Starboy",
    filePath:"./Assets/songs/home/0.mp3",
    coverPath:"./Assets/covers/home/starboy.jpg",
    timeStamp:"04:33",
},

{
    songName:"Often",
    filePath:"./Assets/songs/home/1.mp3",
    coverPath:"./Assets/covers/home/often.jpg",
    timeStamp:"04:09",
},

{
    songName:"Attention",
    filePath:"./Assets/songs/home/2.mp3",
    coverPath:"./Assets/covers/home/attention.jpg",
    timeStamp:"03:51",
},


{
    songName:"Sunflower",
    filePath:"./Assets/songs/home/3.mp3",
    coverPath:"./Assets/covers/home/sunflower.jpg",
    timeStamp:"02:41",
},


{
    songName:"Zara sa",
    filePath:"./Assets/songs/home/4.mp3",
    coverPath:"./Assets/covers/home/zara sa.jpg",
    timeStamp:"03:43",
},

{  
    songName:"Ajab Si",
    filePath:"./Assets/songs/home/5.mp3",
    coverPath:"./Assets/covers/home/ajabsi.jpg",
    timeStamp:"04:20",
},

{
    songName:"Dil Ibaadat",
    filePath:"./Assets/songs/home/6.mp3",
    coverPath:"./Assets/covers/home/dil ibaadat.jpg",
    timeStamp:"05:29",
},

{
    songName:"Mat Aazma Re",
    filePath:"./Assets/songs/home/7.mp3",
    coverPath:"./Assets/covers/home/mat aazma re.jpg",
    timeStamp:"04:11",
},

{
    songName:"Mere Bina",
    filePath:"./Assets/songs/home/8.mp3",
    coverPath:"./Assets/covers/home/mere bina.jpg",
    timeStamp:"04:50",
},

{
    songName:"Hale Dil",
    filePath:"./Assets/songs/home/9.mp3",
    coverPath:"./Assets/covers/home/haledil.jpg",
    timeStamp:"06:03",
},

{
    songName:"Kya Mujhe Pyar Hai",
    filePath:"./Assets/songs/home/10.mp3",
    coverPath:"./Assets/covers/home/kyamujhe.jpg",
    timeStamp:"04:23",
},

{
    songName:"Tu Hi Meri Shab Hai",
    filePath:"./Assets/songs/home/11.mp3",
    coverPath:"./Assets/covers/home/tuhimeri.jpg",
    timeStamp:"06:42",
},

{
    songName:"Under The Influence",
    filePath:"./Assets/songs/home/12",
    coverPath:"./Assets/covers/home/underTheInfluence.jpg",
    timeStamp:"02:56",
},

{
    songName:"Pasoori",
    filePath:"./Assets/songs/home/13",
    coverPath:"./Assets/covers/home/pasoori.jpg",
    timeStamp:"02:56",
},

{
    songName:"Galliyan",
    filePath:"./Assets/songs/home/14",
    coverPath:"./Assets/covers/home/galliyan.jpg",
    timeStamp:"05:09",
},

{
    songName:"Jab Tak",
    filePath:"./Assets/songs/home/15",
    coverPath:"./Assets/covers/home/jabTak.jpg",
    timeStamp:"03:30",
},

{
    songName:"People",
    filePath:"./Assets/songs/home/16",
    coverPath:"./Assets/covers/home/people.jpg",
    timeStamp:"03:17",
},

{
    songName:"Nadaan Parinde",
    filePath:"./Assets/songs/home/17",
    coverPath:"./Assets/covers/home/nadanParinde.jpg",
    timeStamp:"05:00",
},

{
    songName:"Cheques",
    filePath:"./Assets/songs/home/18",
    coverPath:"./Assets/covers/home/cheques.jpg",
    timeStamp:"05:08",
},

{
    songName:"Until I Found You",
    filePath:"./Assets/songs/home/19",
    coverPath:"./Assets/covers/home/untilIFoundHer.jpg",
    timeStamp:"02:56",
},

{
    songName:"Tu Har Lamha",
    filePath:"./Assets/songs/home/20",
    coverPath:"./Assets/covers/home/tuHarLamha.jpg",
    timeStamp:"04:21",
},

{
    songName:"Kun Faya Kun",
    filePath:"./Assets/songs/home/21",
    coverPath:"./Assets/covers/home/kunfayakun.jpg",
    timeStamp:"06:20",
},

{
    songName:"Jannatein Kahan",
    filePath:"./Assets/songs/home/22",
    coverPath:"./Assets/covers/home/jannateinkahan.jpg",
    timeStamp:"03:58",
},

{
    songName:"Mi Amor",
    filePath:"./Assets/songs/home/23",
    coverPath:"./Assets/covers/home/miAmor.jpg",
    timeStamp:"03:23",
},

{
    songName:"Chaleya",
    filePath:"./Assets/songs/home/24",
    coverPath:"./Assets/covers/home/chaleya.jpg",
    timeStamp:"03:08",
},

{
    songName:"Bulleya",
    filePath:"./Assets/songs/home/25",
    coverPath:"./Assets/covers/home/bulleya.jpg",
    timeStamp:"04:33",
},

{
    songName:"Special Z",
    filePath:"./Assets/songs/home/24",
    coverPath:"./Assets/covers/home/jjk.jpg",
    timeStamp:"03:59",
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

let audioElement = new Audio('./Assets/songs/home/0.mp3')
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
            audioElement.src = `./Assets/songs/home/${songIndex}.mp3`
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

    audioElement.src = `./Assets/songs/home/${songIndex}.mp3`
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

    audioElement.src = `./Assets/songs/home/${songIndex}.mp3`
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

    audioElement.src = `./Assets/songs/home/${songIndex}.mp3`
    audioElement.play()
    mname.innerHTML = array[songIndex].songName
    gif.classList.remove('hidden')
    mname.classList.remove('hidden')
    mplay.classList.add('hidden')
    mpause.classList.remove('hidden')
})





