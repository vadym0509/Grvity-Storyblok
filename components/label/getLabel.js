function getLabel(block){
    var content = `<div class="rounded-full px-[0.625rem] py-[0.3125rem] text-xs font-bold mr-[0.3125rem] text-[${block.text_color.color}] bg-[${block.background_color.color}]">
                        ${block.text}
                    </div>`;
    return content;
}