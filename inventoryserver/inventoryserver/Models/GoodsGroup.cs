using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class GoodsGroup
  {
    public long id { get; set; }
    public string code { get; set; }
    public string name { get; set; }
  }
}
