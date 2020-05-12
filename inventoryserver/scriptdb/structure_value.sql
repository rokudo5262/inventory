SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TABLE [dbo].[StructureValue] 
(
[id] [bigint] IDENTITY(1,1) ,
[companyCode] [nvarchar](20),
[structureCode] [nvarchar](40),
[structureValueCode] [nvarchar](40),
[structureValueName] [nvarchar](225),
[level] [int] null,
[type] [nvarchar](40),
[parentCode] [nvarchar](40),
[parentValue] [nvarchar](255),
[status] [nvarchar](1),
[ordinal] [int] null,
[source] [nvarchar],
[delete2] [bit]
PRIMARY KEY CLUSTERED
(
  [id] ASC
  )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into StructureValue(companyCode, structureCode, structureValueCode, structureValueName, level, type, parentCode, parentValue, status, ordinal, source, delete2 ) values ('1', '1', '1', 'structurevalue1', 1, 'type1', '1', '1', 'A', 1, '1', 0 )
insert into StructureValue(companyCode, structureCode, structureValueCode, structureValueName, level, type, parentCode, parentValue, status, ordinal, source, delete2 ) values ('2', '2', '2', 'structurevalue2', 2, 'type2', '2', '2', 'A', 2, '2', 0 )
insert into StructureValue(companyCode, structureCode, structureValueCode, structureValueName, level, type, parentCode, parentValue, status, ordinal, source, delete2 ) values ('3', '3', '3', 'structurevalue3', 3, 'type3', '3', '3', 'A', 3, '3', 0 )