USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Warehouse](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[warehouseName] [nvarchar](50) NOT NULL,
	[locationId] [bigint] NOT NULL,
	[warehouseAddress] [nvarchar](255) NOT NULL,
	[managerId] [bigint] NOT NULL,
	[warehouseCode] [nvarchar](50) NOT NULL,
	[warehouseStatus] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Warehouse] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into Warehouse ([WarehouseName], [LocationId], [WarehouseAddress], [ManagerId], [WarehouseCode],[WarehouseStatus])
values ('Huong', 1, '1 nguyen trai', 1, '1a', 'Active'),
('Tuan', 2, '1 nguyen du', 2, '2a', 'Active'),
('Ky', 3, '1 nguyen hue', 3, '3a', 'Active')
Go

