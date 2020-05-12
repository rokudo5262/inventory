using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
 
    public partial class Structure
    {
      public long Id { get; set; }
      public string CompanyCode { get; set; }
      public string StructureCode { get; set; }
      public string StructureName { get; set; }
      public int? Level { get; set; }
      public string Type { get; set; }
      public string ParentCode { get; set; }
      public string Status { get; set; }
      public string Remark { get; set; }
      public string Source { get; set; }
      public bool? Delete1 { get; set; }
    }
  
}
