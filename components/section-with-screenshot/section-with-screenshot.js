function getSectionWithScreenshot(block){
    var content = `<div id="section-with-screenshot" class="flex justify-end mt-24">\
                        <div class="max-w-[574px] w-4/5 mt-20">\
                        <div id="hero-section-headline-container" class="font-bold text-[80px] leading-none text-[#2B2B2B]">${block.headline}</div>\
                        <div id="hero-section-subheadline-container" class="mt-6 text-lg leading-7 text-gray-700">${block.content}</div>\
                        <div id="hero-section-button-container" class="mt-12">`
    content += getButton(block.buttons[0]);
                content += `</div>\
                        </div>\
                        <div id="hero-section-screenshot-container">\
                            <img src=${block.cover.filename} alt="screenshot_1">\
                        </div>\
                    </div>`
    return content;
}