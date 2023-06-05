function getSectionWithScreenshot(block){
    var content = `<div id="section-with-screenshot" class="block md:flex mt-16 md:mt-24">
                        <div class="my-auto md:w-[21.25rem] lg:w-[28.5rem] xl:w-[35.875rem] min-[1920px]:mt-12">
                            <div class="font-bold text-5xl xl:text-[5rem] leading-none text-charcoal">${block.headline}</div>
                            <div class="mt-6 text-lg text-midnight-blue">${block.content}</div>
                            <div class="mt-6 xl:mt-12">`
    content += getButton(block.buttons[0]);
            content += `    </div>
                        </div>
                        <div class="flex">
                            <img class="w-full hidden md:block drop-shadow-default md:ml-7 md:mt-0 md:absolute right-0 top-60 lg:top-auto xl:top-56 2xl:top-auto md:w-[25rem] md:h-[16.375rem] lg:w-[32.5rem] lg:h-[21.25rem] xl:w-[37.5rem] xl:h-[24.625rem] 2xl:w-[45rem] 2xl:h-[29.5rem] min-[1920px]:w-[56.56rem] min-[1920px]:h-[37.06rem] min-[1921px]:hidden" src=${block.screenshot_large.filename} alt="screenshot_1_large">
                            <img class="hidden min-[1921px]:block drop-shadow-default md:absolute right-auto w-[56.56rem] h-[37.06rem]" src=${block.screenshot_small.filename} alt="screenshot_1_large">
                            <img class="w-full mt-6 md:hidden drop-shadow-default" src=${block.screenshot_small.filename} alt="screenshot_1_small">
                        </div>
                    </div>`
    return content;
}