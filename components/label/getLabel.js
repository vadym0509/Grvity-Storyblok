function getLabel(block){
    var content = `<div class="rounded-full px-[10px] py-[5px] text-xs font-bold mr-[5px] text-[${block.text_color.color}] bg-[${block.background_color.color}]">
                        ${block.text}
                    </div>`;
    return content;
}