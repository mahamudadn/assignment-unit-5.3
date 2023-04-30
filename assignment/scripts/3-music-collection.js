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

