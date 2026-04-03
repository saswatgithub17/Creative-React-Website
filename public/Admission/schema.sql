-- ============================================================
--  CTC ADMISSIONS DATABASE SCHEMA
--  Steps on Hostinger:
--  1. Go to hPanel → Databases → MySQL Databases
--  2. Create a new database (e.g. u123456_ctcadmission)
--  3. Create a database user and assign it to the database
--  4. Go to phpMyAdmin → select your database → SQL tab
--  5. Paste this entire file and click "Go"
-- ============================================================

CREATE TABLE IF NOT EXISTS `applications` (
  `id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `full_name`    VARCHAR(255) NOT NULL,
  `dob`          DATE         NOT NULL,
  `gender`       VARCHAR(20)  NOT NULL,
  `category`     VARCHAR(30)  DEFAULT 'General',
  `phone`        VARCHAR(15)  NOT NULL,
  `email`        VARCHAR(255) DEFAULT NULL,
  `school10`     VARCHAR(255) NOT NULL,
  `pct10`        VARCHAR(50)  NOT NULL,
  `school12`     VARCHAR(255) NOT NULL,
  `stream`       VARCHAR(100) NOT NULL,
  `pct12`        VARCHAR(50)  NOT NULL,
  `year_pass`    VARCHAR(10)  NOT NULL,
  `course`       VARCHAR(100) NOT NULL,
  `address`      TEXT,
  `district`     VARCHAR(100) DEFAULT NULL,
  `state`        VARCHAR(100) DEFAULT 'Odisha',
  `pincode`      VARCHAR(10)  DEFAULT NULL,
  `have_pc`      VARCHAR(5)   DEFAULT NULL,
  `reference`    VARCHAR(100) DEFAULT NULL,
  `status`       ENUM('Pending','Contacted','Admitted','Rejected') DEFAULT 'Pending',
  `submitted_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
