function getFooter(body){
    var content = `<div id="footer-container" class="w-full flex mt-24 sm:mt-18 justify-center bg-pale-blue">
                        <div class="my-24 mx-8 w-full md:w-[45rem] lg:w-[60rem] xl:w-[65.5rem]">
                            <div class="sm:inline-flex w-full">
                                <div class="mr-0 sm:mr-10 md:mr-16 lg:mr-24 w-full sm:w-[126px] md:w-[158px] lg:w-auto">
                                    <a href="../home/home.html"><img class="mt-3" src="${body.footer_logo.filename}" alt="${body.footer_logo.alt}"></a>
                                    <div class="block sm:hidden text-base text-[#797979] mt-4 mb-6">${new Date().getFullYear()}&nbsp;&copy;&nbsp;GRVITY</div>
                                </div>
                                <div class="inline-flex w-full sm:w-3/4">
                                    <div class="w-1/2 sm:w-1/3 mr-14 sm:mr-0">`
                                        content += getFooterItems(body.blocks[0], "sm:w-1/2 md:w-full");
                        content += `</div>
                                    <div class="sm:inline-flex w-1/2 sm:w-2/3">`
                                        content += getFooterItems(body.blocks[1], "sm:w-1/2");
                                        content += '<div class="mt-6 sm:mt-0 sm:w-1/2">'
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

function getFooterItems(block, width){
    var content = `<div class="${width}"><ul><li class="font-semibold text-2xl text-midnight-blue mb-4 sm:mb-9">${block.title}</li>`
    block.items.map(function(item, index){
        content += `<li class="text-steel-blue text-lg leading-[28px] hover:underline"><a href="${item.link.url}">${item.text}</a></li>`
    })
    content += '</ul></div>'
    return content;
}