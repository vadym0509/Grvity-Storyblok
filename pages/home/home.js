function getHomeSections(body){
    var content = '';
    content += getHeaderNav(body[0]);
    content += getStickyHeaderNav(body[0]);
    content += getDesktopMenuContent(body[1].items[0]);
    content += getHeroSection(body[3]);
    content += getSection(body[4], true, "01");
    content += getSection(body[5], true, "02");
    content += getSection(body[6], false, "03");
    content += getSection(body[7], false, "04");
    content += getSection(body[8], false, "05");
    content += getSection(body[9], false, "06");
    return content;
}
