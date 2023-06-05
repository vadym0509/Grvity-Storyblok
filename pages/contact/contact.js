function getContactSections(body){
    var content = `<div class="absolute overflow-hidden inset-0 z-[-1]">
        <div class="absolute h-[60rem] bg-no-repeat bg-cover w-screen bg-[url('${body[3].background_image_1.filename}')]"></div>
    </div>`;
    content += getHeaderNav(body[0]);
    content += getStickyHeaderNav(body[0]);
    content += getDesktopMenuContent(body[1].items[0]);
    content += getContactUsSection(body[3]);
    return content;
}

function getContactUsSection(block){
    var content =  `<div class="md:inline-flex mt-24">
                        <div class="w-full md:w-1/2 text-midnight-blue mr-2">
                            <div class="font-bold text-[2.375rem]">${block.blocks[0].headline}</div>
                            <div class="text-lg mt-6 md:mr-2">${block.blocks[1].text.content[0].content[0].text}</div>
                            <div class="mt-[38px] w-full inline-flex justify-between">`
    content +=                  getContactInfoContainer(block.blocks[2]);                   
    content +=                  getContactInfoContainer(block.blocks[3]);          
    content +=              `</div>`
    content +=         `</div>
                        <div  class="w-full mt-16 md:mt-0 md:w-1/2">`;
    content +=              getContactForm(block.blocks[4]);
    content +=         `</div>
                    </div>`;
    return content;
}

function getContactInfoContainer(block){
    var content =  `<div class="w-1/2 inline-flex">
                        <div class="mt-2 mr-4"><img src="${block.icon.filename}"></div>
                        <div>
                            <div class="font-semibold text-lg text-midnight-blue">${block.title}</div>
                            <div class="mt-[18px] text-steel-blue">${block.description}</div>
                        </div>
                    </div>`;
    return content;
}

function getContactForm(block){
    var content =  `<div class="p-8 bg-white rounded-[1.25rem] drop-shadow-default">`;
        content += getInput(block.blocks[0]);
        content += `<div class="mt-4 inline-flex gap-x-6">
                        <div class="w-1/2">`;
        content +=          getInput(block.blocks[1]);
        content += `    </div>
                        <div class="w-1/2">`;
        content +=          getInput(block.blocks[2]);
        content += `    </div>
                    </div>`;
        content += `<div class="mt-4 inline-flex gap-x-6">
                        <div class="w-1/2">`;
        content +=          getInput(block.blocks[3]);
        content += `    </div>
                        <div class="w-1/2">`;
        content +=          getInput(block.blocks[4]);
        content += `    </div>
                    </div>`;
        content += `<div class="mt-4">`;
        content +=      getInput(block.blocks[5]);
        content += `</div>`;
        content += `<div class="mt-4">`;
        content +=      getInput(block.blocks[6]);
        content += `</div>
                    <div class="flex justify-end mt-4">`
        content +=      getButton(block.blocks[7]);
        content += `</div>
                </div>`;
    return content;
}