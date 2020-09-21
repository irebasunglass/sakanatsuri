


window.onload =  function() {
  var date = new Date();
  var  year = date.getFullYear(); //年
  var month = date.getMonth() + 1; //月
  var day = date.getDate(); //日
  var hour = date.getHours(); //時
  var minute = date.getMinutes(); //分
  var second = date.getSeconds(); //秒
  var dayOfWeek = date.getDay(); //曜日(数値)
  var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek]; //曜日(日本語表記)
  var kyou = document.getElementById('today');
  kyou.textContent = '今日は'+year+'年'+month+'月'+day+'日'+dayOfWeekStr+'曜日';


  }
