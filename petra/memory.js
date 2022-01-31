// constant list of animals, starting in lexicographic order
const animals = ["Ant", "Bee", "Camel", "Duck", "Eagle", "Frog", "Grasshopper"]

// empty list of images. this will hold all information regarding the images as
// well as a random number
let images = []
for (let animal of animals) {
    images.push({
        name: animal,
        rNumber: Math.random() // no rounding
    })
}

// helper function to print out the content of the images list
function printImages(toPrint) {
    console.log(toPrint) // just a header
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    images.forEach(image => {
        // template string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        // same as 'name: ' + image.name + ', rNumber: ' + image.rNumber
        console.log(`name: ${image.name}, rNumber: ${image.rNumber}`)
    })
}

printImages("\nAssigned random numbers to animals:")

// sort function of arrays. it compares two elements in the list, x and y. If x
// shall go first the return value must be < 1, else > 1.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
images.sort((x, y) => {
    return x.rNumber - y.rNumber
})

printImages("\nSorted by random Number:")
