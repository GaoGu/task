＃ rem
　　
rem是相对于根元素（html）的font-size属性的计算值

兼容性: IE8-不支持

默认地，浏览器的字体大小font-size是16px，也就是1rem=16px。而如果将HTML的font-size设置为100px，方便后续计算，不设置为10px是因为chrome下最小字体大小为12px

＃ 公司设计师的图是pt为单位如何换算成rem

iPhone6/7 也就是4.7寸大小的手机 1pt=2px
iPhone 6plus 7plus 8plus x也就是5.5寸屏幕 1pt=3px
如果设计稿的大小是 750*1334 那就是 iPhone6/7的尺寸
因为公司设计图放在Zeplin上，显示为375pt＊776pt，等于是6/7设计图的等比1/2，所以1pt等于1px，
将font－size的长度改为20px，然后其他所有长度用rem换算
比如设计图长度为100pt，就是100/20=5rem，就在375*776pt的机型下完美还原出了设计图的比例

    function screenAdapt() {
      var fontSize = $(window).width()/375*20;
      $('html').css('fontSize',fontSize+'px');
    }

通过这段js将html的font-size改为动态变化，就完美适配所有机型
