-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Nov-2022 às 22:00
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bestflix`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `producoes`
--

CREATE TABLE `producoes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(500) NOT NULL,
  `descricao` text NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `capa` varchar(600) NOT NULL,
  `classificacao` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `producoes`
--

INSERT INTO `producoes` (`id`, `titulo`, `descricao`, `categoria`, `capa`, `classificacao`) VALUES
(58, 'Animais Fantasticos e Onde Habitam', 'Filme muito legal', 'Fantasia', 'https://vizer.tv/content/movies/posterPt/342/23117.webp', '14'),
(59, 'Animais Fantásticos: Os Crimes de Grildewald ', 'Filme muito legal', 'Fantasia', 'https://vizer.tv/content/movies/posterPt/342/18311.webp', '14'),
(60, 'Animais Fantásticos: Os Segredos de Dumbledore', 'Filme muito legal', 'Fantasia', 'https://vizer.tv/content/movies/posterPt/342/30414.webp', '14');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `producoes`
--
ALTER TABLE `producoes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `producoes`
--
ALTER TABLE `producoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
