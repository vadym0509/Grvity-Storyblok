function setScrollSpeed(sectionNumber, deltaScrollY){
    const height = window.innerHeight;
    if(window.innerWidth < 768){
        deltaScrollY = deltaScrollY + 200;
    }
    if(window.innerWidth > 768 && window.innerWidth < 1024){
        deltaScrollY = deltaScrollY + 100;
    }
    if(window.innerWidth )
    if(window.scrollY < 10 / 937 * height + deltaScrollY){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = window.innerWidth > 768 ? "240px" : "140px"
    }
    if(window.scrollY > (10 / 937 * height + deltaScrollY) && window.scrollY < (460 / 937 * height+ deltaScrollY)){
        if(window.innerWidth > 768){
            document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = `${240 - (window.scrollY - deltaScrollY) * 2 / 7}px`;
        }else{
            document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = `${140 - (window.scrollY - deltaScrollY) * 1 / 7}px`;
        }
    }
    if(window.scrollY > (460 / 937 * height + deltaScrollY)){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = window.innerWidth > 768 ? "80px" : "75px";
    }
}