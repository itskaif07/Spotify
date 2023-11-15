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
    songName:"Havana",
    filePath:"../Assets/songs/english/0.mp3",
    coverPath:"../Assets/covers/english/havana.jpg",
    timeStamp:"03:38",
},

{
    songName:"Circles",
    filePath:"../Assets/songs/english/1.mp3",
    coverPath:"../Assets/covers/english/circles.jpg",
    timeStamp:"04:09",
},

{
    songName:"As It Was",
    filePath:"../Assets/songs/english/2.mp3",
    coverPath:"../Assets/covers/english/as it was.jpg",
    timeStamp:"02:45",
},


{
    songName:"Dusk Till Dawn",
    filePath:"../Assets/songs/english/3.mp3",
    coverPath:"../Assets/covers/english/dusk till dawn.jpg",
    timeStamp:"05:37",
},

{
    songName:"Friends",
    filePath:"../Assets/songs/english/4.mp3",
    coverPath:"../Assets/covers/english/friends.jpg",
    timeStamp:"03:51",
},

{
    songName:"Blinding Lights",
    filePath:"../Assets/songs/english/5.mp3",
    coverPath:"../Assets/covers/english/blinding nights.jpg",
    timeStamp:"04:22",
},

{
    songName:"PillowTalk",
    filePath:"../Assets/songs/english/6.mp3",
    coverPath:"../Assets/covers/english/pillowtalk.jpg",
    timeStamp:"03:26",
},

{
    songName:"Shape Of You",
    filePath:"../Assets/songs/english/7.mp3",
    coverPath:"../Assets/covers/english/shape of you.jpg",
    timeStamp:"04:23",
},

{
    songName:"Faded",
    filePath:"../Assets/songs/english/8.mp3",
    coverPath:"../Assets/covers/english/faded.jpg",
    timeStamp:"03:32",
},

{
    songName:"Perfect",
    filePath:"../Assets/songs/english/9.mp3",
    coverPath:"../Assets/covers/english/perfect.jpg",
    timeStamp:"04:39",
},

{
    songName:"Playdate",
    filePath:"../Assets/songs/english/10.mp3",
    coverPath:"../Assets/covers/english/playdate.jpg",
    timeStamp:"03:02",
},

{
    songName:"Unstoppable",
    filePath:"../Assets/songs/english/11.mp3",
    coverPath:"../Assets/covers/english/unstoppable.jpg",
    timeStamp:"03:47",
},

{
    songName:"Dandelions",
    filePath:"../Assets/songs/english/12.mp3",
    coverPath:"../Assets/covers/english/dandelions.jpg",
    timeStamp:"03:48",
},

{
    songName:"Let Me Love You",
    filePath:"../Assets/songs/english/13.mp3",
    coverPath:"../Assets/covers/english/letmeloveyou.jpg",
    timeStamp:"03:25",
},

{
    songName:"Mood",
    filePath:"../Assets/songs/english/14.mp3",
    coverPath:"../Assets/covers/english/mood.jpg",
    timeStamp:"03:12",
},

{
    songName:"Bones",
    filePath:"../Assets/songs/english/15.mp3",
    coverPath:"../Assets/covers/english/bones.jpg",
    timeStamp:"02:45",
},

{
    songName:"2002",
    filePath:"../Assets/songs/english/16.mp3",
    coverPath:"../Assets/covers/english/2002.jpg",
    timeStamp:"03:14",
},

{
    songName:"Let Me Down Slowly",
    filePath:"../Assets/songs/english/17.mp3",
    coverPath:"../Assets/covers/english/letmedownslowly.jpg",
    timeStamp:"02:57",
},

{
    songName:"Closer",
    filePath:"../Assets/songs/english/18.mp3",
    coverPath:"../Assets/covers/english/closer.jpg",
    timeStamp:"02:57",
},

{
    songName:"Lovely",
    filePath:"../Assets/songs/english/19.mp3",
    coverPath:"../Assets/covers/english/lovely.jpg",
    timeStamp:"03:20",
},

{
    songName:"Animals",
    filePath:"../Assets/songs/english/20.mp3",
    coverPath:"../Assets/covers/english/animals.jpg",
    timeStamp:"04:40",
},

{
    songName:"All The Stars",
    filePath:"../Assets/songs/english/21.mp3",
    coverPath:"../Assets/covers/english/all the stars.jpg",
    timeStamp:"03:54",
},

{
    songName:"The Box",
    filePath:"../Assets/songs/english/22.mp3",
    coverPath:"../Assets/covers/english/the box.jpg",
    timeStamp:"03:32",
},

{
    songName:"Hope",
    filePath:"../Assets/songs/english/23.mp3",
    coverPath:"../Assets/covers/english/hope.jpg",
    timeStamp:"01:50",
},

{
    songName:"Starboy",
    filePath:"../Assets/songs/english/24.mp3",
    coverPath:"../Assets/covers/english/starboy.jpg",
    timeStamp:"04:33",
},

{
    songName:"Attention",
    filePath:"../Assets/songs/english/25.mp3",
    coverPath:"../Assets/covers/english/attention.jpg",
    timeStamp:"03:51",
},

{
    songName:"Sunflower",
    filePath:"../Assets/songs/english/26.mp3",
    coverPath:"../Assets/covers/english/sunflower.jpg",
    timeStamp:"02:41",
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

let audioElement = new Audio('../Assets/songs/english/0.mp3')
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
            audioElement.src = `../Assets/songs/english/${songIndex}.mp3`
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

    audioElement.src = `../Assets/songs/english/${songIndex}.mp3`
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

    audioElement.src = `../Assets/songs/english/${songIndex}.mp3`
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

    audioElement.src = `../Assets/songs/english/${songIndex}.mp3`
    audioElement.play()
    mname.innerHTML = array[songIndex].songName
    gif.classList.remove('hidden')
    mname.classList.remove('hidden')
    mplay.classList.add('hidden')
    mpause.classList.remove('hidden')
})






