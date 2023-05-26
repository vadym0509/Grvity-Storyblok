function getSection(block, isShowShadow, indicatorNum){
    var content = `<div id="section-indicator-container-${indicatorNum}" class="relative w-fit top-[240px] z-[-1] font-bold text-[120px] md:text-[200px] leading-[100px] md:leading-[180px] text-[#5B7FFF]" style="box-shadow:black 80px 140px 70px -70px, black 0px -35px 40px -50px inset">${indicatorNum}</div>
                   <div class="mt-16 ${block.full_width === 'boxed' ? 'md:inline-flex' : ''} ">\
                        <div class="w-full bg-white ${block.full_width === 'boxed' ? 'lg:max-w-[500px]' : 'lg:max-w-[692px]'}  mr-8">\
                            <div class="font-bold text-[38px] leading-tight text-[#2B2B2B]">${block.blocks[0].headline}</div>\
                            <div class="mt-6 text-lg leading-7 text-gray-700">${block.blocks[1].text.content[0].content[0].text}</div>\
                            <div id="first-section-labels-container" class="${block.blocks[2].labels.length > 2 ? 'lg:inline-flex sm:inline-flex md:block' : 'sm:inline-flex'} mt-6 ">\
                                <div class="mr-[5px]">${block.blocks[2].title}</div><div class="inline-flex mt-6 ${block.blocks[2].labels.length > 2 ? 'lg:mt-0 sm:mt-0 md:mt-6' : 'sm:mt-0'}">`
    block.blocks[2].labels.map(function(item, index){
        content += getLabel(item)
    })
    content += `</div></div>\
                    <div class="mt-6">`;
    content += getButton(block.blocks[3]);
                content += `</div>\
                        </div>\
                        <div class="${block.full_width === 'boxed' ? 'mt-6 md:my-auto' : 'mt-6'} bg-white"><img class="${isShowShadow ? 'drop-shadow-xl' : 'w-full'}" src=${block.cover.filename} alt=${block.cover.alt}></div>\
                    </div>`;           
    return content;
}