using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace inventoryserver.Models
{
    public class StoreInformation
    {
        public long Id { get; set; }
        public int? CodeStore { get; set; }
        public int? CodeStaff { get; set; }
        public int? CodeLocation { get; set; }
        public TimeSpan? OpenTime { get; set; }
        public TimeSpan? CloseTime { get; set; }
        public string Address { get; set; }
    }
}
