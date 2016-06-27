// JavaScript Document
/**
  * ���δ�����Ҫ���ȫ���qε�Ч��
  *  ��Ҫԭ�?��̬����DIV����
  *  sStrΪAJAX ���ص��ı�����
  *
  **/
  
  
var msgw,msgh,bordercolor;
var sWidth,sHeight;
var bgObj=document.createElement("div");//����һ��div���󣨱����㣩
var msgObj=document.createElement("div")//����һ��div������ʾ��㣩
var title=document.createElement("h4");//����һ��h4������ʾ�����8��
//var button=document.createElement("input");//����һ��input������ʾ��ť��
var txt=document.createElement("p");//����һ��p������ʾ����ʾ��Ϣ��
  
function sAlert(sStr){
//var msgw,msgh,bordercolor;
    msgw=400;//��ʾ���ڵĿ��
    msgh=400;//��ʾ���ڵĸ߶�
    titleheight=25 //��ʾ���ڱ���߶�
    bordercolor="#336699";//��ʾ���ڵı߿���ɫ
    titlecolor="#99CCFF";//��ʾ���ڵı�����ɫ

//var sWidth,sHeight;
    sWidth=document.body.offsetWidth;//�������������ҳ����
    sHeight=screen.height;//��Ļ�߶ȣ���ֱ�ֱ��ʣ�


    //�����㣨��С�봰����Ч������ͬ����������Ի���ʱ��������ʾΪ����״͸���ɫ��
//var bgObj=document.createElement("div");//����һ��div���󣨱����㣩
     bgObj.setAttribute('id','bgDiv');
     bgObj.style.position="absolute";
     bgObj.style.top="0";
     bgObj.style.background="#777";
     bgObj.style.filter= 
"progid:DXImageTransform.Microsoft.Alpha(style=2,opacity=25,finishOpacity=75";
     bgObj.style.opacity="0.6";
     bgObj.style.left="0";
     bgObj.style.width=sWidth + "px";
     bgObj.style.height=sHeight*2 + "px";
     bgObj.style.zIndex = "10000";
     document.body.appendChild(bgObj);//��body����Ӹ�div����


//var msgObj=document.createElement("div")//����һ��div������ʾ��㣩
     msgObj.setAttribute("id","msgDiv");
     msgObj.setAttribute("align","center");
     msgObj.style.background="white";
     msgObj.style.border="1px solid " + bordercolor;
     msgObj.style.position = "absolute";
     msgObj.style.left = "50%";
     msgObj.style.top = "20%";
     msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
     msgObj.style.marginLeft = "-225px" ;
     msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
     msgObj.style.width = msgw + "px";
     msgObj.style.height =msgh + "px";
     msgObj.style.textAlign = "center";
     msgObj.style.lineHeight ="25px";
     msgObj.style.zIndex = "10001";

//var title=document.createElement("h4");//����һ��h4������ʾ�����8��
    title.setAttribute("id","msgTitle");
    title.setAttribute("align","right");
    title.style.margin="0";
    title.style.padding="3px";
    title.style.background=bordercolor;
  title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20,  finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";
    title.style.opacity="0.75";
    title.style.border="1px solid " + bordercolor;
    title.style.height="18px";
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";
    title.style.color="white";
    title.style.cursor="pointer";
    //title.innerHTML= "关闭";
   // title.onclick=removeObj;

//var button=document.createElement("input");//����һ��input������ʾ��ť��
 
  /*  button.setAttribute("type","button");
    button.setAttribute("value","关闭");
    button.style.width="80px";
    button.style.align="center";
    button.style.marginLeft="250px";
    button.style.marginBottom="10px";
	button.style.marginTop="150px";
    button.style.background=bordercolor;
    button.style.border="1px solid "+ bordercolor;
    button.style.color="white";
    button.onclick=removeObj;*/

function removeObj(){//������8�������¼�
   document.body.removeChild(bgObj);//ɾ���Div
   document.getElementById("msgDiv").removeChild(title);//ɾ����ʾ��ı���8
   document.body.removeChild(msgObj);//ɾ����ʾ���
}
   document.body.appendChild(msgObj);//��body�������ʾ��div����msgObj
   document.getElementById("msgDiv").appendChild(title);//����ʾ��div����ӱ���8����title

//var txt=document.createElement("p");//����һ��p������ʾ����ʾ��Ϣ��

   txt.style.marginTop="50px";
   txt.setAttribute("id","msgTxt");
   txt.innerHTML=sStr;   
    //4Դ�ں������ʱ�Ĳ���ֵ
   document.getElementById("msgDiv").appendChild(txt);//����ʾ��div�������ʾ��Ϣ����txt
  // document.getElementById("msgDiv").appendChild(button);//����ʾ��div����Ӱ�ť����button
}



function removesAlert(){//������8�������¼�
   document.body.removeChild(bgObj);//ɾ���Div
   document.getElementById("msgDiv").removeChild(title);//ɾ����ʾ��ı���8
   document.body.removeChild(msgObj);//ɾ����ʾ���
}