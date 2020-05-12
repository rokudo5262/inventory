using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class SecondaryCustomer
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string CustomerCode { get; set; }
    public string SecondaryCustomerCode { get; set; }
    public string SecondaryCustomerName { get; set; }
    public string SecondaryCustomerName2 { get; set; }
    public string LegalOwnerName { get; set; }
    public string ReferenceSecondaryCustomerCode { get; set; }
    public string ParentSecondaryCustomerCode { get; set; }
    public string ContactName { get; set; }
    public string Gender { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string GivenName { get; set; }
    public string Surname { get; set; }
    public string IdentityCard { get; set; }
    public string TaxType { get; set; }
    public string TaxCode { get; set; }
    public string Tax { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Phone2 { get; set; }
    public string Address { get; set; }
    public string Address2 { get; set; }
    public string Address3 { get; set; }
    public string Country { get; set; }
    public string State { get; set; }
    public string City { get; set; }
    public string PostCode { get; set; }
    public string Club { get; set; }
    public string AnchorAccount { get; set; }
    public string EnviromentallyConscious { get; set; }
    public string RegionCode { get; set; }
    public string RegionL1 { get; set; }
    public string RegionL2 { get; set; }
    public string RegionL3 { get; set; }
    public string RegionL4 { get; set; }
    public string RegionL5 { get; set; }
    public string HierarchyCode { get; set; }
    public string HierarchyL01 { get; set; }
    public string HierarchyL02 { get; set; }
    public string HierarchyL03 { get; set; }
    public string ShipToAddress { get; set; }
    public string ShipToAddress2 { get; set; }
    public string ShipToPhone { get; set; }
    public string PaymentTerm { get; set; }
    public int? CreditDay { get; set; }
    public decimal? Latitude { get; set; }
    public decimal? Longitude { get; set; }
    public decimal? CreditLimit { get; set; }
    public string BankCode { get; set; }
    public string BankName { get; set; }
    public string BankAddress { get; set; }
    public string BankAccount { get; set; }
    public string BankAccountName { get; set; }
    public string SecondaryCustomerGroup { get; set; }
    public string SecondaryCustomerClass { get; set; }
    public string Attribute1 { get; set; }
    public string Attribute2 { get; set; }
    public string Remark { get; set; }
    public string Status { get; set; }
    public string SystemStatus { get; set; }
    public int? DefaultDeliveryDay { get; set; }
    public DateTime? ContractExpiredDate { get; set; }
    public string Title { get; set; }
    public string CustomerSegment { get; set; }
    public string SecondaryCustomerType { get; set; }
    public string BankBrandName { get; set; }
    public string BankBrandCode { get; set; }
    public DateTime? IdentityCardDate { get; set; }
    public string IdentityCardPlace { get; set; }
    public string Source { get; set; }
    public string CreatedBy { get; set; }
    public DateTime? CreatedDateTime { get; set; }
    public string LastUpdatedBy { get; set; }
    public DateTime? LastUpdatedDateTime { get; set; }
    public byte[] RowNumber { get; set; }
    public string Attribute3 { get; set; }
    public string Attribute4 { get; set; }
    public string Attribute5 { get; set; }
    public string PaymentTermDescription { get; set; }
    public string PaymentMethod { get; set; }
    public string PaymentMethodDescription { get; set; }
    public string SecondaryCustomerCategory { get; set; }
    public string PricePaymentTerm { get; set; }
    public string PricePaymentTermCode { get; set; }
    public string Attribute6 { get; set; }
    public string BillToSecondaryCustomerCode { get; set; }
    public string VatregistrationId { get; set; }
    public string SecondaryCustomerTypeDescription { get; set; }
    public string SecondaryCustomerClassDescription { get; set; }
    public string CustomerSegmentDescription { get; set; }
    public string ParentSecondaryCustomerCodeDescription { get; set; }
    public string Attribute7 { get; set; }
    public string BillToSecondaryCustomerName { get; set; }
    public string BusinessType { get; set; }
    public string SecondaryCustomerNameInvoice { get; set; }
    public byte[] ImageSecondarycustomer { get; set; }
    public bool? Deleted { get; set; }

  }
}
