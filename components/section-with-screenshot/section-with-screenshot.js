function getSectionWithScreenshot(block){
    var content = `<div id="section-with-screenshot" class="block md:flex mt-16 md:mt-24">\
                        <div class="my-auto mx-8 md:mx-0 md:w-[340px] lg:w-[456px] xl:w-[574px]">\
                            <div class="font-bold text-5xl xl:text-[80px] leading-none text-[#2B2B2B]">${block.headline}</div>\
                            <div class="mt-6 text-lg text-gray-700">${block.content}</div>\
                            <div class="mt-6 xl:mt-12">`
    content += getButton(block.buttons[0]);
            content += `    </div>\
                        </div>\
                        <div class="flex">
                            <img class="my-auto w-full hidden md:block md:w-[420px] md:h-[310px] lg:w-[540px] lg:h-[390px] xl:w-[640px] xl:h-[440px] 2xl:w-[740px] 2xl:h-[520px] min-[1920px]:w-[925px] min-[1920px]:h-[640px]" src=${block.image_large.filename} alt="screenshot_1_large">\
                            <img class="w-full md:hidden" src=${block.image_small.filename} alt="screenshot_1_small">
                        </div>
                    </div>`
    return content;
}