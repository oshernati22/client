import { Component, OnInit, } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.scss'],
  template: `
  <ng2-smart-table
    [settings]="settings"
    [source]="data"
    (deleteConfirm)="onDeleteConfirm($event)"
    (editConfirm)="onSaveConfirm($event)"
    (createConfirm)="onCreateConfirm($event)"
    (custom)="onCustomAction($event)"></ng2-smart-table>
`
})

export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }


  emp: any;
  data: any = [];

  ngOnInit(): void {
    this.refreshEmpList();
  }
  settings = {
    attr: {
      class: 'table table-bordered'
    },
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [
        { name: 'viewrecord', title: '<i> Calc Salary </i>' },
      ],
      position: 'left'
    },
    pager: {
      display: true,
      perPage: 5
    },
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      name: {
        title: 'Full Name'
      },
      phoneNumber: {
        title: 'Phone Number'
      },
      gender: {
        title: 'Gender',
        valuePrepareFunction: (value) => {
          return value === 0 ? 'Male' : 'Female'
        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { value: '1', title: 'Female' },
              { value: '0', title: 'Male' }
            ]
          }
        }
      },
      startDate: {
        title: 'Start Date',
        /* valuePrepareFunction: (date) => {
           var raw = new Date(date);
 
           var formatted = DatePipe.transform(raw, 'dd MMM yyyy');
           return formatted;
         }*/

      },
      type: {
        title: 'Level',
        valuePrepareFunction: (value) => {
          if (value === 0)
            return "Manger";
          if (value === 1)
            return "Junior";
          if (value === 2)
            return "Senior";

        },
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { value: '0', title: 'Manager' },
              { value: '1', title: 'Junior' },
              { value: '2', title: 'Senior' }
            ]
          }
        }

      },
      baseSalary: {
        title: 'Base Salary'
      }
    }
  };

  onCreateConfirm(event) {

    if (window.confirm('Are you sure you want to create?')) {

      this.service.addEmployee(event.newData).subscribe(
        (data) => console.log(data)
      );
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }



  onSaveConfirm(event) {

    if (window.confirm('Are you sure you want to save?')) {
      this.service.updateEmployee(event.newData).subscribe(
        (data) => console.log(data)
      );
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteEmployee(event.data).subscribe(
        (data) => console.log(data)
      );
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCustomAction(event) {
    console.log(event.data);
    this.service.calcSalry(event.data).subscribe(salary => {
      alert(`the salary until now is ${salary} $`);

    });
  }

  refreshEmpList() {
    this.service.getEmpList().subscribe(employeesList => {
      console.log(employeesList)
      this.data = employeesList;
    });
  }
}
