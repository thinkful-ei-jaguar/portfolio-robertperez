import $ from 'jquery';
import './index.css';




const name = function(){
return `
    <div class="tea">
    <h1>Robert Perez</h1>
    </div>
    `
}

const navbar=function(){
    return `
    <ul class="container">
        <li class="circle"><a class="aligner" href="#home">Home</a></li>
        <li class="circle a"><a class="aligner" href="#projects">Projects</a></li>
        <li class="circle b"><a class="aligner" href="#contact">Contact</a></li>
    </ul>
    `

}
//<li class="circle c"><a class="aligner" href="#resume">Resume</a></li>

const aboutmepage=function(){
return `
    <div class = "aboutformat">
    <div class ="info">
        <h2>About Me<h2>
        <p>I'm a Software Engineer with an Associates Degree in Computer Science.</p>
        <p>I like being a developer because it reminds me of Legos and rather than small 
        <p>toy brick to make a house its unseen digital blocks that I can build with.</p>
        <p>Projects I would like to help with are more ease of use since technnology is growing</p>
        <p>more and more. I like how easier life has been by ordering online or whole taxi service using my phone</p>
        <h2>Hobbies<h2>
        <p>Some hobbies I have is playing and or hearing music that I like.</p>
        <p>I like reading manga/manhwua and like going through different stories.</p>
        <p>I also like to play smash bros.</p>
        <p>One of my favorite dishes in the world is orange tofu,I don't know why but I get it everytime for some reason.</p>
        
    </div>
    <img class="line" src="https://www.veganricha.com/wp-content/uploads/2019/01/Vegan-Orange-Tofu-veganricha-6124.jpg"></img>
    </div>
`
}
const projectspage=function(){
    return `
    <div class="projectsformat">
        <h1>Projects</h1>
        <div class ="projects" onclick="window.open('https://thinkful-ei-jaguar.github.io/quiz-appRobert-Kristofer/','mywindow');" style="cursor: pointer;">
            <h1>Quiz-App<h1>

            <p class="hidden">
            <br>This is a simple quiz application about Sound Physics.
            <br>The user can choose between answer choices and submit to see next question to be answered.
            <br>Jquery,HTML,and CSS.
            </p>
            <button  type="button" class="left" onclick="window.open('https://github.com/thinkful-ei-jaguar/quiz-appRobert-Kristofer','mywindow');">Repo</button>
        </div>
        
    </div>
    `
}
const contactpage=function(){
    return `
    <div class ="contactform">
    <h1>Contact<h1>
    <h2>Email Adress:</h2>
    <p>raperez523@gmail.com</p>
    <h2>Github:</h2>
    <p>ralexblue</p>
    <//div>
    `
}
/*const resumepage=function(){
    return `
    <h2>Resume<h2>
    <p>this is where all the resume go</p>
    `
}*/
const thebody=function(){
    const about=aboutmepage();
    $('.body').html(about);
    $("body").css("background-color", "#2EB6E8");
    $( "ul li" ).click(function( event ) {
        var target = $( event.target ).text();
        console.log(target);
        if ( target == 'Home' ) {
            const about=aboutmepage();
             $('.body').html(about);
             $("body").css("background-color", "#2EB6E8");
        }
        else if ( target == 'Projects' ) {
            const projects = projectspage();
            $('.body').html(projects);
            $("body").css("background-color", "#419AFF");
        }
        else if(target==`Contact`){
            const contact = contactpage();
            $('.body').html(contact);
            $("body").css("background-color", "#2E54E8");
        }
        else if(target==`Resume`){
            const resume = resumepage();
            $('.body').html(resume);
            $("body").css("background-color", "#499BE3");
        }
      });
}


const thetop = function(){
    let htmltop='';
    htmltop=name()+navbar();
    $('.head').html(htmltop);
}


const main = function(){
    thetop();
    thebody();
}



$(main);

