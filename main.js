const observer = new IntersectionObserver(entries => {
    entries.forEach (entry => {
        const picture = entry.target.querySelector('.fireside');
        console.log(picture)
        if (entry.isIntersecting) {
            picture.classList.add('picanimation')
            return;
        }
        picture.classList.remove('picanimation')
    })
})

observer.observe(document.querySelector('#slideshow'))

