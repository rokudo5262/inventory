Use inventory
Go

CREATE TABLE [dbo].[SalesTeamBin] (
	[lineId] [int] IDENTITY(1,1) not null ,
	[locationCode] [varchar](255) null,
	[binCode] [varchar](255) null,
	[binName] [varchar](max) null,
	[binType] [varchar](max) null,
	[companyCode] [varchar](255) null,
	[customerCode] [varchar](255) null,
	[salesTeamCode] [varchar](255) not null,
  [source] [nvarchar](1) null,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
	[rowNumber] [timestamp] null,
  [deleted] [bit] not null,
  PRIMARY KEY (lineId, salesTeamCode),
);
SET IDENTITY_INSERT[dbo].[SalesTeamBin] OFF;

INSERT INTO SalesTeamBin( locationCode, binCode, binName, binType, companyCode, customerCode,salesTeamCode ,deleted)
   VALUES
   ('1', 'Code 1', 'Name 1', 'Type 1','1','1','1','0'),
   ('2', 'Code 2', 'Name 2', 'Type 2','2','2','2','0'),
   ('3', 'Code 3', 'Name 3', 'Type 3','3','3','3','0'),
   ('4', 'Code 4', 'Name 4', 'Type 4','4','4','4','0'),
   ('5', 'Code 5', 'Name 5', 'Type 5','5','5','1','0'),
   ('6', 'Code 6', 'Name 6', 'Type 6','6','6','2','0'),
   ('7', 'Code 7', 'Name 7', 'Type 7','5','5','3','0'),
   ('8', 'Code 8', 'Name 8', 'Type 8','6','6','4','0'),
   ('9', 'Code 9', 'Name 9', 'Type 9','5','5','1','0'),
   ('10','Code 10','Name 10','Type 10','6','6','2','0'),
   ('11','Code 11','Name 11','Type 11','5','5','3','0'),
   ('12','Code 12','Name 12','Type 12','6','6','4','0'),
   ('13','Code 13','Name 13','Type 13','5','5','1','0'),
   ('14','Code 14','Name 14','Type 14','6','6','2','0'),
   ('15','Code 15','Name 15','Type 15','5','5','3','0'),
   ('16','Code 16','Name 16','Type 16','6','6','4','0'),
   ('17','Code 17','Name 17','Type 17','5','5','1','0'),
   ('18','Code 18','Name 18','Type 18','6','6','2','0'),
   ('19','Code 19','Name 19','Type 19','5','5','3','0'),
   ('20','Code 20','Name 10','Type 20','6','6','4','1');

ALTER TABLE [dbo].[SalesTeamBin]  WITH CHECK ADD  CONSTRAINT [FK_SalesTeamBin_SalesTeam] FOREIGN KEY([salesTeamCode])
REFERENCES [dbo].[SalesTeam] ([salesTeamCode])
GO

ALTER TABLE [dbo].[SalesTeamBin] CHECK CONSTRAINT [FK_SalesTeamBin_SalesTeam]
GO
ALTER TABLE [dbo].[SalesTeamBin] ADD  CONSTRAINT [DF_SalesTeamBin_deleted]  DEFAULT ((0)) FOR [deleted]
GO
