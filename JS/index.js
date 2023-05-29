
let userArr = [];


const toggle = document.getElementById('viewMode');
const formUser = document.querySelector("#formUser");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const genre = getGenre();
const artist1 = document.querySelector("#favoriteArtist1");
const record1 = document.querySelector("#favoriteRecord1");
const artist2 = document.querySelector("#favoriteArtist2");
const record2 = document.querySelector("#favoriteRecord2");
const recommendRecord = document.querySelector("#recommendRecord");
const recommendedRecord = document.querySelector("#recommendedRecord");
const goBackBtn3 = document.querySelector("#goBackBtn3");
const goBackBtn = document.querySelector("#goBackBtn");
const backBtn = document.querySelector("#backBtn");
const favoritesList = document.querySelector("#favoritesList");
const favArtist1 = document.querySelector("#favArtist1");
const favArtist2 = document.querySelector("#favArtist2");
const favRecord1 = document.querySelector("#favRecord1");
const favRecord2 = document.querySelector("#favRecord2");
const changeArtists = document.querySelector("#changeArtists");
const showArtist1 = document.querySelector("#showArtist1");
const showArtist2 = document.querySelector("#showArtist2");
const insertNewArtist1 = document.querySelector("#insertNewArtist1");
const insertNewArtist2 = document.querySelector("#insertNewArtist2");
const replaceBtn1 = document.querySelector("#replaceBtn1");
const replaceBtn2 = document.querySelector("#replaceBtn2");
const changeRecords = document.querySelector("#changeRecords");
const changeAllRecords = document.querySelector("#changeAllRecords");
const showRecord1 = document.querySelector("#showRecord1");
const showRecord2 = document.querySelector("#showRecord2");
const recordTitle = document.querySelector("#recordTitle");
const insertNewRecord1 = document.querySelector("#insertNewRecord1");
const insertNewRecord2 = document.querySelector("#insertNewRecord2");
const replaceRecord1 = document.querySelector("#replaceRecord1");
const replaceRecord2 = document.querySelector("#replaceRecord2");
const goBack = document.querySelector("#goBack");
const recommendRandom = document.querySelector("#recommendRandom");
const recommendedRandom = document.querySelector("#recommendedRandom");
const clearData = document.querySelector("#clearData");
const exit = document.querySelector("#exit");


//Modificación del view mode
const savedViewMode = localStorage.getItem('viewMode'); //Obtiene el valor de viewMode del local storage
if (savedViewMode) {
  document.body.classList.add(savedViewMode);//Verifica el valor guardado de viewMode y lo agrega a la class del body
}
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light'); //Ejecuta el botón para modificar el viewMode
  const currentViewMode = document.body.classList.contains('light') ? 'light' : 'dark';//verifica y establece el viewMode de light a dark o viceversa
  localStorage.setItem('viewMode', currentViewMode);//Guarda en el localStorage el último viewMode elegido
});

//Chequea si hay un array guardado en el localStorage, Si lo hay comienza la app desde el menú de acciones. 
const savedUser = localStorage.getItem('userArr');
userArr = savedUser ? JSON.parse(savedUser) : [];

if (userArr.length > 0) {
  userInput.classList.add('disable');
  userActions();
} else {
  userInput.classList.remove('disable');
}

//Crea el objeto user

  formUser.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: inputName.value,
      email: inputEmail.value,
      genre: getGenre(),
      artist1: favoriteArtist1.value,
      record1: favoriteRecord1.value,
      artist2: favoriteArtist2.value,
      record2: favoriteRecord2.value,
    };
    
    createUser(user);
  });


//Función para para conseguir el genre del listado
function getGenre () {
  const genres = document.getElementsByName("flexRadioDefault");
  for (let i = 0; i < genres.length; i++) {
    if (genres[i].checked){
      return genres[i].value;
    }
  }
  return "";
}
//función para pushear el objeto user al array userArr
function createUser(user){
  userArr.push(user);
  userInput.classList.add('disable');
  localStorage.setItem('userArr', JSON.stringify(userArr));
  actions.classList.remove('disable');
  userActions();
}


function userActions(){
  actions.classList.remove('disable');
}


recommendRecord.addEventListener('click', () => {
  actions.classList.add('disable')
  recommendedRecordSection.classList.remove('disable')
  recommending()
  
})
//Función para recomendar un disco basado en el genre elegido. 
function recommending() {
  const userArr = localStorage.getItem('userArr');
  if (userArr) {
    const parsedUserArr = JSON.parse(userArr);
  for (const user of parsedUserArr) {
    if (user.genre === "Jazz"){
      jazzRecord();
    }else if(user.genre === "Rock"){
      rockRecord();
    }else if(user.genre === "Pop"){
      popRecord();
    }
    }
  }
  }
  

//Función que recomienda si genre es Jazz.
function jazzRecord() {
  const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
  storedUserArr.forEach((user) => {
    if (user.artist1 == "Miles Davis" && user.record1 == "Kind of Blue"){
      recommendedRecordSection.innerHTML = `    
      <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg">
          <h1 class="title lightModeText">John Coltrane - A Love Supreme</h1>
          <p class="text lightModeText>
          "A Love Supreme" is a seminal jazz album by the influential American saxophonist and composer, John Coltrane. Released in 1965, it is widely regarded as one of the most significant and spiritually profound recordings in the history of jazz. "A Love Supreme" showcases Coltrane's deep musical and spiritual exploration, marking a pivotal point in his artistic evolution.

The album is structured as a four-part suite, with each section representing a different aspect of Coltrane's personal journey towards spiritual enlightenment. It combines elements of modal jazz, hard bop, and free jazz, pushing the boundaries of improvisation and expanding the possibilities of the genre.

Coltrane's powerful and impassioned saxophone playing takes center stage, accompanied by an exceptional ensemble featuring McCoy Tyner on piano, Jimmy Garrison on bass, and Elvin Jones on drums. The musicians display remarkable cohesion and telepathic communication, creating a sense of collective improvisation that propels the music forward.

With its dense harmonic textures, complex rhythmic patterns, and fervent energy, "A Love Supreme" is a deeply emotional and transcendent work. Coltrane's playing is both virtuosic and deeply spiritual, conveying a profound sense of devotion and personal expression.

The album's themes of spirituality, love, and redemption are reflected in Coltrane's liner notes, where he expresses his gratitude to a higher power and his commitment to using music as a means of reaching a spiritual plane. This sense of spirituality permeates the entire recording, creating a transformative and cathartic listening experience.

"A Love Supreme" has had a lasting impact on jazz and beyond, inspiring countless musicians and transcending the boundaries of genre. Its combination of technical brilliance, emotional depth, and spiritual quest has made it a revered and iconic masterpiece, solidifying John Coltrane's status as one of the most important figures in the history of jazz.
          </p>
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1weenld61qoidwYuZ1GESA?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div>
                <button type="button" class="boton btn1" id="goBackBtn3">Go Back</button>
            </div>
          `;
    }else{recommendedRecordSection.innerHTML = `    
    <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg">
        <h1 class="title lightModeText" >Miles Davis - Kind Of Blue</h1>
        <p class="text lightModeText">
        Kind of Blue is a landmark jazz album by the legendary American trumpeter and composer, Miles Davis. Released in 1959, it is widely regarded as one of the most influential and iconic albums in the history of jazz. Kind of Blue is known for its groundbreaking approach to improvisation, modal jazz, and its serene, introspective mood.

        The album features an exceptional ensemble of musicians, including Miles Davis on trumpet, John Coltrane and Julian "Cannonball" Adderley on saxophones, Bill Evans and Wynton Kelly on piano, Paul Chambers on bass, and Jimmy Cobb on drums. Each musician brings their unique style and virtuosity to the record, creating a rich and cohesive sound.
        
        Kind of Blue is characterized by its use of modal scales, which provide a departure from traditional chord progressions and offer a more open-ended framework for improvisation. The album is known for its subtle and understated beauty, with delicate melodies and serene harmonies that evoke a sense of tranquility and introspection.
        
        Tracks like "So What," "All Blues," and "Blue in Green" have become jazz standards and showcase the ensemble's ability to create mesmerizing, spontaneous improvisations. The album's overall atmosphere is cool, relaxed, and deeply expressive, capturing the essence of Davis' unique musical vision.
        
        Kind of Blue not only revolutionized jazz but also had a significant impact on various musical genres, including rock, fusion, and contemporary classical music. Its enduring popularity and timeless quality have made it one of the best-selling and most critically acclaimed jazz albums of all time, solidifying Miles Davis as a true innovator and an enduring figure in the history of music.
        </p>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1weenld61qoidwYuZ1GESA?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div>
                <button type="button" class="boton btn1" id="goBackBtn3">Go Back</button>
            </div>
        `;
      }
  });
  const goBackBtn3 = document.getElementById('goBackBtn3');
          goBackBtn3.addEventListener('click', (event) => {
            actions.classList.remove('disable');
            recommendedRecordSection.classList.add('disable');
          });
  
  }


//Función que recomienda si genre es Rock.
function rockRecord() {
  const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
  storedUserArr.forEach((user) => {
    if (user.artist1 == "The Police" && user.record1 == "Synchronicity"){
      recommendedRecordSection.innerHTML = `    
      <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg">
          <h1 class="title lightModeText" >Audioslave - Out of Exile</h1>
          <p class="text lightModeText">
          "Out of Exile" is the second studio album by the American rock band Audioslave, released in 2005. It showcases the band's signature blend of hard rock, alternative rock, and grunge, combining powerful guitar riffs, soulful vocals, and introspective lyrics. "Out of Exile" builds upon the success of their self-titled debut album and further establishes Audioslave as a formidable force in the rock music scene.

The album features the distinctive vocals of Chris Cornell, formerly of Soundgarden, and the instrumental prowess of the instrumentalists from Rage Against the Machine—Tom Morello on guitar, Tim Commerford on bass, and Brad Wilk on drums. The band's chemistry and tight musicianship are evident throughout the record, creating a dynamic and powerful sound.

"Out of Exile" is characterized by its blend of heavy, hard-hitting tracks and more melodic, introspective moments. Songs like "Be Yourself," "Your Time Has Come," and the title track "Out of Exile" showcase the band's knack for crafting anthemic, guitar-driven rock songs with memorable hooks and energetic performances.

The album also delves into more emotionally charged and introspective territory with tracks like "Doesn't Remind Me" and "Like a Stone," featuring Cornell's soulful vocals and poignant lyrics. These songs add a sense of vulnerability and depth to the album, exploring themes of self-reflection, personal struggles, and social commentary.

The production on "Out of Exile" is polished and refined, highlighting the band's musicality and capturing their dynamic performances. The album strikes a balance between raw energy and a more polished sound, resulting in a cohesive and captivating listening experience.

"Out of Exile" solidified Audioslave as a prominent force in rock music, showcasing their ability to seamlessly blend various genres and create a sound that was both familiar and fresh. The album's commercial success and critical acclaim cemented its place as a standout release in Audioslave's discography, leaving a lasting impact on the rock music landscape.
          </p>
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0HQhToIjonHnJRRPN4jeJU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div>
                <button type="button" class="boton btn1" id="goBackBtn3">Go Back</button>
            </div>
          `;
    }else{recommendedRecordSection.innerHTML = `    
    <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg">
        <h1 class="title lightModeText" >The Police - Synchronicity</h1>
        <p class="text lightModeText">
        "Synchronicity" is the fifth and final studio album by the British rock band The Police, released in 1983. It is a captivating blend of new wave, reggae, and pop-rock, showcasing the band's unique sound and remarkable musicianship. "Synchronicity" propelled The Police to even greater heights of success and became one of their most popular and critically acclaimed albums.

The album features the distinctive vocals and songwriting of Sting, accompanied by the masterful musicianship of Andy Summers on guitar and Stewart Copeland on drums. The band's tight-knit chemistry is evident throughout the record, as they seamlessly fuse together different genres and musical influences.

"Synchronicity" is known for its memorable and catchy hits, including "Every Breath You Take," which became one of the band's signature songs and a chart-topping hit. The album also features other standout tracks such as "Wrapped Around Your Finger," "King of Pain," and "Synchronicity II," each displaying the band's knack for crafting infectious melodies and thoughtful lyrics.

The lyrics on "Synchronicity" touch upon themes of personal relationships, existentialism, and social commentary, often veiled in metaphorical and enigmatic language. Sting's introspective and poetic songwriting adds depth and intrigue to the album, giving listeners something to ponder beyond the infectious hooks and melodies.

The production on "Synchronicity" is polished and layered, incorporating a wide range of instruments and sonic textures. The band experiments with synthesizers and electronic elements, adding a modern edge to their sound while still retaining their signature blend of rock and reggae influences.

With its combination of commercial success and critical acclaim, "Synchronicity" solidified The Police's status as one of the most important bands of the era. The album's accessible yet sophisticated sound, coupled with its thought-provoking lyrics, continues to resonate with audiences today, making it a timeless and essential part of The Police's discography.
        </p>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5W9OT0a5iZlBr83a9WMKFY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div>
                <button type="button" class="boton btn1" id="goBackBtn3">Go Back</button>
            </div>
        `;
      }
  });
  const goBackBtn3 = document.getElementById('goBackBtn3');
          goBackBtn3.addEventListener('click', (event) => {
            actions.classList.remove('disable');
            recommendedRecordSection.classList.add('disable');
          });
  
  }


//Función que recomienda si genre es Pop.
function popRecord() {
  const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
  storedUserArr.forEach((user) => {
    if (user.artist1 == "Michael Jackson" && user.record1 == "Dangerous"){
      recommendedRecordSection.innerHTML = `    
      <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg">
          <h1 class="title lightModeText" >Hall and Oates - H2O</h1>
          <p class="text lightModeText">
          "H2O" is the eleventh studio album by the American pop rock duo Hall & Oates, released in 1982. It is a vibrant and polished record that epitomizes the duo's signature blend of catchy pop hooks, soulful vocals, and infectious grooves. "H2O" marked a successful transition for Hall & Oates into the 1980s, showcasing their ability to adapt to changing musical trends while maintaining their distinctive sound.

The album features a collection of memorable tracks, including the chart-topping hit singles "Maneater" and "One on One." These songs exemplify Hall & Oates' knack for crafting catchy, radio-friendly pop songs with their signature blend of smooth vocals and tight instrumentation.

"H2O" also explores a variety of musical styles, incorporating elements of R&B, rock, and new wave. Tracks like "Family Man" and "Art of Heartbreak" infuse a touch of rock energy into the album, while "Italian Girls" and "Delayed Reaction" showcase the duo's soulful and heartfelt balladry.

The production on "H2O" is slick and polished, reflecting the sonic aesthetic of the 1980s. The duo's vocals are front and center, supported by a tight band and an array of electronic and synthesized elements that give the album a contemporary sound.

Thematically, "H2O" explores topics such as relationships, love, and self-discovery. The lyrics delve into the complexities of human connections and introspection, offering a mix of introspective and lighthearted moments that resonate with listeners.

With its infectious melodies, smooth harmonies, and radio-friendly sound, "H2O" became one of Hall & Oates' most successful and popular albums. It achieved commercial success, spawning multiple hit singles and solidifying the duo's status as one of the most successful acts of the era.

"H2O" showcases Hall & Oates' ability to craft irresistible pop songs while maintaining their own artistic identity. Its timeless appeal and enduring popularity make it a beloved part of the duo's discography, representing a successful and influential chapter in their illustrious career.
          </p>
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7ygXmT175bKbOpiPjNwXOB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div>
            <button type="button" class="boton btn1" id="goBackBtn3">Go Back</button>
          </div>
          `;
    }else{recommendedRecordSection.innerHTML = `    
    <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg">
        <h1 class="title lightModeText" >Michael Jackson - Dangerous</h1>
        <p class="text lightModeText">
        "Dangerous" is the eighth studio album by the iconic American singer, songwriter, and entertainer, Michael Jackson. Released in 1991, it represents a pivotal moment in his career, showcasing his unparalleled talent and musical innovation. "Dangerous" merges pop, R&B, rock, and new jack swing elements to create a dynamic and genre-defying sound.

The album is characterized by its infectious melodies, polished production, and Jackson's charismatic vocal performances. It features a combination of uptempo dance tracks and introspective ballads, showcasing the range and versatility of Jackson's musical abilities.

"Dangerous" includes some of Jackson's most iconic and enduring hits, such as "Black or White," "Remember the Time," and "Dangerous." These songs exemplify his ability to craft memorable hooks, incorporate intricate vocal harmonies, and infuse his music with a sense of rhythm and groove that captivates listeners.

The album also features notable collaborations with acclaimed artists such as Slash from Guns N' Roses, who contributes a blistering guitar solo on "Black or White," and Heavy D, who adds his rap prowess to the track "Jam." These collaborations add a diverse and dynamic element to the record, further expanding its sonic palette.

Thematically, "Dangerous" explores a range of topics, including social issues, love, and self-reflection. Jackson's lyrics delve into subjects such as racial harmony, environmental awareness, and personal introspection, reflecting his desire to use his music as a platform for positive change and self-expression.

With its groundbreaking production techniques, innovative music videos, and memorable performances, "Dangerous" solidified Jackson's status as one of the greatest entertainers of all time. The album's commercial success, critical acclaim, and enduring popularity make it an essential part of Jackson's iconic legacy, representing a creative pinnacle in his illustrious career.
        </p>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0oX4SealMgNXrvRDhqqOKg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div>
          <button type="button" class="boton btn1" id="goBackBtn3">Go Back</button>
        </div>
`;
}
});
const goBackBtn3 = document.getElementById('goBackBtn3');
  goBackBtn3.addEventListener('click', (event) => {
    actions.classList.remove('disable');
    recommendedRecordSection.classList.add('disable');
  });

}



//Muestra nuestra lista de favoritos. Artist & Records
favoritesList.addEventListener('click', () => {
  const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
  actions.classList.add('disable');
  favorites.classList.remove('disable');
  
  favArtist1.textContent = `Favorite artist: ${storedUserArr[0].artist1}`
  favArtist2.textContent = `2nd favorite artist: ${storedUserArr[0].artist2}`
  favRecord1.textContent = `Favorite record: ${storedUserArr[0].record1}`
  favRecord2.textContent = `2nd favorite record: ${storedUserArr[0].record2}`
  goBackBtn.addEventListener('click', (event) => {
    event.preventDefault();
    actions.classList.remove('disable');
    favorites.classList.add('disable');
  
  })  
})


//Muestra nuestra los artistas favoritos y permite modificarlos. 
changeArtists.addEventListener('click', () => {
  const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
  actions.classList.add('disable');
  newArtists.classList.remove('disable');
  showArtist1.textContent = `Artist: ${storedUserArr[0].artist1}`;
  showArtist2.textContent = `Artist: ${storedUserArr[0].artist2}`;
  replaceArtist1();
  replaceArtist2();
  backBtn.addEventListener('click', (event) => {
    event.preventDefault();
    actions.classList.remove('disable');
    newArtists.classList.add('disable');
  
  })  
})
//Función para modificar los artistas favoritos
function replaceArtist1() {
  replaceBtn1.addEventListener("click", () => {
    const newArtist1 = insertNewArtist1.value;
    const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
    storedUserArr[0].artist1 = newArtist1;    
    localStorage.setItem('userArr', JSON.stringify(storedUserArr));
    artist1.textContent = `Artist 1: ${newArtist1}`;
    insertNewArtist1.value = "";
  });
}
function replaceArtist2() {
  
  replaceBtn2.addEventListener("click", () => {
    const newArtist2 = insertNewArtist2.value;
    const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
    storedUserArr[0].artist2 = newArtist2;    
    localStorage.setItem('userArr', JSON.stringify(storedUserArr));
    artist2.textContent = `Artist 2: ${newArtist2}`;
    insertNewArtist2.value = "";
  });
}

//Muestra nuestra los records favoritos y permite modificarlos. 
changeAllRecords.addEventListener('click', () => {
  const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
  actions.classList.add('disable');
  changeRecords.classList.remove('disable');
  showRecord1.textContent = `Record: ${storedUserArr[0].record1}`;
  showRecord2.textContent = `Record: ${storedUserArr[0].record2}`;
  newRecord1();
  newRecord2();
  goBack.addEventListener('click', (event) => {
    event.preventDefault();
    actions.classList.remove('disable');
    changeRecords.classList.add('disable');
  
  })  
})
//Función para modificar record1
function newRecord1() {
  replaceRecord1.addEventListener("click", () => {
    const newRecord1 = insertNewRecord1.value;
    const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
    storedUserArr[0].record1 = newRecord1;    
    localStorage.setItem('userArr', JSON.stringify(storedUserArr));
    record1.textContent = `Record 1: ${newRecord1}`;
    insertNewRecord1.value = "";
  });
}
//Función para modificar record2
function newRecord2() {
  
  replaceRecord2.addEventListener("click", () => {
    const newRecord2 = insertNewRecord2.value;
    const storedUserArr = JSON.parse(localStorage.getItem('userArr'));
    storedUserArr[0].record2 = newRecord2;    
    localStorage.setItem('userArr', JSON.stringify(storedUserArr));
    record2.textContent = `Record 2: ${newRecord2}`;
    insertNewRecord2.value = "";
  });
}

//Borrar los datos del usuario (userArr en el localStorage).

clearData.addEventListener("click", () => {
  localStorage.clear();
  formUser.reset();
  actions.classList.add('disable');
  userInput.classList.remove('disable');
  

});

//Salida de la app.

exit.addEventListener("click", () => {
  window.close();  

});

//Recomienda un disco random basado en el género elegido. 

recommendRandom.addEventListener("click", () => {
  actions.classList.add('disable');
  recommendedRandom.classList.remove('disable');
  getRandomRecord();

});


//Función quue devuelve un record random.

function getRandomRecord(){
  musicArrToJson(); //Guarda objMusicArr en el JSON
  const userArr = JSON.parse(localStorage.getItem('userArr')); //Llama a userArr
  const objMusicArr = JSON.parse(localStorage.getItem('objMusicArr')); //LLama al array objMusicArr 
  const genreUser = userArr.map((user) => user.genre) //recorre userArr[] y nos devuelve un array nuevo = genreUser[] con un solo valor porque hay un solo user.  
  
  let finded = objMusicArr.filter((music) => { 
    return music.genre == genreUser[0]
  }) // crea finded[] filtrando objMusicArr[] en base al valor de genreUser[] y retorna los valores de music comparando music.genre con genreUser[]
  
  let random = Math.floor(Math.random() * finded.length) //Random genera un número aleatorio entre 0 y 1, lo multiplica por el largo de finded[] y lo redondea hacia abajo con math.floor.
  //Esto da como resultado un ídice aleatorio dentro del rango de elementos de finded[].
  
  recommendedRandom.innerHTML = `    
      <div class="mx-auto col-10 col-md-8 col-lg-6 transpBg randomRecommended">
          <h1 class="title lightModeText" >${finded[random].artist} - ${finded[random].record}</h1>
              
          <div>
            ${finded[random].spotify}
          </div>
          <div>
                <button type="button" class="boton btn1" id="goBackBtn2">Go Back</button>
          </div>
      </div>              
          `;

          const goBackBtn2 = document.getElementById('goBackBtn2');
          goBackBtn2.addEventListener('click', (event) => {
            actions.classList.remove('disable');
            recommendedRandom.classList.add('disable');
          });
}
//Función para guardar objMusicArr[] en el JSON. 
function musicArrToJson(){
  localStorage.setItem('objMusicArr', JSON.stringify(objMusicArr));
}




let objMusicArr = [
  {
    genre: "Jazz",
    artist: "Miles Davis",
    record: "Nefertiti",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4ilAxtGR8aOj6M8X1HeHPY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Jazz",
    artist: "John Coltrane",
    record: "Giant Steps",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6NkgPYCMAzttRIKDpuJrFp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    genre: "Jazz",
    artist: "Bill Evans",
    record: "Portrait in Jazz",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7dlYNvbD4QYDL3sSkTCjxi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Rock",
    artist: "Led Zeppelin",
    record: "Led Zeppelin IV",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5EyIDBAqhnlkAHqvPRwdbX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Rock",
    artist: "The Police",
    record: "Outlandos D'Amour",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1H9g6j4Wwj6wh6p8YHVtkf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Rock",
    artist: "Soundgarden",
    record: "Superunknown",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4K8bxkPDa5HENw0TK7WxJh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Pop",
    artist: "Huey Lewis & The News",
    record: "Fore!",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5L0vaNLbzgP8RIJqs1zamE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Pop",
    artist: "Prince",
    record: "Purple Rain",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7nXJ5k4XgRj5OLg9m8V3zc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  {
    genre: "Pop",
    artist: "Miley Cyrus",
    record: "Endless Summer Vacation",
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0HiZ8fNXwJOQcrf5iflrdz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },

]

