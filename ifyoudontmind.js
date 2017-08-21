
function tellTime(hour,min,period){
if(period==="AM" && min>=30){
  if(min===30){
    if(hour===12){
      return("It's half past midnight")
    }
    return("It's half past" + hour +" in the morning");
}  else {
    return("It's almost " + (hour+1) + " in the morning");
}
}
if(period==="AM" && min<30){
  if(min===15){
    if(hour===12){
      return("It's a quarter after midnight");
    }
    return("It's a quarter after " + hour + " in the morning");
  }else if (min===5){
    if(hour ===12){
      return("It's 5 after midnight");
    }
    return("It's 5 after " + hour + " in the morning");
  }
  else {
    return("It's just after " + (hour) + " in the morning");
}
}
if(period==="PM" && min>=30 ){
  if (min===30){
    if(hour===12){
      return("It's half past noon");
    }
    if(hour>=1 && hour<=5){
      return("It's half past "+ hour + " in the afternoon");
    }
    else {
    return("It's half past " + hour + " in the evening");
  }
}
  else{
    return("It's almost " + (hour+1) + " in the evening");
}
}

if(period==="PM" && min<30){
  if(min===15){
    if(hour===12){
      return("It's a quarter after noon");
    }
    if(hour>=1 && hour<=5){
      return("It's a quarter after "+ hour+  " in the afternoon");
    }
    else {
    return("It's a quarter after "+ hour + " in the evening");
  }
}else if (min===5){
  if(hour===12){
    return("It's 5 after noon");
  }
  return("It's 5 after " + hour + " in the evening");
}
  else {
    return("It's just after "+ hour + " in the evening");
}
}
}
console.log(tellTime(12,15,"PM"));
