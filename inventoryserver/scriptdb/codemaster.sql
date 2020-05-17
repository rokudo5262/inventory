USE [inventory]
GO
----------------------
--drop table [CodeMaster]
--------------------------

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CodeMaster](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[companyCode] [nvarchar](20)  NULL,
	[cMCode] [nvarchar](20)  NULL,
	[cMName] [nvarchar](255)  NULL,
	[standardName] [nvarchar](255)  NULL,
	[systemCode] [bit]  NULL,
	[remark] [nvarchar](1000)  NULL,
	[status] [nvarchar](10)  NULL,
	[source] [nvarchar](10)  NULL,
	CreatedBy nvarchar(40) NULL,
	CreatedDateTime datetime NULL,
	LastUpdatedBy nvarchar(40) NULL,
	LastUpdatedDateTime datetime NULL,
	[deleted] [bit] NOT NULL,
  rowVersion timestamp,
 CONSTRAINT [PK_CodeMaster] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [CodeMaster] ([companyCode], [cMCode], [cMName], [standardName], [systemCode],[remark], [deleted])
values
('uyen' ,'WarehouseType',N'Loại Chi Nhánh','a',0,'1a', 0),
('huong','BinType'      ,N'Loại Kho'      ,'b',0,'1b', 0),
('tuan' ,'RolePerson'   ,N'Chức Vụ'       ,'c',1,'1c', 0);
Go
