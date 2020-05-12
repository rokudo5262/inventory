using System;
using System.Collections.Generic;

namespace inventoryserver.Models
{
    public partial class CodeMaster
    {
        public long Id { get; set; }
        public string CompanyCode { get; set; }
        public string CMcode { get; set; }
        public string CMname { get; set; }
        public string StandardName { get; set; }
        public bool SystemCode { get; set; }
        public string Remark { get; set; }
        public string Status { get; set; }
        public string Source { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }
        public bool Deleted { get; set; }
        public byte[] RowVersion { get; set; }
    }
}
