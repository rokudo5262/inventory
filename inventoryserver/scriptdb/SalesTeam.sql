Use inventory
Go

CREATE TABLE [dbo].[SalesTeam] (
	[salesTeamCode] [nvarchar](255) PRIMARY KEY not null ,
	[salesTeamName] [nvarchar](max) null,
  [salesTeamType] [nvarchar](max) null,
  [salesForceCode] [nvarchar](40) null,
  [salesForceL1] [nvarchar](40) null,
  [salesForceL2] [nvarchar](40) null,
  [salesForceL3] [nvarchar](40) null,
  [salesForceL4] [nvarchar](40) null,
  [salesForceL5] [nvarchar](40) null,
  [salesForceL6] [nvarchar](40) null,
  [locationCode] [nvarchar](255) null,
  [locationName] [nvarchar](255) null,
  [channelCode] [nvarchar](255) null,
	[channelName] [nvarchar](max) null,
  [companyCode] [nvarchar](255) null,
  [customerCode] [nvarchar](255) null,
	[status] [nvarchar](max) null,
 	[remark] [nvarchar](max) null,
  [source] [nvarchar](1) null,
 	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
	[rowNumber] [timestamp] null,
  [deleted] [bit] not null
);
INSERT INTO SalesTeam( salesTeamCode, salesTeamName, salesTeamType, channelCode, channelName, companyCode, customerCode, status, remark,deleted)
   VALUES
   ('1','Team 1','Type 1','1','1','1','1','Active','1','0'),
   ('2','Team 2','Type 2','2','2','2','2','Active','2','0'),
   ('3','Team 3','Type 3','3','3','3','3','Active','3','0'),
   ('4','Team 4','Type 4','4','4','4','4','Active','4','0'),
   ('5','Team 5','Type 5','5','5','5','5','Active','5','0'),
   ('6','Team 6','Type 6','6','6','6','6','Active','6','0');

ALTER TABLE [dbo].[SalesTeam] ADD  CONSTRAINT [DF_SalesTeam_deleted]  DEFAULT ((0)) FOR [deleted]
GO
