USE inventory
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[GoodsGroup](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [nvarchar](50) NOT NULL,
	[name] [nvarchar](200) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into GoodsGroup(code, name) values ('M001', 'Milk')
insert into GoodsGroup(code, name) values ('M002', 'Meat')
insert into GoodsGroup(code, name) values ('D003', 'Drink')
insert into GoodsGroup(code, name) values ('F004', 'Fish')
GO
