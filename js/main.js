/* jshint curly:true, debug:true */
/* globals $, firebase, location, moment */
// var numbers = [ 1, 2, 3, 4, 5, 7, 10 ];

// var total = 0;
// for (var i = 0; i < numbers.length; i++) {
  
// $(document).ready(function() {
//   $(".goalkeepar-left").hide();
//   $(".goalkeepar-right").hide();
//   $(".ball-left").hide();
//   $(".ball-right").hide();
//   $(".ball-frontleft").hide();
//   $(".ball-front").hide();
//   $(".ball-frontright").hide();
// })
// トップページのボタンを押した時の処理
$(document).ready(function() {
  
  $(".start2").click(function() {
    window.location.href = ('index1.html');
  })
  $(".modoru").click(function() {
    window.location.href = ('index.html');
  })
  $(".start3").click(function() {
    window.location.href = ("index2.html");
  })
})
// トップページの遊び方を押した時にモーダルで表示
$( function() {
  	$('.start').click( function () {
  		$('#sampleModal').modal();
  	});
});
// 矢印の左・真ん中・右を押した時の処理
$(document).ready(function() {
  
  init();
  $(".left").click(function() {
    move_left();
  })
  $(".middle").click(function() {
    move_center();
  })
  $(".right").click(function() {
    move_right();
  })
})
//初期状態の設定
function init(){
  // 表示させる
  $(".goalkeepar").show();
  $(".ball-front").show();
  $(".left").show();
  $(".right").show();
  $(".middle").show();
  $(".music").show();
  $(".music").html("🔥shoot🔥");
  $(".ball-middle").show();
  // 隠す
  $(".goalkeepar-left").hide();
  $(".goalkeepar-right").hide();
  $(".goalkeepar").removeClass("fadeOutLeft fadeOutRight bounce")
  $(".ball-left").hide();
  $(".ball-right").hide();
  $(".ball-frontleft").hide();
  $(".ball-front").hide();
  $(".ball-frontright").hide();
  $(".ball-left").removeClass("fadeOutUp");
  $(".ball-right").removeClass("fadeOutUp");
  $(".ball-middle").removeClass("fadeOutUp");
  console.log("init");
};
// 左を選択したときの処理
function move_left(){
  $(".left").hide();
  $(".middle").hide();
  $(".right").hide();
  $(".music").hide();
  $(".ball-middle").hide();
  var number = Math.random();
  setTimeout(function() {
    $(".ball-frontleft").show();
    $(".ball-frontleft").addClass("fadeOutUp");
  },1400)
  setTimeout(function() {
    if (number >= 0.7) {
      // ボールは左を選んだので左から上にいかせる
      $(".left").show();
      $(".ball-left").show();
      $(".ball-left").addClass("fadeOutUp");
      // キーパーを左に飛ばす
      $(".goalkeepar").addClass("fadeOutLeft");
      $(".goalkeepar-left").show();
      //ゴールに入らなかったので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("キーパーセーブ！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
      
    }
    else if (0.7 > number && number >= 0.4) {
      // ボールは左を選んだので左から上にいかせる
      $(".left").show();
      $(".ball-left").show();
      $(".ball-left").addClass("fadeOutUp");
      // キーパーを右に飛ばす
      $(".goalkeepar").addClass("fadeOutRight");
      $(".goalkeepar-right").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
      
    }
    else if (0.4 > number && number >= 0) {
      // ボールは左を選んだので左から上にいかせる
      $(".left").show();
      $(".ball-left").show();
      $(".ball-left").addClass("fadeOutUp");
      // キーパーは真ん中
      $(".goalkeepar").addClass("bounce");
      $(".goalkeepar").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        setTimeout(function() {
          init();
        }, 2500)
      },1700)
      
    }
   
  },1000)

}
// 真ん中を選択したときの処理
function move_center(){
  $(".left").hide();
  $(".middle").hide();
  $(".right").hide();
  $(".music").hide();
  var number = Math.random();
  setTimeout(function() {
    $(".ball-front").show();
    $(".ball-front").addClass("fadeOutUp");
  },1400)
  setTimeout(function() {
    if (number >= 0.7) {
      // ボールは真ん中を選んだので真ん中から上にいかせる
      $(".middle").show();
      $(".ball-middle").show();
      $(".ball-middle").addClass("fadeOutUp");
      // キーパーを左に飛ばす
      $(".goalkeepar").addClass("fadeOutLeft");
      $(".goalkeepar-left").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
      
    }
    else if (0.7 > number && number >= 0.4) {
      // ボールは真ん中を選んだので真ん中から上にいかせる
      $(".middle").show();
      $(".ball-middle").show();
      $(".ball-middle").addClass("fadeOutUp");
      // キーパーを右に飛ばす
      $(".goalkeepar").addClass("fadeOutRight");
      $(".goalkeepar-right").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
      
    }
    else if (0.4 > number && number >= 0) {
      // ボールは真ん中を選んだので真ん中から上にいかせる
      $(".middle").show();
      $(".ball-middle").show();
      $(".ball-middle").addClass("fadeOutUp");
      // キーパーは真ん中
      $(".goalkeepar").addClass("bounce");
      $(".goalkeepar").show();
      //ゴールに入らなかったので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("キーパーセーブ！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
      
    }
    
  },1000)
}
// 右を選択したときの処理
function move_right(){
  $(".left").hide();
  $(".middle").hide();
  $(".right").hide();
  $(".music").hide()
  $(".ball-middle").hide();
  var number = Math.random();
  setTimeout(function() {
    $(".ball-frontright").show();
    $(".ball-frontright").addClass("fadeOutUp");
  },1400)
  setTimeout(function() {
    if (number >= 0.7) {
      // ボールは右を選んだので右から上にいかせる
      $(".right").show();
      $(".ball-right").show();
      $(".ball-right").addClass("fadeOutUp");
      // キーパーを左に飛ばす
      $(".goalkeepar").addClass("fadeOutLeft");
      $(".goalkeepar-left").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
    }
    else if (0.7 > number && number >= 0.4) {
    // ボールは右を選んだので右から上にいかせる
      $(".right").show();
      $(".ball-right").show();
      $(".ball-right").addClass("fadeOutUp");
      // キーパーを右に飛ばす
      $(".goalkeepar").addClass("fadeOutRight");
      $(".goalkeepar-right").show();
      //ゴールに入らなかったので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("キーパーセーブ！");
        setTimeout(function() {
          init();
        },2500)
      },1700)
      
      
    }
    else if (0.4 > number && number >= 0){
      // ボールは右を選んだので右から上にいかせる
      $(".right").show();
      $(".ball-right").show();
      $(".ball-right").addClass("fadeOutUp");
      // キーパーは真ん中
      $(".goalkeepar").addClass("bounce");
      $(".goalkeepar").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        setTimeout(function() {
          init();
        },2500)
      },1700)}
    
  },1000)
}
