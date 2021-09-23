var file = new XMLHttpRequest()
var text = []
file.open("GET", OnionArircles.txt, false);
file.onreadystatechange = function(){
   if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
                text = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
}

var randNum = Math.floor(Math.random() * 1000);
document.getElementById("artitle").innerHTML = text[randNum]
