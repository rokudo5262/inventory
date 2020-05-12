using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class ApplyForCustomer
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string ApplyForCode { get; set; }
    public string ApplyForCustomerCode { get; set; }
    public string CustomerCode { get; set; }
    public string SalesTeamCode { get; set; }
    public string Type { get; set; }
    public string PrimaryCustomerHierarchyCode { get; set; }
    public int PrimaryCustomerHierarchyLevel { get; set; }
    public string RegionCode { get; set; }
    public int RegionLevel { get; set; }
    public string Source { get; set; }
    public string CreatedBy { get; set; }
    public DateTime CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime LastUpdatedDateTime { get; set; }
    public bool Deleted { get; set; }
    public byte[] RowVersion { get; set; }
    public string Description { get; set; }
    public string DepotCode { get; set; }
    public string SalesRouteCode { get; set; }
    public string SalesRegionL1 { get; set; }
    public string SalesRegionL2 { get; set; }
    public string SalesRegionL3 { get; set; }
    public string SalesRegionL4 { get; set; }
    public string SalesRegionL5 { get; set; }

    public IList<ApplyForSecondaryCustomer> ApplyForSecondaryCustomers = new List<ApplyForSecondaryCustomer>();
  }
}
