-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Kwi 2023, 13:32
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `megak_2`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `courses`
--

CREATE TABLE `courses` (
  `Course_name` varchar(35) NOT NULL,
  `Start` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `courses`
--

INSERT INTO `courses` (`Course_name`, `Start`) VALUES
('MegaK', '2022-10-02'),
('python 3', '2022-07-01');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `people`
--

CREATE TABLE `people` (
  `ID_person` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Surrname` varchar(55) NOT NULL,
  `Age` tinyint(3) UNSIGNED NOT NULL,
  `Street_estate` varchar(74) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `people`
--

INSERT INTO `people` (`ID_person`, `Name`, `Surrname`, `Age`, `Street_estate`) VALUES
(1, 'Mieczysław', 'Krawężnik', 45, 'ul. koczkodanów 34, Ameryka'),
(2, 'Hildegarda', 'Łopata', 55, 'ul. Gołębia 12, Pacanów'),
(3, 'Stefan', 'Kalafior', 67, 'ul. Kolorowa 4, Stegny'),
(4, 'Roger', 'Morrow', 34, 'ul. Krzywa 6'),
(5, 'Mary', 'Jane', 19, 'ul. prosta 10'),
(6, 'Pioter', 'Kowalsky', 29, 'os. blokowe 10/12'),
(7, 'Stefan', 'Batory', 25, ' ul. Zamkowa 10/12'),
(8, 'Jadwiga', 'Pogiełło', 37, 'os. Na Wieży 19/60'),
(9, 'Stefan', 'Kalafior', 14, 'ul.żadna 10'),
(10, 'Kali', 'Flower', 66, 'os. Ogródkowe 99');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ppl_kurs`
--

CREATE TABLE `ppl_kurs` (
  `id` varchar(36) NOT NULL DEFAULT 'UUID()',
  `ppl_id` int(11) DEFAULT NULL,
  `Name_kursu` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `ppl_kurs`
--

INSERT INTO `ppl_kurs` (`id`, `ppl_id`, `Name_kursu`) VALUES
('136e1f5b-d182-11ed-9128-5404a60a51e2', 2, 'MegaK'),
('136e3286-d182-11ed-9128-5404a60a51e2', 1, 'python 3'),
('df9f735e-d6bf-11ed-ac32-5404a60a51e2', 8, 'MegaK'),
('df9f88fd-d6bf-11ed-ac32-5404a60a51e2', 10, 'python 3'),
('f79f7462-d6c9-11ed-ac32-5404a60a51e2', 8, 'python 3');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uniqueidtest`
--

CREATE TABLE `uniqueidtest` (
  `ID_unique` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'UUID()',
  `NameOf` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `uniqueidtest`
--

INSERT INTO `uniqueidtest` (`ID_unique`, `NameOf`) VALUES
('92d4faea-d14f-11ed-9128-5404a60a51e2', 'Najzdup'),
('92d5131d-d14f-11ed-9128-5404a60a51e2', 'Roche');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`Course_name`);

--
-- Indeksy dla tabeli `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`ID_person`);

--
-- Indeksy dla tabeli `ppl_kurs`
--
ALTER TABLE `ppl_kurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ID_ppl` (`ppl_id`),
  ADD KEY `Name_kursu` (`Name_kursu`);

--
-- Indeksy dla tabeli `uniqueidtest`
--
ALTER TABLE `uniqueidtest`
  ADD PRIMARY KEY (`ID_unique`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `people`
--
ALTER TABLE `people`
  MODIFY `ID_person` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `ppl_kurs`
--
ALTER TABLE `ppl_kurs`
  ADD CONSTRAINT `ppl_kurs_ibfk_1` FOREIGN KEY (`Name_kursu`) REFERENCES `courses` (`Course_name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ppl_kurs_ibfk_2` FOREIGN KEY (`ppl_id`) REFERENCES `people` (`ID_person`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
