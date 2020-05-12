SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TABLE [dbo].[Structure] 
(
[id] [bigint] IDENTITY(1,1) ,
[companyCode] [nvarchar](20),
[structureCode] [nvarchar](40),
[structureName] [nvarchar](225),
[level] [int] null,
[type] [nvarchar](40),
[parentCode] [nvarchar](40),
[status] [nvarchar](1),
[remark] [nvarchar](255),
[source] [nvarchar](1),
[delete1] [bit] null,
PRIMARY KEY CLUSTERED
(
  [id] ASC
  )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into Structure(companyCode, structureCode, structureName, level, type, parentCode, status, remark, source, delete1 ) values ('1', '1', 'structure1', 1, 'type1', '1', 'A', '1', '1', 0 )
insert into Structure(companyCode, structureCode, structureName, level, type, parentCode, status, remark, source, delete1 ) values ('2', '2', 'structure2', 2, 'type2', '2', 'A', '2', '2', 0  )
insert into Structure(companyCode, structureCode, structureName, level, type, parentCode, status, remark, source , delete1) values ('3', '3', 'structure3', 3, 'type3', '3', 'A', '3', '3', 0 )

