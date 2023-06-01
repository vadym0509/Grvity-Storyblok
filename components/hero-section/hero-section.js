function getHeroSection(block){
    var content = `<div>
                    <div class="absolute overflow-hidden inset-0 -z-[1]">
                        <div class="h-[55rem] w-screen bg-gradient-to-r from-red-500 to-blue-500 transform -rotate-[10deg] scale-x-[2] -translate-x-10 -translate-y-3/4 xl:-translate-y-2/3 2xl:-translate-y-2/4"></div>
                    </div>`
    content += getSectionWithScreenshot(block.section[0]);
    content += '</div>';
    return content;
}