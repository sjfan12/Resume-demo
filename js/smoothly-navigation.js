!function(){
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        init: function (view) {
            this.view= view
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElements: function(element){
            let top= element.offsetTop;

            let currentTop = window.scrollY;
            let targetTop = top -80;
            let s = (targetTop-currentTop);
            var coords = {y: currentTop};
            var t=Math.abs((s/100))*300;
            if (t>500){t=500};
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: targetTop}, 1000) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
                .onUpdate(function(){
                    window.scrollTo(0, coords.y);
                })
                .start(); // Start the tween immediately.
        },
        bindEvents: function(){
            let aTags= this.view.querySelectorAll('nav.menu > ul>li>a')
            for (let i=0; i<aTags.length; i++){
                aTags[i].onclick=(x)=>{
                    x.preventDefault();
                    let a = x.currentTarget;//返回其监听器触发事件的节点
                    let href = a.getAttribute('href');//'#siteAbot'
                    let element= document.querySelector(href);
                    this.scrollToElements(element)
                }
            }
        },
    }
   controller.init(view)
}.call()
