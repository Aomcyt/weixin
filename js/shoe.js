var mySwiper = new Swiper('.swiper-container', {
			/*轮播图*/
			/*autoplay: 5000,*///可选选项，自动滑动
			direction : 'vertical',
			/*动画效果*/
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			  onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  } 
		})
