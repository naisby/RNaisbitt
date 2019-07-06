function router(value){
    
  hide_all_views();
    
    switch(value) {
        case "view_landing":
          // code block
            console.log("Show the landing UI view");
            view_landing.classList.remove("d-none");
            //$("#view_landing").show();
            break;
        case "view_roadconditions":
          // code block
            console.log("Show the road conditions UI view");
            view_landing.classList.remove("d-none");
            //$("#view_landing").show();
            break;
        case "view_weatherconditions":
          // code block
            console.log("Show the weather conditions UI view");
            view_landing.classList.remove("d-none");
            //$("#view_landing").show();
            break;
        case "view_maps":
          // code block
            console.log("Show the maps UI view");
            view_landing.classList.remove("d-none");
            //$("#view_landing").show();
            break;
     }
       
 }
                  
function hide_all_views(){
    view_landing.classList.add("d-none");
    view_roadconditions.classList.add("d-none");
    view_weatherconditions.classList.add("d-none");
    view_maps.classList.add("d-none");
    
    // jQuery Example Method - Adding display: none;/*    $("#view_landing").hide();    $("#view_loading").hide();    $("#view_forecast").hide();    $("#view_settings").hide();    */}
    
}
            
