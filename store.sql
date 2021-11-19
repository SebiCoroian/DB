CREATE DATABASE IF NOT EXISTS magazin;
USE magazin;
 
 CREATE TABLE IF NOT EXISTS  Clienti  (  
client_id int(11) NOT NULL AUTO_INCREMENT,  
client_username varchar(100) COLLATE utf8_unicode_ci NOT NULL,  
client_pass varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_email varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_str varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_oras varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_tara varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_codpost varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_nrcard INT(100) NOT NULL,  
client_tipcard varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
client_dataexp DATETIME NOT NULL,  
acceptareemail INT(3) NOT NULL,  
client_nrinregRC INT(100) NOT NULL,  
client_nume varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
cod_fiscal INT(100) NOT NULL,  
PRIMARY KEY (client_id)  
) ; 

CREATE TABLE IF NOT EXISTS Produse (  
produs_id int(11) NOT NULL AUTO_INCREMENT,  
produs_nume varchar(100) COLLATE utf8_unicode_ci NOT NULL,  
produs_pret DECIMAL(13,2) NOT NULL,  
produs_img varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
produs_categ varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
produs_descriere varchar(250) COLLATE utf8_unicode_ci NOT NULL,  
produs_desccompl  varchar(1250)  COLLATE  utf8_unicode_ci  NOT NULL,  
produs_stare varchar(150) COLLATE utf8_unicode_ci NOT NULL,
produs_oferta INT(2) NOT NULL,  
produs_noutati INT(2) NOT NULL,  
PRIMARY KEY (produs_id)  
) ;

CREATE TABLE IF NOT EXISTS Ordin (  
ordin_id int(11) NOT NULL AUTO_INCREMENT,  
ordin_prodID int(11) NOT NULL,  
ordin_cantit int(11) NOT NULL,  
ordin_client_id int(11) NOT NULL,  
ordin_dataintr DATETIME NOT NULL,  
ordin_stare varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
ordin_shipdate DATETIME NOT NULL,  
PRIMARY KEY (ordin_id)  
) ;

CREATE TABLE IF NOT EXISTS Cos (  
cos_id int(11) NOT NULL AUTO_INCREMENT,  
cos_clientID  int(11) NOT NULL,  
cos_produsID int(11) NOT NULL,  
cos_cantitate int(11) NOT NULL,  
PRIMARY KEY (cos_id)  
) ; 

CREATE TABLE IF NOT EXISTS Situatievizita (  
id int(11) NOT NULL AUTO_INCREMENT,  
numepagviz varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
platforma  varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
referrer  varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
time TIMESTAMP NOT NULL,  
date DATETIME NOT NULL,
host varchar(150) COLLATE utf8_unicode_ci NOT NULL,  
PRIMARY KEY (id)  
) ; 

CREATE TABLE IF NOT EXISTS Parola (  
userid int(11) NOT NULL AUTO_INCREMENT,  
pass varchar(350) COLLATE utf8_unicode_ci NOT NULL,  
PRIMARY KEY (userid) 
) ;
