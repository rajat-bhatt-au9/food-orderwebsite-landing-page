var name_arr=[];

$.ajax({ 
  url:"./restaurant.json", 
  type: "get",
  success: function(res){
    
    for(var i=0; i<res.length; i++){
      name_arr.push(res[i].name);
    }
    console.log(name_arr)
    
     
    $( "#search-box").autocomplete({
      source: name_arr
   }); 

  }
});
