    function kiemTra() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let BMI = Math.round(weight / (height ^ 2));

    if(BMI > 18) {
        document.write(BMI + "Underweight");
    }else if (BMI > 25) {
        document.write(BMI + "Normal");
    }else if (BMI > 30) {
        document.write(BMI + "Overweight");
    }else if(BMI < 18) {
        document.write(BMI + "thiếu cân nặng");
    }else {
        document.write(BMI + "Obese");
    }
}
