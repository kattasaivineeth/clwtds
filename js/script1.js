const moreContent4 = document.querySelector(".hide-4");
const seeMoreBtn4 = document.querySelector(".see-more-4");
moreContent4.style.display = 'none';
seeMoreBtn4.addEventListener('click', () => {
     
    // moreContent.classList.seeMoreBtn('see-more4');
    if(seeMoreBtn4.innerHTML === 'see more') {
        seeMoreBtn4.innerHTML = 'see less'; 
        moreContent4.style.display = "inline";       
    }
    else {
        seeMoreBtn4.innerHTML = 'see more';        
        moreContent4.style.display = "none";
    }
});
