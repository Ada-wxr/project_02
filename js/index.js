window.addEventListener('load', function () {
    var navline = document.querySelector('#navline')
    var nav = document.querySelector('#nav');
    var top_nav_li = nav.querySelectorAll('.top-nav-li');
    var current = 0;
    for (let i = 0; i < top_nav_li.length; i++) {
        // (1) 鼠标经过把当前小li 的位置做为目标值
        top_nav_li[i].addEventListener('mouseenter', function () {
            navline.style.width = this.offsetWidth + 'px'
            animate(navline, this.offsetLeft);
            top_nav_li[i].style.overflow = 'visible';
            top_nav_li[i].querySelector('ul') ? top_nav_li[i].querySelector('ul').style.display = 'block' : '';
        });
        // (2) 鼠标离开就回到起始的位置 
        top_nav_li[i].addEventListener('mouseleave', function () {
            animate(navline, this.offsetLeft);
            top_nav_li[i].style.overflow = 'hidden';
            top_nav_li[i].querySelector('ul') ? top_nav_li[i].querySelector('ul').style.display = 'none' : '';
        });
        // (3) 当我们鼠标点击，就把当前位置做为目标值
        top_nav_li[i].addEventListener('click', function () {
            current = this.offsetLeft;
        });
    };
    //轮播图部份
    var publish_copy = document.querySelector('#publish-copy');
    var b_dot = document.querySelector('#b_dot');
    var b_dota = b_dot.querySelectorAll('a');
    //点击小圆点，显示对应的图片
    for (let i = 0; i < b_dot.children.length; i++) {
        b_dota[i].addEventListener('click', function () {
            for (let i = 0; i < b_dot.children.length; i++) {
                b_dot.children[i].className = '';
                publish_copy.children[i].style.display = 'none'
            };
            this.className = 'on';
            publish_copy.children[i].style.display = 'block';
        });
    };
    play();
    //鼠标滑过，关闭定时器，鼠标移走，开启定时器
    publish_copy.addEventListener('mouseenter', function () {
        clearInterval(publish_copy.timer);
    });
    publish_copy.addEventListener('mouseleave', function () {
        play();
    });
    //定时器
    var num = 0;
    function play() {
        publish_copy.timer = setInterval(function () {
            if (num < b_dot.children.length) {
                for (let i = 0; i < b_dot.children.length; i++) {
                    b_dot.children[i].className = '';
                    publish_copy.children[i].style.display = 'none';
                };
                b_dot.children[num].className = 'on';
                publish_copy.children[num].style.display = 'block';
                num++;
            } else {
                num = 0;
            }
        }, 1000)
    }
    //
})