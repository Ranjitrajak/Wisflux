function calMulti(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let multi=Number(num1)*Number(num2)
    document.getElementById("result").value=multi
}
function calDiv(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let Div=Number(num1)/Number(num2)
    document.getElementById("result").value=Div
}
function triangleArea() {

        let side1 = document.getElementById("side1").value;
        let side2 = document.getElementById("side2").value;
        let side3 = document.getElementById("side3").value;


        let s = (side1 + side2 + side3) / 2;
        let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

        document.getElementById("area").innerHTML = area;
 }

 function convertTemperature() {
      let temp = document.getElementById("temp").value;
      let unit = document.querySelector('input[name="unit"]:checked').value;

    if (unit === "celsius") {
         let fahrenheit = (temp * 9/5) + 32;
         document.getElementById("convertedTemp").innerHTML = fahrenheit + " Fahrenheit";
       } else {
          let celsius = (temp - 32) * 5/9;
          document.getElementById("convertedTemp").innerHTML = celsius + " Celsius";
        }
    }
    function difference() {
          let num = document.getElementById("num").value;
          let diff = Math.abs(num - 13);

   if (num > 13) {
       diff = diff * 2;
    }

  document.getElementById("diff").innerHTML = diff;
 }
 function findLargest() {
     let num1 = document.getElementById("num1").value;
     let num2 = document.getElementById("num2").value;
     let num3 = document.getElementById("num3").value;
    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
            var largest = Math.max(num1, num2, num3);
            document.getElementById("largest").innerHTML = largest;
     } else {
            document.getElementById("largest").innerHTML = "Enter valid numbers";
        }

}

function checkGrade() {
       var marks = document.getElementById("marks").value;
       var examType = document.getElementById("examType").value;
          if(!isNaN(marks)){
               if (examType === "midterm") {
                     if (marks >= 89 && marks <= 100) {
                              document.getElementById("result1").innerHTML = "True";
                       } else {
                              document.getElementById("result1").innerHTML = "False";
                           }
                  } else {
                           if (marks >= 90) {
                                  document.getElementById("result1").innerHTML = "True";
                           } else {
                               document.getElementById("result1").innerHTML = "False";
                             }
                     }
            } else {
                  document.getElementById("result1").innerHTML = "Enter valid number";
                }

}