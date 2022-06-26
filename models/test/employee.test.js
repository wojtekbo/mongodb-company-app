const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {
  it('should throw an error if no "firstName" or "lastName" or "department" arg', () => {
    const cases = [
      {firstName: 'Jan', lastName: 'Nowak'},
      {firstName: 'Jan', department: 'IT'},
      {lastName: 'Nowak', department: 'IT'},
    ];

    for (let employees of cases) {
      const emp = new Employee(employees);
      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "firstName" is not a string', () => {
    const cases = [{}, []];
    for (let firstName of cases) {
      const emp = new Employee(firstName);
      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "lastName" is not a string', () => {
    const cases = [{}, []];
    for (let lastName of cases) {
      const emp = new Employee(lastName);
      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "department" is not a string', () => {
    const cases = [{}, []];
    for (let department of cases) {
      const emp = new Employee(department);
      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }
  });

  it('should not throw an error if all data is okay', () => {
    const emp = new Employee({firstName: 'Jan', lastName: 'Nowak', department: 'Claims'});
    emp.validate(err => {
      expect(err).to.not.exist;
    });
  });

  after(() => {
    mongoose.models = {};
  });
});
