console.log("Hello World");


let project_data = document.getElementsByClassName("projectcontent")[0];

(async function project() {
    let res = await fetch("./Projects/projects.json");
    var Data = await res.json();
    let count = 1;
    for(let i of Data.list){

        let a = document.createElement("a");
        a.setAttribute("href",i.githubLink);
        a.setAttribute("target","_main"+(count+3));

        let new_div = document.createElement("div");
        new_div.setAttribute("id","pro"+count);
        new_div.setAttribute("data-aos","zoom-in-up");
        new_div.setAttribute("data-aos-duration","800");
        new_div.setAttribute("data-aos-delay","150");

        let image = document.createElement("img");
        image.setAttribute("src",i.image);
        image.setAttribute("alt",i.name);
        image.setAttribute("height","200px");
        image.setAttribute("width","300px");

        let h = document.createElement("h3");
        h.innerHTML = i.name;

        let p = document.createElement("p");
        p.innerHTML = i.techStack;

        new_div.appendChild(image);
        new_div.appendChild(h);
        new_div.appendChild(p);

        a.appendChild(new_div);

        project_data.appendChild(a);

        count = count + 1;
    }
})();
// my photo and shape animation part

let myphoto = document.querySelector(".container>.facing>#photo>#myphoto");
let myshape = document.querySelector(".container>.facing>#photo>#shape");
//At time of hovering photo and shape
myphoto.addEventListener("mouseover",()=>{
    myphoto.style.transform = "translateX(-40px)";
    myshape.style.transform = "translateY(40px)";
});
myphoto.addEventListener("mouseleave",()=>{
    myphoto.style.transform = "translateX(0px)";
    myshape.style.transform = "translateY(0px)";
});
//At the time of hovering My Name "Arkabrata Chandra"
document.querySelector(".container>.facing>#info>#info2").addEventListener("mouseover",()=>{
    document.querySelector(".container>.facing>#info>#info2").style.cursor = "context-menu";
    myphoto.style.transform = "translateX(-40px)";
    myshape.style.transform = "translateY(40px)";
});
document.querySelector(".container>.facing>#info>#info2").addEventListener("mouseleave",()=>{
    myphoto.style.transform = "translateX(0px)";
    myshape.style.transform = "translateY(0px)";
});


//Time of window scrolling elivation of navbar

window.addEventListener("scroll",()=>{
    document.querySelector("header>.container>.navigation").classList.toggle("sticky",window.scrollY > 0);
});


//Academic Section animation part

let doc1 = document.querySelector("main>.academics>.school-college>a>#school>div");
let explore1 = document.querySelector("main>.academics>.school-college>a>#school>#explore");
//For School part
doc1.addEventListener("mouseover",()=>{
    explore1.style.left = "42%";
    explore1.style.cursor = "pointer";
    explore1.style.transitionDuration = "0.15s";
    document.querySelector("main>.academics>.school-college>a>#school").style.boxShadow = "2px 2px 8px black";
});
doc1.addEventListener("mouseleave",()=>{
    explore1.style.left = "-22%";
    explore1.style.transitionDuration = "0.15s";
    document.querySelector("main>.academics>.school-college>a>#school").style.boxShadow = "none";
});
//For College part
let doc2 = document.querySelector("main>.academics>.school-college>a>#college>div");
let explore2 = document.querySelector("main>.academics>.school-college>a>#college>#explore");

doc2.addEventListener("mouseover",()=>{
    explore2.style.left = "42%";
    explore2.style.cursor = "pointer";
    explore2.style.transitionDuration = "0.15s";
    document.querySelector("main>.academics>.school-college>a>#college").style.boxShadow = "2px 2px 8px black";
});
doc2.addEventListener("mouseleave",()=>{
    explore2.style.left = "-22%";
    explore2.style.transitionDuration = "0.15s";
    document.querySelector("main>.academics>.school-college>a>#college").style.boxShadow = "none";
});


