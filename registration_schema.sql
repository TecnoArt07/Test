-- Create Table 1
CREATE TABLE IF NOT EXISTS InstituteTypes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 2
CREATE TABLE IF NOT EXISTS EducationBoards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 3
CREATE TABLE IF NOT EXISTS Mediums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 4
CREATE TABLE IF NOT EXISTS ClassCategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 5
CREATE TABLE IF NOT EXISTS Standards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_category_id INT,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_category_id) REFERENCES ClassCategories(id)
);

-- Create Table 6
CREATE TABLE IF NOT EXISTS Subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    standard_id INT,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (standard_id) REFERENCES Standards(id)
);

-- Create Table 7
CREATE TABLE IF NOT EXISTS Universities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 8
CREATE TABLE IF NOT EXISTS Degrees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 9
CREATE TABLE IF NOT EXISTS Exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Table 10
CREATE TABLE IF NOT EXISTS Registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institute_type_id INT,
    education_board_id INT,
    medium_id INT,
    class_category_id INT,
    standard_id INT,
    subjects JSON,
    university_id INT,
    degree_id INT,
    exam_id INT,
    FOREIGN KEY (institute_type_id) REFERENCES InstituteTypes(id),
    FOREIGN KEY (education_board_id) REFERENCES EducationBoards(id),
    FOREIGN KEY (medium_id) REFERENCES Mediums(id),
    FOREIGN KEY (class_category_id) REFERENCES ClassCategories(id),
    FOREIGN KEY (standard_id) REFERENCES Standards(id),
    FOREIGN KEY (university_id) REFERENCES Universities(id),
    FOREIGN KEY (degree_id) REFERENCES Degrees(id),
    FOREIGN KEY (exam_id) REFERENCES Exams(id)
);

-- Insert Data into InstituteTypes
INSERT INTO InstituteTypes (name) VALUES
('Playhouse'), ('School'), ('College'), ('Competitive Exam Center');

-- Insert Data into EducationBoards
INSERT INTO EducationBoards (name) VALUES
('GSAB'), ('CBSE'), ('ICSE');

-- Insert Data into Mediums
INSERT INTO Mediums (name) VALUES
('English'), ('Hindi'), ('Gujarati');

-- Insert Data into ClassCategories
INSERT INTO ClassCategories (name) VALUES
('Pre-primary'), ('Primary'), ('Secondary'), ('Higher Secondary');

-- Insert Data into Standards
INSERT INTO Standards (class_category_id, name) VALUES
(1, 'LKG'), (1, 'HKG'),
(2, '1st'), (2, '2nd'), (2, '3rd'), (2, '4th'), (2, '5th'),
(3, '6th'), (3, '7th'), (3, '8th'),
(4, '9th'), (4, '10th'), (4, '11th'), (4, '12th');

-- Insert Data into Subjects
INSERT INTO Subjects (standard_id, name) VALUES
(11, 'Math'), (11, 'Science'), (11, 'English'), (11, 'Social Studies'),
(12, 'Math'), (12, 'Science'), (12, 'English'), (12, 'Social Studies');

-- Insert Data into Universities
INSERT INTO Universities (name) VALUES
('XYZ University'), ('ABC University');

-- Insert Data into Degrees
INSERT INTO Degrees (name) VALUES
('Bachelor\'s'), ('Master\'s');

-- Insert Data into Exams
INSERT INTO Exams (name) VALUES
('NEET'), ('JEE'), ('CAT');
