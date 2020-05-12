use [master]
go

use inventory
go


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Location](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[companyCode][nvarchar](20) NULL,
	[customerCode][nvarchar](40) NULL,
	[locationCode][nvarchar](40) NULL,
	[locationType][nvarchar](255) NULL,
	[locationName][nvarchar](255) NULL,
	[phone][nvarchar](20) NULL,
	[address][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[status][nvarchar](10) NULL,
	[salesRegionL1][nvarchar](40) NULL,
	[salesRegionL2][nvarchar](40) NULL,
	[salesRegionL3][nvarchar](40) NULL,
	[salesRegionL4][nvarchar](40) NULL,
	[salesRegionL5][nvarchar](40) NULL,
	[salesRegionL1name][nvarchar](255) NULL,
	[salesRegionL2name][nvarchar](255) NULL,
	[salesRegionL3name][nvarchar](255) NULL,
	[salesRegionL4name][nvarchar](255) NULL,
	[salesRegionL5name][nvarchar](255) NULL,
	[source][nvarchar](10) NULL,
	[createdBy][nvarchar](40) NULL,
	[createdDateTime][datetime]  NULL,
	[lastUpdatedBy][nvarchar](40) NULL,
	[lastUpdatedDateTime][datetime]  NULL,
	[deleted][bit] NULL,
	[rowVersion][timestamp] NULL,
	[logistics][bit] NULL,
	[defaultLogisticCode][nvarchar](40) NULL,
	[block][bit] NULL,
	[blockEndDate][datetime] null,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into Location( locationCode, locationName,phone,address,status,deleted)
values
('HN', N'Hà Nội', 'on','111','1','0'),
('HCM', N'Hồ Chí Minh','222','2', 'on','0'),
('HP',N'Hải Phòng','on','333','3','0'),
('HUE', N'Huế', 'off','444','4','0'),
('HUE', N'Huế', 'on','444','4','0');

ALTER TABLE [dbo].[Location] ADD  CONSTRAINT [DF_Location_deleted]  DEFAULT ((0)) FOR [deleted]
GO
