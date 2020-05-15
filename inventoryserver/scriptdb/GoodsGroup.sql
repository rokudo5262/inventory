USE inventory
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[GoodsGroup](
	[id]                  [bigint] IDENTITY(1,1) NOT NULL,
	[code]                [nvarchar](255)            NULL,
	[name]                [nvarchar](255)            NULL,
  [status]              [nvarchar](255)            NULL,
  [deleted]             [bit]                  NOT NULL,
  [createdBy]           [nvarchar](255)            NULL,
	[createdDateTime]     [datetime]                 NULL,
	[lastUpdatedBy]       [nvarchar](255)            NULL,
	[lastUpdatedDateTime] [datetime]                 NULL,
	
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [dbo].[GoodsGroup](code,name,status,deleted)
values
('M001','Milk'   ,'Enable','0'),
('M002','Meat'   ,'Enable','0'),
('B003','Beer'   ,'Enable','0'),
('E004','Egg'    ,'Enable','0'),
('C005','Chicken','Enable','0'),
('S006','Steak'  ,'Enable','0'),
('C007','Cheese' ,'Enable','0'),
('F008','Fish'   ,'Enable','0');

ALTER TABLE [dbo].[GoodsGroup] ADD  CONSTRAINT [DF_GoodsGroup_deleted]  DEFAULT ((0)) FOR [deleted]
GO
