function getSection(block){
    var content = `<div class="mt-56  ${block.full_width === 'boxed' ? 'md:inline-flex' : ''} ">\
                        <div class="w-full ${block.full_width === 'boxed' ? 'lg:max-w-[500px]' : 'lg:max-w-[692px]'}  mr-8">\
                            <div class="font-bold text-[38px] leading-tight text-[#2B2B2B]">${block.blocks[0].headline}</div>\
                            <div class="mt-6 text-lg leading-7 text-gray-700">${block.blocks[1].text.content[0].content[0].text}</div>\
                            <div id="first-section-labels-container" class="lg:inline-flex mt-6">\
                                <div class="mr-[5px]">${block.blocks[2].title}</div><div class="inline-flex mt-6 lg:mt-0">`
    block.blocks[2].labels.map(function(item, index){
        content += getLabel(item)
    })
    content += `</div></div>\
                    <div class="mt-6">`;
    content += getButton(block.blocks[3]);
                content += `</div>\
                        </div>\
                        <div class="my-auto ${block.full_width === 'boxed' ? 'mt-0' : 'mt-6'}"><img src=${block.cover.filename} alt=${block.cover.alt}></div>\
                    </div>`;           
    return content;
}