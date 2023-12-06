

// 
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });
//   



//上部画像の設定
$('.gallery').slick({
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    fade: true, //フェードの有効化
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  });
  
  //選択画像の設定
  $('.choice-btn').slick({
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 8, //表示させるスライドの数
    focusOnSelect: true, //フォーカスの有効化
    asNavFor: '.gallery', //連動させるスライドショーのクラス名
  });
    
  //下の選択画像をスライドさせずに連動して変更させる設定。
  $('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var index = nextSlide; //次のスライド番号
    //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
    $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
  });