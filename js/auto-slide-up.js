!function(){
    //添加offset类
    let specialTags= document.querySelectorAll('[data-x]');
    for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }
    findClosestAndRemoveOffset();//这个1s是因为上面loading占时间
    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset();
    })





    function findClosestAndRemoveOffset(){
        let specialTags= document.querySelectorAll('[data-x]');
        let minIndex=0;
        for(let i=1;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY)
                < Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
                minIndex=i;
            }
        }
        //minIndex 就是窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset');
        for(let i=0;i<specialTags.length;i++){
            specialTags[i].classList.remove('active');
        }
        //specialTags[minIndex].classList.add('active');
        let id= specialTags[minIndex].id;//获取id
        let a= document.querySelector('a[href="#'+ id +'"]');
        let li = a.parentNode;
        let brotherAndMe = li.parentNode.children;
        for(let i=0;i<brotherAndMe.length;i++){
            brotherAndMe[i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }
}.call()
