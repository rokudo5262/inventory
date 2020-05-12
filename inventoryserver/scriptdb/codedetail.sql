USE [inventory]
GO
-----------------------
--drop table [CodeDetail]
-------------- 
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CodeDetail](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
  [codeMasterId] [bigint] NULL,
	[companyCode] [nvarchar](20) NOT NULL,
  [customerCode] [nvarchar](40) NOT NULL,
	[cMCode] [nvarchar](20) NOT NULL,
	[cDCode] [nvarchar](20) NOT NULL,
	[cDName] [nvarchar](255) NOT NULL,
	[standardName] [nvarchar](255) NOT NULL,
  numberValue decimal null,
  ordinal int null,
	[remark] [nvarchar](1000) NOT NULL,
  [status] [nvarchar](10) NOT NULL,
  [source] [nvarchar](10) NOT NULL,
  CreatedBy nvarchar(40) NULL,
	CreatedDateTime datetime NULL,
	LastUpdatedBy nvarchar(40) NULL,
	LastUpdatedDateTime datetime NULL,
	[deleted] [bit] NOT NULL,	
  rowVersion timestamp,
 CONSTRAINT [PK_CodeDetail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE [dbo].[CodeDetail]  WITH CHECK ADD  CONSTRAINT [FK_CodeDetail_CodeMaster_CodeMasterId] FOREIGN KEY([CodeMasterId])
--REFERENCES [dbo].[CodeMaster] ([id])
--GO

--ALTER TABLE [dbo].[CodeDetail] CHECK CONSTRAINT [FK_CodeDetail_CodeMaster_CodeMasterId]
--GO


--insert into [CodeDetail] ([companyCode], [cMCode], [cDCode], [cDName], [standardName], [customerCode], [remark], [deleted], [CodeMasterId])
--values ('uyen', 'WarehouseType', 'MainWarehouse', 'Main Warehouse','a1' , 'customerCode', 're', 0, 1),
--('uyen', 'WarehouseType', 'SubWarehouse', 'Sub Warehouse','a2' , 'customerCode', 're', 0, 1),
--('uyen', 'WarehouseType', 'InTransit', 'InTransit','a3' , 'customerCode', 're', 0, 1),

--('huong', '"BinType"', 'MainBin', 'Main Bin','b1' , 'customerCode', 're', 0, 2),
--('huong', '"BinType"', 'SubBin', 'Sub Bin','b2' , 'customerCode', 're', 0, 2), 

--('tuan', 'RolePerson','Sale', 'Sale','a3' , 'customerCode', 're', 0, 3),
--('tuan', 'RolePerson','Delivery', 'Delivery','a3' , 'customerCode', 're', 0, 3)
--Go

