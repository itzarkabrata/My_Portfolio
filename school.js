// slider Menubar


// when the width of screen is less than 800px then the following properties will work
if(window.innerWidth < "600"){
    document.querySelector("header>.menu>#items>#item2").addEventListener("click",()=>{
        if(document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display == "none"){
            document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display = "unset";
            document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display = "none";
        }
        else{
            document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display = "none";
            }
        });
    document.querySelector("header>.menu>#items>#item3").addEventListener("click",()=>{
        if(document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display == "none"){
            document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display = "unset";
            document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display = "none";
        }
        else{
            document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display = "none";
        }
        });
    document.querySelector("header>.menu>#items>#item4").addEventListener("click",()=>{
        if(document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display == "none"){
            document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display = "unset";
            document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display = "none";
        }
        else{
            document.querySelector("header>.menu>#items>#item4>#subProjects_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item2>#subAcademic_phone").style.display = "none";
            document.querySelector("header>.menu>#items>#item3>#subDownloads_phone").style.display = "none";
        }
        });    
}
// when the width of screen is greater than 800px then the following properties will work
else{
    document.querySelector("header>.menu>#items>#item2").addEventListener("mouseover",()=>{
        document.querySelector("header>.menu>#subAcademic").style.filter = "opacity(1)";
        document.querySelector("header>.menu>#subDownloads").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subProjects").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subAcademic").style.visibility = "unset";
        document.querySelector("header>.menu>#subDownloads").style.visibility = "hidden";
        document.querySelector("header>.menu>#subProjects").style.visibility = "hidden";
    });
    document.querySelector("header>.menu>#items>#item3").addEventListener("mouseover",()=>{
        document.querySelector("header>.menu>#subDownloads").style.filter = "opacity(1)";
        document.querySelector("header>.menu>#subAcademic").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subProjects").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subDownloads").style.visibility = "unset";
        document.querySelector("header>.menu>#subAcademic").style.visibility = "hidden";
        document.querySelector("header>.menu>#subProjects").style.visibility = "hidden";
    });
    document.querySelector("header>.menu>#items>#item4").addEventListener("mouseover",()=>{
        document.querySelector("header>.menu>#subProjects").style.filter = "opacity(1)";
        document.querySelector("header>.menu>#subAcademic").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subDownloads").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subProjects").style.visibility = "unset";
        document.querySelector("header>.menu>#subAcademic").style.visibility = "hidden";
        document.querySelector("header>.menu>#subDownloads").style.visibility = "hidden";
    });
    document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
        document.querySelector("header>.menu>#subAcademic").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subAcademic").style.visibility = "hidden";
    });
    document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
        document.querySelector("header>.menu>#subDownloads").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subDownloads").style.visibility = "hidden";
    });
    document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
        document.querySelector("header>.menu>#subProjects").style.filter = "opacity(0)";
        document.querySelector("header>.menu>#subProjects").style.visibility = "hidden";
    });
}








//Time of window scrolling elivation of navbar

window.addEventListener("scroll",()=>{
    document.querySelector("header>.hamburger").classList.toggle("sticky",window.scrollY > 0);
    document.querySelector("header>.menu").classList.toggle("stickyMenu",window.scrollY > 0);
});



// click to show menubar , again click to hide

let icon = document.querySelector("header>.menu");
document.querySelector("header>.hamburger>#h_icon").addEventListener("click",()=>{
    if(icon.style.transform == "translateX(-450px)"){
        icon.style.transform = "translateX(0px)";
        icon.style.filter = "opacity(1)";
    }
    else{
        icon.style.transform = "translateX(-450px)";
        icon.style.filter = "opacity(0)";
    }
});
document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
    document.querySelector("header>.menu").style.transform = "translateX(-450px)";
    icon.style.filter = "opacity(0)";
});
