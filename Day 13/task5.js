function calBMI(weight,height){
    let bmi=Math.round(weight/(height*height));
    console.log(`BMI value is ${bmi}`);
}
calBMI(65,1.8);