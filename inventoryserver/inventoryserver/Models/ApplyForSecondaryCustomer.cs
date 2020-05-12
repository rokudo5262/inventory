using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class ApplyForSecondaryCustomer
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string ApplyForCode { get; set; }
    public string ApplyForCustomerCode { get; set; }
    public string ApplyForSecondaryCustomerCode { get; set; }
    public string CustomerCode { get; set; }
    public string Type { get; set; }
    public string SecondaryCustomerHierarchyCode { get; set; }
    public int SecondaryCustomerHierarchyLevel { get; set; }
    public string SecondaryCustomerRegionCode { get; set; }
    public int SecondaryCustomerRegionLevel { get; set; }
    public string SecondaryCustomerClass { get; set; }
    public string SecondaryCustomerGroup { get; set; }
    public string SecondaryCustomerType { get; set; }
    public string SecondaryCustomerSegment { get; set; }
    public string SecondaryCustomerCode { get; set; }
    public string Source { get; set; }
    public string CreatedBy { get; set; }
    public DateTime CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime LastUpdatedDateTime { get; set; }
    public bool Deleted { get; set; }
    public byte[] RowVersion { get; set; }
    public string SecondaryCustomerCategory { get; set; }
    public bool  ExcludeSecondaryCustomer { get; set; }
    public string Description { get; set; }
    public string ParentSecondaryCustomerCode { get; set; }
  }
}
