function getHeroSection(block){
    console.log(block, "block");
    var content = '<div id="hero-section" class="block pl-7">\
                            <div class="absolute overflow-hidden inset-0" style="z-index: -1;">\
                                <div class="h-[55rem] w-screen bg-gradient-to-r from-red-500 to-blue-500 transform -rotate-[10deg] scale-x-150 -translate-y-2/4"></div>\
                            </div>'
    content += getHeaderNav(block.header[0]);
    content += getSectionWithScreenshot(block.section[0]);
    content += '</div>';
    return content;
}