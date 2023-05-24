function setScrollSpeed(sectionNumber, deltaScrollY){
    if(window.innerWidth < 768){
        deltaScrollY = deltaScrollY * 1.1;
    }
    if(window.scrollY < 40 + deltaScrollY){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = "240px";
    }
    if(window.scrollY > (40 + deltaScrollY) && window.scrollY < (440 + deltaScrollY)){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = `${240 - (window.scrollY - deltaScrollY) * 2 / 7}px`;
    }
    if(window.scrollY > (440 + deltaScrollY)){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = window.innerWidth > 768 ? "80px" : "110px";
    }
}