Use inventory
Go

CREATE TABLE [dbo].[EmployeeResponsibility] (
  [lineId] [int] IDENTITY(1,1) not null,
  [employeeCode] [nvarchar](255) not null,
	[salesRegionCode] [nvarchar](255) null,
	[salesRegionLevel] [nvarchar](255) null,
	[companyCode] [nvarchar](255) not null,
	[customerCode][nvarchar](255) null,
	[locationCode][nvarchar](255) null,
	[salesRouteCode][nvarchar](255) null,
	[role][nvarchar](255) null,
	[source][nvarchar](1) null, 
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
	[rowVersion] [timestamp] null,
  [deleted] [bit] not null,
  PRIMARY KEY (lineId,companyCode),
);
INSERT INTO EmployeeResponsibility(companyCode,employeeCode,locationCode,customerCode,salesRegionCode,salesRegionLevel,salesRouteCode,deleted)
   VALUES
   ('Company Code 1','1','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','1','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','2','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','2','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','3','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','3','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','4','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','4','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','5','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','5','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','6','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0'),
   ('Company Code 1','6','Location Code 1','Customer Code 1','Sales Region Code 1','Sales Region Level 1','Sales Route Code 1','0');

ALTER TABLE [dbo].[EmployeeResponsibility] ADD  CONSTRAINT [DF_EmployeeResponsibility_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[EmployeeResponsibility]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeResponsibility_Employee] FOREIGN KEY([employeeCode])
REFERENCES [dbo].[Employee] ([employeeCode])
GO

ALTER TABLE [dbo].[EmployeeResponsibility] CHECK CONSTRAINT [FK_EmployeeResponsibility_Employee]
GO
