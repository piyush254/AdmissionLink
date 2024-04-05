const items = [
  {
    picture:
      "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "I am a boy",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    picture:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heading: "This is my laptop",
    content:
      "Make today better by focusing on selfcare connecting with loved ones and pursuing your passions Take time",
  },
  {
    picture:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Do Fun",
    content:
      "and engage in physical activity. Reach out to friends or family for support and laughter. Set aside time",
  },
];

const colleges = [
  {
    picture:
      "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "IITM",
  },
  {
    picture:
      "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Anna University",
  },
  {
    picture:
      "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Loyal college",
  },
  {
    picture:
      "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Asian college",
  },
  {
    picture:
      "https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "SRIG",
  },
  {
    picture:
      "https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Madras Christan college",
  },
  {
    picture:
      "https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "IISM",
  },
  {
    picture:
      "https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Presidency College",
  },
  {
    picture:
      "https://images.pexels.com/photos/1025401/pexels-photo-1025401.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "SIMT",
  },
  {
    picture:
      "https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Vit",
  },
  {
    picture:
      "https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "PURDUE UNIVERSITY",
  },
  {
    picture:
      "https://images.pexels.com/photos/2517765/pexels-photo-2517765.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "RSB",
  },
];

const courses = [
  {
    name: "CSE",
    image : "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "MS",
    image : "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "MD",
    image : "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "BDMS",
    image : "https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "PHARMACY",
    image : "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "PHD",
    image : "https://images.pexels.com/photos/1699419/pexels-photo-1699419.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "CA",
    image : "https://images.pexels.com/photos/4386288/pexels-photo-4386288.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "LLB",
    image : "https://images.pexels.com/photos/6077114/pexels-photo-6077114.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "MBBS",
    image : "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "CIVIL",
    image : "https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  // {
  //   name: "VITEEE",
  //   image : "./logo1/jpg"
  // },
  // {
  //   name: "AIEEE",
  //   image : "./logo1/jpg"
  // },
];



let cards = document.querySelector(".maincard");
let collegediv = document.querySelector(".colleges");
let collegecourse = document.querySelector(".collegecourse");

// window.addEventListener("scroll", function () {
//   let content = document.querySelector("nav");
//   let scrollPosition = window.scrollY;

//   if (scrollPosition >= (20 * window.innerHeight) / 100) {
//     // when scrolled 10vh
//     content.style.backgroundColor = "#e1dfdf"; // change background color
//   } else if (scrollPosition <= (20 * window.innerHeight) / 100) {
//     // when scrolled 10vh
//     content.style.backgroundColor = "#00000000";
//   }
// });

items.forEach((item) => {
  cards.innerHTML += `<div class="card my-card">
  <img src= ${item.picture}alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${item.heading}</h5>
    <p class="card-text">${item.content}</p>
  </div>
 </div>`;
});


document.querySelector('.Apply-now').addEventListener('click', function() {
  document.getElementById('myForm').querySelector('input[type="text"]').focus();
  console.log("i am clicked");

  const formDiv = document.getElementById('myForm');
  formDiv.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.arrow').addEventListener('click', function() {
     window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scrolling behavior
    });
});



document.querySelector('.mygetstartedbutton').addEventListener('click', function() {
    document.getElementById('myForm').querySelector('input[type="text"]').focus();

    const formDiv = document.getElementById('myForm');
    formDiv.scrollIntoView({ behavior: 'smooth' });
});



colleges.forEach((college) => {
  collegediv.innerHTML += `<div class="college">
    <div class="college-photo-rapper">
    <div class="College-photo" style="background-image: url(${college.picture});">
    </div></div>
    <h3> ${college.name}</h3>
    <button type="button" class="btn btn-warning mybtnforapply">APPLY NOW</button>
  </div>`;
});
courses.forEach((course) => {
  collegecourse.innerHTML += `<div class="myCourses">
  <div class="pictureofCourse">
      <div id="thisPicture" style="background-image: url(${course.image});" ></div>
  </div>
  <div class="coursePicture">
    <h3>${course.name}</h3>
  </div>`;
});

const mydiv = document.querySelector(".arrow")

const mybtnforapply = document.querySelectorAll(".mybtnforapply")

console.log(mybtnforapply)


mybtnforapply.forEach((btn) =>{
  btn.addEventListener('click',()=>
  {
    document.getElementById('myForm').querySelector('input[type="text"]').focus();
      // smooth scrolling after click
      const formDiv = document.getElementById('myForm');
      formDiv.scrollIntoView({ behavior: 'smooth' });
  })})



