const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links'); 

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-links");
})

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "Resturant Founder",
      img:
        "./Images/founder.jpg",
      
        
    },
    {
      id: 2,
      name: "anna johnson",
      job: "Manager",
      img:
        "./Images/manager.jpg",
     
    },
    {
      id: 3,
      name: "peter jones",
      job: "Chief Chef",
      img:
        "./Images/pic2.jpg",
    
    },
    {
      id: 4,
      name: "Tito Mboweni",
      job: "Chef",
      img:
        "./Images/pic3.jpg",
      
    },
  ];

  const img = document.getElementById('person-img');
const author = document.getElementById('author'); 
const job = document.getElementById('job'); 
const info = document.getElementById('info'); 

const preBtn = document.querySelector('.prev-btn'); 
const nextBtn = document.querySelector('.next-btn'); 
const randomBtn = document.querySelector('.random-btn'); 

let currentItem = 0; 

//Load initial person 
window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentItem]; 
    img.src = item.img; 
    author.textContent = item.name;
    job.textContent = item.job; 
    info.textContent = item.text;  

});

//show person based on item
function showPerson(person){
  const item = reviews[person]; 
  img.src = item.img; 
  author.textContent = item.name;
  job.textContent = item.job; 
  info.textContent = item.text;  
}

//show next person 

nextBtn.addEventListener('click',function(){
  currentItem++; 
  if(currentItem > reviews.length-1){
    currentItem=0; 
  }
  showPerson(currentItem);
}); 

preBtn.addEventListener('click',function(){
    currentItem--; 
    if(currentItem < 0){
      currentItem = reviews.length-1; 
    }
    showPerson(currentItem); 
}); 