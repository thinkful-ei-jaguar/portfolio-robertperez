import $ from 'jquery';
import './index.css';



const name = function(){
return `
    <h1>Robert Perez</h1>
`
}

const navbar=function(){
    return `
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
    </ul>
    `
}

const aboutmepage=function(){
return `
    <h2>About me<h2>
    <p>this is where all the about me stuff is gonna be</p>
`
}
const projectspage=function(){
    return `
    <h2>Projects<h2>
    <p>this is where all the projects go</p>
    `
}
const contactpage=function(){
    return `
    <h2>Contact<h2>
    <p>this is where all the contact go</p>
    `
}
const resumepage=function(){
    return `
    <h2>Resume<h2>
    <p>this is where all the resume go</p>
    `
}
const thebody=function(){
    const about=aboutmepage();
    $('.body').html(about);
    $( "ul li" ).click(function( event ) {
        var target = $( event.target ).text();
        console.log(target);
        if ( target=='Home' ) {
            const about=aboutmepage();
             $('.body').html(about);
        }
        else if ( target == 'Projects' ) {
            const projects = projectspage();
            $('.body').html(projects);
        }
        else if(target==`Contact`){
            const contact = contactpage();
            $('.body').html(contact);
        }
        else if(target==`Resume`){
            const resume = resumepage();
            $('.body').html(resume);
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

