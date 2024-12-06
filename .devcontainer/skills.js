function calculateNumbers(var1, var2) {
    return var1 + var2;
}

function IsString (value) {
    return typeof value === 'string' || value instanceof String;
}

function IsNumber (value) {
    return typeof value === 'number' && isFinite(value);
}