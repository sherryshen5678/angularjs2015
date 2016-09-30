function click_func() {
  
  if(1===2) {
    document.write('Equal values')
  } else if (1==1){
    document.write('1==1 is true');
  } else {
    document.write('Not equal values');
  }
  
  var name = 'Arun';
  
  switch(name) {
    case 'Arun':
      document.write('Arun here');
    break;
    case 'Nanda':
      document.write('Nanda here');
    break;
  }
   
   for(var i=0; i<=10; i++) {
     if(i==5) { 
       break;
     }
     document.write(i);
   }

  
}