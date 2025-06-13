// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn');

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

// App State
let songs = [
    {
        id: 1,
        title: "Consume 💔",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "consume.mp3",
        videoBgSrc: "consume.mp4",
 
        lyrics: [
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Maze 💎",
        artist: "Juice WRLD",
        album: "Death Race For Love",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273af149eb4002f65f83afc63c4",
        audioSrc: "Juice_Wrld_-_Maze.mp3",
        videoBgSrc: "juice_world.mp4",
lyrics: [
    { time: 2.1, text: "Stuck in a maze" },
    { time: 5.1, text: "Oh, oh, oh, oh, oh, oh" },
    { time: 20.0, text: "Stuck in a maze, mmh" },
    { time: 23.0, text: "Stuck in a maze" },
    { time: 25.2, text: "Everything's okay but it's not really okay" },
    { time: 27.1, text: "My life's a death race" },
    { time: 28.9, text: "I'm numbing my pain with codeine rain" },
    { time: 32.0, text: "I'm going insane" },
    { time: 34.0, text: "Life's not the same" },
    { time: 35.0, text: "Stuck in a maze" },
    { time: 37.0, text: "I'm not going in" },
    { time: 38.0, text: "My brain is going everywhere" },
    { time: 40.0, text: "I'm tormented every day" },
    { time: 43.0, text: "Mama, I'm losing my mental" },
    { time: 45.0, text: "The sorrows I've been through" },
    { time: 46.0, text: "Story to be continued" },
    { time: 48.0, text: "I sip ill, pop pills, crack seals" },
    { time: 50.9, text: "Doing anything to numb the weight that I feel, yeah" },
    { time: 53.9, text: "I chase thrills, you still crashin' Hot Wheels" },
    { time: 56.7, text: "Ride a dirt bike down the ditch, see if I live" },
    { time: 60.0, text: "I'm not in my subconscious, I'm conscious" },
    { time: 62.9, text: "They tell me that they can help me, I got this" },
    { time: 65.9, text: "Watch this, I took my demons into the bank of life and I made the biggest deposit" },
    { time: 71.9, text: "Without drugs, I'm losing my logic" },
    { time: 73.9, text: "These pills and my Pro Tools still got logic" },
    { time: 77.9, text: "I run, I run, I run" },
    { time: 79.9, text: "I run, I run, I run" },
    { time: 82.9, text: "Stuck in a maze" },
    { time: 84.9, text: "Everything's okay but it's not really okay" },
    { time: 88.0, text: "My life's a death race" },
    { time: 89.9, text: "I'm numbing my pain with codeine rain" },
    { time: 91.9, text: "I'm going insane" },
    { time: 93.9, text: "Life's not the same" },
    { time: 94.9, text: "Stuck in a maze" },
    { time: 96.9, text: "I'm not going in" },
    { time: 98.9, text: "My brain is going everywhere" },
    { time: 100.0, text: "I'm tormented every day" },
    { time: 102.9, text: "Mama, I'm losing my mental" },
    { time: 104.9, text: "The sorrows that I've been through" },
    { time: 105.9, text: "Story to be continued" }
]
    },    
 {
        id: 3,
        title: "My Kind of Woman ❤ ",
        artist: "Mac DeMarco",
        album: "",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2739d377496c6bc8724b521222d",
        audioSrc: "My_Kind_of_Woman.mp3",
        videoBgSrc: "unconditionally_bg.mp4",
lyrics: [
    { time: 3.9, text: "Oh, baby" },
    { time: 8.9, text: "Oh, man" },
    { time: 14.8, text: "You're makin' me crazy" },
    { time: 19.2, text: "Really drivin' me mad" },
    { time: 24.9, text: "That's alright with me" },
    { time: 29.9, text: "It's really no fuss" },
    { time: 34.9, text: "As long as you're next to me" },
    { time: 40.0, text: "Just the two of us" },
    { time: 46.9, text: "You're my, my, my, my kind of woman" },
    { time: 58.0, text: "My, oh my, what a girl" },
    { time: 67.8, text: "You're my, my, my, my kind of woman" },
    { time: 77.8, text: "And I'm down on my hands and knees" },
    { time: 81.8, text: "Beggin' you please, baby" },
    { time: 83.8, text: "Show me your world" },
    { time: 92.8, text: "Oh, brother" },
    { time: 97.9, text: "Sweetheart" },
    { time: 102.8, text: "I'm feelin' so tired" },
    { time: 108.8, text: "Really fallin' apart" },
    { time: 113.8, text: "And it just don't make sense to me" },
    { time: 119.8, text: "I really don't know" },
    { time: 122.8, text: "Why you stick right next to me" },
    { time: 128.9, text: "Wherever I go" },
    { time: 136.8, text: "You're my, my, my, my kind of woman" },
    { time: 146.9, text: "My, oh my, what a girl" },
    { time: 156.8, text: "You're my, my, my, my kind of woman" },
    { time: 166.9, text: "And I'm down on my hands and knees" },
    { time: 169.9, text: "Beggin' you please, baby" },
    { time: 172.9, text: "Show me your world" },
]

    },
    {
        id: 4,
        title: "Out of My Mind 👑",
        artist: "Gentrammel",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02f72647c3a8ba3b14b52278bf",
        audioSrc: "OutMind.mp3",
        videoBgSrc: "Mind.mp4",
lyrics: [
    { time: 7.0, text: "Yeah, ay, yeah" },
    { time: 9.9, text: "Oh-ay, ay-ay" },
    { time: 12.0, text: "Remember the night that we met?" },
    { time: 13.0, text: "Back at the party, you sat on the bed" },
    { time: 14.8, text: "You said I'm talented, you said I'm next" },
    { time: 15.9, text: "My only talent is making you stressed" },
    { time: 17.9, text: "I know that I'm not in my best, lately, I'm feeling like less" },
    { time: 20.9, text: "I hope that I'll see you again, if I don't, then I'll lay at the rest" },
    { time: 23.9, text: "It's crazy how it goes, left me all alone" },
    { time: 27.9, text: "I've been trying to move on, all I find are hoes" },
    { time: 29.9, text: "Searching for a pot of gold, don't know if I'll ever know" },
    { time: 33.0, text: "How she left me with no damn place to go" },
    { time: 37.0, text: "I'm okay, I'll be fine, I'm just out of my mind" },
    { time: 42.9, text: "Long nights, with no sleep, thinking 'bout you and me" },
    { time: 49.1, text: "I'm okay, I'll be fine, I'm just out of my mind" },
    { time: 51.0, text: "Long nights, with no sleep, thinking 'bout you and me" },
    { time: 60.1, text: "Spent five months at your crib, and I ain't pay no rent" },
    { time: 64.8, text: "We should've just been friends" },
    { time: 66.9, text: "Cause I know that you never meant all the things that you said to me" },
    { time: 69.9, text: "Froze my heart in uncertainty, yeah" },
    { time: 73.0, text: "Go and hit the club in some', make sure that you drunk as fuck" },
    { time: 76.0, text: "Find another man you love, I'ma show you what you lost" },
    { time: 79.9, text: "I'ma show you how it feels to realize everything you ever knew" },
    { time: 82.9, text: "And everything you ever had in love is gone" },
    { time: 86.0, text: "I'm okay, I'll be fine, I'm just out of my mind" },
    { time: 92.9, text: "Long nights, with no sleep, thinking 'bout you and me" },
    { time: 98.2, text: "I'm okay, I'll be fine, I'm just out of my mind" },
    { time: 105.0, text: "Long nights, with no sleep, thinking 'bout you and me" },
    { time: 110.9, text: "I guess it's here for real, and if I had another chance" },
    { time: 113.7, text: "I don't know if I'd take that bet against you with another man" },
    { time: 116.0, text: "And if I ever saw your face, then I would probably take a glance" },
    { time: 119.8, text: "But I would never bat an eye, because you hate me, that's a fact" },
    { time: 123.0, text: "Yuh, I think that this is an epiphany" },
    { time: 124.0, text: "I don't think that you really listening" },
    { time: 125.9, text: "One day you gonna be missing me" },
    { time: 126.9, text: "I swear to God that we'll never be frenemies" },
    { time: 129.1, text: "Bitches be tryin' to be friends with me" },
    { time: 131.0, text: "I think they stealing my energy, in my DMs and they tempting me" },
    { time: 135.0, text: "I know that you really resenting me now" },
    { time: 137.8, text: "I'm okay, I'll be fine, I'm just out of my mind" },
    { time: 142.0, text: "Long nights, with no sleep, thinking 'bout you and me" },
    { time: 147.8, text: "I'm okay, I'll be fine, I'm just out of my mind" },
    { time: 152.0, text: "Long nights, with no sleep, thinking 'bout you and me" }
]
    },
    {
        id: 5,
        title: "Mbappe 🏆",
        artist: "Eladio Carrion", 
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273dce7a3fb14f5e841c0befbbf", 
        audioSrc: "mbappe.mp3",
        videoBgSrc: "eladocarrion.mp4",
lyrics: [
    { time: 14.2, text: "Yo 'toy frío, Enero en New York" },
    { time: 16.0, text: "Los domi me quieren como al Mayor" },
    { time: 17.0, text: "Antes me tiraban fango" },
    { time: 19.0, text: "Ahora pa' los show" },
    { time: 19.9, text: "Me tiran con ropa interior" },
    { time: 20.9, text: "Cada vez que tiro un disco" },
    { time: 22.9, text: "Tú sabe' que siempre" },
    { time: 23.9, text: "Va a ser mejor que el anterior" },
    { time: 24.9, text: "Cincuenta mil en Bottega Veneta" },
    { time: 26.9, text: "Chanel, Louboutin, Balenciaga, Dior" },
    { time: 28.9, text: "Yeah, yeah (hey!)" },
    { time: 29.9, text: "Cuatro Rollie, dos AP" },
    { time: 30.9, text: "Young rich nigga como Mbappé" },
    { time: 33.0, text: "Young rich nigga, mírame el Patek (wuh)" },
    { time: 35.0, text: "Young rich nigga buscándome un check" },
    { time: 36.9, text: "Carro es foreign y no es Teck" },
    { time: 38.5, text: "No soy de Medallo, pero estoy blessed" },
    { time: 40.9, text: "Glock 42 y no es de Sech" },
    { time: 42.9, text: "G el SUV y el jet" },
    { time: 43.9, text: "Cuatro Rollie, dos AP" },
    { time: 45.9, text: "Young rich nigga como Mbappé" },
    { time: 48.0, text: "Young rich nigga, mírame el Patek" },
    { time: 50.0, text: "Young rich nigga buscándome un check" },
    { time: 52.0, text: "Carro es foreign y no es Teck" },
    { time: 54.0, text: "No soy de Medallo, pero estoy blessed" },
    { time: 56.0, text: "Glock 42 y no es de Sech (¡pa! )" },
    { time: 57.8, text: "G el SUV y el jet (¡pa, pa! )" },
    { time: 58.9, text: "Vola'o en el G5" },
    { time: 60.9, text: "Esto e' Louis V, no Levi's (hey!)" },
    { time: 63.0, text: "Duro en España como Ibai" },
    { time: 64.0, text: "Tumbando titane' como capitán Levi (wuh)" },
    { time: 66.0, text: "Yo tengo esa grasa, ribeye" },
    { time: 68.0, text: "No los veo, Denzel, Libro 'e Eli (¡no!)" },
    { time: 70.0, text: "Yo ando Winchester, DY (skrrt)" },
    { time: 71.8, text: "No confío en nadie, solo en mi mai" },
    { time: 74.0, text: "Yeah, tengo a Biden en la muñeca" },
    { time: 76.0, text: "Esta roleta e' presidencial" },
    { time: 78.0, text: "Ven a mi madre en la calle" },
    { time: 79.8, text: "Le dicen, 'Sol María, wow, ese niño e' especial' (wuh)" },
    { time: 81.5, text: "Ella se pasma a vece'" },
    { time: 81.9, text: "Pero sabe que solamente le hablan la real" },
    { time: 85.0, text: "En Casa 'e Campo jugando par de hoyo'" },
    { time: 87.0, text: "Con Mateo, 'toy tirando papá" },
    { time: 89.0, text: "Está cabrón cómo Dios me cuida" },
    { time: 91.0, text: "Cuando lo que hago e' pecar" },
    { time: 93.8, text: "Pero Él conoce mi corazón" },
    { time: 95.0, text: "Estamo' claro cristal" },
    { time: 97.0, text: "Hablan de mí y no saben de mí" },
    { time: 99.0, text: "No me va a afectar" },
    { time: 100.1, text: "Si llevan como tres año'" },
    { time: 103.0, text: "Diciendo que van a apretar" },
    { time: 104.0, text: "Cuatro Rollie, dos AP" },
    { time: 105.2, text: "Young rich nigga como Mbappé" },
    { time: 107.0, text: "Young rich nigga, mírame el Patek" },
    { time: 109.0, text: "Young rich nigga buscándome un check" },
    { time: 111.0, text: "Carro es foreign y no es Teck" },
    { time: 113.0, text: "No soy de Medallo, pero estoy blessed" },
    { time: 115.0, text: "Glock 42 y no es de Sech" },
    { time: 116.9, text: "G el SUV y el jet" },
    { time: 118.0, text: "Cuatro Rollie, dos AP" },
    { time: 120.0, text: "Young rich nigga como Mbappé" },
    { time: 122.0, text: "Young rich nigga, mírame el Patek" },
    { time: 124.0, text: "Young rich nigga buscándome un check" },
    { time: 125.0, text: "Carro es foreign y no es Teck" },
    { time: 127.0, text: "No soy de Medallo, pero estoy blessed" },
    { time: 129.0, text: "Glock 42 y no es de Sech" },
    { time: 131.0, text: "G el SUV y el jet" }
]

    },
    {
        id: 6,
        title: "UNA NOTI 🧸",
        artist: "Omar Courtz",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273996764071dbd5240eefb2422",
        audioSrc: "noti.mp3",
        videoBgSrc: "Unanoti.mp4",
    lyrics: [
    { time: 0.1, text: "Bellaquita (yeh, yeh)" },
    { time: 3.9, text: "Bellaquita (yeh, yeh, ey)" },
    { time: 5.8, text: "Si es pa comernos, yo me atrevo, baby, obli" },
    { time: 7.9, text: "Tú, encima mío; yo, agarrándote los tobi'" },
    { time: 10.9, text: "Enchulao de ti, imagina de tu body" },
    { time: 12.9, text: "Siempre quiero cogerte como una noti" },
    { time: 17.0, text: "Como una noti" },
    { time: 19.0, text: "Como una noti (ey, yeh, yeh)" },
    { time: 23.0, text: "Siempre quiero cogerte como una noti" },
    { time: 26.0, text: "Dale, baby, enséñame something" },
    { time: 28.0, text: "Yo sé que no somos nothing" },
    { time: 31.0, text: "Pero yo quiero ver esas nalgas jumping on me" },
    { time: 34.0, text: "Y cogerte como noti" },
    { time: 36.0, text: "Dale, baby, enséñame something" },
    { time: 38.0, text: "Yo sé que no somos nothing" },
    { time: 40.0, text: "Pero yo quiero ver esas nalgas jumpin' on me" },
    { time: 43.0, text: "Quie-quie-quiere que lo entre, caliente" },
    { time: 47.0, text: "Si le diste enter, no fue un accidente" },
    { time: 49.0, text: "Y si saliste, fue pa que te lo entre" },
    { time: 51.6, text: "Quiere que le haga el whitening en los dientes'" },
    { time: 54.0, text: "Tú tiene' un lunar cerquita del... oh, oh" },
    { time: 56.0, text: "To' tu cuerpo yo me lo conozco" },
    { time: 59.0, text: "Mientras más lo hundo, más el cielo toco" },
    { time: 62.0, text: "To' este tiempo estaba haciéndome el loco" },
    { time: 64.0, text: "Dime dónde tú estás viviendo" },
    { time: 65.0, text: "Hace tiempo que yo no bajo pa'l apartment" },
    { time: 68.0, text: "Ahora, si me bajo, baby, tengo que taparme" },
    { time: 69.0, text: "Tu amiga, esa cabrona, dijo que no iba a pegarme" },
    { time: 73.0, text: "Si no quieres que cante, ya yo puedo retirarme" },
    { time: 75.0, text: "Vamo a la ATH a retirarle" },
    { time: 77.0, text: "Tengo que concentrarme pa explicarle' que ese culo" },
    { time: 80.0, text: "Me deja pelao, como un barber" },
    { time: 81.0, text: "Le metí 150 a la guagua, como Yandel" },
    { time: 84.0, text: "Uh, como Yandel" },
    { time: 87.0, text: "Siempre me espera en la casa esnúa con las sandal'" },
    { time: 89.0, text: "Yo le llego en pinta con las Alexander" },
    { time: 91.0, text: "Aunque llegue tarde" },
    { time: 93.0, text: "Siempre te cojo como una noti" },
    { time: 97.0, text: "Como una noti" },
    { time: 99.0, text: "Como una noti, ey (yeh, yeh)" },
    { time: 103.0, text: "Siempre quiero cogerte como una noti" },
    { time: 106.0, text: "Como una noti" },
    { time: 109.0, text: "Como una noti" },
    { time: 115.0, text: "Lo único que se veía en el cuarto era la cherry" },
    { time: 118.0, text: "A casa 'e los pai' bajaba con Polo y Sperry" },
    { time: 120.0, text: "Espero que me esperes" },
    { time: 122.0, text: "Y que si estás con un cabrón algún día, mami, pelees y te dejes" },
    { time: 126.0, text: "Y ahí me tire'" },
    { time: 127.0, text: "Cuando la veas solita, Luna, dile" },
    { time: 129.0, text: "Que yo mato por ella y porque esos ojos me miren" },
    { time: 131.0, text: "Yo le pido a Dios que ese culito vire" },
    { time: 133.0, text: "Porque ahora que estamos lejo" },
    { time: 137.0, text: "Es cuando más chingamo, pero eso es mi mente" },
    { time: 141.0, text: "No queremo hacerlo con más gente, no" },
    { time: 144.0, text: "Ma, por eso nos vemo" },
    { time: 147.0, text: "Tú le bajas dos mil cuando estamos de frente" },
    { time: 150.0, text: "Vamo a dormir, ¿o quieres que lo entre?" },
    { time: 153.0, text: "Siempre quiero cogerte como una noti" },
    { time: 157.0, text: "Como una noti" },
    { time: 159.0, text: "Como una noti (ey, yeh, yeh)" },
    { time: 163.0, text: "Siempre quiero cogerte como una noti" },
    { time: 166.0, text: "Como una noti" },
    { time: 169.0, text: "Como una noti" }
]
    },

];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0;

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
    pauseTrack();
}

function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active');

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load();
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage();
        });

        listItem.addEventListener('mouseenter', () => {
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause();
                backgroundVideo.src = "";
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg');
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>";
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics);
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time);
        span.classList.add('lyric-line');
        lyricsContainer.appendChild(span);
      });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage();
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 2;
    console.log("Button clicked. New repeatMode:", repeatMode);
    updateRepeatButtonUI();
});


function updateRepeatButtonUI() {
 playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;
    if (repeatMode === 0) {
        console.log("Repeat mode 0 - No repeat");
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        audioPlayer.loop = false;
    } else if (repeatMode === 1) {
        console.log("Repeat mode 1 - Repeat one song");
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners
backToHomeFromDetailBtn.addEventListener('click', showHomePage);
backToHomeBtn.addEventListener('click', showHomePage);

// Event Listener
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing...");
    console.log("Songs array length:", songs.length);
    console.log("songListElement:", songListElement);

    renderSongList();
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value;
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage();
    console.log("Initialization complete.");
}

init();
