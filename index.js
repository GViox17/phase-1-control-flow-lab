function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return 'This one is on me!';
    }  else if(distance < 2500){
    return 'I will gladly take your thirty bucks.';
    } else if(distance > 2500){
    return 'No can do.';
    }
}

function ternaryCheckCity(city){
  let checkCity = city === "NYC" ? "Ok, sounds good.": "No go.";
  return checkCity;
}

function switchOnCharmFromTip(tip){
 switch (tip) {
   case 'generous':
    return "Thank you so much."
   case 'not as generous':
    return "Thank you."
   default:
 return "Bye."
}
}