USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductGroup](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[CompanyCode] [nvarchar] (20) null,
	[ProductGroupCode] [nvarchar] (40) not null,
	[CustomerCode] [nvarchar] (40) null,
	[ProductGroupName] [nvarchar] (255) not null,
	[GroupType] [nvarchar] (40) not null,
	[Description] [nvarchar] (1000) not null,
	[CreatedBy] [nvarchar] (40) null,
	[CreatedDateTime] [datetime] null,
	[LastUpdatedBy] [nvarchar] (40) null,
	[LastUpdatedDateTime] [datetime] null,
	[Deleted] [bit] null,
	[RowVersion] [timestamp] null,
)
GO

insert into [ProductGroup] ([ProductGroupCode],[ProductGroupName],[GroupType],[Description],[Deleted]) 
values 
	('PGC-M001','Milk','Group','All kinds of milk',0),
	('PGC-M002','Red-Bull','Product','Import in the Thailand',0),
	('PGC-M002','CoCa/Pepsi','Bundle','Includes 2 soft drinks',0);
GO

ALTER TABLE [dbo].[ProductGroup] ADD  CONSTRAINT [DF_ProductGroup_deleted]  DEFAULT ((0)) FOR [deleted]
GO
