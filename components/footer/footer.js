function getFooter(body){
    var content = `<div id="footer-container" class="w-full flex mt-14 sm:mt-18 justify-center bg-[#F6F9FC]">
                        <div class="my-24 mx-8 w-full md:w-[719px] lg:w-[960px] xl:w-[1048px]">
                            <div class="sm:inline-flex w-full">
                                <a href="../home/home.html" class="mr-0 sm:mr-10 md:mr-16 lg:mr-24 w-full sm:w-[126px] md:w-[158px] lg:w-auto">
                                    <img class="mt-3" src="${body.footer_logo.filename}" alt="${body.footer_logo.alt}">
                                    <div class="sm:hidden sm:block text-base text-[#797979] mt-4 mb-6">${new Date().getFullYear()}&nbsp;&copy;&nbsp;GRVITY</div>
                                </a>
                                <div class="inline-flex w-full sm:w-3/4">
                                    <div class="w-1/2 sm:w-1/3 mr-14 sm:mr-0">`
                                        content += getFooterItems(body.blocks[0]);
                        content += `</div>
                                    <div class="sm:inline-flex w-1/2 sm:w-2/3">`
                                        content += getFooterItems(body.blocks[1]);
                                        content += '<div class="mt-6 sm:mt-0">'
                                        content += getFooterItems(body.blocks[2]);
                                        content += '</div>'
                        content += `</div>
                                </div>
                            </div>
                        <div class="hidden sm:block text-base text-[#797979] mt-4">${new Date().getFullYear()}&nbsp;&copy;&nbsp;GRVITY</div>
                        </div>
                    </div>`;
    return content;
}

function getFooterItems(block){
    var content = `<div class="sm:w-1/2"><ul><li class="font-semibold text-2xl text-[#323B4B] mb-4 sm:mb-9">${block.title}</li>`
    block.items.map(function(item, index){
        content += `<li class="text-[#4E5D78] text-lg leading-[28px]"><a href="${item.link.url}">${item.text}</a></li>`
    })
    content += '</ul></div>'
    return content;
}