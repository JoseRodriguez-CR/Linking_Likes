// verifying that JS file was linked properly
console.log("This is linked correctly!")


//it works for one, it adds likes over the text using querySelectorAll
/*
function addLikes(event){
    let numSpan = document.querySelectorAll('.counter');
    console.log( numSpan);

    let likes = numSpan[0].innerText;
    console.log( likes);
    numLikes = Number( likes );
    numLikes = numLikes +1;
    console.log( numLikes);
    numSpan[0].innerText = numLikes;
}

let numSpan = document.querySelector('.likeBtn');
numSpan.addEventListener("click", addLikes);
*/


/*

//it works for one, it adds likes over the text using querySelector

function addLikes(event){
    let numSpan = document.querySelector('.counter');
    console.log( numSpan);
    let likes = numSpan.innerText;
    console.log( likes);
    numLikes = Number( likes );
    numLikes = numLikes +1;
    console.log( numLikes);
    numSpan.innerText = numLikes;
}

let numSpan = document.querySelector('.likeBtn');
numSpan.addEventListener("click", addLikes);

*/



// it works for one as well, but following the video 
// and using onclick over the HTML file
/*
function addLikes(){
    likes = likes +1;
    likesSpan.innerText = likes;

}
let likes = 9;
let likesSpan = document.querySelector('.counter');
console.log( likesSpan);

*/



// it works for all of them, but I could not achieve it 
// using addEventListener, I had to send the index with
// onclick in order to tell the for loop which button was
// add likes



let likeArray = [];
let idArray = [];
let numSpan = document.querySelectorAll('.counter');
for(let i =0; i<= numSpan.length-1; i++){
    likeArray.push(numSpan[i].innerText);
}
console.log(likeArray);

function addLikes(index){
    for(let i =0; i<= likeArray.length-1; i++){
        if( index === i){
            likeArray[i]++;
            console.log(likeArray);
            numSpan[i].innerText = likeArray[i];
            
        }
    }
}



