-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2024 at 12:56 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `a132`
--

-- --------------------------------------------------------

--
-- Table structure for table `buyfood`
--

CREATE TABLE `buyfood` (
  `id` int(11) NOT NULL,
  `ptype` varchar(55) NOT NULL,
  `bname` varchar(55) NOT NULL,
  `amt` varchar(55) NOT NULL,
  `img` varchar(55) NOT NULL,
  `uid` varchar(55) NOT NULL,
  `st` varchar(55) NOT NULL,
  `dt` varchar(55) NOT NULL,
  `tm` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyfood`
--

INSERT INTO `buyfood` (`id`, `ptype`, `bname`, `amt`, `img`, `uid`, `st`, `dt`, `tm`) VALUES
(1, 'Dogs', 'dsd', '43', '1727713497908.png', '1', 'Delivered', '01/10/2024', '7:24:09 PM'),
(2, 'Dogs', 'dsd', '43', '1727713497908.png', '1', 'Pending', '01/10/2024', '10:52:25 PM'),
(3, 'Dogs', 'dsd', '43', '1727713497908.png', '1', 'Pending', '03/10/2024', '11:48:47 AM');

-- --------------------------------------------------------

--
-- Table structure for table `buymedicine`
--

CREATE TABLE `buymedicine` (
  `id` int(11) NOT NULL,
  `ptype` varchar(55) NOT NULL,
  `bname` varchar(55) NOT NULL,
  `mname` varchar(55) NOT NULL,
  `amt` varchar(55) NOT NULL,
  `img` varchar(55) NOT NULL,
  `uid` varchar(55) NOT NULL,
  `st` varchar(55) NOT NULL,
  `dt` varchar(55) NOT NULL,
  `tm` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buymedicine`
--

INSERT INTO `buymedicine` (`id`, `ptype`, `bname`, `mname`, `amt`, `img`, `uid`, `st`, `dt`, `tm`) VALUES
(1, 'Dogs', 'ad', 'dfg', '54', '1727713613048.png', '1', 'Pending', '01/10/2024', '9:26:27 PM');

-- --------------------------------------------------------

--
-- Table structure for table `buynecessities`
--

CREATE TABLE `buynecessities` (
  `id` int(11) NOT NULL,
  `aname` varchar(55) NOT NULL,
  `amt` varchar(55) NOT NULL,
  `img` varchar(55) NOT NULL,
  `uid` varchar(55) NOT NULL,
  `st` varchar(55) NOT NULL,
  `dt` varchar(55) NOT NULL,
  `tm` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buynecessities`
--

INSERT INTO `buynecessities` (`id`, `aname`, `amt`, `img`, `uid`, `st`, `dt`, `tm`) VALUES
(1, 'das', '43', '1727716618616.png', '1', 'Pending', '01/10/2024', '9:26:15 PM');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `ptype` varchar(55) NOT NULL,
  `bname` varchar(55) NOT NULL,
  `fname` varchar(55) NOT NULL,
  `desc1` varchar(555) NOT NULL,
  `amt` varchar(55) NOT NULL,
  `img` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `ptype`, `bname`, `fname`, `desc1`, `amt`, `img`) VALUES
(1, 'Dogs', 'dsd', 'fsdf', 'fsdfsd', '43', '1727713497908.png');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `id` int(11) NOT NULL,
  `ptype` varchar(55) NOT NULL,
  `bname` varchar(55) NOT NULL,
  `mname` varchar(55) NOT NULL,
  `desc1` varchar(551) NOT NULL,
  `amt` varchar(55) NOT NULL,
  `img` varchar(55) NOT NULL,
  `age` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`id`, `ptype`, `bname`, `mname`, `desc1`, `amt`, `img`, `age`) VALUES
(1, 'Dogs', 'ad', 'dfg', 'gdgd', '54', '1727713613048.png', '2');

-- --------------------------------------------------------

--
-- Table structure for table `necessities`
--

CREATE TABLE `necessities` (
  `id` int(11) NOT NULL,
  `aname` varchar(55) NOT NULL,
  `desc1` varchar(554) NOT NULL,
  `amt` varchar(55) NOT NULL,
  `img` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `necessities`
--

INSERT INTO `necessities` (`id`, `aname`, `desc1`, `amt`, `img`) VALUES
(3, 'dasd', 'dasd', '43', '1727716513857.png'),
(4, 'das', 'adas', '43', '1727716618616.png'),
(7, 'das', 'adas', '567', '1727716627456.png');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `cno` varchar(55) NOT NULL,
  `uname` varchar(55) NOT NULL,
  `pass1` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `cno`, `uname`, `pass1`) VALUES
(1, 'gdfgfd', 'dsd@g.com', '53534', 'aaa', 'aaa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyfood`
--
ALTER TABLE `buyfood`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buymedicine`
--
ALTER TABLE `buymedicine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buynecessities`
--
ALTER TABLE `buynecessities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `necessities`
--
ALTER TABLE `necessities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyfood`
--
ALTER TABLE `buyfood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `buymedicine`
--
ALTER TABLE `buymedicine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `buynecessities`
--
ALTER TABLE `buynecessities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `necessities`
--
ALTER TABLE `necessities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
