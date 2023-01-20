
const observer = new IntersectionObserver(entries =>{
 entries.forEach (entry =>{

        const tile = entry.target.querySelector('.tile')
    
        if (entry.isIntersecting) {
            tile.classList.add('square-animation')
            return;
        }
        tile.classList.remove('square-animation')
    })
})


let tiles = document.querySelectorAll('.tilewrapper')
//observer.observe(document.querySelector('.tilewrapper'))

for (e of tiles ) {
    observer.observe(e)
}