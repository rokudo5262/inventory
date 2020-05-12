USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductGroup](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyCode] [nvarchar] (20) null,
	[ProductGroupCode] [nvarchar] (40) not null,
	[CustomerCode] [nvarchar] (40) null,
	[ProductGroupName] [nvarchar] (255) not null,
	[GroupType] [nvarchar] (40) not null,
	[Description] [nvarchar] (1000) not null,
	[CreateBy] [nvarchar] (40) null,
	[CreateDateTime] [datetime] null,
	[LastUpdateBy] [nvarchar] (40) null,
	[LastUpdateDateTime] [datetime] null,
	[Delete] [bit] null,
	[RowVersion] [timestamp] null,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [ProductGroup] ([ProductGroupCode],[ProductGroupName],[GroupType],[Description]) 
values 
	('PGC-M001','Milk','Group','All kinds of milk'),
	('PGC-M002','Red-Bull','Product','Import in the Thailand'),
	('PGC-M002','CoCa/Pepsi','Bundle','Includes 2 soft drinks')
GO
