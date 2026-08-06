-- Update script for CTC Digital Notice Board --
-- Run this in phpMyAdmin or your MySQL client --

-- Add file_type and file_path columns to IMAGE table for PDFs --
ALTER TABLE IMAGE ADD COLUMN file_type VARCHAR(50) DEFAULT 'image';
ALTER TABLE IMAGE ADD COLUMN file_path VARCHAR(255) DEFAULT NULL;

-- Add created_at to track 72-hour 'New' status --
ALTER TABLE IMAGE ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Make description column allow NULL (in case of upload without description) --
ALTER TABLE IMAGE MODIFY COLUMN description VARCHAR(1000) NULL;

-- Add file support and file_path to UPCOMING table --
ALTER TABLE UPCOMING ADD COLUMN file_type VARCHAR(50) DEFAULT NULL;
ALTER TABLE UPCOMING ADD COLUMN file_data LONGBLOB DEFAULT NULL;
ALTER TABLE UPCOMING ADD COLUMN file_path VARCHAR(255) DEFAULT NULL;

-- Add created_at to track when upcomings are added --
ALTER TABLE UPCOMING ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
