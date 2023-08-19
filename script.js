function back(){
    var word = document.getElementById("area").value;
    var list = word.split('');
    list = list.reverse();

    document.getElementById("demo").innerHTML = list.join('');
}