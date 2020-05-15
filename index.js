function wakeDog(dogName, dogBreed){
    console.log(`Wake ${dogName} the ${dogBreed}`);
    let x1=`Wake ${dogName} the ${dogBreed}`;
    return x1;
}
function leashDog(dogName, dogBreed){
      console.log(`leash ${dogName} the ${dogBreed}`);
    let x2=`Leash ${dogName} the ${dogBreed}`;
    return x2;
  
}
function walkToPark(dogName, dogBreed){
      console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    let x3=`Walk to the park with ${dogName} the ${dogBreed}`;
    return x3;
  
}
function throwFrisbee(dogName, dogBreed){
    console.log(`Throw the frisbee forh ${dogName} the ${dogBreed}`);
    let x4=`Throw the frisbee for ${dogName} the ${dogBreed}`;
    return x4; 
  
}
function walkHome(dogName, dogBreed){
     console.log(`Walk home with ${dogName} the ${dogBreed}`);
    let x5=`Walk home with ${dogName} the ${dogBreed}`;
    return x5; 
  
}
function unleashDog(dogName, dogBreed){
       console.log(`Unleash ${dogName} the ${dogBreed}`);
    let x6=`Unleash ${dogName} the ${dogBreed}`;
    return x6; 
}
let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
function exerciseDog(dogName,dogBreed){
  let zz=[];
  for (let i=0;i< routine.length;i++){
    zz[i]=routine[i](dogName,dogBreed);
  }
  return zz;
  
}


