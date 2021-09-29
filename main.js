//var file = new XMLHttpRequest()
//var text = []
//file.open("GET", "http://OnionArticles.csv", false);
//console.log("here")
//file.onreadystatechange = function(){
//   if(rawFile.readyState === 4){
//            if(rawFile.status === 200 || rawFile.status == 0){
//                var allText = rawFile.responseText;
//                alert(allText);
//                text = allText.split("\n");
//            }
//    }
//    rawFile.send(null);
//}
//console.log(text)
//var filec= new XMLHttpRequest()
//var text = []
//filec.open("GET", "OnionOrNot.csv", false);
//var data = $.csv.toObjects(filec)
//console.log(data)
//var randNum = Math.floor(Math.random() * 1000);
//document.getElementById("artitle").innerHTML = data[randNum]
//var randNum = Math.floor(Math.random() * 1000);
//document.getElementById("artitle").innerHTML = text[randNum]

console.log("woow")

var data = $.csv.toObjects(OnionArticles.csv)