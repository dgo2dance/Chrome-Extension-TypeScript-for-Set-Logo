document.addEventListener('DOMContentLoaded',setLogo,false);

function setLogo(){
if(document.location.href=="https://www.baidu.com/"&&document.referrer.indexOf("https://www.baidu.com/")>-1){
const img =document.getElementById("s_lg_img_new")
  if(img!=null){
  //  alert(document.getElementById("s_lg_img"));
  img.setAttribute('src',"https://images.unsplash.com/photo-1638913662415-8c5f79b20656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  }
 }
}
  