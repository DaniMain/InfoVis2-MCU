
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "Marvel - GraphML.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var Root = xmlDoc.childNodes[0];
    var Elements = Root.children[2];
    var i;
    var yDist = 70;
    
    // inizializzo dizionario personaggi
    for (i = 0; i < Elements.children.length; i++){
        var Elem = Elements.children[i];
        if (Elem.id == "m0")
            break;
        // Access each of the data values.
        var Name = Elem.children;
        // Write the data to the page.
        dictHeroes[Elem.id] = { "ID":Elem.id, "Name":Name[1].textContent.toString(), "y":yDist};
        
    };

    // inizializzo dizionario movie
    for (i = 0; i < Elements.children.length; i++){
        var Elem = Elements.children[i];
        if (Elem.id == "")
            break;
        if (Elem.id.substring(0,1) == "m"){
            // Access each of the data values.
            var Name = Elem.children;
            // Write the data to the page.
            dictMovies[Elem.id] = Name[1].textContent.toString();
            //target.append('h3').attr('id', Elem.id).text(Name[1].textContent.toString());
        }
        
    };

    //caricamento link character-movie

    var edges = Elements.getElementsByTagName("edge");
    Object.keys(edges).forEach(function(element, index, array){
        var array = dictEdge[edges[element].attributes[0].nodeValue];
        if (array == undefined){
            dictEdge[edges[element].attributes[0].nodeValue] = [edges[element].attributes[1].nodeValue]
        }else{
            array.push(edges[element].attributes[1].nodeValue)
        }
    });
    console.log("Caricamento dati, finito!");

    d3.select("#heroList").append("circle")
        .attr("id", "Hero_xml")
        .attr("cx", "60")
        .attr("cy", "800")
        .attr("r", radius)
        .attr("fill", "green")

}