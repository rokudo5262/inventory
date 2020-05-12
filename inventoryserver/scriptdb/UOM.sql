USE [inventory]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[UOM](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[companyCode] [nvarchar](20) NOT NULL,
	[uomCode] [nvarchar](40) NOT NULL,
	[uomName] [nvarchar](255) NOT NULL,
	[deleted] [bit] NOT NULL,
 CONSTRAINT [PK_UOM] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [UOM] ([companyCode], [uomCode], [uomName], [deleted])
values ('nata', 'BAG', 'Bag', 0),
('tmt', 'BAR', 'Bar', 0),
('laih', 'BKT', 'Bucket', 1)
Go
