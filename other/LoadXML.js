var dictHeroes = {};
var dictMovies = {};
var dictEdge = {};

d3.xml("Marvel - GraphML.xml", "application/xml", function(xml) {
    var Root = xml.childNodes[0];
    var Elements = Root.children[2];
    var i;
    
    // inizializzo dizionario personaggi
    for (i = 0; i < Elements.children.length; i++){
        var Elem = Elements.children[i];
        if (Elem.id == "m0")
            break;
        // Access each of the data values.
        var Name = Elem.children;
        // Write the data to the page.
        dictHeroes[Elem.id] = Name[1].textContent.toString();
        //target.append('h3').attr('id', Elem.id).text(Name[1].textContent.toString());
        
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
    
    console.log("Caricamento Finito!");

    Object.keys(dictEdge).forEach(function(key,i){
        console.log(dictHeroes[key] + ", Movies: " +dictEdge[key]);
    });
});