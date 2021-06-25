function Validator() {
    
};

Validator.prototype.checkIntegerInput = function(number,spanId, errorMsg){
    if(number === 0){
        return true;
    }
    if(!number || number % 1 !== 0){
        var errorSpan = document.getElementById(spanId);
        errorSpan.style.display = "block";
        
        errorSpan.innerHTML = errorMsg;
        return false;
    }
    return true;
};

Validator.prototype.checkPositionInput = function(number, spanId, errorMsg, arrLength){
    var errorSpan = document.getElementById(spanId);
    if(number <= 0 || !number || number % 1 !== 0 || number > arrLength){
        
        errorSpan.style.display = "block";
        
        errorSpan.innerHTML = errorMsg;
        return false;
    }
    errorSpan.style.display = "none";
    return true;
}