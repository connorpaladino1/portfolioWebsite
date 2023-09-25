
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.headerText')
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.subTitle')
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenElements3 = document.querySelectorAll('.projectsList')
hiddenElements3.forEach((el) => observer.observe(el));

const hiddenElements4 = document.querySelectorAll('.workList')
hiddenElements4.forEach((el) => observer.observe(el));

const hiddenElements5 = document.querySelectorAll('.aboutCol2')
hiddenElements5.forEach((el) => observer.observe(el));

const hiddenElements6 = document.querySelectorAll('.ref')
hiddenElements6.forEach((el) => observer.observe(el));