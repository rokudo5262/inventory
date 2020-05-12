using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace inventoryserver.Models
{
    public partial class SalesTeamBin
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int LineId { get; set; }
        public string SalesTeamCode { get; set; }
        public string LocationCode { get; set; }
        public string BinCode { get; set; }
        public string BinName { get; set; }
        public string BinType { get; set; }
        public string CompanyCode { get; set; }
        public string CustomerCode { get; set; }
        public string Source { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        // public byte[] RowNumber { get; set; }
        public bool Deleted { get; set; }
        public virtual SalesTeam SalesTeamCodeNavigation { get; set; }

  }
}
