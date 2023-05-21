function getSectionContainer(body){
    var content = '<div class="w-full mx-8 md:w-[719px] lg:w-[960px] xl:w-[1048px]">'
    content += getHeaderNav(body[0]);
    content += getHeroSection(body[1]);
    // content += getFirstSection();
    content += '</div>';
    return content;
}