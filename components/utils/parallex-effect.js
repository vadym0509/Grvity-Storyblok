function setScrollSpeed(sectionNumber, deltaScrollY){
    const height = window.innerHeight;
    if(window.innerWidth < 768){
        deltaScrollY = deltaScrollY * 1.1;
    }
    if(window.innerWidth > 768 && window.innerWidth < 1024){
        deltaScrollY = deltaScrollY * 1.2;
    }
    let gammaScrollY = deltaScrollY / height;
    let deltaWindowScrollY = window.scrollY / height;
    if(deltaWindowScrollY < 40 / 937 + gammaScrollY){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = "240px";
    }
    if(deltaWindowScrollY > (40 / 937 + gammaScrollY) && deltaWindowScrollY < (440 / 937 + gammaScrollY)){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = `${240 - (window.scrollY - deltaScrollY) * 2 / 7}px`;
    }
    if(deltaWindowScrollY > (440 / 937 + gammaScrollY)){
        document.getElementById(`section-indicator-container-${sectionNumber}`).style.top = window.innerWidth > 768 ? "80px" : "110px";
    }
}