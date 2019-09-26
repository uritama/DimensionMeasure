
//ライン描画
function LineDraw(sx, sy, ex, ey, lineColor, lineWidth) {

  // 線の色
  context.strokeStyle = lineColor;
  // 線の幅
  context.lineWidth = lineWidth;

  //新しいパスを開始する
  context.beginPath();
  //パスの開始座標を指定する
  context.moveTo(sx,sy);
  //座標を指定してラインを引いていく
  context.lineTo(ex,ey);
  //現在のパスを輪郭表示する
  context.stroke();

}
