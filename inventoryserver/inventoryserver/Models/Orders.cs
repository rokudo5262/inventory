using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace inventoryserver.Models
{
    public partial class Orders
    {
        [Key]
        public int OrderCode { get; set; }
        public int CustomerCode { get; set; }
        public string RequiedDay { get; set; }
        public DateTime? ShippedDay { get; set; }
        public int StoreCode { get; set; }
        public int StaffCode { get; set; }
        public bool? Deleted { get; set; }
        public string Status { get; set; }
        public string Remark { get; set; }
        public string Updatedby { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDateTime { get; set; }
        public DateTime? CreatedDateTime { get; set; }
    }
}
