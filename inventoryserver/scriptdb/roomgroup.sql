Use inventory
Go


CREATE TABLE [dbo].[RoomGroup] (
    [id]      [int] IDENTITY(1,1) not null PRIMARY KEY,
    [name]    [nvarchar](max) null,
    [note]    [nvarchar](max) null,
	  [status]  [nvarchar](max) null,
    [createdBy] [nvarchar] (255) null,
    [createdDateTime] [datetime] null,
    [lastUpdatedBy] [nvarchar] (255) null,
    [lastUpdatedDateTime] [datetime] null,
    [rowVersion] [timestamp] null,
    [deleted] [bit] not null,
);
INSERT INTO RoomGroup( name, note, status ,deleted)
   VALUES
   ('Phòng 1','Phòng 1','on','0'),
   ('Phòng 2','Phòng 2','on','0'),
   ('Phòng 3','Phòng 3','on','0'), 
   ('Phòng 4','Phòng 4','on','0'),
   ('Phòng 5','Phòng 5','on','0'),
   ('Phòng 6','Phòng 6','off','0'),
   ('Phòng 7','Phòng 7','on','1');

ALTER TABLE [dbo].[RoomGroup] ADD  CONSTRAINT [DF_RoomGroup_deleted]  DEFAULT ((0)) FOR [deleted]
GO
