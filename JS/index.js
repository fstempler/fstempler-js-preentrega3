let userArr = [];
let trueOFalse = true;

let objMusicArr = [
  {
    genre: "Jazz",
    artist1: "Miles Davis",
    record1: "Kind of Blue",
  },
  {
    genre: "Jazz",
    artist1: "John Coltrane",
    record1: "A Love Supreme",
  },
  {
    genre: "Rock",
    artist1: "Led Zeppelin",
    record1: "Led Zeppelin IV",
  },
  {
    genre: "Rock",
    artist1: "The Police",
    record1: "Outlandos D'Amour",
  },
  {
    genre: "Pop",
    artist1: "Michael Jackson",
    record1: "Thriller",
  },
  {
    genre: "Pop",
    artist1: "Prince",
    record1: "Purple Rain",
  },

]

class User {
  constructor(name, genre, artist1, record1, artist2, record2) {
    this.name = name;
    this.genre = genre;
    this.artist1 = artist1;
    this.record1 = record1;
    this.artist2 = artist2;
    this.record2 = record2;
  }
}
//Función para crear el usuario y pushear al array userArr
function createUser() {
  let validUser = false;
  while (!validUser) {
    let name = prompt("Enter your name");
    let genre = prompt("Enter your favorite genre: \n Jazz \n Rock \n Pop");
    let artist1 = prompt("Enter your favorite artist");
    let record1 = prompt("Enter your favorite record");
    let artist2 = prompt("Enter your 2nd favorite artist");
    let record2 = prompt("Enter your 2nd favorite record");

    if (
      name === "" ||
      (genre !== "Jazz" && genre !== "Rock" && genre !== "Pop") ||
      artist1 === "" || record1 === "" || artist2 === "" || record2 === "") {
      alert("There's a problem with your info");
    } else {
      let musicUser = new User(name, genre, artist1, record1, artist2, record2);
      userArr.push(musicUser);
    
      recommend();
      validUser = true;
    }
  }
}

//Función para elegir las diferentes opciones, cada una con su respectiva función. 
function recommend() {
  let select = prompt("Do you want to: \n 1. Recommend me a record. \n 2. Show me my favorite artists. \n 3. Show me my favorite records. \n 4. Recommend random Record \n 5. Change Artist 1  \n 6. Change Record 1 \n 7. Search Artist \n 8. Exit");
  while (trueOFalse) {
    switch (select) {
      case "1":
        recommending();
        break;
      case "2":
        myArtists();
        break;
      case "3":
        myRecords();
        break
      case "4":
        recommendRandomRecord();
        break
      case "5":
        changeArtist1();
        break
      case "6":
        changeRecord1();
        break
      case "7":
        searchArtist();
        break    
      case "8":
        trueOFalse = false
        break;
    }
  }


}
//Función para recomendar un disco basado en el genre elegido. 
function recommending() {
  for (const User of userArr) {
    if (User.genre === "Jazz") {
      jazzRecord();
    } else if (User.genre === "Pop") {
      popRecord();
    } else if (User.genre === "Rock") {
      rockRecord();
    } else {
      alert("There's something wrong with your info")
      createUser();
    }

  }
}
//Función que recomienda si genre es Jazz.
function jazzRecord() {
  for (const User of userArr) {
    if (User.artist1 === "Miles Davis" || User.record1 === "Kind of Blue" || User.artist2 === "Miles Davis" || User.record2 === "Kind of Blue") {
      alert("Based on your info we recommend to listen to John Coltrane - A Love Supreme \nhttps://open.spotify.com/album/4o1ObbFgVBo6rxIdW2vnxM?si=xvvV9-I9QJShZjNMKrlSqw")
    } else {
      alert("Based on your info we recommend to listen to Miles Davis - Kind of Blue \nhttps://open.spotify.com/album/4o1ObbFgVBo6rxIdW2vnxM?si=xvvV9-I9QJShZjNMKrlSqw")
    }
    trueOFalse = false;
  }

}
//Función que recomienda si genre es Rock.
function rockRecord() {
  for (const User of userArr) {
    if (User.artist1 === "Led Zeppelin" || User.record1 === "Led Zeppelin IV" || User.artist2 === "Led Zeppelin" || User.record2 === "Led Zeppelin IV") {
      alert("Based on your info we recommend to listen to The Police - Outlandos D'Amour \nhttps://open.spotify.com/album/1H9g6j4Wwj6wh6p8YHVtkf?si=skTyluytSfSD3sT9VtsOjA")
    } else {
      alert("Based on your info we recommend to listen to Led Zeppelin - Led Zeppelin IV \nhttps://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=IEgM9EcHRaKxfIer0L6Zog")
    }
    console.log(userArr);
    trueOFalse = false;
  }

}
//Función que recomienda si genre es Pop.
function popRecord() {
  for (const User of userArr) {
    if (User.artist1 === "Michael Jackson" || User.record1 === "Thriller" || User.artist2 === "Michael Jackson" || User.record2 === "Thriller") {
      alert("Based on your info we recommend to listen to Prince - Purple Rain \nhttps://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc?si=qCTsST6fSbCEhe75RsqHYQ")
    } else {
      alert("Based on your info we recommend to listen to Michael Jackson - Thriller \nhttps://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ?si=7tJUyun-ToaqoU55C8cYuw")
    }
    trueOFalse = false;
  }

}

//Función que muestra los artistas elegidos. 
function myArtists() {
  userArr.forEach(artist => {
    alert(`${artist.artist1}  \n${artist.artist2}`)
    recommend();
    trueOFalse = false;
  })
}
//Función que muestra los records elegidos. 
function myRecords() {
  userArr.forEach(record => {
    alert(`${record.record1}  \n${record.record2}`)
    recommend();
    trueOFalse = false;
  })
}

//Función que muestra un artist y record random basada en la genre en userArr.
function recommendRandomRecord() {
  const genreUser = userArr.map((user) => user.genre) //recorre userArr[] y nos devuelve un array nuevo = genreUser[] con un solo valor porque hay un solo user. 

  let finded = objMusicArr.filter((music) => { 
    return music.genre == genreUser[0]
  }) // crea finded[] filtrando objMusicArr[] en base al valor de genreUser[] y retorna los valores de music comparando music.genre con genreUser[]

  let random = Math.floor(Math.random() * finded.length) //Random genera un número aleatorio entre 0 y 1, lo multiplica por el largo de finded[] y lo redondea hacia abajo con math.floor.
  //Esto da como resultado un ídice aleatorio dentro del rango de elementos de finded[].

  alert(finded[random].artist1 + " - " + finded[random].record1)// Accede a las propiedades requeridas de finded[random] para mostrar la info en un alert. 
  trueOFalse = false;
}
//Función para modificar el 1er artista elegido. 
function changeArtist1() {
  userArr = userArr.map((user) => { //Recorre userArr 
    let newArtist = prompt("Enter your NEW favorite artist"); //Ingresa NEW artist 
    return  Object.assign({}, user, {artist1: newArtist}); //Crea un nuevo objeto con object.assign y reemplaza el valor de artist1 por el de newArtist.
    
});
  recommend();
  trueOFalse = false;
}
//Función para modificar el 1er record elegido. 
function changeRecord1() {
  userArr = userArr.map((user) => { //Recorre userArr 
    let newRecord = prompt("Enter your NEW favorite record"); //Ingresa NEW record
    return  Object.assign({}, user, {record1: newRecord}); //Crea un nuevo objeto con object.assign y reemplaza el valor de record1 por el de newRecord.
    
});
  recommend();
  trueOFalse = false;
}
//Función para buscar los artistas ingresados. 
function searchArtist() {
  let findArtist = prompt("Search your artist"); //Ingresa el artista a buscar
  const searchedArtist = userArr.find((artist) => artist.artist1 === findArtist); //Busca en userArr[] si el artista en findArtist es igual a artist1
  const searchedArtist2 = userArr.find((artist) => artist.artist2 === findArtist); //Busca en userArr[] si el artista en findArtist es igual a artist2
  if (searchedArtist) {alert(searchedArtist.artist1) //Si se cumple searchedArtist muestra el artista buscado sino sigue
  }else if(searchedArtist2){alert(searchedArtist2.artist2) //Si se cumple searchedArtist2 muestra el artista sino
  }else{alert("You don't have that artist in your favorite artists list")}//Si no se cumplen ninguna de las condiciones anteriores muestra que el artista buscado no existe en la lista. 
  recommend();
  trueOFalse = false;
}

createUser();