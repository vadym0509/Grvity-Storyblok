function getSectionContainer(body){
    document.addEventListener("scroll", function(e){
        console.log(window.scrollY)
        if(window.scrollY > 820){
            document.getElementById("sticky-header-nav").style.transform = "translateY(0px)";
        }else{
            document.getElementById("sticky-header-nav").style.transform = "translateY(-90px)";
        }
        setIndicatorsSpeed("01", -150);
        setIndicatorsSpeed("02", 400);
        setIndicatorsSpeed("03", 1600);
        setIndicatorsSpeed("04", 2200);
        setIndicatorsSpeed("05", 3400);
        setIndicatorsSpeed("06", 3900);

        //set vertical typography speed
        setVerticalTypoSpeed(1340, 1560, "01");
        setVerticalTypoSpeed(2200, 3500, "02");
        setVerticalTypoSpeed(4150, 5100, "03");
    })
    var content = '<div id="section-container" class="w-full mx-8 md:w-[719px] lg:w-[960px] xl:w-[1048px]">';
    content += getHeaderNav(body[0]);
    content += getStickyHeaderNav(body[0]);
    content += getDesktopMenuContent(body[9].items[0]);
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