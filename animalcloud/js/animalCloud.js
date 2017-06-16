"use strict";

$(() => {
    $('#gate').click(() => {
        if(sessionStorage.boughtTicket === "1") {
            if(typeof audio === "undefined") var audio = new Audio('./assets/door_open.mp3');
            audio.play();
            $('#gate').attr('src', './assets/gate_doorOpen.png');
            setTimeout(() => {
                location.href = "./squard.html";
            }, 2000);
        } else {
            alert("您尚未購票，點擊前往購票處");
            location.href = "./ticket_counter.html";
        }
    })

    $('#ticketCounter').click(() => {
        $(".non-show").addClass("show").removeClass("non-show");
    })
    $('#summitBtn').click(() => {
        alert("購票成功");
        sessionStorage.boughtTicket = 1;
    })

    $('#area-btns > .zooBtn').click(() => {
        location.href = "./zoo.html"
    })
    $('#area-btns > .slotMachineBtn').click(() => {
        location.href = "./slot_machine.html";
    })
    $('#area-btns > .cardBookBtn').click(() => {
        location.href = "./animalIllustration.html";
    })

    $('#goToIndexBtn').click(() => {
        location.href = "./index.html";
    })

    $('#goToSquard').click(() => {
        location.href = "./squard.html";
    })

    $('#slotMachine').click(() => {
        $('#slotMachine').attr("src", "./assets/slotMachine2.png");

        setTimeout(() => {
            $('#slotMachine').attr("src", "./assets/slotMachine.png");
            alert("恭喜你抽到 [動物圖鑑卡片:雞] 一枚");
        }, 1000);
    })

    $('[ng-src="./assets/chicken.png"]').hover(() => {
        if(typeof cook === "undefined") {
            var cook = 1;

            setTimeout(() => {
                $('[ng-src="./assets/chicken.png"]').attr("ng-src", "./assets/fire.jpg").attr("src", "./assets/fire.jpg");
                if(typeof audio_fire === "undefined") var audio_fire = new Audio('./assets/fire.mp3');
                audio_fire.play();
                
                setTimeout(() => {
                    $('[ng-src="./assets/fire.jpg"]').attr('ng-src', "./assets/cooked_chicken.jpg").attr("src", "./assets/cooked_chicken.jpg");
                }, 2000);
            }, 500);
        }
    })
})

