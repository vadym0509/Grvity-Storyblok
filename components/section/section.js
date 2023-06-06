function getSection(block, isShowShadow, indicatorNum){
    var content = `${indicatorNum ? `<div id="section-indicator-container-${indicatorNum}" class="relative w-fit top-[15rem] z-[-1] font-bold text-[7.5rem] md:text-[12.5rem] leading-[6.25rem] md:leading-[11.25rem] text-blue-primary" style="box-shadow:black 80px 140px 70px -70px, black 0px -35px 40px -50px inset">${indicatorNum}</div>` : ``}
                   <div class="${indicatorNum ? 'mt-16' : 'mt-24'} ${block.full_width === 'boxed' ? 'md:inline-flex' : ''} ">
                        <div class="w-full bg-white ${block.full_width === 'boxed' ? 'lg:max-w-[31.25rem]' : 'lg:max-w-[43.25rem]'} mr-8">
                            <div class="font-bold text-[2.375rem] leading-tight text-charcoal">${block.blocks[0].headline}</div>
                            <div class="mt-6 text-lg leading-7 text-midnight-blue">${block.blocks[1].text.content[0].content[0].text}</div>
                            <div id="first-section-labels-container" class="${block.blocks[2].labels.length > 2 ? 'lg:inline-flex sm:inline-flex md:block' : 'sm:inline-flex'} mt-6 ">
                                <div class="mr-[0.3125rem] text-midnight-blue">${block.blocks[2].title}</div>
                                    <div class="inline-flex mt-6 ${block.blocks[2].labels.length > 2 ? 'lg:mt-0 sm:mt-0 md:mt-6' : 'sm:mt-0'}">`
    block.blocks[2].labels.map(function(item, index){
        content += getLabel(item)
    })
    content += `</div></div>
                    <div class="mt-6">`;
    content += getButton(block.blocks[3]);
                content += `</div>
                        </div>
                        ${block.cover.length > 0 ? `<div class="${block.full_width === 'boxed' ? 'mt-6 md:my-auto' : 'mt-6'} relative z-[2]"><img class="${isShowShadow ? 'drop-shadow-default' : 'w-full'}" src=${block.cover[0].filename} alt=${block.cover[0].alt}></div>` : ``}
                    </div>`;           
    return content;
}

function getSectionWithoutLabels(block, isShowShadow){
    var content = `<div class="mt-24 ${block.full_width === 'boxed' ? 'md:inline-flex' : ''} ">
                        <div class="w-full my-auto  lg:w-auto ${block.full_width === 'boxed' ? 'lg:max-w-[31.25rem]' : 'lg:max-w-[43.25rem]'}  mr-8">
                            <div class="font-bold text-[2.375rem] leading-tight text-charcoal">${block.blocks[0].headline}</div>
                            <div class="mt-6 text-lg leading-7 text-[#797979]">${block.blocks[1].text.content[0].content[0].text}</div>`
                            
                content += `</div>
                        ${block.cover.length > 0 ? `<div class="${block.full_width === 'boxed' ? 'mt-6 md:my-auto' : 'mt-6'}"><img class="${isShowShadow ? 'drop-shadow-default' : 'w-full'}" src=${block.cover[0].filename} alt=${block.cover[0].alt}></div>` : ``}
                    </div>`;           
    return content;
}