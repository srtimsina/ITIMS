-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2017 at 01:24 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itims`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_point`
--

DROP TABLE IF EXISTS `access_point`;
CREATE TABLE IF NOT EXISTS `access_point` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `access_point_name` varchar(255) DEFAULT NULL,
  `assetsid` varchar(255) DEFAULT NULL,
  `date_of_purchase` varchar(255) DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `invoice_no` varchar(255) DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `mac_address` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `pin_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `serial_no` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assets_type`
--

DROP TABLE IF EXISTS `assets_type`;
CREATE TABLE IF NOT EXISTS `assets_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `assets_name` varchar(255) NOT NULL,
  `field_info_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_elj38kdvah5dw4v409kphp78r` (`field_info_id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assets_type`
--

INSERT INTO `assets_type` (`id`, `version`, `assets_name`, `field_info_id`) VALUES
(1, 1, 'Desktop', 2),
(2, 0, 'Desktop', 2),
(3, 0, 'Pen', 1),
(4, 0, 'Pen', 2),
(5, 0, 'box', 1),
(6, 0, 'box', 2),
(8, 0, 's', 1),
(13, 0, 's', 6),
(14, 0, 's', 7),
(32, 0, 's', 25),
(33, 0, 's', 26),
(34, 0, 's', 27),
(35, 0, 's', 28),
(36, 0, 's', 29);

-- --------------------------------------------------------

--
-- Table structure for table `cpu`
--

DROP TABLE IF EXISTS `cpu`;
CREATE TABLE IF NOT EXISTS `cpu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `assetsid` varchar(255) DEFAULT NULL,
  `cpu_name` varchar(255) DEFAULT NULL,
  `date_of_purchase` varchar(255) DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `hipaa23compliant` varchar(255) DEFAULT NULL,
  `invoice_no` varchar(255) DEFAULT NULL,
  `mac_address` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `os` varchar(255) DEFAULT NULL,
  `pin_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `processor` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `serial_no` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `field_info`
--

DROP TABLE IF EXISTS `field_info`;
CREATE TABLE IF NOT EXISTS `field_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) DEFAULT NULL,
  `field_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `field_info`
--

INSERT INTO `field_info` (`id`, `version`, `field_name`) VALUES
(1, NULL, 'banner'),
(2, NULL, 'assetsID'),
(3, NULL, 'batteryBackup'),
(4, NULL, 'dateOfLastChange'),
(5, NULL, 'dateOfPurchase'),
(6, NULL, 'deviceName'),
(7, NULL, 'ethernetMacAddress'),
(8, NULL, 'files'),
(9, NULL, 'hipaa23Compliant'),
(10, NULL, 'hipaaCompliant'),
(11, NULL, 'https'),
(12, NULL, 'invoiceNo'),
(13, NULL, 'ipAddress'),
(14, NULL, 'location'),
(15, NULL, 'lastUser'),
(16, NULL, 'macAddress'),
(17, NULL, 'model'),
(18, NULL, 'os'),
(19, NULL, 'pinNo'),
(20, NULL, 'price'),
(21, NULL, 'processor'),
(22, NULL, 'ram'),
(23, NULL, 'remarks'),
(24, NULL, 'serialNo'),
(25, NULL, 'status'),
(26, NULL, 'username'),
(27, NULL, 'vendorName'),
(28, NULL, 'wifiMacAddress'),
(29, NULL, 'windowsGenuineKey');

-- --------------------------------------------------------

--
-- Table structure for table `laptop`
--

DROP TABLE IF EXISTS `laptop`;
CREATE TABLE IF NOT EXISTS `laptop` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `assetsid` varchar(255) DEFAULT NULL,
  `battery_backup` varchar(255) DEFAULT NULL,
  `date_of_purchase` varchar(255) DEFAULT NULL,
  `ethernet_mac_address` varchar(255) DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `hipaa23compliant` varchar(255) DEFAULT NULL,
  `invoice_no` varchar(255) DEFAULT NULL,
  `laptop_name` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `os` varchar(255) DEFAULT NULL,
  `pin_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `processor` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `serial_no` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `wifi_mac_address` varchar(255) DEFAULT NULL,
  `windows_genuine_key` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `monitor`
--

DROP TABLE IF EXISTS `monitor`;
CREATE TABLE IF NOT EXISTS `monitor` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `assetsid` varchar(255) DEFAULT NULL,
  `date_of_purchase` varchar(255) DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `invoice_no` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `monitor_name` varchar(255) DEFAULT NULL,
  `pin_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `serial_no` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `vendor_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monitor`
--

INSERT INTO `monitor` (`id`, `version`, `assetsid`, `date_of_purchase`, `files`, `invoice_no`, `model`, `monitor_name`, `pin_no`, `price`, `remarks`, `serial_no`, `status`, `username`, `vendor_name`) VALUES
(1, 0, 'afda', '2017-01-15', NULL, 'afdsas', 'asfas', 'afda', 'asfas', 'asfas', 'asdfas', 'afda', 'working', 'Sanjeev', 'fdsas');

-- --------------------------------------------------------

--
-- Table structure for table `network_switch`
--

DROP TABLE IF EXISTS `network_switch`;
CREATE TABLE IF NOT EXISTS `network_switch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `assetsid` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `date_of_purchase` varchar(255) NOT NULL,
  `files` varchar(255) NOT NULL,
  `https` varchar(255) NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `mac_address` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `pin_no` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `serial_no` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `switch_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `authority` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_irsamgnera6angm0prq1kemt2` (`authority`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `version`, `authority`) VALUES
(1, 0, 'ROLE_ADMIN'),
(2, 0, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `router`
--

DROP TABLE IF EXISTS `router`;
CREATE TABLE IF NOT EXISTS `router` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `assetsid` varchar(255) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `date_of_purchase` varchar(255) DEFAULT NULL,
  `files` varchar(255) DEFAULT NULL,
  `https` varchar(255) NOT NULL,
  `invoice_no` varchar(255) DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `mac_address` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `pin_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `router_name` varchar(255) DEFAULT NULL,
  `serial_no` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `account_expired` bit(1) NOT NULL,
  `account_locked` bit(1) NOT NULL,
  `enabled` bit(1) NOT NULL,
  `password` varchar(255) NOT NULL,
  `password_expired` bit(1) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `version`, `account_expired`, `account_locked`, `enabled`, `password`, `password_expired`, `username`) VALUES
(1, 0, b'0', b'0', b'1', '$2a$10$xlssf7biEhKGhtodeg8nSekx3iFxPcBbr5/8O4GGTQ1sZORV0vGFu', b'0', 'admin'),
(2, 0, b'0', b'0', b'1', '$2a$10$rUM1dXhwkjQCPX6wnXj29.pe.TquwJJ3eutiIJxvDegz9.cIMbXRO', b'0', 'admin1');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
CREATE TABLE IF NOT EXISTS `user_role` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FK_it77eq964jhfqtu54081ebtio` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
