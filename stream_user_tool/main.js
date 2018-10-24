document.addEventListener('DOMContentLoaded', () => {
  let videoUrl = "";
  let chatroomUrl = "";
  //
  let search = location.search.substring(1);
  if (search.length > 0) {
    let parseObj = JSON.parse('{"' +
      decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","')
      .replace(/=/g,'":"') + '"}');
    videoUrl = decodeURIComponent(parseObj.video);
    chatroomUrl = decodeURIComponent(parseObj.chatroom);					
  }
  //
  if (videoUrl == "") {
    videoUrl = prompt("請輸入影片 url");
    while (videoUrl == null) {
      alert("你輸入的影片地址無效");
      videoUrl = prompt("請輸入影片 url");
    }
  }
  if (chatroomUrl == "") {
    chatroomUrl = prompt("請輸入聊天室 url");
    while (chatroomUrl == null) {
      alert("你輸入的聊天室 url 無效");
      chatroomUrl = prompt("請輸入聊天室 url");
    }
  }
  //
  document.querySelector('.video-container > *').src = videoUrl;
  document.querySelector('.chatroom-container > *').src = chatroomUrl;
  
  /////////////////////////////////////////////////////////////////////////////
  
  let sc = document.querySelector('.smart-chatroom');
  sc.addEventListener('click', () => {
    document.querySelector('.chatroom-container').classList.toggle("view");
    let rc = document.querySelector('.responsive-container');
  });
});