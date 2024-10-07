-- Create the database
CREATE DATABASE TheGrand_db;

-- Use the newly created database
USE TheGrand_db;

-- Create Department table
CREATE TABLE Department (
    DepartmentID VARCHAR(10) PRIMARY KEY,        
    DepartmentName VARCHAR(255) NOT NULL
);

-- Create Role table
CREATE TABLE Role (
    RoleID VARCHAR(10) PRIMARY KEY,                
    RoleName VARCHAR(255) NOT NULL,
    DepartmentID VARCHAR(10),                       -- Added DepartmentID to associate with Department
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID) -- Foreign key constraint
);

-- Create Employee table
CREATE TABLE Employee (
    EmployeeID VARCHAR(10) PRIMARY KEY,   
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Gender BIT,                                   -- 0 is male and 1 is female
    DateOfBirth DATE,
    PhoneNumber VARCHAR(50) UNIQUE,
    Address TEXT,
    Avatar TEXT,
    Salary DECIMAL(10, 2) CHECK (Salary >= 0),
    RoleID VARCHAR(10),                            -- Added RoleID to associate with Role
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID)  -- Foreign key constraint
);


-- Create Customer table
CREATE TABLE Customer (
    PhoneNumber VARCHAR(50) PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    IdentityType VARCHAR(50) CHECK (IdentityType IN ('Passport', 'ID', 'Driver License')),
    IdentityNumber VARCHAR(100) NOT NULL
);

-- Create Account table
CREATE TABLE Account (
    AccountID VARCHAR(10) PRIMARY KEY,             
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    IsEmployee BIT DEFAULT 0, -- 0 is customer , 1 is employee
    EmployeeID VARCHAR(10),
    CustomerPhoneNumber VARCHAR(50),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID),
    FOREIGN KEY (CustomerPhoneNumber) REFERENCES Customer(PhoneNumber)
);

-- Create Room table
CREATE TABLE Room (
    RoomID VARCHAR(10) PRIMARY KEY,               
    RoomNo VARCHAR(10) NOT NULL,
    RoomName VARCHAR(255) NOT NULL,
    RoomType VARCHAR(100) NOT NULL,
    Capacity INT CHECK (Capacity > 0),
    RoomStatus VARCHAR(50) CHECK (RoomStatus IN ('Available', 'Reserved', 'Occupied', 'Maintenance')),
    RoomDisplayImages TEXT
);

-- Create Booking table
CREATE TABLE Booking (
    BookingID VARCHAR(10) PRIMARY KEY,             -- Changed to VARCHAR(10)
    BookingDate DATE NOT NULL,
    CheckInDate DATE NOT NULL,
    CheckOutDate DATE NOT NULL,
    GuestNumber INT CHECK (GuestNumber > 0),
    CustomerPhoneNumber VARCHAR(50),
    RoomID VARCHAR(10),
    TotalAmount DECIMAL(10, 2) CHECK (TotalAmount >= 0),
    ActualCheckInTime DATETIME,
    ActualCheckOutTime DATETIME,
    FOREIGN KEY (CustomerPhoneNumber) REFERENCES Customer(PhoneNumber),
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

-- Create Amenities table
CREATE TABLE Amenities (
    AmenitiesID VARCHAR(10) PRIMARY KEY,          
    AmenitiesName VARCHAR(255) NOT NULL,
    AmenitiesIcon TEXT,
    RoomID VARCHAR(10),
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

-- Create Payment table
CREATE TABLE Payment (
    PaymentID VARCHAR(10) PRIMARY KEY,             
    PaymentMethod VARCHAR(50) NOT NULL,
    PaymentStatus VARCHAR(50) NOT NULL,
    PaymentDate DATE NOT NULL,
    TotalAmount DECIMAL(10, 2) CHECK (TotalAmount >= 0),
    BookingID VARCHAR(10),
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID)
);

-- Create BookingHistory table
CREATE TABLE BookingHistory (
    HistoryID VARCHAR(10) PRIMARY KEY,             
    RoomID VARCHAR(10),
    BookingID VARCHAR(10),
    PaymentID VARCHAR(10),                         -- Added PaymentID to reference the Payment table to get total amount
    CheckInDate DATE,
    CheckOutDate DATE,
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID),
    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID),
    FOREIGN KEY (PaymentID) REFERENCES Payment(PaymentID) -- Foreign key to link to Payment
);
