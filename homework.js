let arr = [1, 50, 40, 3, 10];
let result = arr.filter(x => x > 20)
  .reduce((accum, current) => accum + current);
document.write('My array is ',arr,' sum of numbers greater than 20 is : ',result);
document.write("<br><br><br>");

let strArr = ['maria', 'tomas', 'george', 'sebastian', 'mary'];
let result2 = strArr.filter(x => x.length >= 5 && x.includes('a'));
document.write('My array is '+strArr+' names length greater than 5 and including a is: ',result2);
document.write("<br><br><br>");

let emp1 = new Employee("jorge", "gil", new Date(1994, 02, 14));
let emp2 = new Employee("maria", "estrada", new Date(1993, 04, 18));
let emp3 = new Employee("tomas", "vargas", new Date(2011, 07, 11));
let emp4 = new Employee("leidy", "patino", new Date(1966, 02, 13));

let emplArr = [emp1, emp2, emp3, emp4];
document.write('Employees are: ');
document.write("<br>");
printEmpl(emplArr);

document.write("<br><br>");

let greaterThan20 = emplArr.filter(x => x.getAge()>20);
document.write('Employees age greater than 20 years old');
document.write("<br>");
printEmpl(greaterThan20);
document.write("<br><br><br>");

let after2000 = emplArr.filter(x => x.getAge() > 21).map(x => x.getFullName());
document.write('Name of employees born after 2000: ',after2000);

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
    return Math.round(days/365);
  }

}

function printEmpl(Empl){
	for(let i=0; i<Empl.length; i++){
		document.writeln('Employee '+i+': Name: '+Empl[i].getFullName()+', Age: '+Empl[i].getAge());
		document.write("<br>");
	}
}
