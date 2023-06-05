function getInput(block){
    var content =  ``;
    if(block.type !== "checkbox") content += `<label class="font-semibold text-midnight-blue mb-2">${block.label}</label>`;
    if(block.type === "select"){
        content += `<div class="mt-1 custom-select"><select>
                        <option value="0" disabled selected hidden>${block.placeholder}</option>`;
        block.select_options.map(function(option, index){
            content += `<option value="${index + 1}">${option.text}</option>`
        })
        content += `</select></div>`
    }else if(block.type === "textarea"){
        content += `<textarea class="mt-1 border h-[7rem] border-[#D5DAE1] rounded-lg w-full py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="${block.type}" placeholder="${block.placeholder}"></textarea>`;
    }else if(block.type === "checkbox"){
        content += `<div class="w-full inline-flex"><input id="contact-form-checkbox" class="w-auto border border-[#0000000d] rounded-lg py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-1" type="${block.type}" placeholder="${block.placeholder}">
                    <label for="contact-form-checkbox" class="my-auto font-semibold text-midnight-blue text-xs">${block.label}</label></div>`;
    }else{
        content += `<input class="mt-1 border border-[#D5DAE1] rounded-lg w-full py-[11px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="${block.type}" placeholder="${block.placeholder}">`;
    }
    return content;
}