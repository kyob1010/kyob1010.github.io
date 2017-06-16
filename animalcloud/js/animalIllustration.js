var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.cards = [
        {name:"鹿",detail:"長角的四足生物，被一些部落視為聖獸。",src:"./assets/deer.png"},
        {name:"兔子",detail:"柔軟可愛的動物，會在自己的巢穴造出多個出入口。",src:"./assets/rabbit.png"},
        {name:"熊",detail:"一種大型四足生物，攻擊性強，入冬前會儲存大量脂肪，喜好食用蜂蜜。",src:"./assets/bear.png"},
        {name:"浣熊",detail:"不論拿到什麼，習慣拿到水裡清洗。在日本北方造成一些弄作物危害。",src:"./assets/raccoon.png"},
        {name:"狐狸",detail:"四足小型生物，毛皮柔軟的它們招致獵人的獵捕。",src:"./assets/fox.png"},
        {name:"雞",detail:"家畜的一種，又分為蛋雞和肉雞。",src:"./assets/chicken.png"}
    ];
});

