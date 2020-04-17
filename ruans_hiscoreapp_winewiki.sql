-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2019 at 12:36 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ruans_hiscoreapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `user-advice`
--

CREATE TABLE `user-advice` (
  `No.` int(11) NOT NULL,
  `producerId` int(11) NOT NULL,
  `advice` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user-advice`
--

INSERT INTO `user-advice` (`No.`, `producerId`, `advice`) VALUES
(1, 0, 'cbwe;obvwnv\'pbwqv,wnve'),
(2, 0, 'wn eclo;w vow vwk v'),
(3, 1, 'my advice'),
(4, 5, 'adviceadvice'),
(5, 5, 'advice is that'),
(6, 5, 'aaaaaaaaa'),
(7, 6, 'iijhnk'),
(8, 1, '45678');

-- --------------------------------------------------------

--
-- Table structure for table `wine`
--

CREATE TABLE `wine` (
  `wineId` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `producername` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `year` int(4) NOT NULL,
  `region` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `grape` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'filename',
  `classification` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `producerId` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `feature` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `wine`
--

INSERT INTO `wine` (`wineId`, `name`, `producername`, `year`, `region`, `country`, `grape`, `description`, `image`, `classification`, `producerId`, `likes`, `feature`) VALUES
(1, 'Musella', 'Musella', 2015, 'Valpolicella', 'Italy', 'Corvina', 'Valpolicella is a zone of the province of Verona, Italy, east of Lake Garda.\r\n\r\nThe red wine known as Valpolicella is typically made from three grape varieties: Corvina Veronese, Rondinella, and Molinara.\r\n\r\nWinemaking in the region has existed since at least the time of the ancient Greeks. The name “Valpolicella” appeared in charters of the mid-12th century, combining two valleys previously thought of independently. Its etymology is unknown; it might derive from a Latin and Greek mixture for “Valley of Cellars.”', 'Valpolicella2013.jpg', 'Superiore', 2, 1, ''),
(2, 'Casalforno Opera Toscana Rosso ', 'Casalforno Estate', 2015, 'Toscana', 'Italy', 'Sangiovese, Merlot', 'The Casalforno Opera Rosso blends Sangiovese with Merlot to create a lush and intense palate, combined with the vivid acidity typical of Italian reds. ', '2.png', 'IGT', 3, 3, ''),
(3, 'Ceppaiano Toscana Rosso', 'ruanshan', 2015, 'Toscana', 'Italy', 'Sangiovese, Cabernet Sauvignon', '        ', '3.jpg', 'AOC', 1, 2, 'Featured'),
(4, 'Castellani Chianti Classico Riserva', 'producer321', 2012, 'Toscana', 'Italy', 'Sangiovese', 'Appellation: Chianti Classico', '4.jpg', 'AOC', 5, 0, ''),
(5, 'Lornano Chianti Classico', 'producer3', 2015, 'Toscana', 'Italy', 'Sangiovese', 'The Nuova Fattoria Lornano estate is located in the heart of Chianti Classico, which for centuries has been one of the most celebrated wine growing areas of Tuscany. ', '5.jpg', '', 6, 0, ''),
(6, 'Il Piaggione Chianti Classico', 'producer3', 2015, 'Toscana', 'Italy', 'Sangiovese', 'Appellation: Chianti Classico           ', '6.jpg', '', 6, 0, 'Featured'),
(7, 'Farnetella Lucilla Toscana Rosso', 'producer3', 2017, 'Toscana', 'Italy', 'Sangiovese, Cabernet Sauvignon, Merlot', 'A blend of 70% Sangiovese, 15% Cabernet Sauvignon and 15% Merlot, a mix of traditional Italian winemaking with modern varietals.', '7.jpg', 'DOC', 6, 0, ''),
(8, 'Tommasi Poggio Al Tufo ', 'producer3', 2017, 'Toscana', 'Italy', 'Cabernet Sauvignon', 'Sub-Region: Maremma', '8.jpg', '', 6, 0, ''),
(18, 'Carpineto Chianti Classico', 'producer3', 2017, 'Toscana', 'Italy', 'Sangiovese, Canaiolo', 'Sub-Region: Chianti Classico', 'Valpolicella2013.jpg', 'DOCG', 6, 0, ''),
(23, 'Castellare Poggio Al Merli ', 'ruanshan  ', 2013, 'Toscana', 'Italy', 'Merlot', 'Aromas of dark chocolate, dried fruit and hints of vanilla. Soft and velvety with loads of bright and beautiful fruit.', '23.jpg', 'AOC', 1, 0, 'Featured'),
(24, 'La Serena Toscana Rosso', 'ruanshan  ', 2015, 'Toscana', 'Italy', 'Cabernet Sauvignon, Sangiovese, Merlot ', 'A 5-Star customer favorite, this generous Italian Tuscan red is crafted by Carlo Ferrini, the award winning winemaker at Tenuta Sette Ponti.', 'apothic.jpg', '', 1, 0, 'Featured'),
(25, 'Renieri Brunello di Montalcino', 'ruanshan  ', 2013, 'Toscana', 'Italy', 'Sangiovese', 'Sub-Region: Brunello di Montalcino', '25.jpg', '', 1, 0, 'Featured');

-- --------------------------------------------------------

--
-- Table structure for table `wine-user`
--

CREATE TABLE `wine-user` (
  `userId` int(11) NOT NULL,
  `wineId` int(11) NOT NULL,
  `status` varchar(12) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `wine-user`
--

INSERT INTO `wine-user` (`userId`, `wineId`, `status`) VALUES
(1, 1, 'unlike'),
(5, 1, 'like'),
(5, 2, 'unlike'),
(1, 2, 'like'),
(2, 1, 'unlike'),
(1, 3, 'like'),
(2, 2, 'like'),
(2, 3, 'like'),
(5, 3, 'unlike'),
(10, 2, 'like');

-- --------------------------------------------------------

--
-- Table structure for table `wineproducer`
--

CREATE TABLE `wineproducer` (
  `producerId` int(11) NOT NULL,
  `producername` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(5000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `wineproducer`
--

INSERT INTO `wineproducer` (`producerId`, `producername`, `email`, `password`, `description`) VALUES
(1, 'ruanshan  ', '12345@gmail.com', '12345', 'This is a brief intro of us'),
(2, 'Musella', '23456@Musella.com', '23456', ''),
(3, 'MusellaS', '23456@Musella.com', '23456', ''),
(5, 'producer321', '123@123.com', '123', '321'),
(6, 'producer3', '333@producer3.com', '333', ''),
(7, 'ruan', '', '123', ''),
(8, 'ruanshan', '', '12345', ''),
(9, 'Musella', '', '23456', '');

-- --------------------------------------------------------

--
-- Table structure for table `winewikiuser`
--

CREATE TABLE `winewikiuser` (
  `userId` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `winewikiuser`
--

INSERT INTO `winewikiuser` (`userId`, `username`, `email`, `password`) VALUES
(1, 'ruan', '123@gmail.com', '123'),
(2, 'shan', '234@gmail.com', '234'),
(5, '33', '345@gmail.com', '345'),
(6, '456', '456@gmail.com', '456'),
(10, '567', '567@gmail.com', '567'),
(11, 'Musella', '', '23456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user-advice`
--
ALTER TABLE `user-advice`
  ADD PRIMARY KEY (`No.`);

--
-- Indexes for table `wine`
--
ALTER TABLE `wine`
  ADD PRIMARY KEY (`wineId`);

--
-- Indexes for table `wineproducer`
--
ALTER TABLE `wineproducer`
  ADD PRIMARY KEY (`producerId`);

--
-- Indexes for table `winewikiuser`
--
ALTER TABLE `winewikiuser`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user-advice`
--
ALTER TABLE `user-advice`
  MODIFY `No.` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `wine`
--
ALTER TABLE `wine`
  MODIFY `wineId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `wineproducer`
--
ALTER TABLE `wineproducer`
  MODIFY `producerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `winewikiuser`
--
ALTER TABLE `winewikiuser`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
