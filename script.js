const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.ass("show")
        }else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenE = document.querySelectorAll('hidden')
hiddenE.forEach((el) => observer.observe(el))