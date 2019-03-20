function test()

{

    var w1 = document.getElementsByClassName("menu-item-escondido")[0];

    if (w1.style.display === "none")
    {
        w1.style.display = "block";
    }
    else 
    {        
        w1.style.display = "none";
    }


}