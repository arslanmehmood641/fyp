USE [master]
GO
/****** Object:  Database [EventHub]    Script Date: 5/7/2019 3:39:09 AM ******/
CREATE DATABASE [EventHub]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'EventHub', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\EventHub.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'EventHub_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\EventHub_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [EventHub] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EventHub].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EventHub] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EventHub] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EventHub] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EventHub] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EventHub] SET ARITHABORT OFF 
GO
ALTER DATABASE [EventHub] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EventHub] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [EventHub] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EventHub] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EventHub] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EventHub] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EventHub] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EventHub] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EventHub] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EventHub] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EventHub] SET  DISABLE_BROKER 
GO
ALTER DATABASE [EventHub] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EventHub] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EventHub] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EventHub] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EventHub] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EventHub] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [EventHub] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EventHub] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [EventHub] SET  MULTI_USER 
GO
ALTER DATABASE [EventHub] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EventHub] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EventHub] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EventHub] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [EventHub]
GO
/****** Object:  StoredProcedure [dbo].[CustomerApprovedRequests]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CustomerApprovedRequests]
@id int
AS
BEGIN
SELECT h.b_capacity,h.b_mackup,h.beef_main,h.beef_rice,h.beef_starter,h.beef_sweet,h.chicken_main,h.chicken_rice,h.chicken_starter,h.chicken_sweet,h.city,h.country,h.dj,h.email,h.houseNo,h.mutton_main,h.chickenPrice,h.muttonPrice,h.beefPrice,
h.mutton_rice,h.mutton_starter,h.mutton_sweet,h.name,h.p_capacity,h.price_per_head,h.startDate,h.townName,h.wifi,b.eventDate,b.noOfGuests,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.companyID,b.U_id,b.b_id



FROM Bookings b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN halls h
    on b.companyID = h.companyID
where u.U_id=@id And b.status=1
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerApprovedRequestsMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[CustomerApprovedRequestsMedia]
@id int
AS
BEGIN
SELECT m.AlbumOne,m.AlbumThree,m.AlbumTwo,m.CamsOne,m.CamsThree,m.CamsTwo,m.city,m.country,m.droneCamera,m.DroneOne,m.DroneThree,m.DroneTwo,m.email,m.filmGraphy,m.houseNo,m.name,m.noOfCams,m.photoGraphy,m.PriceOne,m.PriceThree,m.PriceTwo,m.startDate,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID  

FROM BookingMedia b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN Media m
    on b.companyID = m.companyID
where u.U_id=@id And b.status=1
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerCompletedRequests]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CustomerCompletedRequests]
@id int
AS
BEGIN
SELECT h.b_capacity,h.b_mackup,h.beef_main,h.beef_rice,h.beef_starter,h.beef_sweet,h.chicken_main,h.chicken_rice,h.chicken_starter,h.chicken_sweet,h.city,h.country,h.dj,h.email,h.houseNo,h.mutton_main,h.chickenPrice,h.muttonPrice,h.beefPrice,
h.mutton_rice,h.mutton_starter,h.mutton_sweet,h.name,h.p_capacity,h.price_per_head,h.startDate,h.townName,h.wifi,b.eventDate,b.noOfGuests,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.companyID,b.U_id,b.b_id,b.reviewToCutomer,b.starToCustomer



FROM Bookings b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN halls h
    on b.companyID = h.companyID
where u.U_id=@id And b.status=2
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerCompletedRequestsCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CustomerCompletedRequestsCaterer]
@id int
AS
BEGIN
SELECT m.airCondition,m.bridalRoom,m.city,m.cooking,m.country,m.decoration,m.dj,m.email,m.generator,m.heater,m.houseNo,m.lights,m.name,m.servingStaff,m.stageDecorations,m.startDate,m.townName,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToCustomer,b.reviewToOwner,b.starToCustomer,b.starToOwner  

FROM CatererBooking b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN Caterer m
    on b.companyID = m.companyID
where u.U_id=@id And b.status=2
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerCompletedRequestsMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[CustomerCompletedRequestsMedia]
@id int
AS
BEGIN
SELECT m.AlbumOne,m.AlbumThree,m.AlbumTwo,m.CamsOne,m.CamsThree,m.CamsTwo,m.city,m.country,m.droneCamera,m.DroneOne,m.DroneThree,m.DroneTwo,m.email,m.filmGraphy,m.houseNo,m.name,m.noOfCams,m.photoGraphy,m.PriceOne,m.PriceThree,m.PriceTwo,m.startDate,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToCutomer,b.reviewToOwner,b.starToCustomer,b.starToOwner

FROM BookingMedia b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN Media m
    on b.companyID = m.companyID
where u.U_id=@id And b.status=2
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerContinueRequestsCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[CustomerContinueRequestsCaterer]
@id int
AS
BEGIN
SELECT m.airCondition,m.bridalRoom,m.city,m.cooking,m.country,m.decoration,m.dj,m.email,m.generator,m.heater,m.houseNo,m.lights,m.name,m.servingStaff,m.stageDecorations,m.startDate,m.townName,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToCustomer,b.reviewToOwner,b.starToCustomer,b.starToOwner  

FROM CatererBooking b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN Caterer m
    on b.companyID = m.companyID
where u.U_id=@id And b.status=1
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerPendingRequestsCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[CustomerPendingRequestsCaterer]
@id int
AS
BEGIN
SELECT m.airCondition,m.bridalRoom,m.city,m.cooking,m.country,m.decoration,m.dj,m.email,m.generator,m.heater,m.houseNo,m.lights,m.name,m.servingStaff,m.stageDecorations,m.startDate,m.townName,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToCustomer,b.reviewToOwner,b.starToCustomer,b.starToOwner  

FROM CatererBooking b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN Caterer m
    on b.companyID = m.companyID
where u.U_id=@id And b.status=0
END

GO
/****** Object:  StoredProcedure [dbo].[CustomerPendingRequestsMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[CustomerPendingRequestsMedia]
@id int
AS
BEGIN
SELECT m.AlbumOne,m.AlbumThree,m.AlbumTwo,m.CamsOne,m.CamsThree,m.CamsTwo,m.city,m.country,m.droneCamera,m.DroneOne,m.DroneThree,m.DroneTwo,m.email,m.filmGraphy,m.houseNo,m.name,m.noOfCams,m.photoGraphy,m.PriceOne,m.PriceThree,m.PriceTwo,m.startDate,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID  

FROM BookingMedia b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN Media m
    on b.companyID = m.companyID
where u.U_id=@id And b.status=0
END

GO
/****** Object:  StoredProcedure [dbo].[CutomerPendingRequests]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CutomerPendingRequests]
@id int
AS
BEGIN
SELECT h.b_capacity,h.b_mackup,h.beef_main,h.beef_rice,h.beef_starter,h.beef_sweet,h.chicken_main,h.chicken_rice,h.chicken_starter,h.chicken_sweet,h.city,h.country,h.dj,h.email,h.houseNo,h.mutton_main,h.chickenPrice,h.muttonPrice,h.beefPrice,
h.mutton_rice,h.mutton_starter,h.mutton_sweet,h.name,h.p_capacity,h.price_per_head,h.startDate,h.townName,h.wifi,b.eventDate,b.noOfGuests,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.companyID,b.U_id,b.b_id



FROM Bookings b
INNER JOIN Users u
    on u.U_id = b.U_id
INNER JOIN halls h
    on b.companyID = h.companyID
where u.U_id=@id And b.status=0
END

GO
/****** Object:  StoredProcedure [dbo].[CutomerReview]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[CutomerReview]
@id int
AS
BEGIN
SELECT *
FROM Bookings b
where b.status=2 and b.U_id=@id
END

GO
/****** Object:  StoredProcedure [dbo].[GetCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetCaterer]
AS
BEGIN
select * from Caterer s
END
GO
/****** Object:  StoredProcedure [dbo].[GetHalls]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetHalls]
AS
BEGIN
select * from halls s
END
GO
/****** Object:  StoredProcedure [dbo].[GetMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[GetMedia]
AS
BEGIN
select * from Media s
END
GO
/****** Object:  StoredProcedure [dbo].[GetUser]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetUser]
AS
BEGIN
select * from Seller s
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerApprovedReqquests]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[OwnerApprovedReqquests]
@id int
AS
BEGIN
SELECT h.b_capacity,h.b_mackup,h.beef_main,h.beef_rice,h.beef_starter,h.beef_sweet,h.chicken_main,h.chicken_rice,h.chicken_starter,h.chicken_sweet,h.city,h.country,h.dj,h.email,h.houseNo,h.mutton_main,h.chickenPrice,h.muttonPrice,h.beefPrice,
h.mutton_rice,h.mutton_starter,h.mutton_sweet,h.name,h.p_capacity,h.price_per_head,h.startDate,h.townName,h.wifi,b.eventDate,b.noOfGuests,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID

FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id And b.status=1
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerApprovedReqquestsMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[OwnerApprovedReqquestsMedia]
@id int
AS
BEGIN
SELECT m.AlbumOne,m.AlbumThree,m.AlbumTwo,m.CamsOne,m.CamsThree,m.CamsTwo,m.city,m.country,m.droneCamera,m.DroneOne,m.DroneThree,m.DroneTwo,m.email,m.filmGraphy,m.houseNo,m.name,m.noOfCams,m.photoGraphy,m.PriceOne,m.PriceThree,m.PriceTwo,m.startDate,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToCutomer,b.reviewToOwner,b.starToCustomer,b.starToOwner                                                      
FROM BookingMedia b
INNER JOIN Media m
    on b.companyID = m.companyID
INNER JOIN Users u
    on m.U_id = u.U_id
where u.U_id=@id And b.status=1
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerCompletedReqquests]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[OwnerCompletedReqquests]
@id int
AS
BEGIN
SELECT h.b_capacity,h.b_mackup,h.beef_main,h.beef_rice,h.beef_starter,h.beef_sweet,h.chicken_main,h.chicken_rice,h.chicken_starter,h.chicken_sweet,h.city,h.country,h.dj,h.email,h.houseNo,h.mutton_main,h.chickenPrice,h.muttonPrice,h.beefPrice,
h.mutton_rice,h.mutton_starter,h.mutton_sweet,h.name,h.p_capacity,h.price_per_head,h.startDate,h.townName,h.wifi,b.eventDate,b.noOfGuests,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID

FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id And b.status=2
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerCompletedReqquestsCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[OwnerCompletedReqquestsCaterer]
@id int
AS
BEGIN
SELECT m.airCondition,m.bridalRoom,m.city,m.cooking,m.country,m.decoration,m.dj,m.email,m.generator,m.heater,m.houseNo,m.lights,m.name,m.servingStaff,m.stageDecorations,m.startDate,m.townName,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToCustomer,b.reviewToOwner,b.starToCustomer,b.starToOwner                                                      
FROM CatererBooking b
INNER JOIN Caterer m
    on b.companyID = m.companyID
INNER JOIN Users u
    on m.U_id = u.U_id
where u.U_id=@id And b.status=2
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerCompletedReqquestsMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[OwnerCompletedReqquestsMedia]
@id int
AS
BEGIN
SELECT m.AlbumOne,m.AlbumThree,m.AlbumTwo,m.CamsOne,m.CamsThree,m.CamsTwo,m.city,m.country,m.droneCamera,m.DroneOne,m.DroneThree,m.DroneTwo,m.email,m.filmGraphy,m.houseNo,m.name,m.noOfCams,m.photoGraphy,m.PriceOne,m.PriceThree,m.PriceTwo,m.startDate,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID,b.reviewToOwner,b.starToOwner,u.U_type                                                      
FROM BookingMedia b
INNER JOIN Media m
    on b.companyID = m.companyID
INNER JOIN Users u
    on m.U_id = u.U_id
where u.U_id=@id And b.status=2
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerContinueReqquestsCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[OwnerContinueReqquestsCaterer]
@id int
AS
BEGIN
SELECT m.airCondition,m.bridalRoom,m.city,m.cooking,m.country,m.decoration,m.dj,m.email,m.generator,m.heater,m.houseNo,m.lights,m.name,m.servingStaff,m.stageDecorations,m.startDate,m.townName,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID                                                      
FROM CatererBooking b
INNER JOIN Caterer m
    on b.companyID = m.companyID
INNER JOIN Users u
    on m.U_id = u.U_id
where u.U_id=@id And b.status=1
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerIndex]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[OwnerIndex]
   @id int
AS
declare @TotalSubmitted int=0
declare @TotalInprogress int=0
declare @TotalCompleted int=0
declare @TotalPending int=0
BEGIN
	SELECT @TotalSubmitted= count(b.b_id)
FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id 

	select  @TotalPending=count(b.b_id)
FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=0
	select  @TotalInprogress=count(b.b_id)
FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=1
	select  @TotalCompleted= count(b.b_id)
FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=2
select @TotalSubmitted as TotalSubmitted,@TotalInprogress as TotalInprogress,@TotalCompleted as TotalCompleted, @TotalPending  as  TotalPending 
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerIndexCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[OwnerIndexCaterer]
   @id int
AS
declare @TotalSubmitted int=0
declare @TotalInprogress int=0
declare @TotalCompleted int=0
declare @TotalPending int=0
BEGIN
	SELECT @TotalSubmitted= count(b.b_id)
FROM CatererBooking b
INNER JOIN Caterer h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id 

	select  @TotalPending=count(b.b_id)
FROM CatererBooking b
INNER JOIN Caterer h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=0
	select  @TotalInprogress=count(b.b_id)
FROM CatererBooking b
INNER JOIN Caterer h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=1
	select  @TotalCompleted= count(b.b_id)
FROM CatererBooking b
INNER JOIN Caterer h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=2
select @TotalSubmitted as TotalSubmitted,@TotalInprogress as TotalInprogress,@TotalCompleted as TotalCompleted, @TotalPending  as  TotalPending 
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerIndexMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[OwnerIndexMedia]
   @id int
AS
declare @TotalSubmitted int=0
declare @TotalInprogress int=0
declare @TotalCompleted int=0
declare @TotalPending int=0
BEGIN
	SELECT @TotalSubmitted= count(b.b_id)
FROM BookingMedia b
INNER JOIN Media h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id 

	select  @TotalPending=count(b.b_id)
FROM BookingMedia b
INNER JOIN Media h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=0
	select  @TotalInprogress=count(b.b_id)
FROM BookingMedia b
INNER JOIN Media h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=1
	select  @TotalCompleted= count(b.b_id)
FROM BookingMedia b
INNER JOIN Media h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id and b.status=2
select @TotalSubmitted as TotalSubmitted,@TotalInprogress as TotalInprogress,@TotalCompleted as TotalCompleted, @TotalPending  as  TotalPending 
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerPendingReqquests]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[OwnerPendingReqquests]
@id int
AS
BEGIN
SELECT h.b_capacity,h.b_mackup,h.beef_main,h.beef_rice,h.beef_starter,h.beef_sweet,h.chicken_main,h.chicken_rice,h.chicken_starter,h.chicken_sweet,h.city,h.country,h.dj,h.email,h.houseNo,h.mutton_main,h.chickenPrice,h.muttonPrice,h.beefPrice,
h.mutton_rice,h.mutton_starter,h.mutton_sweet,h.name,h.p_capacity,h.price_per_head,h.startDate,h.townName,h.wifi,b.eventDate,b.noOfGuests,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID

FROM Bookings b
INNER JOIN halls h
    on b.companyID = h.companyID
INNER JOIN Users u
    on h.U_id = u.U_id
where u.U_id=@id And b.status=0
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerPendingReqquestsCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[OwnerPendingReqquestsCaterer]
@id int
AS
BEGIN
SELECT m.airCondition,m.bridalRoom,m.city,m.cooking,m.country,m.decoration,m.dj,m.email,m.generator,m.heater,m.houseNo,m.lights,m.name,m.servingStaff,m.stageDecorations,m.startDate,m.townName,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID                                                      
FROM CatererBooking b
INNER JOIN Caterer m
    on b.companyID = m.companyID
INNER JOIN Users u
    on m.U_id = u.U_id
where u.U_id=@id And b.status=0
END

GO
/****** Object:  StoredProcedure [dbo].[OwnerPendingReqquestsMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[OwnerPendingReqquestsMedia]
@id int
AS
BEGIN
SELECT m.AlbumOne,m.AlbumThree,m.AlbumTwo,m.CamsOne,m.CamsThree,m.CamsTwo,m.city,m.country,m.droneCamera,m.DroneOne,m.DroneThree,m.DroneTwo,m.email,m.filmGraphy,m.houseNo,m.name,m.noOfCams,m.photoGraphy,m.PriceOne,m.PriceThree,m.PriceTwo,m.startDate,b.eventDate,b.packege,b.phone,b.prefferedTime,b.userEmail,b.userName,b.b_id,b.companyID                                                      
FROM BookingMedia b
INNER JOIN Media m
    on b.companyID = m.companyID
INNER JOIN Users u
    on m.U_id = u.U_id
where u.U_id=@id And b.status=0
END

GO
/****** Object:  StoredProcedure [dbo].[UserIndex]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[UserIndex]
   @id int
AS
declare @TotalSubmitted int=0
declare @TotalInprogress int=0
declare @TotalCompleted int=0
declare @TotalPending int=0
BEGIN
	select  @TotalSubmitted= count(b.b_id) from Bookings b,Users u
where b.U_id=u.U_id and b.U_id=@id
	select  @TotalPending= count(b.b_id) from Bookings b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=0 
	select  @TotalInprogress= count(b.b_id) from Bookings b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=1
	select  @TotalCompleted= count(b.b_id) from Bookings b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=2 
select @TotalSubmitted as TotalSubmitted,@TotalInprogress as TotalInprogress,@TotalCompleted as TotalCompleted, @TotalPending  as  TotalPending 
END

GO
/****** Object:  StoredProcedure [dbo].[UserIndexCaterer]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[UserIndexCaterer]
   @id int
AS
declare @TotalSubmitted int=0
declare @TotalInprogress int=0
declare @TotalCompleted int=0
declare @TotalPending int=0
BEGIN
	select  @TotalSubmitted= count(b.b_id) from CatererBooking b,Users u
where b.U_id=u.U_id and b.U_id=@id
	select  @TotalPending= count(b.b_id) from CatererBooking b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=0 
	select  @TotalInprogress= count(b.b_id) from CatererBooking b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=1
	select  @TotalCompleted= count(b.b_id) from CatererBooking b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=2 
select @TotalSubmitted as TotalSubmitted,@TotalInprogress as TotalInprogress,@TotalCompleted as TotalCompleted, @TotalPending  as  TotalPending 
END

GO
/****** Object:  StoredProcedure [dbo].[UserIndexMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[UserIndexMedia]
   @id int
AS
declare @TotalSubmitted int=0
declare @TotalInprogress int=0
declare @TotalCompleted int=0
declare @TotalPending int=0
BEGIN
	select  @TotalSubmitted= count(b.b_id) from BookingMedia b,Users u
where b.U_id=u.U_id and b.U_id=@id
	select  @TotalPending= count(b.b_id) from BookingMedia b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=0 
	select  @TotalInprogress= count(b.b_id) from BookingMedia b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=1
	select  @TotalCompleted= count(b.b_id) from BookingMedia b,Users u
where b.U_id=u.U_id and b.U_id=@id and b.status=2 
select @TotalSubmitted as TotalSubmitted,@TotalInprogress as TotalInprogress,@TotalCompleted as TotalCompleted, @TotalPending  as  TotalPending 
END

GO
/****** Object:  StoredProcedure [dbo].[UserLogin]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UserLogin]
@email nchar(50),
@password nchar(50)
AS
BEGIN
select * from Users u where u.UserName=@email AND u.Password=@password
END

GO
/****** Object:  Table [dbo].[BookingMedia]    Script Date: 5/7/2019 3:39:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[BookingMedia](
	[b_id] [int] IDENTITY(1,1) NOT NULL,
	[prefferedTime] [nchar](50) NULL,
	[noOfDays] [int] NULL,
	[eventDate] [date] NULL,
	[userName] [nchar](50) NULL,
	[userEmail] [nchar](50) NULL,
	[phone] [nchar](50) NULL,
	[city] [nchar](50) NULL,
	[companyID] [int] NULL,
	[status] [int] NULL,
	[packege] [int] NULL,
	[U_id] [int] NULL,
	[starToCustomer] [int] NULL,
	[starToOwner] [int] NULL,
	[reviewToCutomer] [varchar](max) NULL,
	[reviewToOwner] [varchar](max) NULL,
 CONSTRAINT [PK_BookingMedia] PRIMARY KEY CLUSTERED 
(
	[b_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Bookings]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Bookings](
	[b_id] [int] IDENTITY(1,1) NOT NULL,
	[prefferedTime] [nchar](10) NULL,
	[noOfGuests] [int] NULL,
	[eventDate] [date] NULL,
	[userName] [nchar](50) NULL,
	[userEmail] [nchar](50) NULL,
	[phone] [nchar](20) NULL,
	[city] [nchar](20) NULL,
	[companyID] [int] NULL,
	[status] [int] NULL,
	[packege] [int] NULL,
	[U_id] [int] NULL,
	[starToCustomer] [int] NULL,
	[starToOwner] [int] NULL,
	[reviewToCutomer] [varchar](max) NULL,
	[reviewToOwner] [varchar](max) NULL,
 CONSTRAINT [PK_Bookings] PRIMARY KEY CLUSTERED 
(
	[b_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Caterer]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Caterer](
	[companyID] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](50) NULL,
	[email] [nchar](50) NULL,
	[startDate] [date] NULL,
	[totalTime] [time](7) NULL,
	[streetNo] [int] NULL,
	[houseNo] [int] NULL,
	[townName] [nchar](60) NULL,
	[city] [nchar](50) NULL,
	[country] [nchar](50) NULL,
	[tent] [bit] NULL,
	[generator] [bit] NULL,
	[heater] [bit] NULL,
	[servingStaff] [bit] NULL,
	[lights] [bit] NULL,
	[stageDecorations] [bit] NULL,
	[cooking] [bit] NULL,
	[bridalRoom] [bit] NULL,
	[airCondition] [bit] NULL,
	[valetParking] [bit] NULL,
	[wifi] [bit] NULL,
	[dj] [bit] NULL,
	[decoration] [bit] NULL,
	[U_id] [int] NULL,
 CONSTRAINT [PK_Caterer] PRIMARY KEY CLUSTERED 
(
	[companyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CatererBooking]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CatererBooking](
	[b_id] [int] IDENTITY(1,1) NOT NULL,
	[prefferedTime] [nchar](50) NULL,
	[noOfDays] [int] NULL,
	[eventDate] [date] NULL,
	[userName] [nchar](50) NULL,
	[userEmail] [nchar](50) NULL,
	[phone] [nchar](50) NULL,
	[city] [nchar](50) NULL,
	[companyID] [int] NULL,
	[status] [int] NULL,
	[packege] [int] NULL,
	[U_id] [int] NULL,
	[starToCustomer] [int] NULL,
	[starToOwner] [int] NULL,
	[reviewToCustomer] [varchar](max) NULL,
	[reviewToOwner] [varchar](max) NULL,
 CONSTRAINT [PK_CatererBooking] PRIMARY KEY CLUSTERED 
(
	[b_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Check]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Check](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](10) NULL,
 CONSTRAINT [PK_Check] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[halls]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[halls](
	[companyID] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](50) NULL,
	[email] [nchar](50) NULL,
	[startDate] [date] NULL,
	[totalTime] [time](7) NULL,
	[streetNo] [int] NULL,
	[houseNo] [int] NULL,
	[townName] [nchar](50) NULL,
	[city] [nchar](50) NULL,
	[country] [nchar](50) NULL,
	[price_per_head] [int] NULL,
	[b_capacity] [int] NULL,
	[p_capacity] [int] NULL,
	[wifi] [nchar](10) NULL,
	[dj] [nchar](10) NULL,
	[b_mackup] [nchar](10) NULL,
	[U_id] [int] NULL,
	[chicken_main] [nchar](50) NULL,
	[chicken_rice] [nchar](50) NULL,
	[chicken_sweet] [nchar](50) NULL,
	[chicken_starter] [nchar](50) NULL,
	[mutton_main] [nchar](50) NULL,
	[mutton_rice] [nchar](50) NULL,
	[mutton_sweet] [nchar](50) NULL,
	[mutton_starter] [nchar](50) NULL,
	[beef_main] [nchar](50) NULL,
	[beef_rice] [nchar](50) NULL,
	[beef_sweet] [nchar](50) NULL,
	[beef_starter] [nchar](50) NULL,
	[chickenPrice] [int] NULL,
	[muttonPrice] [int] NULL,
	[beefPrice] [int] NULL,
 CONSTRAINT [PK_halls] PRIMARY KEY CLUSTERED 
(
	[companyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Media]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Media](
	[companyID] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](50) NULL,
	[email] [nchar](50) NULL,
	[startDate] [datetime] NULL,
	[totalTime] [time](7) NULL,
	[streetNo] [int] NULL,
	[houseNo] [int] NULL,
	[townName] [nchar](50) NULL,
	[city] [nchar](50) NULL,
	[country] [nchar](50) NULL,
	[droneCamera] [bit] NULL,
	[hdCam] [bit] NULL,
	[noOfCams] [int] NULL,
	[albums] [bit] NULL,
	[photoGraphy] [bit] NULL,
	[filmGraphy] [bit] NULL,
	[U_id] [int] NULL,
	[CamsOne] [int] NULL,
	[PriceOne] [int] NULL,
	[DroneOne] [int] NULL,
	[AlbumOne] [int] NULL,
	[CamsTwo] [int] NULL,
	[PriceTwo] [int] NULL,
	[DroneTwo] [int] NULL,
	[AlbumTwo] [int] NULL,
	[CamsThree] [int] NULL,
	[PriceThree] [int] NULL,
	[DroneThree] [int] NULL,
	[AlbumThree] [int] NULL,
 CONSTRAINT [PK_Media] PRIMARY KEY CLUSTERED 
(
	[companyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Seller]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seller](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](10) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 5/7/2019 3:39:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[U_id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nchar](50) NULL,
	[Password] [nchar](50) NULL,
	[U_type] [int] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[U_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[BookingMedia]  WITH CHECK ADD  CONSTRAINT [FK_BookingMedia_Media] FOREIGN KEY([companyID])
REFERENCES [dbo].[Media] ([companyID])
GO
ALTER TABLE [dbo].[BookingMedia] CHECK CONSTRAINT [FK_BookingMedia_Media]
GO
ALTER TABLE [dbo].[BookingMedia]  WITH NOCHECK ADD  CONSTRAINT [FK_BookingMedia_Users] FOREIGN KEY([U_id])
REFERENCES [dbo].[Users] ([U_id])
GO
ALTER TABLE [dbo].[BookingMedia] CHECK CONSTRAINT [FK_BookingMedia_Users]
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_halls] FOREIGN KEY([companyID])
REFERENCES [dbo].[halls] ([companyID])
GO
ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_halls]
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_Users] FOREIGN KEY([U_id])
REFERENCES [dbo].[Users] ([U_id])
GO
ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_Users]
GO
ALTER TABLE [dbo].[CatererBooking]  WITH CHECK ADD  CONSTRAINT [FK_CatererBooking_Caterer] FOREIGN KEY([companyID])
REFERENCES [dbo].[Caterer] ([companyID])
GO
ALTER TABLE [dbo].[CatererBooking] CHECK CONSTRAINT [FK_CatererBooking_Caterer]
GO
ALTER TABLE [dbo].[CatererBooking]  WITH CHECK ADD  CONSTRAINT [FK_CatererBooking_Users] FOREIGN KEY([U_id])
REFERENCES [dbo].[Users] ([U_id])
GO
ALTER TABLE [dbo].[CatererBooking] CHECK CONSTRAINT [FK_CatererBooking_Users]
GO
ALTER TABLE [dbo].[halls]  WITH CHECK ADD  CONSTRAINT [FK_halls_Users] FOREIGN KEY([U_id])
REFERENCES [dbo].[Users] ([U_id])
GO
ALTER TABLE [dbo].[halls] CHECK CONSTRAINT [FK_halls_Users]
GO
ALTER TABLE [dbo].[Media]  WITH CHECK ADD  CONSTRAINT [FK_Media_Users] FOREIGN KEY([U_id])
REFERENCES [dbo].[Users] ([U_id])
GO
ALTER TABLE [dbo].[Media] CHECK CONSTRAINT [FK_Media_Users]
GO
USE [master]
GO
ALTER DATABASE [EventHub] SET  READ_WRITE 
GO
