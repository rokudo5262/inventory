USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ApplyForCustomer](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[companyCode] [nvarchar](20) NOT NULL,
	[applyForCode] [nvarchar](40) NOT NULL,
  [applyForCustomerCode] [nvarchar](40) NOT NULL,
	[customerCode] [nvarchar](40) NOT NULL,
	[salesTeamCode] [nvarchar](40) NOT NULL,
	[type] [nvarchar](40) NOT NULL,
  [primaryCustomerHierarchyCode] [nvarchar](40) NOT NULL,
  [primaryCustomerHierarchyLevel] [int] NOT NULL,
  [regionCode] [nvarchar](40) NOT NULL,
  [regionLevel] [int] NOT NULL,
	[source] [nvarchar](1) NOT NULL,
	[createdBy] [nvarchar](40) NOT NULL,
	[createdDateTime] [datetime] NULL,
	[lastUpdatedBy] [nvarchar](40) NULL,
	[lastUpdatedDateTime] [datetime] NULL,
	[deleted] [bit] NOT NULL,
	[rowVersion] [timestamp] NOT NULL,
  [description] [nvarchar](255) NOT NULL,
  [depotCode] [nvarchar](40) NULL,
  [salesRouteCode] [nvarchar](40) NULL,
  [salesRegionL1] [nvarchar](40) NULL,
  [salesRegionL2] [nvarchar](40) NULL,
  [salesRegionL3] [nvarchar](40) NULL,
  [salesRegionL4] [nvarchar](40) NULL,
  [salesRegionL5] [nvarchar](40) NULL,
 CONSTRAINT [PK_ApplyForCustomer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


