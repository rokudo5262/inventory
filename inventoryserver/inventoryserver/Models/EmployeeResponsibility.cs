using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace inventoryserver.Models
{
    public partial class EmployeeResponsibility
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int LineId { get; set; }
        public string EmployeeCode { get; set; }
        public string SalesRegionCode { get; set; }
        public string SalesRegionLevel { get; set; }
        public string CompanyCode { get; set; }
        public string CustomerCode { get; set; }
        public string LocationCode { get; set; }
        public string SalesRouteCode { get; set; }
        public string Role { get; set; }
        public string Source { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        // public byte[] RowVersion { get; set; }
        public bool Deleted { get; set; }
        public virtual Employee EmployeeCodeNavigation { get; set; }
    }
}
