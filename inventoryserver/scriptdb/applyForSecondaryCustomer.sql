USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ApplyForSecondaryCustomer](
    [id] [bigint] IDENTITY(1,1) NOT NULL,
    [companyCode] [nvarchar](20) NOT NULL,
    [applyForCode] [nvarchar](40) NOT NULL,
    [applyForCustomerCode] [nvarchar](40) NOT NULL,
	  [applyForSecondaryCustomerCode] [nvarchar](40) NOT NULL,
    [customerCode] [nvarchar](40) NOT NULL,
    [type] [nvarchar](40) NOT NULL,
    [secondaryCustomerHierarchyCode] [nvarchar](40) NOT NULL,
    [secondaryCustomerHierarchyLevel] [int] NOT NULL,
    [secondaryCustomerRegionCode] [nvarchar](40) NOT NULL,
    [secondaryCustomerRegionLevel] [int] NOT NULL,
	  [secondaryCustomerClass] [nvarchar](40) NOT NULL,
    [secondaryCustomerGroup] [nvarchar](40) NOT NULL,
    [secondaryCustomerType] [nvarchar](40) NOT NULL,
    [secondaryCustomerSegment] [nvarchar](40) NOT NULL,
	  [secondaryCustomerCode] [nvarchar](40) NOT NULL,
    [source] [nvarchar](1) NOT NULL,
    [createdBy] [nvarchar](40) NOT NULL,
    [createdDateTime] [datetime] NULL,
    [lastUpdatedBy] [nvarchar](40) NULL,
    [lastUpdatedDateTime] [datetime] NULL,
    [deleted] [bit] NOT NULL,
    [rowVersion] [timestamp] NULL,
	  [secondaryCustomerCategory] [nvarchar](40) NULL,
	  [excludeSecondaryCustomer] [bit] NULL,
    [description] [nvarchar](255) NOT NULL,
    [parentSecondaryCustomerCode] [nvarchar](40) NULL,

 CONSTRAINT [PK_ApplyForSecondaryCustomer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


