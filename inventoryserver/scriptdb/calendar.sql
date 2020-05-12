USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Calendar](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[companyCode] [nvarchar](20) NOT NULL,
	[customerCode] [nvarchar](40) NOT NULL,
	[recurring] [nvarchar](255) NOT NULL,
	[workingDate] [date] NOT NULL,
  [workingDay] [nvarchar](10) NOT NULL,
  [description] [nvarchar](255) NOT NULL,
  [nonWorking] [bit] NOT NULL,
  [status] [nvarchar](20) NOT NULL,
	[deleted] [bit] NOT NULL,
 CONSTRAINT [PK_Calendar] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [Calendar] ([companyCode], [customerCode], [recurring], [workingDate], [workingDay], [description], [nonWorking], [status], [deleted])
values ('nata', 'KH001', 'Annual Recurring', '03/30/2020','', 'nothing', 0, 'I', 0),
       ('nata', 'KH002', 'Weekly Recurring', '','Friday', 'blank', 0, 'I', 0),
       ('nata', 'KH003', 'Specific Date', '03/29/2020','', 'empty', 0, 'I', 0)
Go
