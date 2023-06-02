function getInput(block){
    var content =  ``;
    if(block.type !== "checkbox") content += `<label class="font-semibold text-[#323B4B] mb-2">${block.label}</label>`;
    if(block.type === "select"){
        content += `<select class="mt-1 border border-[#0000000d] rounded-lg w-full py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="" disabled selected hidden>${block.placeholder}</option>`;
        block.select_options.map(function(option, index){
            content += `<option value="${index}">${option.text}</option>`
        })
        content += `</select>`
    }else if(block.type === "textarea"){
        content += `<textarea class="mt-1 border h-[7rem] border-[#0000000d] rounded-lg w-full py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="${block.type}" placeholder="${block.placeholder}"></textarea>`;
    }else if(block.type === "checkbox"){
        content += `<div class="w-full inline-flex"><input name="contact-form-checkbox" class="w-auto border border-[#0000000d] rounded-lg py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-1" type="${block.type}" placeholder="${block.placeholder}">
                    <label class="my-auto font-semibold text-[#323B4B] text-xs">${block.label}</label></div>`;
    }else{
        content += `<input class="mt-1 border border-[#0000000d] rounded-lg w-full py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="${block.type}" placeholder="${block.placeholder}">`;
    }
    return content;
}