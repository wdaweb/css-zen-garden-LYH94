let nowloc = 0
$(window).on('scroll', function () {
  // 目前捲軸捲動的距離(與最頂端 0 之間的距離)
  nowloc = $(window).scrollTop()
  console.log(nowloc);
  if (nowloc > 90 && nowloc < 500) {
    $("#zen-explanation").css(
      {
        'animation-name': 'fadeIn',
        'animation': 'fadeIn 3s'
      }
    );
  }else if (nowloc > 250 && nowloc < 650) {
    $("#zen-participation").css(
      {
        'animation-name': 'fadeLeft',
        'animation': 'fadeLeft 3s'
      }
    );
    $("#zen-benefits").css(
      {
        'animation-name': 'fadeRight',
        'animation': 'fadeRight 3s'
      }
    );
  }else if (nowloc > 640 && nowloc < 1400) {
    $("#zen-requirements").css(
      {
        'animation-name': 'fadeOut',
        'animation': 'fadeOut 2s'
      }
    );
  }else {
    $("#zen-explanation").css(
      {
        'animation-name': '',
        'animation': ''
      }
    );
    $("#zen-participation").css(
      {
        'animation-name': '',
        'animation': ''
      }
    );
    $("#zen-benefits").css(
      {
        'animation-name': '',
        'animation': ''
      }
    );
    $("#zen-requirements").css(
      {
        'animation-name': '',
        'animation': ''
      }
    );
  }
})


