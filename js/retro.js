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
    songName:"Tu Hai Wahi",
    filePath:"./Assets/songs/retro/0.mp3",
    coverPath:"./Assets/covers/retro/tu hai wahi.jpg",
    timeStamp:"06:26",
},

{
    songName:"Likhe Jo Khat Tujhe",
    filePath:"./Assets/songs/retro/1.mp3",
    coverPath:"./Assets/covers/retro/likhe jo khat.jpg",
    timeStamp:"04:48",
},

{
    songName:"O Mere Dil Ke Chain",
    filePath:"./Assets/songs/retro/2.mp3",
    coverPath:"./Assets/covers/retro/o mere.jpg",
    timeStamp:"04:29",
},


{
    songName:"Gulaabi Aankhein",
    filePath:"./Assets/songs/retro/3.mp3",
    coverPath:"./Assets/covers/retro/gulaabi aankhein.jpg",
    timeStamp:"03:17",
},


{
    songName:"Badan Pe Sitaare",
    filePath:"./Assets/songs/retro/4.mp3",
    coverPath:"./Assets/covers/retro/badan pe sitaare.jpg",
    timeStamp:"05:15",
},

{  
    songName:"Shaam Mastani",
    filePath:"./Assets/songs/retro/5.mp3",
    coverPath:"./Assets/covers/retro/sham mastani.jpg",
    timeStamp:"04:04",
},

{
    songName:"Mere Sapno Ki Rani",
    filePath:"./Assets/songs/retro/6.mp3",
    coverPath:"./Assets/covers/retro/mere sapno ki rani.jpg",
    timeStamp:"04:17",
},

{
    songName:"Mai Hoon Don",
    filePath:"./Assets/songs/retro/7.mp3",
    coverPath:"./Assets/covers/retro/Mai hoon don.jpg",
    timeStamp:"03:20",
},

{
    songName:"Awara Hoon",
    filePath:"./Assets/songs/retro/8.mp3",
    coverPath:"./Assets/covers/retro/awara hu.jpg",
    timeStamp:"03:06",
},

{
    songName:"Neele Neele Ambar",
    filePath:"./Assets/songs/retro/9.mp3",
    coverPath:"./Assets/covers/retro/neele neele ambar.jpg",
    timeStamp:"03:54",
},

{
    songName:"Tere Dar Par Sanam",
    filePath:"./Assets/songs/retro/10.mp3",
    coverPath:"./Assets/covers/retro/tere dar par sanam.jpg",
    timeStamp:"05:05",
},

{
    songName:"Zara Tasveer Se Tu",
    filePath:"./Assets/songs/retro/11.mp3",
    coverPath:"./Assets/covers/retro/zara tasveer se tu.jpg",
    timeStamp:"05:39",
},

{
    songName:"Jadoo Teri Nazar",
    filePath:"./Assets/songs/retro/12",
    coverPath:"./Assets/covers/retro/jaadu teri nazar.jpg",
    timeStamp:"02:37",
},

{
    songName:"Dil Se",
    filePath:"./Assets/songs/retro/13",
    coverPath:"./Assets/covers/retro/dil se.jpg",
    timeStamp:"05:03",
},

{
    songName:"Kya Hua Tera Waada",
    filePath:"./Assets/songs/retro/14",
    coverPath:"./Assets/covers/retro/kya hua tera wada.jpg",
    timeStamp:"05:04",
},

{
    songName:"Kisi Ki Muskuraton Pe",
    filePath:"./Assets/songs/retro/15",
    coverPath:"./Assets/covers/retro/kisi ki muskurahaton.jpg",
    timeStamp:"04:08",
},

{
    songName:"Chal Chhaiya chhaiya",
    filePath:"./Assets/songs/retro/16",
    coverPath:"./Assets/covers/retro/chal chhaiya.jpg",
    timeStamp:"07:11",
},

{
    songName:"Khoya Khoya Chand",
    filePath:"./Assets/songs/retro/17",
    coverPath:"./Assets/covers/retro/khoya khoya chand.jpg",
    timeStamp:"04:43",
},

{
    songName:"Khwab Ho Tum Ya",
    filePath:"./Assets/songs/retro/18",
    coverPath:"./Assets/covers/retro/khwab ho tum ya.jpg",
    timeStamp:"06:08",
},

{
    songName:"Chura Liya Hai",
    filePath:"./Assets/songs/retro/19",
    coverPath:"./Assets/covers/retro/chura liya hai.jpg",
    timeStamp:"05:30",
},

{
    songName:"Roop Tera Mastana",
    filePath:"./Assets/songs/retro/20",
    coverPath:"./Assets/covers/retro/roop tera.jpg",
    timeStamp:"03:45",
},

{
    songName:"Om Shanti Om",
    filePath:"./Assets/songs/retro/21",
    coverPath:"./Assets/covers/retro/om shanti om.jpg",
    timeStamp:"0:18",
},

{
    songName:"O Haseena",
    filePath:"./Assets/songs/retro/22",
    coverPath:"./Assets/covers/retro/o haseena.jpg",
    timeStamp:"06:57",
},

{
    songName:"Bol Tujhko Kya Chahie",
    filePath:"./Assets/songs/retro/23",
    coverPath:"./Assets/covers/retro/bol tujhko kya chahie.jpg",
    timeStamp:"06:56",
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

let audioElement = new Audio('./Assets/songs/retro/0.mp3')
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
            audioElement.src = `./Assets/songs/retro/${songIndex}.mp3`
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

    audioElement.src = `./Assets/songs/retro/${songIndex}.mp3`
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

    audioElement.src = `./Assets/songs/retro/${songIndex}.mp3`
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

    audioElement.src = `./Assets/songs/retro/${songIndex}.mp3`
    audioElement.play()
    mname.innerHTML = array[songIndex].songName
    gif.classList.remove('hidden')
    mname.classList.remove('hidden')
    mplay.classList.add('hidden')
    mpause.classList.remove('hidden')
})






