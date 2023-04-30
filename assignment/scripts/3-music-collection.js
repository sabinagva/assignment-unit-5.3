console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

let collection = [];
function addToCollection(title, artist, yearPublished) {
    let album1 = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
        
    };
    collection.push (album1)

}

console.log('new array is', collection)

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
addToCollection('Multitude', 'Stromae', 2022);
addToCollection('Very Few Friends', 'Saint Levant', 2022);
addToCollection('Moon By Island Gardens','Aeris Roves', 2018);
addToCollection('Man On The Moon', 'Kid Cudi',  2009);
addToCollection('Man On The Moon 2', 'Kid Cudi',  2016);
addToCollection('Mini World', 'Indila', 2014);
addToCollection('Locket', 'Crumb', 2017);
console.log('new array is', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection([]){
    for(list of collection){
        console.log(list)
    }
}
console.log('Array lenght is', collection.length);
showCollection(collection)

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist) {
    let ArtistResult = [];
    for(album of collection) {
        if(album.artist === artist ) {
           ArtistResult.push(album)
              
        }   
    }
    return ArtistResult
console.log('this is the argument', artist);
}
console.log(findByArtist('Kid Cudi'))
console.log(findByArtist('Crumb'))
console.log(findByArtist('bob'))




    // if (collection === ArtistResult) {
    // console.log(match);
    // }
    // else
    // {
    // console.log('no results found')
    // }
    
    


    

