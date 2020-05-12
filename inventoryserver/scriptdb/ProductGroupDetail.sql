USE [inventory]
GO

/****** Object:  Table [dbo].[ProductGroupDetail]    Script Date: 4/15/2020 7:30:17 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductGroupDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL, 
	[CompanyCode] [nvarchar](20) NULL,
	[ProductGroupCode] [nvarchar](40) NULL,
	[CustomerCode] [nvarchar](40) NULL,
	[DetailType] [nvarchar](40) NULL,
	[HierarchyCode] [nvarchar](40) NULL,
	[HierarchyLevel] [int] NULL,
	[HierarchyL01] [nvarchar](40) NULL,
	[HierarchyL02] [nvarchar](40) NULL,
	[HierarchyL03] [nvarchar](40) NULL,
	[HierarchyL04] [nvarchar](40) NULL,
	[HierarchyL05] [nvarchar](40) NULL,
	[HierarchyL06] [nvarchar](40) NULL,
	[HierarchyL07] [nvarchar](40) NULL,
	[HierarchyL08] [nvarchar](40) NULL,
	[SpaceCode] [nvarchar](40) NULL,
	[MaterialType] [nvarchar](40) NULL,
	[ProductCategoryCode] [nvarchar](40) NULL,
	[ProductCategoryLevel] [int] NULL,
	[ProductCode] [nvarchar](40) NULL,
	[UOM] [nvarchar](40) NULL,
	[Quantity] [decimal](18, 0) NULL,
	[Desciption] [nvarchar](1000) NULL,
	[CompareType] [nvarchar](1) NULL,
	[Min] [decimal](18, 0) NULL,
	[Max] [decimal](18, 0) NULL,
	[Type] [nvarchar](40) NULL,
	[Source] [nvarchar](1) NULL,
	[CreateBy] [nvarchar](40) NULL,
	[CreateDateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](40) NULL,
	[LastUpdateDateTime] [datetime] NULL,
	[Deleted] [bit] NULL,
	[HierarchyL01Name] [nvarchar](1) NULL,
	[HierarchyL02Name] [nvarchar](1) NULL,
	[HierarchyL03Name] [nvarchar](1) NULL,
	[HierarchyL04Name] [nvarchar](1) NULL,
	[HierarchyL05Name] [nvarchar](1) NULL,
	[ProductName] [nvarchar](1) NULL,
	[CategoryL01] [nvarchar](40) NULL,
	[CategoryL02] [nvarchar](40) NULL,
	[CategoryL03] [nvarchar](40) NULL,
	[CategoryL04] [nvarchar](40) NULL,
	[CategoryL05] [nvarchar](40) NULL,
	[CategoryL06] [nvarchar](40) NULL,
	[CategoryL07] [nvarchar](40) NULL,
	[CategoryL08] [nvarchar](40) NULL
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ProductGroupDetail] ADD  DEFAULT (getdate()) FOR [CreateDateTime]
GO


