-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 08:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `message` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `message`) VALUES
(1, 'noble', '124@gmail.com', '121212121', '121212'),
(2, 'Alen Raju Paul', 'alanrajupaul@gmail.com', '8848597846', 'Logo'),
(3, 'Alphin', 'alphin@gmail.com', '8864751246', 'logo'),
(4, 'Subru', 'subru@gmail.com', '9684751245', 'Logo'),
(5, 'Arun', 'arun@gmail.com', '9674581245', 'web'),
(6, 'Manu', 'manu@gmail.com', '7542121266', 'Web'),
(7, 'Jijo', 'jiji@gmail.com', '8862414514', 'web'),
(8, 'John', 'john@gmail.com', '9974857477', 'intro'),
(9, 'Roy', 'roy@gmail.com', '9845622666', 'intro'),
(10, 'Joyal', 'joyal@gmail.com', '8462155179', 'Web'),
(11, 'Mohan', 'mohan@gmail.com', '8455612442', 'web'),
(12, 'Shinu', 'shinu@gmail.com', '8542122164', 'logo'),
(13, 'Hari', 'hari@gmail.com', '9845456274', 'intro'),
(14, 'Shinto', 'shinto@gmail.com', '9845622122', 'web'),
(15, 'Gokul', 'gokul@gmail.com', '7441553666', 'Intro'),
(16, 'Sam', 'sam@gmail.com', '9654438121', 'intro'),
(17, 'subru', 'subru@gmail.com', '751227899', 'web'),
(18, 'subru', 'subru@gmail.com', '751227899', 'web'),
(19, 'subru', 'subru@gmail.com', '751227899', 'web');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'noble', '1111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(45) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
