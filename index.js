// Write your solution in this file!
const employee = {
    name: 'elijah',
    streetAdress: "Bronx, NY",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newthing = {
        ...employee,
        [key] : value,
    };
    return newthing;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    
    const newthing = {...employee};
    
    delete newthing[key];

    return newthing
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];

    return employee;
};
