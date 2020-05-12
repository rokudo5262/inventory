import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Employee } from '@app/@core/data';

export interface EmployeeState extends EntityState<Employee> {
  selectedEmployeeCode: number | string | null;
}
export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({
  selectId: (employee: Employee) => employee.employeeCode,
  sortComparer: null,
});

export const employeeInitialState: EmployeeState = employeeAdapter.getInitialState({
  selectedEmployeeCode: null,
  entities: {
    0: {
      employeeCode: '',
      employeeName: '',
      userName: '',
      phone: '',
      phone2: '',
      address: '',
      address2: '',
      address3: '',
      address4: '',
      // hiredDate: Date,
      // endDate: Date,
      companyCode: '',
      customerCode: '',
      customerName: '',
      locationCode: '',
      locationName: '',
      status: '',
      remark: '',
      createdBy: '',
      // createdDateTime: Date,
      lastUpdatedBy: '',
      // lastUpdatedDateTime: Date,
      rowNumber: [],
      deleted: false,
    },
  },
});
