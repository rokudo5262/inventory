using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace inventoryserver.Models
{
    public partial class SalesTeam
    {
        public SalesTeam()
        {
            SalesTeamBin = new HashSet<SalesTeamBin>();
        }
        [Key]
        public string SalesTeamCode { get; set; }
        public string SalesTeamName { get; set; }
        public string SalesTeamType { get; set; }
        public string SalesForceCode { get; set; }
        public string SalesForceL1 { get; set; }
        public string SalesForceL2 { get; set; }
        public string SalesForceL3 { get; set; }
        public string SalesForceL4 { get; set; }
        public string SalesForceL5 { get; set; }
        public string SalesForceL6 { get; set; }
        public string LocationCode { get; set; }
        public string LocationName { get; set; }
        public string ChannelCode { get; set; }
        public string ChannelName { get; set; }
        public string CompanyCode { get; set; }
        public string CustomerCode { get; set; }
        public string Status { get; set; }
        public string Remark { get; set; }
        public string Source { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        //public byte[] RowNumber { get; set; }
        public bool Deleted { get; set; }
        public virtual ICollection<SalesTeamBin> SalesTeamBin { get; set; }

  }
}
