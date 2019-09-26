
//jquery.cookieを使用
let countTatal = 0;
let countA = 0;
let countB = 0;
let countC = 0;

var img = new Image();    //画像オブジェクト作成
img.src = "img/1.jpg";  //写真のパスを指定する


//画像ファイルを選択してキャンバスに描画
function fileselectCanvas(files, can) {

  //ドキュメント要素を取得
  var canvas = document.getElementById(can);
  var ctx = canvas.getContext('2d');

  //ローカルファイルの処理
  var reader = new FileReader();

  //ローカルファイルを読込後処理
  reader.onload = function(event) { 
      //画像ファイルの処理
      var 画像 = new Image();
      //画像ファイル読込後の処理
      画像.onload = function() {

          var canvas幅 = canvas.width;
          var canvas高 = canvas.height;
          var 画像幅 = 画像.naturalWidth;      // naturalWidthは元の画像の幅
          var 画像高 = 画像.naturalHeight;
          var canvas縦横比 = canvas高 / canvas幅;
          var 縦横比 = 画像高 / 画像幅;
          if (縦横比 <= canvas縦横比) {        // 縦横比≦canvas縦横比→横長→canvasの横幅がネックに
              var 圧縮後画像幅 = canvas幅;
              var 圧縮率 = canvas幅 / 画像幅;
              var 圧縮後画像高 = 圧縮率 * 画像高;
          }
          else {                              // 縦長のとき
              圧縮後画像高 = canvas高;
              圧縮率 = canvas高 / 画像高;
              圧縮後画像幅 = 圧縮率 * 画像幅;
          }

          // canvas全体をgrayにする（本質的ではない）
          ctx.fillStyle = 'gray';
          ctx.fillRect(0, 0, canvas幅, canvas高);
          // 画像を圧縮してcanvas表示
          ctx.drawImage(画像, 0, 0, 圧縮後画像幅, 圧縮後画像高);
      }                                       
      //画像を読み込む　
      画像.src = event.target.result;
  }
  //ローカルファイルを読み込む　　
  reader.readAsDataURL(files[0]);

}

function onLoad() {

    //ドキュメント要素を取得
    canvas = document.getElementById('SimpleCanvas');
    //キャンパスに描画するコンテキストを取得
    context = canvas.getContext('2d');

    //画像を表示
    //context.drawImage(img,0,0);

    //alert("クリック1");
    canvas.addEventListener('mousedown', onDown, false);
    
}  

function onDown(e) {
    //console.log("down");
    //alert("down");

    var rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    //塗りのスタイルを指定する
    context.fillStyle = "red";

    // 線の色
    context.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    // 線の幅
    context.lineWidth = 3;


    if(mousecnt == 0)
    {
        sx = x;
        sy = y;
        mousecnt++;
        // 描画処理
        //context.fillRect(x, y, 10, 10);

        //ライン描画
        LineDraw(sx-10, sy, sx+10, sy, "rgb(255, 0, 0)", 1);
        LineDraw(sx, sy-10, sx, sy+10, "rgb(255, 0, 0)", 1);

    }
    else if(mousecnt == 1)
    {
        ex = x;
        ey = y;
        mousecnt++;
        // 描画処理
        //context.fillRect(x, y, 10, 10);

        //ライン描画
        LineDraw(ex-10, ey, ex+10, ey, "rgb(255, 0, 0)", 1);
        LineDraw(ex, ey-10, ex, ey+10, "rgb(255, 0, 0)", 1);
       
        //ライン描画
        LineDraw(sx, sy, ex, ey, "rgb(255, 255, 255)", 1);

        var len =  Math.sqrt(((ex-sx) * (ex-sx)) + ((ey-sy) * (ey-sy)));
        var lenx = sx - ex;
        var leny = sy - ey;

        mousecnt = 0;
        measurecnt+=1;

        var div1 = document.getElementById("test");
        // 要素の追加
        var p1 = document.createElement("p");
    
        var text1 = document.createTextNode(String(measurecnt) + "  距離：" + String(len) + "  座標差X：" + String(lenx) + "  座標差Y：" + String(leny));
        p1.appendChild(text1);
        div1.appendChild(p1);
    
    }
    else
    {
      mousecnt = 0;
    }

   

}

function delResult()
{
    // 要素の削除
    const div1 = document.getElementById("test");
    if (div1.hasChildNodes()){
      div1.removeChild(div1.firstChild);
      //alert("要素の削除");
    }
}
