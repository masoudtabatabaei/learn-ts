class Department {
  employees : string[] = [];

  constructor(id:String , public name: string) {}

  describe(this: Department):void {
    console.log("Department is : " + this.name + " and ID: " + this.id);
  }

  addEmployee(employee: string):void {
    this.employees.push(employee);
  }

  printEmployeeInformation():void {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}


class ITDepartment extends Department {
  constructor(id: string , public admins:string[]) {
    super(id , "IT");
  }
}


class AccountingDepartment extends Department {
  private static instance:AccountingDepartment;

  private constructor(id: string , private reports: string[]) {
    super(id , "Accounting");
  }

  static getInstanceAccounting() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("ID-123" , []);
    return this.instance;
  }

  set addReport(report: string) {
    this.reports.push(report);
  }

  get getReports() {
    return this.reports;
  }
}

const itDepartment = new ITDepartment("666" , []);
const accountingDepartment = AccountingDepartment.getInstanceAccounting();

accountingDepartment.addReport = "This is first tech report!!";
console.log(accountingDepartment.getReports);