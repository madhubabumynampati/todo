
$(document).ready(function()
{
});

var d = new Date();
document.getElementById("day").innerHTML=d.toDateString();
var i=0;
var txtas;

function handle(){

    if (event.keyCode == 13) {
        if (i<5) {
         var txtValue=document.getElementById("txtName").value;
         var myDiv=document.getElementById("hname");
         var chk=document.createElement("input");
         chk.type="checkbox";
         chk.name="todo";
         chk.id="chk"+i;
	   //chk.value = "value";
	   var br = document.createElement('br');
	   br.id="br"+i;
       var lbl = document.createElement("label");
       var edit=document.createElement("button");
       edit.id="edit"+i;
       edit.className="et";
       edit.innerHTML="edit";
       var btn=document.createElement("button");
       var txtcr=document.createElement("input");
       txtcr.type="text";
       txtcr.id="txt"+i;
       txtcr.style.display='none';
       btn.id=i;
       btn.className="bt";
       btn.innerHTML="delete";
       
    lbl.id="lbl"+i;
    lbl.innerHTML=txtValue;
    myDiv.appendChild(txtcr);
    myDiv.appendChild(chk);
    myDiv.appendChild(lbl);
    myDiv.appendChild(btn);
    myDiv.appendChild(edit)
    myDiv.appendChild(br);
    document.getElementById("txtName").value="";
//alert("");
i++;
var j=5-i;
document.getElementById("txtName").placeholder="Enter last "+j+" Items";

}
}
$(".bt").on('click',function(){
    var x=this.id;
    var lblid="#lbl"+x;
    var chkid="#chk"+x;
    var editid="#edit"+x;
    var brid="#br"+x;
    var did="#"+x;
    //alert("HISTORY");
    $(chkid).remove();
    $(editid).remove();
    $(lblid).remove();
    $(brid).remove();
    $(did).remove();
i--;
j++;
document.getElementById("txtName").style.display='block';   
document.getElementById("txtName").placeholder="Enter important Items";    
});

$(".et").on('click',function(){
           if ($(txtas).is(':visible')) {
            var dummy=txtas.substring(4);
        $(txtas).hide();
        var lid="#lbl"+dummy;
        var cid="#chk"+dummy;
        $("#"+dummy).show();
        $(cid).show();
        $(lid).show();
        $("#edit"+dummy).show();

    };  
    var ex=this.id;
    var a=ex.substring(4);
    var lid="#lbl"+a;
    var cid="#chk"+a;
    var txtid="#txt"+a;
    $(txtid).show();
    var v=$(lid).text();
    $(txtid).val(v);
    $("#"+a).hide();
    $(lid).hide();
    $(cid).hide();
    $("#"+ex).hide();
    



    $(txtid).on('keypress',function() {
    
    if (event.keyCode == 13) {
    $(lid).html($(txtid).val());
    $("#"+a).show();
    $(lid).show();
    $(cid).show();
    $("#"+ex).show();
    
    $(txtid).hide();
        }
    });

    txtas=txtid;
});


if (i>=5) {
    document.getElementById("txtName").style.display='none';

}
}