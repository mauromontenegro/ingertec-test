/* Creación de la BD */
CREATE DATABASE IF NOT EXISTS mauro20220311;
USE mauro20220311;

/* Creación de Tablas */
CREATE TABLE IF NOT EXISTS tresource_type (
    id_resource_type INT PRIMARY KEY AUTO_INCREMENT,
    created DATETIME,
    descrip VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS tresource (
    id_resource INT PRIMARY KEY AUTO_INCREMENT,
    created DATETIME,
    descrip VARCHAR(200),
    id_resource_type INT,
    FOREIGN KEY (id_resource_type)
        REFERENCES tresource_type (id_resource_type)
);

/* Inserción de datos en tresource_type */
INSERT INTO tresource_type VALUES('1', now(), 'Vídeo');
INSERT INTO tresource_type VALUES('2', now(), 'PDF Documentación');
INSERT INTO tresource_type VALUES('3', now(), 'PDF Enunciado');
INSERT INTO tresource_type VALUES('4', now(), 'PDF Solución');

/* Inserción de datos en tresource */
INSERT INTO tresource VALUES('1', now(), 'Vídeo Final Copa América 2021', '1');
INSERT INTO tresource VALUES('2', now(), 'Documentación Marvel API', '2');
INSERT INTO tresource VALUES('3', now(), 'Prueba Técnica Ingertec', '3');
INSERT INTO tresource VALUES('4', now(), 'Ejercitación MySQL - Respuestas', '4');
INSERT INTO tresource VALUES('5', now(), 'Vídeo', '1');
INSERT INTO tresource VALUES('6', now(), 'Challenge Alkemy - Java', '3');

/* Conteo de registros por tipo de recurso */
SELECT 
    COUNT(tresource.id_resource) AS 'Cantidad Recurso',
    tresource.id_resource_type AS 'Id Tipo Recurso',
    tresource_type.descrip AS 'Descripción Tipo Recurso'
FROM
    tresource
        INNER JOIN
    tresource_type ON tresource.id_resource_type = tresource_type.id_resource_type
GROUP BY tresource.id_resource_type;