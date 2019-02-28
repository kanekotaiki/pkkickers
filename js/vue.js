/* jshint curly:true, debug:true */
/* globals $, firebase, location, moment */
// トップページのボタンを押した時の処理
$(document).ready(function() {
  
  $(".start2").click(function() {
    window.location.href = ('index.html');
  })
  $(".modoru").click(function() {
    window.location.href = ('toppage.html');
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
// スコアの点数の定義
var ten1 = 0
var ten2 = 0
// スコアの初期値を代入
$(document).ready(function() { 
  
  
  $(".ten1").html(ten1);
  $(".ten2").html(ten2);
});
// シュートの回数の上限を定義
var total = 6
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
  // ボールは左を選んだので左から上にいかせる
  $(".left").show();
  $(".ball-left").show();
  $(".ball-left").addClass("fadeOutUp");
  // ボールを左からフェードアップさせる
  setTimeout(function() {
    $(".ball-frontleft").show();
    $(".ball-frontleft").addClass("fadeOutUp");
  }, 500)
  // シュート後の処理
  setTimeout(function() {
    if (number >= 0.7) {
      // キーパーを左に飛ばす
      $(".goalkeepar").addClass("fadeOutLeft");
      $(".goalkeepar-left").show();
      //ゴールに入らなかったので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("キーパーセーブ！");
       
        setTimeout(function() {
          init()
          total--;
          // シュート回数が０回になったら
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // }, 1800);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
          
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
      setTimeout(function() {
        // ゴールしたので
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        total--;
        if ( total === 1 || total === 3 || total === 5) {
          console.log(ten1)
          $(".ten1").html(ten1 = ten1 +1)
        }
        if (total === 0 || total === 2 || total === 4) {
          console.log(ten2)
          $(".ten2").html(ten2 = ten2 +1);
        }
        setTimeout(function() {
          init()
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
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
      setTimeout(function() {
        // ゴールしたので
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        
        total--;
        if ( total === 1 || total === 3 || total === 5) {
            console.log(ten1)
            $(".ten1").html(ten1 = ten1 + 1)
          }
        if (total === 0 || total === 2 || total === 4) {
            console.log(ten2)
            $(".ten2").html(ten2 = ten2 + 1);
          }
        setTimeout(function() {
          init()
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
        }, 2500)
      },1700)
    }
  },500)

}
// 真ん中を選択したときの処理
function move_center(){
  $(".left").hide();
  $(".middle").hide();
  $(".right").hide();
  $(".music").hide();
  var number = Math.random();
  // ボールは真ん中を選んだので真ん中から上にいかせる
  $(".middle").show();
  $(".ball-middle").show();
  $(".ball-middle").addClass("fadeOutUp");
  setTimeout(function() {
    $(".ball-front").show();
    $(".ball-front").addClass("fadeOutUp");
  },500)
  setTimeout(function() {
    if (number >= 0.7) {
      // キーパーを左に飛ばす
      $(".goalkeepar").addClass("fadeOutLeft");
      $(".goalkeepar-left").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        total--;
        if ( total === 1 || total === 3 || total === 5) {
            console.log(ten1)
            $(".ten1").html(ten1 = ten1 + 1)
          }
        if (total === 0 || total === 2 || total === 4) {
            console.log(ten2)
            $(".ten2").html(ten2 = ten2 + 1);
          }
        setTimeout(function() {
          init()
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
        }, 2500);
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
        $(".music").html("ゴーーーール🔥！")
        total--;
        if ( total === 1 || total === 3 || total === 5) {
            console.log(ten1)
            $(".ten1").html(ten1 = ten1 + 1)
          }
        if (total === 0 || total === 2 || total === 4) {
            console.log(ten2)
            $(".ten2").html(ten2 = ten2 + 1);
          }
        setTimeout(function() {
          init()
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
        }, 2500);
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
          total--;
          init()
          if ( total === 0 ) {
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
        }, 2500);
      },1700)
    }
  },500)
}
// 右を選択したときの処理
function move_right(){
  $(".left").hide();
  $(".middle").hide();
  $(".right").hide();
  $(".music").hide()
  $(".ball-middle").hide();
  var number = Math.random();
  // ボールは右を選んだので右から上にいかせる
  $(".right").show();
  $(".ball-right").show();
  $(".ball-right").addClass("fadeOutUp");
  // ボールを右からフェードアップさせる
  setTimeout(function() {
    $(".ball-frontright").show();
    $(".ball-frontright").addClass("fadeOutUp");
  },500)
  setTimeout(function() {
    if (number >= 0.7) {
      
      // キーパーを左に飛ばす
      $(".goalkeepar").addClass("fadeOutLeft");
      $(".goalkeepar-left").show();
      // ゴールしたので
      setTimeout(function() {
        $(".music").show();
        $(".music").html("ゴーーーール🔥！");
        total--;
        if ( total === 1 || total === 3 || total === 5) {
            console.log(ten1)
            $(".ten1").html(ten1 = ten1 + 1)
          }
        if (total === 0 || total === 2 || total === 4) {
            console.log(ten2)
            $(".ten2").html(ten2 = ten2 + 1);
          }
        setTimeout(function() {
          init()
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // }, 1800);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
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
          init()
          total--;
          // シュート回数が０回になったら
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // }, 1800);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
          
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
        total--;
        if ( total === 1 || total === 3 || total === 5) {
            console.log(ten1)
            $(".ten1").html(ten1 = ten1 + 1)
          }
        if (total === 0 || total === 2 || total === 4) {
            console.log(ten2)
            $(".ten2").html(ten2 = ten2 + 1);
          }
        setTimeout(function() {
          init()
          if ( total === 0 ) {
            $(".left").hide();
            $(".middle").hide();
            $(".right").hide();
            $(".ball-middle").hide();
            $(".music").html("試合終了！！！");
            // 勝者を判定
            setTimeout(function(){
              if ( ten1 > ten2) {
                $(".music").html("🔥Winner player１🔥")
              }
              if (ten1 < ten2) {
                $(".music").html("🔥Winner player2🔥")
              }
              if (ten1 === ten2) {
                $(".music").html("🔥Drow🔥")
              }
            }, 2900);
            // }, 1800);
            // トップページに戻る
            setTimeout(function(){
              window.location.href = 'toppage.html';
            }, 6000);
          }
        },2500)
      },1700)
    }
  },500)
}


