using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class Customer
  {
    public long Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
  }
}
