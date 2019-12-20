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
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
    </ul>
    `
}


/*const thebody{


    if()
}*/


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

