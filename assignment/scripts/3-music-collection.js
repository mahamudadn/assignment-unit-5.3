console.log('***** Music Collection *****')

// music collection

    let collection = [];

    function addToCollection(title, artist, yearPublished) {
        let album = {
            title : title,
            artist:artist,
            yearPublished: yearPublished
        }
        collection.push(album)
        return album;
    }


// Added six albums to addCollection Function.
// and loged out to test it.
// crated a variable for each album
// and used it to console log it.

        let album1 = addToCollection("escape", "Enrique", "2001");

        console.log(' This is my album one', album1);

        let album2 = addToCollection("1973", "James Blunt", "2007")

        console.log(' This is my album two', album2)

        let album3 = addToCollection("this is me", "JLo", "2002")

        console.log(' This is my album three', album3)

        let album4 = addToCollection("dajiya", "samatar", "2006")

        console.log(' This is my album four', album4)

        let album5 = addToCollection("escape", "enrique", "2001")

        console.log(' This is my  fitth album ', album5)

        let album6 = addToCollection("baladwayn", "samatar", "2010")

        console.log(' This is my sixth album ', album6)

    // testing addToCollection is working corectly.
   // so called out collection array to test albums are

     console.log('this is my album collection' ,collection);

   // created showcolection function.
  // looped over the array as per the formate.
  // loged out title, artist ,and yearPublished format as instructed.

 function showCollection(collection) {

    console.log(`There are ${collection.length} items in this collection:`);
    for (let album of collection) {

    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}


// tested out the showCollection.
// to check if its loging out the same with the format.

    showCollection(collection);

// information in a reversed format (yearpulished, artist, title).

  function backWard(collection) {
    console.log(`There are ${collection.length}  reversed items in this collection:`);
    for (let album of collection) {

    console.log(`published in: ${album.yearPublished} by: ${album.artist}, name: ${album.title}`);
    }
}

backWard(collection);

// Created findByArtist function.
// also created an empty array with the name result.
//  made a for loop to loop over the collection array.

    function findByArtist(artist) {
        let  result = []

        for( let i =0; i < collection.length; i++) {

            if(collection[i].artist === artist) {

                result.push(collection[i])
            }
        }
        
        return result; 

        }
