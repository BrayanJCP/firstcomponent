exports.module={
  select:(idSelector,options)=>{
    var select=document.getElementById(idSelector);
    options.forEach(function(e){ 
      var b=document.createElement('option');
      b.text=e.key;b.value=e.value;
      document.getElementById('selectCustom').appendChild(b);});
  }
}