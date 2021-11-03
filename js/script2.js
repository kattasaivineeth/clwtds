const moreContent5 = document.querySelector(".hide-5");
const seeMoreBtn5 = document.querySelector(".see-more-5");
moreContent5.style.display = "none";
seeMoreBtn5.addEventListener('click', () => {
     
    // moreContent.classList.seeMoreBtn('see-more5');
    if(seeMoreBtn5.innerHTML === 'see more') {
        seeMoreBtn5.innerHTML = 'see less'; 
        moreContent5.style.display = "inline";       
    }
    else {
        seeMoreBtn5.innerHTML = 'see more';        
        moreContent5.style.display = "none";
    }
});

const moreContent6 = document.querySelector(".hide-6");
const seeMoreBtn6 = document.querySelector(".see-more-6");
moreContent6.style.display = "none";
seeMoreBtn6.addEventListener('click', () => {
     
    // moreContent.classList.seeMoreBtn('see-more6');
    if(seeMoreBtn6.innerHTML === 'see more') {
        seeMoreBtn6.innerHTML = 'see less'; 
        moreContent6.style.display = "inline";       
    }
    else {
        seeMoreBtn6.innerHTML = 'see more';        
        moreContent6.style.display = "none";
    }
});

const moreContent7 = document.querySelector(".hide-7");
const seeMoreBtn7 = document.querySelector(".see-more-7");
moreContent7.style.display = "none";
seeMoreBtn7.addEventListener('click', () => {
     
    // moreContent.classList.seeMoreBtn('see-more7');
    if(seeMoreBtn7.innerHTML === 'see more') {
        seeMoreBtn7.innerHTML = 'see less'; 
        moreContent7.style.display = "inline";       
    }
    else {
        seeMoreBtn7.innerHTML = 'see more';        
        moreContent7.style.display = "none";
    }
});
