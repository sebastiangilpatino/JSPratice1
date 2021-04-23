let arr = [1, 50, 40, 3, 10];
let result = arr.filter(x => x > 20)
  .reduce((accum, current) => accum + current);
document.write('my array is ',arr,' sum of numbers greater than 20 is : ',result);
document.write("<br><br><br>");


let strArr = ['maria', 'tomas', 'george', 'sebastian', 'mary'];
let result2 = strArr.filter(x => x.length >= 5 && x.includes('a'));
document.write('my array is '+strArr+' names length greater than 5 and including a is: ',result2);
document.write("<br><br><br>");

let birthDate1 = new Date(1994, 02, 14);
let birthDate2 = new Date(1993, 04, 18);
let birthDate3 = new Date(2011, 07, 11);
let birthDate4 = new Date(1966, 02, 13);

let emp1 = new Employee("jorge", "gil", birthDate1);
let emp2 = new Employee("maria", "estrada", birthDate2);
let emp3 = new Employee("tomas", "vargas", birthDate3);
let emp4 = new Employee("leidy", "patino", birthDate4);

let emplArr = [emp1, emp2, emp3, emp4];
document.write('Employees: ',emplArr);
document.write("<br><br><br>");

let greaterThan20 = emplArr.filter(x => x.getAge()>20);
document.write('Employees age greater than 20 ',greaterThan20);
document.write("<br><br><br>");

let after2000 = emplArr.filter(x => x.getAge() > 21).map(x => x.getFullName());
document.write('Employees born after 2000 ',after2000);

function Employee(firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  }

  this.getAge = function () {
    var difference= Math.abs(new Date() - this.birthDate);
    days = difference/(1000 * 3600 * 24)
    return days/365;
  }

}