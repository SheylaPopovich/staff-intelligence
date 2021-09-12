INSERT INTO department (id, name)
VALUES (1, "Business Development"),
       (2, "Sales & Marketing"),
       (3, "Development"),
       (4, "Customer Support");


INSERT INTO roles (title, id, department_id, salary) 
VALUES ("Business Development Manager", 1, 1, 84,553),
       ("Business Development Representative", 2, 1, 59,321),
       ("Marketing Executive", 3, 2, 69,521),
       ("Marketing Specialist", 4, 2, 60,736),
       ("Sales Engineer", 5, 2, 55,744),
       ("Chief Architect", 6, 3, 85,572),
       ("Software Architect", 7, 3, 65,720),
       ("Engineering Fellow", 8, 3, 38,584),
       ("Customer Experience Specialist", 9, 4, 46,504),
       ("Service Agent", 10, 4, 30,212);  


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Kye", "Shea", 10, NULL),
       (2, "Elis", "Roberts", 9, 4),
       (3, "Tiffany", "Jarvis", 8, NULL),
       (4, "Leela", "Tyson", 7, NULL),
       (5, "Aya", "Kelley", 6, 3),
       (6, "Tara", "Santiago", 5, NULL),
       (7, "Omari", "Pearce", 4, 2),
       (8, "Devon", "Spence", 3, 2),
       (9, "Christopher", "Sinclair", 2, 1),
       (10, "Dolores", "Lynn", 1, 1);




SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;