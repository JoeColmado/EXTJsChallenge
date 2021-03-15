const employees = require('./MockData');
const fields = require('./Fields');
const fs = require('fs');

// Class to convert Array of array in nested TreeData
// Data Requires the Fields: Manager_ID and EMPLOYEE_ID
// Datasource is the MockData.js file and Output is out.txt
class  TreeData {
    constructor() {
        this.employeesObject = this.arrayToObject();
        this.nestedData = {};
        setTimeout(() => {
            this.nestData();
        },200)
        setTimeout(() => {
            this.writeToFile()
        }, 1000)

        // console.log(this.nestedData);
    }
    arrayToObject() {
        let newEmployeeData = [];

        employees.forEach((set, index) => {
            let object;
            object = set.reduce((result, item, index) => {
                result[fields[index].name] = item;
                return result;
            }, {});
            newEmployeeData.push(object);
        });
        return newEmployeeData;
    }
    nestData() {
        this.nestedData = this.getNestedChildren(this.employeesObject);
    }
    getNestedChildren(arr, parent) {
        let out = [];
        for (var i in arr) {
            if (arr[i].MANAGER_ID == parent) {
                let children = this.getNestedChildren(arr, arr[i].EMPLOYEE_ID);

                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }
        return out;
    }
    writeToFile() {
        fs.writeFile('./out.json', JSON.stringify(this.nestedData, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("Nested Data Created and written into File.");
        });
    }

}
module.exports = TreeData;