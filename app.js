//welcome porfolio GSAP

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});


tl.to('.text', {y: '0%' , duration : 1, stagger: 0.25});
tl.to('.slider' , {y: "-100%" , duration : 1.5 , delay: 0.5})

tl.to('.intro' , {y: "-100%" , duration: 1}, "-=1");

tl.fromTo('nav' , {opacity: 0}, {opacity:1, duration: 1});




tl.fromTo('.welcome1 h3' , {opacity: 0}, {opacity:1, duration: 1.1});
tl.fromTo('.welcome1 h2' , {opacity: 0}, {opacity:1, delay:2.9, duration: 1.3});
tl.fromTo('.welcome2 p' , {opacity: 0}, {opacity:1, delay:3, duration: 1.8});



// for nav button

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   

    burger.addEventListener('click', () =>{

         //toggle nav
        nav.classList.toggle('nav-active');

         //animate links

       
    navLinks.forEach((link,index ) => {
       
        if(link.style.animation){

          
            link.style.animation = "";
        
        } else {
            
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/9 + 0.5}s`;
       
        }    
        });

      
        // burger animation 

        burger.classList.toggle('toggle');


    });


   
}

navSlide();






const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const trans = document.querySelectorAll('section div');

const gradients = ['rgb(255, 103, 1)'];


const options = {
    threshold : 0.4567
};


let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {

        const anim = () => {
            const sectons = document.querySelectorAll('section')[0];
            sectons.addEventListener('click' , (en) => {
               
                          
                if(en.style.animation){
        
                  
                   en.style.animation = "";
                
                } else {
                    
                   en.style.animation = `sectionFade 2s ease forwards 0s`;
               
                }   
                    // console.log(e.scrollHeight)
                    // console.log(window.pageYOffset)
                    
                    
                
            })
            
            };
            
            anim();
        
        
        const className = entry.target.className;
       
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        
        const gradientIndex = entry.target.getAttribute('data-index');
        
        const coords = activeAnchor.getBoundingClientRect();
        const directions ={
            height : coords.height ,
            width: coords.width ,
            top: coords.top ,
            left: coords.left 
        };

       
        if (entry.isIntersecting){
            bubble.style.setProperty('left' , `${directions.left}px`);
            bubble.style.setProperty('top' , `${directions.top}px`);
            bubble.style.setProperty("width" , `${directions.width}px`);
            bubble.style.setProperty("height" , `${directions.height}px`);
            
            bubble.style.background = gradients[gradientIndex];
          
            trans.forEach((link) => {
               
       
                if(link.style.animation){
        
                  
                    link.style.animation = "";
                
                } else {
                    
                    link.style.animation = `sectionFade 2s ease forwards 0s`;
               
                }    
                });   
           
            
        }

    });
    
}

sections.forEach(section => {
    observer.observe(section);
})





// section by click 
// const scroll = () => {
// const navLink = document.querySelectorAll('.nav-links li');


// navLink.forEach(e => {
    
//     e.addEventListener('click', ()=> {
//         console.log(e);
//         if (e.innerText = Home){
// scrollY;
//         }
//     })
// })

// }

//  scroll();

// const text = document.querySelector('.welcome1');

// const strText = text.textContent;
// const splitText = strText.split("");
// // text.textContent = '';

// for(let i=0; i< splitText.length; i++){
//     text.innerHTML += "<span>" + splitText[i] + '</span>';
// }

// let char=0;
// let timer = setInterval(onTick, 50);

// function onTick(){
//     const span =text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++;
//     if(char === splitText.length){
//         complete();
//         return;
//     }
// }

// function complete(){
//     clearInterval(timer);
//     timer = null;
// }

// const hom = document.querySelector('.home');
// const wel = document.querySelector('.welcome1');


// hom.addEventListener("mousemove", (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//     wel.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//   });
//   //Animate In
//   hom.addEventListener("mouseenter", (e) => {
//     wel.style.transform = `rotateY(50deg) rotateX(50deg)`;
//     //Popout
//     wel.style.transform = "translateZ(1500px)";
//     wel.style.transition = "all 0.5s ease";
  
//   });
//   //Animate Out
//   hom.addEventListener("mouseleave", (e) => {
//     wel.style.transition = "all 0.5s ease";
//     wel.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     //Popback
//     wel.style.transform = "translateZ(2000px)";
    
//   });
  


