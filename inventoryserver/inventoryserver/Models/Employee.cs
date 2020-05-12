using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace inventoryserver.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeResponsibility = new HashSet<EmployeeResponsibility>();
        }
        [Key]
        public string EmployeeCode { get; set; }
        public string EmployeeName { get; set; }
        public string ReferenceEmployeeCode { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Phone2 { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string Address4 { get; set; }
        public DateTime? HiredDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string IdentityCard { get; set; }
        public string IdentityCardPlace { get; set; }
        public DateTime? IdentityCardDate { get; set; }
        public string IdentityCardAddress { get; set; }
        public string PostalCode { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string JobTitle { get; set; }
        public string ContractCode { get; set; }
        public string ContractType { get; set; }
        public DateTime? ContractExpiredDate { get; set; }
        public string HealthAssuranceNumber { get; set; }
        public string EducationDegree { get; set; }
        public string Attribute1 { get; set; }
        public string Attribute2 { get; set; }
        public string Attribute3 { get; set; }
        public string Attribute4 { get; set; }
        public string Attribute5 { get; set; }
        public string Leader { get; set; }
        public string Department { get; set; }
        public string SalesGroup { get; set; }
        public string EmployeeGroup { get; set; }
        public string EmployeeType { get; set; }
        public string CompanyCode { get; set; }
        public string CustomerCode { get; set; }
        public string CustomerName { get; set; }
        public string LocationCode { get; set; }
        public string LocationName { get; set; }
        public string Status { get; set; }
        public string Source { get; set; }
        public string Remark { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        // public byte[] RowNumber { get; set; }
        public bool Deleted { get; set; }
        public virtual ICollection<EmployeeResponsibility> EmployeeResponsibility { get; set; }

    }
}
