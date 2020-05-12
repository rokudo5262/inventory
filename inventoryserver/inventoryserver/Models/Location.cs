using System;
using System.Collections.Generic;

namespace inventoryserver.Models
{
    public partial class Location
    {
        public long Id { get; set; }
        public string CompanyCode { get; set; }
        public string CustomerCode { get; set; }
        public string LocationCode { get; set; }
        public string LocationType { get; set; }
        public string LocationName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Remark { get; set; }
        public string Status { get; set; }
        public string SalesRegionL1 { get; set; }
        public string SalesRegionL2 { get; set; }
        public string SalesRegionL3 { get; set; }
        public string SalesRegionL4 { get; set; }
        public string SalesRegionL5 { get; set; }
        public string SalesRegionL1name { get; set; }
        public string SalesRegionL2name { get; set; }
        public string SalesRegionL3name { get; set; }
        public string SalesRegionL4name { get; set; }
        public string SalesRegionL5name { get; set; }
        public string Source { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public bool? Deleted { get; set; }
        public byte[] RowVersion { get; set; }
        public bool? Logistics { get; set; }
        public string DefaultLogisticCode { get; set; }
        public bool? Block { get; set; }
        public DateTime? BlockEndDate { get; set; }
    }
}
