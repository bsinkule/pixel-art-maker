
document.addEventListener('DOMContentLoaded', function() {
    
const grid = document.querySelector('#grid')  
let currentColor

for (let i=0; i<480; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    cell.addEventListener('click', (event) => {
        event.target.style.backgroundColor = currentColor
        event.target.style.borderColor = currentColor
})

    grid.appendChild(cell)
}

const colorPalette = document.querySelector('.color-palette')
const colors = ['red', 'blue','yellow','green','orange','tomato']

colors.forEach(color => {
    const brush = document.createElement('span')
    brush.classList.add('brush')
    brush.style.backgroundColor = color
    brush.dataset.color = color

    brush.addEventListener('click', (event) => {
        currentColor = event.target.dataset.color
    })

    colorPalette.appendChild(brush)
})






    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // var plat = document.querySelectorAll('.pal');
    // var makeColor = function(event) {
    //     // for (var i=0; i<plat.length; i++){
    //     //     plat[i].classList.add()
    //     // }    
    // }
    // plat.addEventListener('click', makeColor)

// ---------------------------------

    // var section = document.querySelector('.container');

    // var redClick = function(event) {
         
    //     event.target.classList.add('red')
    // }
    
    // section.addEventListener('click', redClick)

// ---------------------------------
 
// var other = document.querySelector('.other')
// var colorSelect = function() {
//     for (i=0; i<64; i++){
//         createNode(div)
//         }

//         function createNode(element) {
//             return document.createElement(element);
//           }
          
//           function append(parent, element) {
//             return parent.appendChild(element);
//           }
    
// }
// other.addEventListener('click', colorSelect)




});