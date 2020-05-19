USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Orders](
	[orderCode] [int] IDENTITY(1,1) not null PRIMARY KEY,
	[customerCode][int] null,
  [requiedDay][nvarchar](255) NULL,
  [shippedDay][datetime] NULL,
  [storeCode][int] null,
  [staffCode][int] null,
	[deleted] [bit] NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [Orders]( customerCode,storeCode,staffCode,deleted)
   VALUES
   ('1','1','1','0'),
   ('1','1','1','0'),
   ('2','1','1','0'),
   ('2','1','1','0'),
   ('1','1','1','0'),
   ('1','1','1','0'),
   ('2','1','1','0'),
   ('2','1','1','0');

ALTER TABLE [dbo].[Orders] ADD  CONSTRAINT [DF_Orders_deleted]  DEFAULT ((0)) FOR [deleted]
GO

