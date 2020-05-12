using System;
using System.Collections.Generic;

namespace inventoryserver.Models
{
    public partial class CodeDetail
    {
        public long Id { get; set; }
        public long? CodeMasterId { get; set; }
        public string CompanyCode { get; set; }
        public string CustomerCode { get; set; }
        public string CMcode { get; set; }
        public string CDcode { get; set; }
        public string CDname { get; set; }
        public string StandardName { get; set; }
        public decimal? NumberValue { get; set; }
        public int? Ordinal { get; set; }
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
