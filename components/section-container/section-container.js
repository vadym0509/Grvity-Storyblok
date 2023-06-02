function getSectionContainer(body, isScrollEvents, storyName){
    var content = '<div id="section-container" class="w-full mx-8 md:w-[45rem] lg:w-[60rem] xl:w-[65.5rem]">';
    content += getSections(storyName, body)
    content += '</div>';
    if(storyName === "home"){
        addScrollEvents();
    }else{
        addScrollEventsForStickyNav();
    }
    return content;
}

function getSections(storyName, body){
    switch (storyName) {
        case "home":
            return getHomeSections(body);
        case "loyalty":
            return getLoyaltySections(body);
        case "modules":
            return getModulesSections(body);
        case "contact":
            return getContactSections(body);
        default:
            break;
    }
}

function addScrollEvents(){
    const sectionIndicatorsParams = [
        {
            number: "01",
            deltaScrollY: -150
        },
        {
            number: "02",
            deltaScrollY: 400
        },
        {
            number: "03",
            deltaScrollY: 1600
        },
        {
            number: "04",
            deltaScrollY: 2200
        },
        {
            number: "05",
            deltaScrollY: 3400
        },
        {
            number: "06",
            deltaScrollY: 3900
        }
    ];
    let verticalTypoParams = [];
    window.addEventListener("resize", handleWindowResize);
    function handleWindowResize (){
        if(window.innerWidth > 1536){
            verticalTypoParams = [
                {
                    startPos: 1340,
                    endPos: 1560,
                    typoNum: "01",
                    speed: 10
                },
                {
                    startPos: 2200,
                    endPos: 3500,
                    typoNum: "02",
                    speed: 3
                },
                {
                    startPos: 4100,
                    endPos: 5000,
                    typoNum: "03",
                    speed: 5
                }
            ]
        }
        if(window.innerWidth > 1280 && window.innerWidth < 1536){
            verticalTypoParams = [
                {
                    startPos: 1050,
                    endPos: 1900,
                    typoNum: "01",
                    speed: 2.9
                },
                {
                    startPos: 1300,
                    endPos: 3700,
                    typoNum: "02",
                    speed: 1.5
                },
                {
                    startPos: 2600,
                    endPos: 5500,
                    typoNum: "03",
                    speed: 2
                }
            ]
        }
        if(window.innerWidth > 1024 && window.innerWidth < 1280){
            verticalTypoParams = [
                {
                    startPos: 950,
                    endPos: 1700,
                    typoNum: "01",
                    speed: 2.9
                },
                {
                    startPos: 1150,
                    endPos: 3550,
                    typoNum: "02",
                    speed: 1.5
                },
                {
                    startPos: 2450,
                    endPos: 5300,
                    typoNum: "03",
                    speed: 2
                }
            ]
        }
        if(window.innerWidth > 768 && window.innerWidth < 1024){
            verticalTypoParams = [
                {
                    startPos: 850,
                    endPos: 1800,
                    typoNum: "01",
                    speed: 2
                },
                {
                    startPos: 1150,
                    endPos: 3550,
                    typoNum: "02",
                    speed: 1.5
                },
                {
                    startPos: 1800,
                    endPos: 5100,
                    typoNum: "03",
                    speed: 1.5
                }
            ]
        }
        if(window.innerWidth > 640 && window.innerWidth < 768){
            verticalTypoParams = [
                {
                    startPos: 1200,
                    endPos: 1650,
                    typoNum: "01",
                    speed: 3.7
                },
                {
                    startPos: 950,
                    endPos: 3500,
                    typoNum: "02",
                    speed: 1.3
                },
                {
                    startPos: 1950,
                    endPos: 5100,
                    typoNum: "03",
                    speed: 1.5
                }
            ]
        }
        if(window.innerWidth < 640){
            verticalTypoParams = [
                {
                    startPos: 1200,
                    endPos: 1650,
                    typoNum: "01",
                    speed: 3.7
                },
                {
                    startPos: 950,
                    endPos: 3500,
                    typoNum: "02",
                    speed: 1.3
                },
                {
                    startPos: 1950,
                    endPos: 5100,
                    typoNum: "03",
                    speed: 1.5
                }
            ]
        }
    }
    handleWindowResize();
    document.addEventListener("scroll", function(e){
        console.log(window.scrollY)
        if(window.scrollY > 820){
            document.getElementById("sticky-header-nav").style.transform = "translateY(0px)";
        }else{
            document.getElementById("sticky-header-nav").style.transform = "translateY(-90px)";
        }
        sectionIndicatorsParams.map(function(param, index){
            setIndicatorsSpeed(param.number, param.deltaScrollY)
        })

        //set vertical typography speed
        verticalTypoParams.map(function(param, index){
            setVerticalTypoSpeed(param.startPos, param.endPos, param.typoNum, param.speed);
        })
    })
}

function addScrollEventsForStickyNav(){
    document.addEventListener("scroll", function(e){
        if(window.scrollY > 820){
            document.getElementById("sticky-header-nav").style.transform = "translateY(0px)";
        }else{
            document.getElementById("sticky-header-nav").style.transform = "translateY(-90px)";
        }
    })
}