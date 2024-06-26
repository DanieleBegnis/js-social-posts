//Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
//Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
//Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
//Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
 
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//ciclo che stampa tutti i post
const mainContainer = document.querySelector('#container');
posts.forEach((singlePost) => {
    const postTemplate = generatePostTemplate(singlePost);
    mainContainer.innerHTML += postTemplate;
});

//funzione che genera il post
function generatePostTemplate(singlePost) {
    const {id, content, media, author, likes, created} = singlePost;
    const postTemplate =`
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${profilePictureImage(author.image)}                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${standardiseDate(created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src=${media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid=${id}>
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
    return postTemplate;
}

//aggiungo event listener su mi piace
const allLikes = document.querySelectorAll('.js-like-button');
const allLikesCounter = document.querySelectorAll('.js-like-counter');
let postsLiked = []


//se schiaccio mi piace il like diventa verde e pusho il post in un array separato
allLikes.forEach((likeButton, index, likes) => {
    likeButton.addEventListener('click', function() {
        const relatedLikeCounter = allLikes[index];
        relatedLikeCounter.classList.add('like-button--liked');
        //  TODO ADD NUMBER LIKE COUNTER
        postsLiked.push(posts[index].id)
        console.log(postsLiked)
    });
});

//creo funzione per gestire immagine di profilo per chi non ce l'ha
function profilePictureImage(image) {
    let profilePictureImage;
    if(image) {
        profilePictureImage = `<img class="profile-pic" src="${image}" alt="Phil Mangione">`
    } else {
        profilePictureImage = `<span class="profile-pic-default">LC</span>`
    }
    return profilePictureImage;
}

//TODO UPDATE NEWDATE 
//creo funzione per invertire ordine data
function standardiseDate(created) {
    const dateArray = created.split('-');
    const [year, day, month] = dateArray;
    const newDate = `${day} ${month} ${year}`;
    console.log(newDate)
    return newDate;
}