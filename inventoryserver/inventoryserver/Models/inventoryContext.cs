using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using inventoryserver.Models;

namespace inventoryserver.Models
{
  public partial class inventoryContext : DbContext
  {
    //internal object productGroup;

    public inventoryContext(DbContextOptions<inventoryContext> options)
        : base(options)
    {
    }
    public virtual DbSet<Location> Location { get; set; }
    public virtual DbSet<Warehouse> Warehouse { get; set; }
    public virtual DbSet<StoreInformation> StoreInformation { get; set; }
    public virtual DbSet<GoodsGroup> GoodsGroup { get; set; }
    public virtual DbSet<Customer> Customer { get; set; }
    public virtual DbSet<UOM> UOM { get; set; }
    public virtual DbSet<Calendar> Calendar { get; set; }
    public virtual DbSet<CodeMaster> CodeMaster { get; set; }
    public virtual DbSet<CodeDetail> CodeDetail { get; set; }
    public virtual DbSet<RoomGroup> RoomGroup { get; set; }
    public virtual DbSet<SalesTeam> SalesTeam { get; set; }
    public virtual DbSet<SalesTeamBin> SalesTeamBin { get; set; }
    public virtual DbSet<Employee> Employee { get; set; }
    public virtual DbSet<EmployeeResponsibility> EmployeeResponsibility { get; set; }
    public virtual DbSet<ProductGroup> ProductGroup { get; set; }
    public virtual DbSet<ProductGroupDetail> ProductGroupDetail { get; set; }
    public virtual DbSet<Structure> Structure { get; set; }
    public virtual DbSet<StructureValue> StructureValue { get; set; }
    public virtual DbSet<ApplyForCustomer> ApplyForCustomer { get; set; }
    public virtual DbSet<SecondaryCustomer> SecondaryCustomer { get; set; }
    public virtual DbSet<SecondaryCustomerShipToAddress> SecondaryCustomerShipToAddress { get; set; }

    public virtual DbSet<ApplyForHeader> ApplyForHeader { get; set; }

    public virtual DbSet<ApplyForSecondaryCustomer> ApplyForSecondaryCustomer { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Location>(entity =>
      {
        entity.Property(e => e.Address).HasMaxLength(255);

        entity.Property(e => e.BlockEndDate).HasColumnType("datetime");

        entity.Property(e => e.CompanyCode).HasMaxLength(20);

        entity.Property(e => e.CreatedBy).HasMaxLength(40);

        entity.Property(e => e.CreatedDateTime).HasColumnType("datetime");

        entity.Property(e => e.CustomerCode).HasMaxLength(40);

        entity.Property(e => e.DefaultLogisticCode).HasMaxLength(40);

        entity.Property(e => e.LastUpdatedBy).HasMaxLength(40);

        entity.Property(e => e.LastUpdatedDateTime).HasColumnType("datetime");

        entity.Property(e => e.LocationCode).HasMaxLength(40);

        entity.Property(e => e.LocationName).HasMaxLength(255);

        entity.Property(e => e.LocationType).HasMaxLength(255);

        entity.Property(e => e.Phone).HasMaxLength(20);

        entity.Property(e => e.Remark).HasMaxLength(255);

        entity.Property(e => e.RowVersion)
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.SalesRegionL1).HasMaxLength(40);

        entity.Property(e => e.SalesRegionL1name)
            .HasColumnName("SalesRegionL1Name")
            .HasMaxLength(255);

        entity.Property(e => e.SalesRegionL2).HasMaxLength(40);

        entity.Property(e => e.SalesRegionL2name)
            .HasColumnName("SalesRegionL2Name")
            .HasMaxLength(255);

        entity.Property(e => e.SalesRegionL3).HasMaxLength(40);

        entity.Property(e => e.SalesRegionL3name)
            .HasColumnName("SalesRegionL3Name")
            .HasMaxLength(255);

        entity.Property(e => e.SalesRegionL4).HasMaxLength(40);

        entity.Property(e => e.SalesRegionL4name)
            .HasColumnName("SalesRegionL4Name")
            .HasMaxLength(255);

        entity.Property(e => e.SalesRegionL5).HasMaxLength(50);

        entity.Property(e => e.SalesRegionL5name)
            .HasColumnName("SalesRegionL5Name")
            .HasMaxLength(255);

        entity.Property(e => e.Source).HasMaxLength(10);

        entity.Property(e => e.Status).HasMaxLength(10);
      });

      modelBuilder.Entity<Customer>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.Name)
            .IsRequired()
            .HasColumnName("name")
            .HasMaxLength(200);

        entity.Property(e => e.Phone)
            .IsRequired()
            .HasColumnName("phone")
            .HasMaxLength(10);
      });

      modelBuilder.Entity<UOM>(entity =>
      {
        entity.Property(e => e.Id).IsRequired();

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasMaxLength(20);

        entity.Property(e => e.UOMCode)
            .IsRequired()
            .HasColumnName("UOMCode")
            .HasMaxLength(20);

        entity.Property(e => e.UOMName)
            .IsRequired()
            .HasColumnName("UOMName")
            .HasMaxLength(255);

        entity.Property(e => e.Deleted).IsRequired();
      });

      modelBuilder.Entity<Calendar>(entity =>
      {
        entity.Property(e => e.Id).IsRequired();

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasMaxLength(20);

        entity.Property(e => e.CustomerCode)
            .IsRequired()
            .HasMaxLength(40);

        entity.Property(e => e.Recurring)
            .IsRequired()
            .HasColumnName("Recurring")
            .HasMaxLength(255);

        entity.Property(e => e.WorkingDate)
            .IsRequired()
            .HasColumnName("WorkingDate");

        entity.Property(e => e.WorkingDay)
            .IsRequired()
            .HasColumnName("WorkingDay")
            .HasMaxLength(10);

        entity.Property(e => e.Description)
            .IsRequired()
            .HasColumnName("Description")
            .HasMaxLength(255);

        entity.Property(e => e.NonWorking)
            .IsRequired()
            .HasColumnName("NonWorking");

        entity.Property(e => e.Status)
            .IsRequired()
            .HasColumnName("Status")
            .HasMaxLength(20);

        entity.Property(e => e.Deleted).IsRequired();
      });

      modelBuilder.Entity<RoomGroup>(entity =>
      {
        entity.Property(e => e.Id)
            .HasColumnName("id");
        entity.Property(e => e.Name)
            .HasColumnName("name");
        entity.Property(e => e.Note)
            .HasColumnName("note");
        entity.Property(e => e.Status)
            .HasColumnName("status");
        entity.Property(e => e.Deleted)
            .HasColumnName("deleted");
         entity.Property(e => e.CreatedBy)
            .HasColumnName("createdBy")
            .HasMaxLength(255);
        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");
        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(255);
        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");
        entity.HasKey(e => e.Id);
        //entity.Property(e => e.RowVersion)
          //  .IsRowVersion()
            //.IsConcurrencyToken();
      });
      modelBuilder.Entity<SalesTeam>(entity =>
            {
              entity.HasKey(e => e.SalesTeamCode);

                entity.Property(e => e.SalesTeamCode)
                    .HasColumnName("salesTeamCode")
                    .HasMaxLength(255);

                entity.Property(e => e.ChannelCode)
                    .HasColumnName("channelCode")
                    .HasMaxLength(255);

                entity.Property(e => e.ChannelName).HasColumnName("channelName");

                entity.Property(e => e.CompanyCode)
                    .HasColumnName("companyCode")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.CustomerCode)
                    .HasColumnName("customerCode")
                    .HasMaxLength(255);

                entity.Property(e => e.Deleted).HasColumnName("deleted");

                entity.Property(e => e.LastUpdatedBy)
                    .HasColumnName("lastUpdatedBy")
                    .HasMaxLength(255);

                entity.Property(e => e.LastUpdatedDateTime)
                    .HasColumnName("lastUpdatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.LocationCode)
                    .HasColumnName("locationCode")
                    .HasMaxLength(255);

                entity.Property(e => e.LocationName)
                    .HasColumnName("locationName")
                    .HasMaxLength(255);

                entity.Property(e => e.Remark).HasColumnName("remark");

                //entity.Property(e => e.RowNumber)
                  //  .HasColumnName("rowNumber")
                    //.IsRowVersion()
                    //.IsConcurrencyToken();

                entity.Property(e => e.SalesForceCode)
                    .HasColumnName("salesForceCode")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesForceL1)
                    .HasColumnName("salesForceL1")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesForceL2)
                    .HasColumnName("salesForceL2")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesForceL3)
                    .HasColumnName("salesForceL3")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesForceL4)
                    .HasColumnName("salesForceL4")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesForceL5)
                    .HasColumnName("salesForceL5")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesForceL6)
                    .HasColumnName("salesForceL6")
                    .HasMaxLength(40);

                entity.Property(e => e.SalesTeamName).HasColumnName("salesTeamName");

                entity.Property(e => e.SalesTeamType).HasColumnName("salesTeamType");

                entity.Property(e => e.Source)
                    .HasColumnName("source")
                    .HasMaxLength(1);

                entity.Property(e => e.Status).HasColumnName("status");
            });
      modelBuilder.Entity<SalesTeamBin>(entity =>
      {
        entity.Property(e => e.LineId)
            .HasColumnName("lineId");
        entity.Property(e => e.LocationCode)
            .HasColumnName("locationCode")
            .HasMaxLength(255);
        entity.Property(e => e.BinCode)
            .HasColumnName("binCode")
            .HasMaxLength(255);
        entity.Property(e => e.BinName)
            .HasColumnName("binName");
        entity.Property(e => e.BinType)
           .HasColumnName("binType");
        entity.Property(e => e.SalesTeamCode)
            .HasColumnName("salesTeamCode")
            .HasMaxLength(255);
        entity.Property(e => e.CompanyCode)
            .HasColumnName("companyCode")
            .HasMaxLength(255);
        entity.Property(e => e.CustomerCode)
            .HasColumnName("customerCode")
            .HasMaxLength(255);
        entity.Property(e => e.Source)
            .HasColumnName("source")
            .HasMaxLength(1);
        entity.Property(e => e.CreatedBy)
            .HasColumnName("createdBy")
            .HasMaxLength(255);
        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");
        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(255);
        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");
        // entity.Property(e => e.RowNumber)
        //     .HasColumnName("rowNumber")
        //     .IsConcurrencyToken();
        entity.Property(e => e.Deleted)
            .HasColumnName("deleted");
        entity.HasKey(e => e.LineId);
        entity.HasOne(d => d.SalesTeamCodeNavigation)
            .WithMany(p => p.SalesTeamBin)
            .HasForeignKey(d => d.SalesTeamCode)
            .OnDelete(DeleteBehavior.ClientSetNull)
            .HasConstraintName("FK_SalesTeamBin_SalesTeam");
      });
      modelBuilder.Entity<Employee>(entity =>
            {
              entity.HasKey(e => e.EmployeeCode);
                entity.Property(e => e.EmployeeCode)
                    .HasColumnName("employeeCode")
                    .HasMaxLength(255);

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(255);

                entity.Property(e => e.Address2)
                    .HasColumnName("address2")
                    .HasMaxLength(255);

                entity.Property(e => e.Address3)
                    .HasColumnName("address3")
                    .HasMaxLength(255);

                entity.Property(e => e.Address4)
                    .HasColumnName("address4")
                    .HasMaxLength(255);

                entity.Property(e => e.Attribute1)
                    .HasColumnName("attribute1")
                    .HasMaxLength(255);

                entity.Property(e => e.Attribute2)
                    .HasColumnName("attribute2")
                    .HasMaxLength(255);

                entity.Property(e => e.Attribute3)
                    .HasColumnName("attribute3")
                    .HasMaxLength(255);

                entity.Property(e => e.Attribute4)
                    .HasColumnName("attribute4")
                    .HasMaxLength(255);

                entity.Property(e => e.Attribute5)
                    .HasColumnName("attribute5")
                    .HasMaxLength(255);

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(255);

                entity.Property(e => e.CompanyCode)
                    .HasColumnName("companyCode")
                    .HasMaxLength(255);

                entity.Property(e => e.ContractCode)
                    .HasColumnName("contractCode")
                    .HasMaxLength(255);

                entity.Property(e => e.ContractExpiredDate)
                    .HasColumnName("contractExpiredDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.ContractType)
                    .HasColumnName("contractType")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.CustomerCode)
                    .HasColumnName("customerCode")
                    .HasMaxLength(255);

                entity.Property(e => e.CustomerName)
                    .HasColumnName("customerName")
                    .HasMaxLength(255);

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("dateOfBirth")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted).HasColumnName("deleted");

                entity.Property(e => e.Department)
                    .HasColumnName("department")
                    .HasMaxLength(255);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(255);

                entity.Property(e => e.District)
                    .HasColumnName("district")
                    .HasMaxLength(255);

                entity.Property(e => e.EducationDegree)
                    .HasColumnName("educationDegree")
                    .HasMaxLength(255);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(255);

                entity.Property(e => e.EmployeeGroup)
                    .HasColumnName("employeeGroup")
                    .HasMaxLength(255);

                entity.Property(e => e.EmployeeName)
                    .HasColumnName("employeeName")
                    .HasMaxLength(255);

                entity.Property(e => e.EmployeeType)
                    .HasColumnName("employeeType")
                    .HasMaxLength(255);

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(255);

                entity.Property(e => e.HealthAssuranceNumber)
                    .HasColumnName("healthAssuranceNumber")
                    .HasMaxLength(255);

                entity.Property(e => e.HiredDate)
                    .HasColumnName("hiredDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.IdentityCard)
                    .HasColumnName("identityCard")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCardAddress)
                    .HasColumnName("identityCardAddress")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCardDate)
                    .HasColumnName("identityCardDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.IdentityCardPlace)
                    .HasColumnName("identityCardPlace")
                    .HasMaxLength(255);

                entity.Property(e => e.JobTitle)
                    .HasColumnName("jobTitle")
                    .HasMaxLength(255);

                entity.Property(e => e.LastUpdatedBy)
                    .HasColumnName("lastUpdatedBy")
                    .HasMaxLength(255);

                entity.Property(e => e.LastUpdatedDateTime)
                    .HasColumnName("lastUpdatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Leader)
                    .HasColumnName("leader")
                    .HasMaxLength(255);

                entity.Property(e => e.LocationCode)
                    .HasColumnName("locationCode")
                    .HasMaxLength(255);

                entity.Property(e => e.LocationName)
                    .HasColumnName("locationName")
                    .HasMaxLength(255);

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(255);

                entity.Property(e => e.Phone2)
                    .HasColumnName("phone2")
                    .HasMaxLength(255);

                entity.Property(e => e.PostalCode)
                    .HasColumnName("postalCode")
                    .HasMaxLength(255);

                entity.Property(e => e.Province)
                    .HasColumnName("province")
                    .HasMaxLength(255);

                entity.Property(e => e.ReferenceEmployeeCode)
                    .HasColumnName("referenceEmployeeCode")
                    .HasMaxLength(255);

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                // entity.Property(e => e.RowNumber)
                //     .HasColumnName("rowNumber")
                //     .IsRowVersion()
                //     .IsConcurrencyToken();

                entity.Property(e => e.SalesGroup)
                    .HasColumnName("salesGroup")
                    .HasMaxLength(255);

                entity.Property(e => e.Source)
                    .HasColumnName("source")
                    .HasMaxLength(255);

                entity.Property(e => e.State)
                    .HasColumnName("state")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.UserName)
                    .HasColumnName("userName")
                    .HasMaxLength(255);

                entity.Property(e => e.Ward)
                    .HasColumnName("ward")
                    .HasMaxLength(255);
            });
      modelBuilder.Entity<EmployeeResponsibility>(entity =>
      {
        entity.HasKey(e => e.LineId);
        entity.Property(e => e.LineId)
            .HasColumnName("lineId")
            .ValueGeneratedOnAdd();
        entity.Property(e => e.CompanyCode)
            .HasColumnName("companyCode")
            .HasMaxLength(255);
        entity.Property(e => e.CreatedBy)
            .HasColumnName("createdBy")
            .HasMaxLength(255);
        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");
        entity.Property(e => e.CustomerCode)
            .HasColumnName("customerCode")
            .HasMaxLength(255);
        entity.Property(e => e.Deleted).HasColumnName("deleted");
        entity.Property(e => e.EmployeeCode)
            .IsRequired()
            .HasColumnName("employeeCode")
            .HasMaxLength(255);
        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(255);
        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");
        entity.Property(e => e.LocationCode)
            .HasColumnName("locationCode")
            .HasMaxLength(255);
        entity.Property(e => e.Role)
            .HasColumnName("role")
            .HasMaxLength(255);
        // entity.Property(e => e.RowVersion)
        //     .HasColumnName("rowVersion")
        //     .IsRowVersion()
        //     .IsConcurrencyToken();
        entity.Property(e => e.SalesRegionCode)
            .HasColumnName("salesRegionCode")
            .HasMaxLength(255);
        entity.Property(e => e.SalesRegionLevel)
            .HasColumnName("salesRegionLevel")
            .HasMaxLength(255);
        entity.Property(e => e.SalesRouteCode)
            .HasColumnName("salesRouteCode")
            .HasMaxLength(255);
        entity.Property(e => e.Source)
            .HasColumnName("source")
            .HasMaxLength(1);
         entity.HasOne(d => d.EmployeeCodeNavigation)
            .WithMany(p => p.EmployeeResponsibility)
            .HasForeignKey(d => d.EmployeeCode)
            .OnDelete(DeleteBehavior.ClientSetNull)
            .HasConstraintName("FK_EmployeeResponsibility_Employee");
      });

      modelBuilder.Entity<StoreInformation>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.Address)
            .HasColumnName("address")
            .HasMaxLength(100);

        entity.Property(e => e.CloseTime)
            .HasColumnName("closeTime")
            .HasColumnType("time(0)");

        entity.Property(e => e.CodeLocation).HasColumnName("codeLocation");

        entity.Property(e => e.CodeStaff).HasColumnName("codeStaff");

        entity.Property(e => e.CodeStore).HasColumnName("codeStore");

        entity.Property(e => e.OpenTime)
            .HasColumnName("openTime")
            .HasColumnType("time(0)");
      });
      modelBuilder.Entity<Warehouse>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.WarehouseName)
            .IsRequired()
            .HasColumnName("warehouseName")
            .HasMaxLength(50);

        entity.Property(e => e.LocationId)
            .IsRequired()
            .HasColumnName("locationId");


        entity.Property(e => e.WarehouseAddress)
            .IsRequired()
            .HasColumnName("warehouseAddress")
            .HasMaxLength(255);

        entity.Property(e => e.ManagerId)
            .IsRequired()
            .HasColumnName("managerId");

        entity.Property(e => e.WarehouseCode)
            .IsRequired()
            .HasColumnName("warehouseCode")
            .HasMaxLength(50);

        entity.Property(e => e.WarehouseStatus)
            .IsRequired()
            .HasColumnName("warehouseStatus")
            .HasMaxLength(50);
      });
      modelBuilder.Entity<GoodsGroup>(entity =>
      {
        entity.Property(e => e.id).HasColumnName("id");
        entity.HasKey(e => e.id);
        entity.Property(e => e.code)
            .IsRequired()
            .HasColumnName("code")
            .HasMaxLength(50);
        entity.Property(e => e.name)
            .IsRequired()
            .HasColumnName("name")
            .HasMaxLength(200);
        entity.Property(e => e.Status)
            .HasColumnName("status");
        entity.Property(e => e.Deleted)
            .HasColumnName("deleted");
        entity.Property(e => e.CreatedBy)
           .HasColumnName("createdBy")
           .HasMaxLength(255);
        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");
        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(255);
        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");
      });

      modelBuilder.Entity<CodeMaster>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.CMcode)
            .IsRequired()
            .HasColumnName("cMCode")
            .HasMaxLength(20);

        entity.Property(e => e.CMname)
            .IsRequired()
            .HasColumnName("cMName")
            .HasMaxLength(255);

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.CreatedBy).HasMaxLength(40);

        entity.Property(e => e.CreatedDateTime).HasColumnType("datetime");

        entity.Property(e => e.Deleted).HasColumnName("deleted");

        entity.Property(e => e.LastUpdatedBy).HasMaxLength(40);

        entity.Property(e => e.LastUpdatedDateTime).HasColumnType("datetime");

        entity.Property(e => e.Remark)
            .IsRequired()
            .HasColumnName("remark")
            .HasMaxLength(1000);

        entity.Property(e => e.RowVersion)
            .IsRequired()
            .HasColumnName("rowVersion")
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.Source)
            .IsRequired()
            .HasColumnName("source")
            .HasMaxLength(10);

        entity.Property(e => e.StandardName)
            .IsRequired()
            .HasColumnName("standardName")
            .HasMaxLength(255);

        entity.Property(e => e.Status)
            .IsRequired()
            .HasColumnName("status")
            .HasMaxLength(10);

        entity.Property(e => e.SystemCode).HasColumnName("systemCode");
      });

      modelBuilder.Entity<CodeDetail>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.CDcode)
            .IsRequired()
            .HasColumnName("cDCode")
            .HasMaxLength(20);

        entity.Property(e => e.CDname)
            .IsRequired()
            .HasColumnName("cDName")
            .HasMaxLength(255);

        entity.Property(e => e.CMcode)
            .IsRequired()
            .HasColumnName("cMCode")
            .HasMaxLength(20);

        entity.Property(e => e.CodeMasterId).HasColumnName("codeMasterId");

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.CreatedBy).HasMaxLength(40);

        entity.Property(e => e.CreatedDateTime).HasColumnType("datetime");

        entity.Property(e => e.CustomerCode)
            .IsRequired()
            .HasColumnName("customerCode")
            .HasMaxLength(40);

        entity.Property(e => e.Deleted).HasColumnName("deleted");

        entity.Property(e => e.LastUpdatedBy).HasMaxLength(40);

        entity.Property(e => e.LastUpdatedDateTime).HasColumnType("datetime");

        entity.Property(e => e.NumberValue)
            .HasColumnName("numberValue")
            .HasColumnType("decimal(18, 0)");

        entity.Property(e => e.Ordinal).HasColumnName("ordinal");

        entity.Property(e => e.Remark)
            .IsRequired()
            .HasColumnName("remark")
            .HasMaxLength(1000);

        entity.Property(e => e.RowVersion)
            .IsRequired()
            .HasColumnName("rowVersion")
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.Source)
            .IsRequired()
            .HasColumnName("source")
            .HasMaxLength(10);

        entity.Property(e => e.StandardName)
            .IsRequired()
            .HasColumnName("standardName")
            .HasMaxLength(255);

        entity.Property(e => e.Status)
            .IsRequired()
            .HasColumnName("status")
            .HasMaxLength(10);
      });
      modelBuilder.Entity<Structure>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");


        entity.Property(e => e.CompanyCode)
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.Delete1).HasColumnName("delete1");

        entity.Property(e => e.Level).HasColumnName("level");

        entity.Property(e => e.ParentCode)
            .HasColumnName("parentCode")
            .HasMaxLength(40);

        entity.Property(e => e.Remark)
            .HasColumnName("remark")
            .HasMaxLength(255);

        entity.Property(e => e.Source)
            .HasColumnName("source")
            .HasMaxLength(1);

        entity.Property(e => e.Status)
            .HasColumnName("status")
            .HasMaxLength(1);

        entity.Property(e => e.StructureCode)
            .HasColumnName("structureCode")
            .HasMaxLength(40);

        entity.Property(e => e.StructureName)
            .HasColumnName("structureName")
            .HasMaxLength(225);

        entity.Property(e => e.Type)
            .HasColumnName("type")
            .HasMaxLength(40);
      });

        modelBuilder.Entity<StructureValue>(entity =>
        {
          entity.Property(e => e.Id).HasColumnName("id");

          entity.Property(e => e.CompanyCode)
              .HasColumnName("companyCode")
              .HasMaxLength(20);

          entity.Property(e => e.Delete2).HasColumnName("delete2");

          entity.Property(e => e.Level).HasColumnName("level");

          entity.Property(e => e.Ordinal).HasColumnName("ordinal");

          entity.Property(e => e.ParentCode)
              .HasColumnName("parentCode")
              .HasMaxLength(40);

          entity.Property(e => e.ParentValue)
              .HasColumnName("parentValue")
              .HasMaxLength(255);

          entity.Property(e => e.Source)
              .HasColumnName("source")
              .HasMaxLength(1);

          entity.Property(e => e.Status)
              .HasColumnName("status")
              .HasMaxLength(1);

          entity.Property(e => e.StructureCode)
              .HasColumnName("structureCode")
              .HasMaxLength(40);

          entity.Property(e => e.StructureValueCode)
              .HasColumnName("structureValueCode")
              .HasMaxLength(40);

          entity.Property(e => e.StructureValueName)
              .HasColumnName("structureValueName")
              .HasMaxLength(225);

          entity.Property(e => e.Type)
              .HasColumnName("type")
              .HasMaxLength(40);

        });
      modelBuilder.Entity<ProductGroup>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");
        entity.Property(e => e.CompanyCode)
          .HasColumnName("companyCode")
          .HasMaxLength(20);
        entity.Property(e => e.ProductGroupCode)
          .HasColumnName("productGroupCode")
          .HasMaxLength(40);
        entity.Property(e => e.CustomerCode)
          .HasColumnName("customerCode")
          .HasMaxLength(40);
        entity.Property(e => e.ProductGroupName)
          .HasColumnName("productGroupName")
          .HasMaxLength(225);
        entity.Property(e => e.GroupType)
          .HasColumnName("groupType")
          .HasMaxLength(40);
        entity.Property(e => e.Description)
          .HasColumnName("description")
          .HasMaxLength(1000);
        entity.Property(e => e.CreateBy)
          .HasColumnName("createBy")
          .HasMaxLength(40);
        entity.Property(e => e.CreateDateTime) .HasColumnName("createDateTime");
        entity.Property(e => e.LastUpdateBy)
          .HasColumnName("lastUpdateBy")
          .HasMaxLength(40);
        entity.Property(e => e.LastUpdateDateTime) .HasColumnName("lastUpdateDateTime");
        entity.Property(e => e.Deleted).HasColumnName("deleted");
      });

      modelBuilder.Entity<ProductGroupDetail>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");
        entity.Property(e => e.CompanyCode)
          .HasColumnName("companyCode")
          .HasMaxLength(20);
        entity.Property(e => e.ProductGroupCode)
          .HasColumnName("productGroupCode")
          .HasMaxLength(40);
        entity.Property(e => e.CustomerCode)
          .HasColumnName("customerCode")
          .HasMaxLength(40);
        entity.Property(e => e.DetailType)
          .HasColumnName("detailType")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyCode)
          .HasColumnName("hierarchyCode")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyLevel)
          .HasColumnName("hierarchyLevel");
        entity.Property(e => e.HierarchyL01)
          .HasColumnName("hierarchyL01")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL02)
          .HasColumnName("hierarchyL02")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL03)
          .HasColumnName("hierarchyL03")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL04)
          .HasColumnName("hierarchyL04")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL05)
          .HasColumnName("hierarchyL05")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL06)
          .HasColumnName("hierarchyL06")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL07)
          .HasColumnName("hierarchyL07")
          .HasMaxLength(40);
        entity.Property(e => e.HierarchyL08)
          .HasColumnName("hierarchyL08")
          .HasMaxLength(40);
        entity.Property(e => e.SpaceCode)
          .HasColumnName("spaceCode")
          .HasMaxLength(40);
        entity.Property(e => e.MaterialType)
          .HasColumnName("materialType")
          .HasMaxLength(40);
         entity.Property(e => e.ProductCategoryCode)
          .HasColumnName("productCategoryCode")
          .HasMaxLength(40);
        entity.Property(e => e.ProductCategoryLevel)
          .HasColumnName("productCategoryLevel");
        entity.Property(e => e.ProductCode)
          .HasColumnName("productCode")
          .HasMaxLength(40);
        entity.Property(e => e.SpaceCode)
          .HasColumnName("spaceCode")
          .HasMaxLength(40);
        entity.Property(e => e.UOM)
          .HasColumnName("UOM")
          .HasMaxLength(40);
        entity.Property(e => e.Quantity)
          .HasColumnName("Quantity")
          .HasMaxLength(40);
        entity.Property(e => e.Desciption)
          .HasColumnName("desciption")
          .HasMaxLength(1000);
        entity.Property(e => e.CompareType)
          .HasColumnName("compareType");
        entity.Property(e => e.Min)
          .HasColumnName("min");
        entity.Property(e => e.Max)
          .HasColumnName("max");
        entity.Property(e => e.Type)
          .HasColumnName("type")
          .HasMaxLength(40);
        entity.Property(e => e.Source)
          .HasColumnName("source");
        entity.Property(e => e.CreateBy)
          .HasColumnName("createBy")
          .HasMaxLength(40);
        entity.Property(e => e.CreateDateTime)
          .HasColumnName("createDateTime");
        entity.Property(e => e.LastUpdateBy)
          .HasColumnName("lastUpdateBy")
          .HasMaxLength(40);
        entity.Property(e => e.LastUpdateDateTime)
          .HasColumnName("lastUpdateDateTime");
        entity.Property(e => e.Deleted).HasColumnName("deleted");
        entity.Property(e => e.HierarchyL01Name).HasColumnName("hierarchyL01Name");
        entity.Property(e => e.HierarchyL02Name).HasColumnName("hierarchyL02Name");
        entity.Property(e => e.HierarchyL03Name).HasColumnName("hierarchyL03Name");
        entity.Property(e => e.HierarchyL04Name).HasColumnName("hierarchyL04Name");
        entity.Property(e => e.HierarchyL05Name).HasColumnName("hierarchyL05Name");
        entity.Property(e => e.ProductName).HasColumnName("productName");
        entity.Property(e => e.CategoryL01)
          .HasColumnName("categoryL01")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL02)
          .HasColumnName("categoryL02")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL03)
          .HasColumnName("categoryL03")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL04)
          .HasColumnName("categoryL04")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL05)
          .HasColumnName("categoryL05")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL06)
          .HasColumnName("categoryL06")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL07)
          .HasColumnName("categoryL07")
          .HasMaxLength(40);
        entity.Property(e => e.CategoryL08)
          .HasColumnName("categoryL08")
          .HasMaxLength(40);
      });
      modelBuilder.Entity<SecondaryCustomer>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");
        entity.Property(e => e.Deleted).HasColumnName("deleted");


        entity.Property(e => e.Address).HasMaxLength(500);

        entity.Property(e => e.Address2).HasMaxLength(500);

        entity.Property(e => e.Address3).HasMaxLength(500);

        entity.Property(e => e.AnchorAccount).HasMaxLength(40);

        entity.Property(e => e.Attribute1).HasMaxLength(255);

        entity.Property(e => e.Attribute2).HasMaxLength(255);

        entity.Property(e => e.Attribute3).HasMaxLength(255);

        entity.Property(e => e.Attribute4).HasMaxLength(255);

        entity.Property(e => e.Attribute5).HasMaxLength(255);

        entity.Property(e => e.Attribute6).HasMaxLength(40);

        entity.Property(e => e.Attribute7).HasMaxLength(40);

        entity.Property(e => e.BankAccount).HasMaxLength(80);

        entity.Property(e => e.BankAccountName).HasMaxLength(120);

        entity.Property(e => e.BankAddress).HasMaxLength(255);

        entity.Property(e => e.BankBrandCode).HasMaxLength(120);

        entity.Property(e => e.BankBrandName).HasMaxLength(120);

        entity.Property(e => e.BankCode).HasMaxLength(40);

        entity.Property(e => e.BankName).HasMaxLength(255);

        entity.Property(e => e.BillToSecondaryCustomerCode).HasMaxLength(40);

        entity.Property(e => e.BillToSecondaryCustomerName).HasMaxLength(255);

        entity.Property(e => e.BusinessType).HasMaxLength(40);

        entity.Property(e => e.City).HasMaxLength(500);

        entity.Property(e => e.Club).HasMaxLength(255);

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasMaxLength(40);

        entity.Property(e => e.ContactName).HasMaxLength(255);
      

        entity.Property(e => e.ContractExpiredDate).HasColumnType("datetime");

        entity.Property(e => e.Country).HasMaxLength(500);

        entity.Property(e => e.CreatedBy)
            .HasColumnName("createdBy")
            .HasMaxLength(255);

        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.CreditLimit).HasColumnType("decimal(18, 0)");

        entity.Property(e => e.CustomerCode)
            .IsRequired()
            .HasMaxLength(40);

        entity.Property(e => e.CustomerSegment).HasMaxLength(40);

        entity.Property(e => e.CustomerSegmentDescription).HasMaxLength(255);

        entity.Property(e => e.DateOfBirth).HasColumnType("date");


        entity.Property(e => e.Email).HasMaxLength(225);

        entity.Property(e => e.EnviromentallyConscious).HasMaxLength(500);

        entity.Property(e => e.Gender).HasMaxLength(1);

        entity.Property(e => e.GivenName).HasMaxLength(255);

        entity.Property(e => e.HierarchyCode).HasMaxLength(40);

        entity.Property(e => e.HierarchyL01).HasMaxLength(40);

        entity.Property(e => e.HierarchyL02).HasMaxLength(40);

        entity.Property(e => e.HierarchyL03).HasMaxLength(40);

        entity.Property(e => e.IdentityCard).HasMaxLength(40);

        entity.Property(e => e.IdentityCardDate).HasColumnType("datetime");

        entity.Property(e => e.IdentityCardPlace).HasMaxLength(40);

        entity.Property(e => e.ImageSecondarycustomer).HasColumnType("image");

        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(255);

        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.Latitude).HasColumnType("decimal(18, 0)");

        entity.Property(e => e.LegalOwnerName).HasMaxLength(255);

        entity.Property(e => e.Longitude).HasColumnType("decimal(18, 0)");

        entity.Property(e => e.ParentSecondaryCustomerCode).HasMaxLength(40);

        entity.Property(e => e.ParentSecondaryCustomerCodeDescription).HasMaxLength(255);

        entity.Property(e => e.PaymentMethod).HasMaxLength(40);

        entity.Property(e => e.PaymentMethodDescription).HasMaxLength(500);

        entity.Property(e => e.PaymentTerm).HasMaxLength(40);

        entity.Property(e => e.PaymentTermDescription).HasMaxLength(500);

        entity.Property(e => e.Phone).HasMaxLength(80);

        entity.Property(e => e.Phone2).HasMaxLength(80);

        entity.Property(e => e.PostCode).HasMaxLength(40);

        entity.Property(e => e.PricePaymentTerm).HasMaxLength(40);

        entity.Property(e => e.PricePaymentTermCode).HasMaxLength(255);

        entity.Property(e => e.ReferenceSecondaryCustomerCode).HasMaxLength(40);

        entity.Property(e => e.RegionCode).HasMaxLength(40);

        entity.Property(e => e.RegionL1).HasMaxLength(40);

        entity.Property(e => e.RegionL2).HasMaxLength(40);

        entity.Property(e => e.RegionL3).HasMaxLength(40);

        entity.Property(e => e.RegionL4).HasMaxLength(40);

        entity.Property(e => e.RegionL5).HasMaxLength(40);

        entity.Property(e => e.Remark).HasMaxLength(2000);

        entity.Property(e => e.RowNumber)
            .HasColumnName("rowNumber")
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.SecondaryCustomerCategory).HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerClass).HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerClassDescription).HasMaxLength(255);

        entity.Property(e => e.SecondaryCustomerCode).HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerGroup).HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerName).HasMaxLength(255);

        entity.Property(e => e.SecondaryCustomerName2).HasMaxLength(255);

        entity.Property(e => e.SecondaryCustomerNameInvoice).HasMaxLength(255);

        entity.Property(e => e.SecondaryCustomerType).HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerTypeDescription).HasMaxLength(255);

        entity.Property(e => e.ShipToAddress).HasMaxLength(500);

        entity.Property(e => e.ShipToAddress2).HasMaxLength(500);

        entity.Property(e => e.ShipToPhone).HasMaxLength(40);

        entity.Property(e => e.Source).HasMaxLength(1);

        entity.Property(e => e.State).HasMaxLength(500);

        entity.Property(e => e.Status).HasMaxLength(40);

        entity.Property(e => e.Surname).HasMaxLength(255);

        entity.Property(e => e.SystemStatus).HasMaxLength(40);

        entity.Property(e => e.Tax).HasMaxLength(120);

        entity.Property(e => e.TaxCode).HasMaxLength(120);

        entity.Property(e => e.TaxType).HasMaxLength(40);

        entity.Property(e => e.Title).HasMaxLength(255);

        entity.Property(e => e.VatregistrationId)
            .HasColumnName("VATRegistrationID")
            .HasMaxLength(40);
            
        entity.Property(e => e.RowNumber)
            .HasColumnName("rowNumber")
            .IsRowVersion()
            .IsConcurrencyToken();
      });

      modelBuilder.Entity<SecondaryCustomerShipToAddress>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.AttachedDocument).HasMaxLength(255);

        entity.Property(e => e.CompanyCode)
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.Contact).HasMaxLength(255);

        entity.Property(e => e.CreatedBy)
            .HasColumnName("createdBy")
            .HasMaxLength(255);

        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.CustomerCode).HasMaxLength(40);

        entity.Property(e => e.DeliveryCondition).HasMaxLength(255);

        entity.Property(e => e.DeliveryTime).HasMaxLength(255);

        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(255);

        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.OtherRequest).HasMaxLength(255);

        entity.Property(e => e.RowVersion)
            .HasColumnName("rowVersion")
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.SecondaryCustomerCode).HasMaxLength(40);

        entity.Property(e => e.ShipToAddress)
            .HasColumnName("Ship To Address")
            .HasMaxLength(500);

        entity.Property(e => e.ShipToCode).HasMaxLength(40);

        entity.Property(e => e.ShipToName).HasMaxLength(255);

        entity.Property(e => e.Source).HasMaxLength(1);
      });

      modelBuilder.Entity<ApplyForHeader>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.ApplyForCode)
            .IsRequired()
            .HasColumnName("applyForCode")
            .HasMaxLength(40);

        entity.Property(e => e.CustomerCode)
            .IsRequired()
            .HasColumnName("customerCode")
            .HasMaxLength(40);

        entity.Property(e => e.ApplyForName)
            .IsRequired()
            .HasColumnName("applyForName")
            .HasMaxLength(255);

        entity.Property(e => e.Description)
            .IsRequired()
            .HasColumnName("description")
            .HasMaxLength(500);

        entity.Property(e => e.Remark)
            .IsRequired()
            .HasColumnName("remark")
            .HasMaxLength(1000);

        entity.Property(e => e.Status)
            .IsRequired()
            .HasColumnName("status")
            .HasMaxLength(1);

        entity.Property(e => e.Source)
            .IsRequired()
            .HasColumnName("source")
            .HasMaxLength(1);

        entity.Property(e => e.CreatedBy)
            .IsRequired()
            .HasColumnName("createdBy")
            .HasMaxLength(40);

        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(40);

        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.Deleted).HasColumnName("deleted");

        entity.Property(e => e.RowVersion)
            .IsRequired()
            .HasColumnName("rowVersion")
            .IsRowVersion()
            .IsConcurrencyToken();

      });

      modelBuilder.Entity<ApplyForCustomer>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.ApplyForCode)
            .IsRequired()
            .HasColumnName("applyForCode")
            .HasMaxLength(40);

        entity.Property(e => e.ApplyForCustomerCode)
            .IsRequired()
            .HasColumnName("applyForCustomerCode")
            .HasMaxLength(40);

        entity.Property(e => e.CustomerCode)
            .IsRequired()
            .HasColumnName("customerCode")
            .HasMaxLength(40);

        entity.Property(e => e.SalesTeamCode)
            .IsRequired()
            .HasColumnName("salesTeamCode")
            .HasMaxLength(40);

        entity.Property(e => e.Type)
            .IsRequired()
            .HasColumnName("type")
            .HasMaxLength(40);

        entity.Property(e => e.PrimaryCustomerHierarchyCode)
            .IsRequired()
            .HasColumnName("primaryCustomerHierarchyCode")
            .HasMaxLength(40);

        entity.Property(e => e.PrimaryCustomerHierarchyLevel)
            .IsRequired()
            .HasColumnName("primaryCustomerHierarchyLevel");

        entity.Property(e => e.RegionCode)
            .IsRequired()
            .HasColumnName("regionCode")
            .HasMaxLength(40);

        entity.Property(e => e.RegionLevel)
            .IsRequired()
            .HasColumnName("regionLevel");

        entity.Property(e => e.Source)
            .IsRequired()
            .HasColumnName("source")
            .HasMaxLength(1);

        entity.Property(e => e.CreatedBy)
            .IsRequired()
            .HasColumnName("createdBy")
            .HasMaxLength(40);

        entity.Property(e => e.CreatedBy)
            .IsRequired()
            .HasColumnName("createdBy")
            .HasMaxLength(40);

        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(40);

        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.Deleted).HasColumnName("deleted");

        entity.Property(e => e.RowVersion)
            .IsRequired()
            .HasColumnName("rowVersion")
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.Description)
            .IsRequired()
            .HasColumnName("description")
            .HasMaxLength(255);

        entity.Property(e => e.DepotCode)
            .IsRequired()
            .HasColumnName("depotCode")
            .HasMaxLength(40);

        entity.Property(e => e.SalesRouteCode)
            .IsRequired()
            .HasColumnName("salesRouteCode")
            .HasMaxLength(40);

        entity.Property(e => e.SalesRegionL1)
            .IsRequired()
            .HasColumnName("salesRegionL1")
            .HasMaxLength(40);

        entity.Property(e => e.SalesRegionL2)
            .IsRequired()
            .HasColumnName("salesRegionL2")
            .HasMaxLength(40);

        entity.Property(e => e.SalesRegionL3)
            .IsRequired()
            .HasColumnName("salesRegionL3")
            .HasMaxLength(40);

        entity.Property(e => e.SalesRegionL4)
            .IsRequired()
            .HasColumnName("salesRegionL4")
            .HasMaxLength(40);

        entity.Property(e => e.SalesRegionL5)
            .IsRequired()
            .HasColumnName("salesRegionL5")
            .HasMaxLength(40);
      });

      modelBuilder.Entity<ApplyForSecondaryCustomer>(entity =>
      {
        entity.Property(e => e.Id).HasColumnName("id");

        entity.Property(e => e.CompanyCode)
            .IsRequired()
            .HasColumnName("companyCode")
            .HasMaxLength(20);

        entity.Property(e => e.ApplyForCode)
            .IsRequired()
            .HasColumnName("applyForCode")
            .HasMaxLength(40);

        entity.Property(e => e.ApplyForCustomerCode)
            .IsRequired()
            .HasColumnName("applyForCustomerCode")
            .HasMaxLength(40);

        entity.Property(e => e.ApplyForSecondaryCustomerCode)
            .IsRequired()
            .HasColumnName("applyForSecondaryCustomerCode")
            .HasMaxLength(40);

        entity.Property(e => e.CustomerCode)
            .IsRequired()
            .HasColumnName("customerCode")
            .HasMaxLength(40);

        entity.Property(e => e.Type)
            .IsRequired()
            .HasColumnName("type")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerHierarchyCode)
            .IsRequired()
            .HasColumnName("secondaryCustomerHierarchyCode")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerHierarchyLevel)
            .IsRequired()
            .HasColumnName("secondaryCustomerHierarchyLevel");

        entity.Property(e => e.SecondaryCustomerRegionCode)
            .IsRequired()
            .HasColumnName("secondaryCustomerRegionCode")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerRegionLevel)
            .IsRequired()
            .HasColumnName("secondaryCustomerRegionLevel");

        entity.Property(e => e.SecondaryCustomerClass)
            .IsRequired()
            .HasColumnName("secondaryCustomerClass")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerGroup)
            .IsRequired()
            .HasColumnName("secondaryCustomerGroup")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerType)
            .IsRequired()
            .HasColumnName("secondaryCustomerType")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerSegment)
            .IsRequired()
            .HasColumnName("secondaryCustomerSegment")
            .HasMaxLength(40);

        entity.Property(e => e.SecondaryCustomerCode)
            .IsRequired()
            .HasColumnName("secondaryCustomerCode")
            .HasMaxLength(40);

        entity.Property(e => e.Source)
            .IsRequired()
            .HasColumnName("source")
            .HasMaxLength(1);

        entity.Property(e => e.CreatedBy)
            .IsRequired()
            .HasColumnName("createdBy")
            .HasMaxLength(40);

        entity.Property(e => e.CreatedBy)
            .IsRequired()
            .HasColumnName("createdBy")
            .HasMaxLength(40);

        entity.Property(e => e.CreatedDateTime)
            .HasColumnName("createdDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.LastUpdatedBy)
            .HasColumnName("lastUpdatedBy")
            .HasMaxLength(40);

        entity.Property(e => e.LastUpdatedDateTime)
            .HasColumnName("lastUpdatedDateTime")
            .HasColumnType("datetime");

        entity.Property(e => e.Deleted).HasColumnName("deleted");

        entity.Property(e => e.RowVersion)
            .IsRequired()
            .HasColumnName("rowVersion")
            .IsRowVersion()
            .IsConcurrencyToken();

        entity.Property(e => e.SecondaryCustomerCategory)
            .IsRequired()
            .HasColumnName("secondaryCustomerCategory")
            .HasMaxLength(255);

        entity.Property(e => e.ExcludeSecondaryCustomer)
            .IsRequired()
            .HasColumnName("excludeSecondaryCustomer");

        entity.Property(e => e.Description)
            .IsRequired()
            .HasColumnName("description")
            .HasMaxLength(255);

        entity.Property(e => e.ParentSecondaryCustomerCode)
            .IsRequired()
            .HasColumnName("parentSecondaryCustomerCode")
            .HasMaxLength(40);

      });

      OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    
  }
}
