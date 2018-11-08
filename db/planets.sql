-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 08 2018 г., 04:41
-- Версия сервера: 5.7.21
-- Версия PHP: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `planets`
--

-- --------------------------------------------------------

--
-- Структура таблицы `mainplanet`
--

DROP TABLE IF EXISTS `mainplanet`;
CREATE TABLE IF NOT EXISTS `mainplanet` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `planetName` text NOT NULL,
  `info` varchar(500) NOT NULL,
  `svgPath` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `mainplanet`
--

INSERT INTO `mainplanet` (`id`, `planetName`, `info`, `svgPath`) VALUES
(1, 'Earth', 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. But Earth is slowly dying because of humans and their ignorance. ', 'earth.svg'),
(2, 'Mars', 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. It is a very popular planet.', 'mars.svg'),
(3, 'Pluto', 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. Pluto is very cold because it is far from the Sun, but it has a kind heart that it wants to share with everyone.', 'pluto.svg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
