// 引入css
require('../../css/lib/reset.css')
require('../../css/common/global.css')
require('../../css/common/grid.css')
require('../../css/page/index.less')
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')

//锚点滚动动画设置
$("a.topLink").click(function () {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 500,
    easing: "swing"
  });
  return false;
});

// const Hello = str => {
//   alert(str)
// }

// Hello("能不能解析es")
