function getCard(block){
    var content = `<div class="mt-12 w-full py-6 px-6 rounded-[20px] bg-white drop-shadow-card">
                        <div class="sm:inline-flex">
                            <div class="mr-6 font-bold text-[1.625rem] text-midnight-blue">${block.title}</div>
                            <div class="mt-2 sm:m-auto w-fit">`
                            content += getLabel(block.label[0]);
                content += `</div>
                        </div>
                        <div class="mt-6 text-lg leading-7 text-midnight-blue">${block.description}</div>
                        <div class="flex flex-wrap mt-6">`
            block.list.map(function(item, index){
                content += `<div class="inline-flex w-full sm:w-1/2 mt-[0.6875rem]">
                                <img class="w-[14px] h-[11px] mt-[0.625rem] mr-[0.6rem]" src="${block.list_indicator.filename}" alt="${block.list_indicator.alt}">
                                <div class="text-[1rem] leading-7 text-midnight-blue">${item.text.content[0].content[0].text}</div>
                            </div>`
            })
            if(block.detail_url.url) content += `<div class="mt-2 md:mt-4 flex w-full justify-end"><a href="${block.detail_url.url}" class="font-semibold text-[0.9375rem] text-blue-primary hover:underline">See details</a></div>`            
            content += `</div>`;    
        content += `</div>`;
    return content;
}