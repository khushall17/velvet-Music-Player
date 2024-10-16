const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName: `Abaad Barbaad<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/1.jpeg"
    },
    {
        id: 2,
        songName: `Apna Bana Le <br>
        <div class = "subtitle">Arijit Singh, Sachin Jigar</div>`,
        poster: "img/2.jpeg",

    },
    {
        id: 3,
        songName: `Halka Halka Surur <br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster: "img/3.jpeg",
    },
    {
        id: 4,
        songName: `Ik vaari Aa <br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster: "img/4.jpeg",
    },
    {
        id: 5,
        songName: `Ilahi <br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster: "img/5.jpeg",
    },
    {
        id: 6,
        songName: `Khulke Jeene Ka <br>
        <div class = "subtitle">A.R.Rahman</div>`,
        poster: "img/6.jpeg",
    },
    {
        id: 7,
        songName: `Kuchh toh Bata Zindgi <br>
        <div class = "subtitle">Jubin Nautiyal, Neelesh Mishra</div>`,
        poster: "img/7.jpeg",
    },
    {
        id: 8,
        songName: `Kyon <br>
        <div class = "subtitle">Sunidhi Chauhan, Papon</div>`,
        poster: "img/8.jpeg"
    },
    {
        id: 9,
        songName: `Main Rang Sharbton ka <br>
        <div class = "subtitle">Pritam, Atif</div>`,
        poster: "img/9.jpeg",
    },
    {
        id: 10,
        songName: `Tu Chahiye <br>
        <div class = "subtitle">Pritam, Atif</div>`,
        poster: "img/10.jpeg",
    },
    {
        id: 11,
        songName: `Tu Hi Toh Hai<br>
        <div class = "subtitle">Benny Dayal</div>`,
        poster: "img/11.jpeg",
    },
    {
        id: 12,
        songName: `Akhiyaan Gulaabi<br>
        <div class = "subtitle">Mitraz</div>`,
        poster: "img/12.jpeg",
    },
    {
        id: 13,
        songName: `Chaleya<br>
        <div class = "subtitle">Arijit Singh, Shilpa Rao</div>`,
        poster: "img/13.jpeg",
    },
    {
        id: 14,
        songName: `Husn<br>
        <div class = "subtitle">Anuv Jain</div>`,
        poster: "img/14.jpeg",
    },
    {
        id: 15,
        songName: `Pehle Bhi Main<br>
        <div class = "subtitle">Vishal Mishra, Raj Shekhar</div>`,
        poster: "img/15.jpeg",
    },
    {
        id: 16,
        songName: `O Mahii<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster: "img/16.jpeg",
    },
     {
         id: 17,
         songName: `Pehle Bhi Main <br>
         <div class = "subtitle">Vishal Mishra, Raj Shekhar</div>`,
         poster: "img/17.jpeg",
     },
     {
         id: 18,
         songName: `Haniya Ve <br>
         <div class = "subtitle">Jubin Nautiyal, Tanishk Bagchi</div>`,
         poster: "img/18.jpeg",
     },
     {
        id: 19,
        songName: `chandra <br>
        <div class = "subtitle">Ajay-Atul, Shreya</div>`,
        poster: "img/19.jpeg",
    },
    {
        id: 20,
        songName: `Check It Out <br>
        <div class = "subtitle">Parmish Varma, Paradox </div>`,
        poster: "img/20.jpeg",
    },
    {
        id: 21,
        songName: `Sooraj Dooba Hai <br>
        <div class = "subtitle">Arijit Singh, Amaal Malik</div>`,
        poster: "img/21.jpeg",
    },
    {
        id: 22,
        songName: `Yaar Ni Mileya <br>
        <div class = "subtitle">Harrdy Sandhu</div>`,
        poster: "img/22.jpeg",
    },
    {
        id: 23,
        songName: `Mai Koii Aisa Geet Gaoon <br>
        <div class = "subtitle">Alka Yogini, Abhijeet Bhattacharya</div>`,
        poster: "img/23.jpeg",
    },
    {
        id: 24,
        songName: `Aasman Ko Chukar <br>
        <div class = "subtitle">Tapas Relia, Daler, Samantha</div>`,
        poster: "img/24.jpeg",
    },
    {
        id: 25,
        songName: `Ishare Tere <br>
        <div class = "subtitle">Guru Randhawa, Zahra Khan</div>`,
        poster: "img/25.jpeg",
    },
    {
        id: 26,
        songName: `Kaise Hua <br>
        <div class = "subtitle">Vishal Mishra</div>`,
        poster: "img/26.jpeg",
    },
    {
        id: 27,
        songName: `Malang Sajna <br>
        <div class = "subtitle">Sachet, Parampara </div>`,
        poster: "img/27.jpeg",
    },
    {
        id: 28,
        songName: `Ghagra <br>
        <div class = "subtitle">Vishal Dadlani, Rekha Bhardwaj</div>`,
        poster: "img/28.jpeg",
    },
    {
        id: 29,
        songName: `Keejo Kesri Ke Laal <br>
        <div class = "subtitle">Lakhbir Singh Lakha</div>`,
        poster: "img/29.jpeg",
    },
    {
        id: 30,
        songName: `Udhal Ho <br>
        <div class = "subtitle">Adarsh Shinde</div>`,
        poster: "img/30.jpeg",
    },
    {
        id: 31,
        songName: `Ishq Bulaava <br>
        <div class = "subtitle">Sanam Puri, Shipra Goyal</div>`,
        poster: "img/31.jpeg",
    },
    {
        id: 32,
        songName: `Tum Jo Aaye <br>
        <div class = "subtitle">Tulsi Kumar</div>`,
        poster: "img/32.jpeg",
    },
    {
        id: 33,
        songName: `Tu Mileya <br>
        <div class = "subtitle">Darshan Raval</div>`,
        poster: "img/33.jpeg",
    },
    {
        id: 34,
        songName: `Shikayat<br>
        <div class = "subtitle">AUR</div>`,
        poster: "img/34.jpeg",
    }


]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
   //console.log(songName)
   let card = document.createElement('a');
   card.classList.add('card');
    card.href = "#" + id;
   card.innerHTML = `
   <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
   `;
   search_results.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for(let index = 0; index < items.length; index++){
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[index].style.display = "flex";
        } else{
            items[index].style.display = "none";
        }

        if( input.value == 0){
            search_results.style.display = "none";
        }else{
            search_results.style.display = "";
        }

        if(input.value != text_value){
            items[index].style.innerHTML = "does not found"
        }
    }
})



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        //poster_master_play.src = `img/${index}jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach(elss => {
            let { songName, poster } = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download',songName);

        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    //console.log(music_curr);
    let music_dur = music.duration;
    //console.log(music_dur);

    let progress = (music_curr / music_dur)*100;
    //console.log(progress);

    let min1 = Math.floor(music_dur / 60);
    //console.log(min1);
    let sec1 = Math.floor(music_dur % 60);
    //console.log(sec1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
     currentStart.innerText = `${min2}:${sec2}`;
    // currentStart.gettextContent = `${min2}:${sec2}`;

    let progressBar = parseInt ((music_curr / music_dur)*100);
    seek.value = progressBar;
    //console.log(seek);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill')
    }

    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill')
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;

});

let back =document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{

    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    music.src = `audio/${index}.mp3`;
    //poster_master_play.src = `img/${index}jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

})

next.addEventListener('click',()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    //poster_master_play.src = `img/${index}jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

})



// Movement of scrollbar of songs
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

//Movement of scrollbar of artists album
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
})


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',() => {
    let a = shuffle.innerHTML;

    switch (a){
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat'
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random'
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_music =()=>{
    if(index == songs.length){
        index = 1
    }else{
        index++;
    }
    music.src = `audio/${index}.mp3`;
    //poster_master_play.src = `img/${index}jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    //poster_master_play.src = `img/${index}jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

const random_music = () => {
    if(index == songs.length){
        index=1
    }else{
        index = Math.floor((Math.random() * songs.length) + 1);
    }

    music.src = `audio/${index}.mp3`;
    //poster_master_play.src = `img/${index}jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;

    switch(b){
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;       
    }
 })

