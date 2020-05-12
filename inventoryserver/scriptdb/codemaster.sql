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
	[companyCode] [nvarchar](20) NOT NULL,
	[cMCode] [nvarchar](20) NOT NULL,
	[cMName] [nvarchar](255) NOT NULL,
	[standardName] [nvarchar](255) NOT NULL,
	[systemCode] [bit] NOT NULL,
	[remark] [nvarchar](1000) NOT NULL,
	[status] [nvarchar](10) NOT NULL,
	[source] [nvarchar](10) NOT NULL,
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

--insert into [CodeMaster] ([companyCode], [cMCode], [cMName], [standardName], [systemCode],[remark], [deleted])
--values ('uyen', 'WarehouseType', 'Loai chi nhanh', 'a', 0, '1a', 0),
--('huong', 'BinType', 'Loai kho', 'b', 0, '1b', 0),
--('tuan', 'RolePerson', 'chuc vu', 'c', 1, '1c', 0)
--Go
