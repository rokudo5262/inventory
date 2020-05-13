
use inventory
go


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
  [id] [bigint] IDENTITY(1,1) NOT NULL,
  [name] [nvarchar](200) NOT NULL,
  [phone] [nvarchar](10) NOT NULL,
PRIMARY KEY CLUSTERED
(
  [id] ASC
  )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into Customer(name, phone) values ('Trieu', '0995700825')
insert into Customer(name, phone) values ('Hai', '0123456798')
insert into Customer(name, phone) values ('Khanh', '0987654321')
