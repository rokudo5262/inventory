using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace inventoryserver.Models
{
    public partial class RoomGroup
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public bool Deleted { get; set; }
        //public byte[] RowVersion { get; set; }
  }
}
