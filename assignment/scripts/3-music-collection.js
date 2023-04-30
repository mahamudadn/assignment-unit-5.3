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




