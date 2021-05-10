var 舍友 = [
    {
        id: 1,
        name: '窦康泰',
        qq: '2636693728',
        nickname: '哧溜',
        avater: 'QQ图片20210510190520.jpg',
        status: true
    },
    {
        id: 2,
        name: '苟振强',
        qq: '1458731556',
        nickname: 'Winston',
        avater: 'QQ图片20210510190348.jpg',
        status: true
    },
    {
        id: 3,
        name: '江斌',
        qq: '1559806840',
        nickname: '你我山巅自相逢',
        avater: 'QQ图片20210510190446.jpg',
        status: true
    },
    {
        id: 4,
        name: '李威',
        qq: '2905871069',
        nickname: '吃不完的李土豆',
        avater: 'QQ图片20210510190530.jpg',
        status: true
    },
    {
        id: 5,
        name: '姜富超',
        qq: '1289442962',
        nickname: 'F，',
        avater: 'QQ图片20210510190434.jpg',
        status: true
    },
    {
        id: 6,
        name: '张鑫豪',
        qq: '1666704934',
        nickname: '绯赤',
        avater: 'QQ图片20210510190456.jpg',
        status: true
    },
    {
        id: 7,
        name: '六角恐龙',
        qq: '????????',
        nickname: '????????',
        avater: 'QQ图片20210510191502.png',
        status: false
    }
]
var 起始日期串 = "2021-05-10"
var 起始值日位置 = 5
var 值日人数 = 0
for (let i = 0; i < 舍友.length; i++) {
    if (舍友[i].status == true) 值日人数++
}
window.onload = function () {
    Splitting({
        whitespace: true
    })

    let 起始日期 = new Date(起始日期串.replace(/-/g, "/"))
    let 当前日期 = new Date()
    let 时间差 = 当前日期.getTime() - 起始日期.getTime()
    let 天数差 = parseInt(时间差 / (1000 * 60 * 60 * 24))
    let 今日值日位置 = (起始值日位置 + 天数差) % (值日人数 + 1)
    let 今日值日生 = 舍友[今日值日位置 - 1]
    let 明日值日位置 = (起始值日位置 + 天数差 + 1) % (值日人数 + 1)
    舍友[明日值日位置 - 1].name += "(明日值日)"
    $(`.avater`).attr(`src`, `./img/${今日值日生.avater}`)
    $(`.name`).text(今日值日生.name)
    shuffle(舍友)
    for (let i = 0; i < 舍友.length; i++) {
        $(`.people`).append(`
            <div>
                <img src="./img/${舍友[i].avater}" alt="" class="p-avater">
                <span class="p-name">${舍友[i].name}</span>
            </div>
        `)
    }

    function shuffle(arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
        }
        return arr;
    }


        //okpt("CSS Particle Effects");
    function initparticles() {
                bubbles();
        hearts();
        lines();
        confetti();
        fire();
        sunbeams();
    }

    /*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/

    function bubbles() {
                $.each($(".particletext.bubbles"), function () {
                    var bubblecount = ($(this).width() / 50) * 10;
                    for (var i = 0; i <= bubblecount; i++) {
                        var size = ($.rnd(40, 80) / 10);
                        $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
    }

    function hearts() {
                $.each($(".particletext.hearts"), function () {
                    var heartcount = ($(this).width() / 50) * 5;
                    for (var i = 0; i <= heartcount; i++) {
                        var size = ($.rnd(60, 120) / 10);
                        $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
    }

    function lines() {
                $.each($(".particletext.lines"), function () {
                    var linecount = ($(this).width() / 50) * 10;
                    for (var i = 0; i <= linecount; i++) {
                        $(this).append('<span class="particle" style="top:' + $.rnd(-30, 30) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
    }

    function confetti() {
                $.each($(".particletext.confetti"), function () {
                    var confetticount = ($(this).width() / 50) * 10;
                    for (var i = 0; i <= confetticount; i++) {
                        $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
    }

    function fire() {
                $.each($(".particletext.fire"), function () {
                    var firecount = ($(this).width() / 50) * 20;
                    for (var i = 0; i <= firecount; i++) {
                        var size = $.rnd(8, 12);
                        $(this).append('<span class="particle" style="top:' + $.rnd(40, 70) + '%; left:' + $.rnd(-10, 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 20) / 10) + 's;"></span>');
                    }
                });
    }

    function sunbeams() {
                $.each($(".particletext.sunbeams"), function () {
                    var linecount = ($(this).width() / 50) * 10;
                    for (var i = 0; i <= linecount; i++) {
                        $(this).append('<span class="particle" style="top:' + $.rnd(-50, 00) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(80, 160) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
                    }
                });
    }

    jQuery.rnd = function (m, n) {
                m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    initparticles();
}

