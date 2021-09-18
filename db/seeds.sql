USE employees_db;

INSERT INTO department (name)
VALUES
       ("Business Development"),
       ("Sales & Marketing"),
       ("Development"),
       ("Customer Support");


INSERT INTO role (title, department_id, salary) 
VALUES 
       ("Business Development Manager",  1, 84553),
       ("Business Development Representative", 1, 59321),
       ("Marketing Executive", 2, 69521),
       ("Marketing Specialist", 2, 60736),
       ("Sales Engineer", 2, 55744),
       ("Chief Architect", 3, 85572),
       ("Software Architect", 3, 65720),
       ("Engineering Fellow", 3, 38584),
       ("Customer Experience Specialist", 4, 46504),
       ("Service Agent", 4, 30212);  


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
       ("Kye", "Shea", 10, NULL),
       ("Elis", "Roberts", 9, 4),
       ("Tiffany", "Jarvis", 8, NULL),
       ("Leela", "Tyson", 7, NULL),
       ("Aya", "Kelley", 6, 3),
       ("Tara", "Santiago", 5, NULL),
       ("Omari", "Pearce", 4, 1),
       ("Devon", "Spence", 3, 1),
       ("Christopher", "Sinclair", 2, 1),
       ("Dolores", "Lynn", 1, 1);




