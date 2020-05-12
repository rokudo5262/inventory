SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TABLE [dbo].[SecondaryCustomerShipToAddress] 
(
[id] [bigint] IDENTITY(1,1) ,
[companyCode] [nvarchar](20),
[CustomerCode] [nvarchar](40),
[SecondaryCustomerCode] [nvarchar](40),
[ShipToCode] [nvarchar](40),
[ShipToName] [nvarchar](255),
[Ship To Address] [nvarchar](500),
[Source] [nvarchar](1),
[createdBy] [nvarchar] (255) null,
[createdDateTime] [datetime] null,
[lastUpdatedBy] [nvarchar] (255) null,
[lastUpdatedDateTime] [datetime] null,
[rowVersion] [timestamp] null,
[Deleted] [bit] null,
[Contact] [nvarchar](255),
[DeliveryCondition] [nvarchar](255),
[DeliveryTime] [nvarchar](255),
[OtherRequest] [nvarchar](255),
[AttachedDocument] [nvarchar](255),
PRIMARY KEY CLUSTERED
(
  [id] ASC
  )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


INSERT INTO SecondaryCustomerShipToAddress( [ShipToCode], [ShipToName], [Ship To Address] ,[Contact],[DeliveryCondition], [DeliveryTime], [OtherRequest] ,[AttachedDocument],[Deleted])
   VALUES
   ('1','1','1','1','1','1','1','1',0),
   ('2','2','2','2','2','2','2','2',0)