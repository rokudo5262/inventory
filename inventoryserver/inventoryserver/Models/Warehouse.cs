using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
  public partial class Warehouse
  {
    public long Id { get; set; }
    public string WarehouseName { get; set; }
    public long LocationId { get; set; }
    public string WarehouseAddress { get; set; }
    public long ManagerId { get; set; }
    public string WarehouseCode { get; set; }
    public string WarehouseStatus { get; set; }

  }
}
