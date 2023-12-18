$("#navigation")[0].style="height: 35px;background-color: #0f8bc0;-webkit-box-shadow: 0 1px 1px #ccc;-moz-box-shadow: 0 1px 1px #ccc;-o-box-shadow: 0 1px 1px #ccc;box-shadow: 0 1px 1px #ccc;";
var navelems = $("#navigation div ul li");
for(i=0;i<navelems.length;i++){
    navelems[i].style="border-left: 1px solid #149acb;height: 35px;margin: 0;line-height: 35px;cursor: pointer;position:relative;bottom:"+(5+(5*(navelems[i].getAttribute("class").includes("link"))))+"px;"
}