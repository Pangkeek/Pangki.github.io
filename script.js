const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenE = document.querySelectorAll('.hidden')
hiddenE.forEach((el) => observer.observe(el))



const scroll1Elements1 = document.querySelectorAll(".click1");
scroll1Elements1.forEach(element => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth"
    });
  });
});


const scroll1Elements2 = document.querySelectorAll(".click2");
scroll1Elements2.forEach(element => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 650,
      behavior: "smooth"
    });
  });
});


const scroll1Elements3 = document.querySelectorAll(".click3");
scroll1Elements3.forEach(element => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 1290,
      behavior: "smooth"
    });
  });
});


const scroll1Elements4 = document.querySelectorAll(".click4");
scroll1Elements4.forEach(element => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 50000,
      behavior: "smooth"
    });
  });
});