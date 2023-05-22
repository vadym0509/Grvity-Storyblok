function getSectionWithScreenshot(block){
    var content = `<div id="section-with-screenshot" class="block md:flex mt-16 md:mt-24">\
                        <div class="my-auto md:w-[340px] lg:w-[456px] xl:w-[574px] min-[1920px]:mt-12">\
                            <div class="font-bold text-5xl xl:text-[80px] leading-none text-[#2B2B2B]">${block.headline}</div>\
                            <div class="mt-6 text-lg text-gray-700">${block.content}</div>\
                            <div class="mt-6 xl:mt-12">`
    content += getButton(block.buttons[0]);
            content += `    </div>\
                        </div>\
                        <div class="flex">
                            <img class="w-full drop-shadow-xl md:ml-7 mt-6 md:mt-0 md:absolute md:-right-8 top-60 lg:top-auto xl:top-56 2xl:top-auto min-[1921px]:right-auto md:w-[400px] md:h-[262px] lg:w-[520px] lg:h-[340px] xl:w-[600px] xl:h-[393px] 2xl:w-[720px] 2xl:h-[472px] min-[1920px]:w-[905px] min-[1920px]:h-[593px]" src=${block.screenshot.filename} alt="screenshot_1_large">\
                        </div>
                    </div>`
    return content;
}