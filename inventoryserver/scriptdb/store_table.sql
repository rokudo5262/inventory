use inventory
go


/****** Script for SelectTopNRows command from SSMS  ******/


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TABLE [dbo].[StoreInformation] 
(
[id] [bigint] IDENTITY(1,1) ,
[codeStore] [int],
[codeStaff] [int],
[codeLocation] [int],
[openTime] [time](0),
[closeTime] [time](0),
[address] [nvarchar](100)
PRIMARY KEY CLUSTERED
(
  [id] ASC
  )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into StoreInformation(codeStore, codeStaff, codeLocation, openTime, closeTime, address) values (1, 1, 1, null, null,'123Ab' )
insert into StoreInformation(codeStore, codeStaff, codeLocation, openTime, closeTime, address) values (2, 2, 2, null, null,'123Ab' )
insert into StoreInformation(codeStore, codeStaff, codeLocation, openTime, closeTime, address) values (3, 3, 3, null, null,'123Ab' )