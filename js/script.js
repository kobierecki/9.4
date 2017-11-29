
var height = prompt("Size of the tree: ");

function drawTree(height) {
    for (var i = 0; i <= height; i++) {  
        var star = "";  
        for (var j = 0; j < height - i; j++) {
            star += " ";
        }
        for (var k= 0; k <= i; k++) {
            star += "* ";      
        }
        console.log(star);   
    }
}
drawTree(height);

//var num ="";
/*var height = prompt("Enter the size of the tree");
for(var i = 1; i <= height; i++) {
    num += i;
    console.log(num);
}*/
