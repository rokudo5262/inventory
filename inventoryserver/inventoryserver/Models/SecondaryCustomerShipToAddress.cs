using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public class SecondaryCustomerShipToAddress
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string CustomerCode { get; set; }
    public string SecondaryCustomerCode { get; set; }
    public string ShipToCode { get; set; }
    public string ShipToName { get; set; }
    public string ShipToAddress { get; set; }
    public string Source { get; set; }
    public string CreatedBy { get; set; }
    public DateTime? CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime? LastUpdatedDateTime { get; set; }
    public byte[] RowVersion { get; set; }
    public bool? Deleted { get; set; }
    public string Contact { get; set; }
    public string DeliveryCondition { get; set; }
    public string DeliveryTime { get; set; }
    public string OtherRequest { get; set; }
    public string AttachedDocument { get; set; }
  }
}
