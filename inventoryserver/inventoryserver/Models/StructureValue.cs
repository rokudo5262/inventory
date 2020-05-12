using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public class StructureValue
  {
    public long Id { get; set; }
    public string CompanyCode { get; set; }
    public string StructureCode { get; set; }
    public string StructureValueCode { get; set; }
    public string StructureValueName { get; set; }
    public int? Level { get; set; }
    public string Type { get; set; }
    public string ParentCode { get; set; }
    public string ParentValue { get; set; }
    public string Status { get; set; }
    public int? Ordinal { get; set; }
    public string Source { get; set; }
    public bool? Delete2 { get; set; }
  }
}
