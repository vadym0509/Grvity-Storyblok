function getBanner(block){
    var content = `<div class="flex justify-center w-full mt-24">
                        <div class="w-full lg:w-[43.25rem]">
                            <div class="font-bold text-[#242331] text-[3.5rem] text-center leading-[4.25rem]">${block.blocks[0].headline}</div>
                            <div class="mt-6 text-[3.5rem] text-[#797979] text-center text-lg">${block.blocks[1].text.content[0].content[0].text}</div>
                        </div>
                    </div>`;
    return content;
}