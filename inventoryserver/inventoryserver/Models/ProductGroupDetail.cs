using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class ProductGroupDetail
  {
    public int Id { get; set; }
    public string CompanyCode { get; set; }
    public string ProductGroupCode { get; set; }
    public string CustomerCode { get; set; }
    public string DetailType { get; set; }
    public string HierarchyCode { get; set; }
    public int HierarchyLevel { get; set; }
    public string HierarchyL01 { get; set; }
    public string HierarchyL02 { get; set; }
    public string HierarchyL03 { get; set; }
    public string HierarchyL04 { get; set; }
    public string HierarchyL05 { get; set; }
    public string HierarchyL06 { get; set; }
    public string HierarchyL07 { get; set; }
    public string HierarchyL08 { get; set; }
    public string SpaceCode { get; set; }
    public string MaterialType { get; set; }
    public string ProductCategoryCode { get; set; }
    public int ProductCategoryLevel { get; set; }
    public string ProductCode { get; set; }
    public string UOM { get; set; }
    public string Quantity { get; set; }
    public string Desciption { get; set; }
    public string CompareType { get; set; }
    public int Min { get; set; }
    public int Max { get; set; }
    public string Type { get; set; }
    public string Source { get; set; }
    public string CreateBy { get; set; }
    public DateTime CreateDateTime { get; set; }
    public string LastUpdateBy { get; set; }
    public DateTime LastUpdateDateTime { get; set; }
    public bool Deleted { get; set; }
    public string HierarchyL01Name { get; set; }
    public string HierarchyL02Name { get; set; }
    public string HierarchyL03Name { get; set; }
    public string HierarchyL04Name { get; set; }
    public string HierarchyL05Name { get; set; }
    public string ProductName { get; set; }
    public string CategoryL01 { get; set; }
    public string CategoryL02 { get; set; }
    public string CategoryL03 { get; set; }
    public string CategoryL04 { get; set; }
    public string CategoryL05 { get; set; }
    public string CategoryL06 { get; set; }
    public string CategoryL07 { get; set; }
    public string CategoryL08 { get; set; }
  }
}
