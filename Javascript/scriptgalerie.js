
    /* Filtre Accesoires Galerie*/


    var btout = document.getElementById('tout');
    var bcd = document.getElementById('cassette');
    var bca = document.getElementById('assc');
    var bpc = document.getElementById('pcs');
    let allcd = document.querySelectorAll(".cd");
    let allpc = document.querySelectorAll(".pc");
    let allconsole = document.querySelectorAll(".console");

    btout.addEventListener('click',function(){
        btout.classList.add("activer");
    })

    bcd.addEventListener('click',function(){
        filtre(bcd,btout,bpc,bca,allconsole,allcd,allpc);
    })
    bca.addEventListener('click',function(){
        filtre(bca,btout,bpc,bcd,allpc,allconsole,allcd);
    })
    bpc.addEventListener('click',function(){
        filtre(bpc,btout,bca,bcd,allconsole,allpc,allcd);
    })
    btout.addEventListener('click',function(){
        all(btout,bcd,bpc,bca,allconsole,allcd,allpc);
       
    })

    

    
    function all(bcd,btout,bpc,bca,allconsole,allcd,allpc){
    
    btout.classList.remove("activer");
    bcd.classList.add("activer");
    bca.classList.remove("activer");
    bpc.classList.remove("activer");

    for ( valeur of allconsole ){
        
        valeur.classList.remove("show");
   

}
for ( valeur of allpc ){
        
        valeur.classList.remove("show");
   

}
for ( valeur of allcd ){
        
        valeur.classList.remove("show");
   

}


}


    function filtre(bcd,btout,bpc,bca,allconsole,allcd,allpc){
    
        btout.classList.remove("activer");
        bcd.classList.add("activer");
        bca.classList.remove("activer");
        bpc.classList.remove("activer");
    
        for ( valeur of allconsole ){
            
            valeur.classList.add("show");
       

    }
    for ( valeur of allpc ){
            
            valeur.classList.add("show");
       

    }
    for ( valeur of allcd ){
            
            valeur.classList.remove("show");
       

    }
   

}
