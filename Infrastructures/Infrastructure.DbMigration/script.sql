The EF Core tools version '2.1.0-rtm-30799' is older than that of the runtime '2.2.0-rtm-35687'. Update the tools for the latest features and bug fixes.
Read connection string from appsettings.json
IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [AppFile] (
    [Id] int NOT NULL IDENTITY,
    [CreatedDate] datetimeoffset NOT NULL,
    [CreatedByUserId] int NOT NULL,
    [UpdatedDate] datetimeoffset NOT NULL,
    [UpdatedByUserId] int NOT NULL,
    [RowVersion] varbinary(max) NULL,
    [Url] nvarchar(max) NULL,
    [SharedWith] nvarchar(max) NULL,
    [ContentType] nvarchar(max) NULL,
    CONSTRAINT [PK_AppFile] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetRoles] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetUsers] (
    [Id] int NOT NULL IDENTITY,
    [UserName] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [Email] nvarchar(256) NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [PasswordHash] nvarchar(max) NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL,
    [AccessFailedCount] int NOT NULL,
    [Fullname] nvarchar(max) NULL,
    [DateOfBirth] datetime2 NOT NULL,
    [Gender] int NOT NULL,
    [DateJoined] datetime2 NOT NULL,
    [AvatarURL] nvarchar(max) NULL,
    [Status] int NOT NULL,
    [DropboxToken] nvarchar(max) NULL,
    [TempPassword] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] int NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [UserId] int NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserRoles] (
    [UserId] int NOT NULL,
    [RoleId] int NOT NULL,
    CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserTokens] (
    [UserId] int NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [InBodyStandard] (
    [Id] int NOT NULL IDENTITY,
    [CreatedDate] datetimeoffset NOT NULL,
    [CreatedByUserId] int NOT NULL,
    [UpdatedDate] datetimeoffset NOT NULL,
    [UpdatedByUserId] int NOT NULL,
    [RowVersion] varbinary(max) NULL,
    [Height] real NOT NULL,
    [BodyWaterMax] real NOT NULL,
    [BodyWaterMin] real NOT NULL,
    [ProteinMax] real NOT NULL,
    [ProteinMin] real NOT NULL,
    [MineralMax] real NOT NULL,
    [MineralMin] real NOT NULL,
    [BodyFatMassMax] real NOT NULL,
    [BodyFatMassMin] real NOT NULL,
    [WeightMax] real NOT NULL,
    [WeightMin] real NOT NULL,
    [SkeletalMuscleMassMax] real NOT NULL,
    [SkeletalMuscleMassMin] real NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_InBodyStandard] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_InBodyStandard_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [InBody] (
    [Id] int NOT NULL IDENTITY,
    [CreatedDate] datetimeoffset NOT NULL,
    [CreatedByUserId] int NOT NULL,
    [UpdatedDate] datetimeoffset NOT NULL,
    [UpdatedByUserId] int NOT NULL,
    [RowVersion] varbinary(max) NULL,
    [TestedDate] datetime2 NOT NULL,
    [BodyWater] real NOT NULL,
    [Protein] real NOT NULL,
    [Mineral] real NOT NULL,
    [BodyFatMass] real NOT NULL,
    [PercentBodyFat] real NOT NULL,
    [Weight] real NOT NULL,
    [SkeletalMuscleMass] real NOT NULL,
    [Score] int NOT NULL,
    [BMIEvaluation] int NOT NULL,
    [PBFEvaluation] int NOT NULL,
    [WaistHipRatio] real NOT NULL,
    [VisceralFatLevel] int NOT NULL,
    [UserId] int NOT NULL,
    [InBodyStandardId] int NOT NULL,
    CONSTRAINT [PK_InBody] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_InBody_InBodyStandard_InBodyStandardId] FOREIGN KEY ([InBodyStandardId]) REFERENCES [InBodyStandard] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_InBody_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [AspNetRoleClaims] ([RoleId]);

GO

CREATE UNIQUE INDEX [RoleNameIndex] ON [AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;

GO

CREATE INDEX [IX_AspNetUserClaims_UserId] ON [AspNetUserClaims] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserLogins_UserId] ON [AspNetUserLogins] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [AspNetUserRoles] ([RoleId]);

GO

CREATE INDEX [EmailIndex] ON [AspNetUsers] ([NormalizedEmail]);

GO

CREATE UNIQUE INDEX [UserNameIndex] ON [AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;

GO

CREATE INDEX [IX_InBody_InBodyStandardId] ON [InBody] ([InBodyStandardId]);

GO

CREATE INDEX [IX_InBody_UserId] ON [InBody] ([UserId]);

GO

CREATE INDEX [IX_InBodyStandard_UserId] ON [InBodyStandard] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200927061608_Init', N'2.2.0-rtm-35687');

GO

CREATE TABLE [MealPlanPeriod] (
    [Id] int NOT NULL IDENTITY,
    [CreatedDate] datetimeoffset NOT NULL,
    [CreatedByUserId] int NOT NULL,
    [UpdatedDate] datetimeoffset NOT NULL,
    [UpdatedByUserId] int NOT NULL,
    [RowVersion] varbinary(max) NULL,
    [Index] int NOT NULL,
    [Title] nvarchar(max) NULL,
    [SubTitle] nvarchar(max) NULL,
    [ProteinPercent] int NOT NULL,
    [FatPercent] int NOT NULL,
    [CarbPercent] int NOT NULL,
    [BreakfastMenu] nvarchar(max) NULL,
    [BreakfastNote] nvarchar(max) NULL,
    [BreakfastCalo] int NOT NULL,
    [LunchMenu] nvarchar(max) NULL,
    [LunchNote] nvarchar(max) NULL,
    [LunchCalo] int NOT NULL,
    [BeforeWorkoutMenu] nvarchar(max) NULL,
    [BeforeWorkoutNote] nvarchar(max) NULL,
    [BeforeWorkoutCalo] int NOT NULL,
    [DinnerMenu] nvarchar(max) NULL,
    [DinnerNote] nvarchar(max) NULL,
    [DinnerCalo] int NOT NULL,
    [ExtraMenu] nvarchar(max) NULL,
    [ExtraNote] nvarchar(max) NULL,
    [ExtraCalo] int NOT NULL,
    [Note] nvarchar(max) NULL,
    [Calo] int NOT NULL,
    [Target] nvarchar(max) NULL,
    [Start] datetime2 NOT NULL,
    [End] datetime2 NOT NULL,
    [IsLock] bit NOT NULL,
    [IsActivate] bit NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_MealPlanPeriod] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_MealPlanPeriod_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE NO ACTION
);

GO

CREATE INDEX [IX_MealPlanPeriod_UserId] ON [MealPlanPeriod] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20201003071330_AddMealPeriod', N'2.2.0-rtm-35687');

GO


