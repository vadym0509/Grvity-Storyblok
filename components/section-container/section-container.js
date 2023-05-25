function getSectionContainer(body){
    document.addEventListener("scroll", function(e){
        if(window.scrollY > 820){
            document.getElementById("fixed-header-nav").style.transform = "translateY(0px)";
        }else{
            document.getElementById("fixed-header-nav").style.transform = "translateY(-90px)";
        }
        setScrollSpeed("01", 0);
        setScrollSpeed("02", 540);
        setScrollSpeed("03", 1680);
        setScrollSpeed("04", 2300);
        setScrollSpeed("05", 3400);
        setScrollSpeed("06", 4000);
    })
    var content = '<div id="section-container" class="w-full mx-8 md:w-[719px] lg:w-[960px] xl:w-[1048px]">';
    content += getHeaderNav(body[0]);
    content += getFixedHeaderNav(body[0]);
    content += getHeroSection(body[1]);
    content += getSection(body[2], true, "01");
    content += getSection(body[3], true, "02");
    content += getSection(body[4], false, "03");
    content += getSection(body[5], false, "04");
    content += getSection(body[6], false, "05");
    content += getSection(body[7], false, "06");
    content += '</div>';
    return content;
}