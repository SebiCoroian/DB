drop table CLIENTS;
drop table DRIVERS;
drop table RIDES;

CREATE TABLE  "DRIVERS"
   ("id" INTEGER  NOT NULL ENABLE,
    "prenume_driver"  VARCHAR2(50) NOT NULL ENABLE,
    "nume_driver"  VARCHAR2(50) NOT NULL ENABLE,
    "rank"  INTEGER  NOT NULL ENABLE,
    "hours" INTEGER  NOT NULL ENABLE,
    "tips" INTEGER  NOT NULL ENABLE,
    "car" VARCHAR2(50) NOT NULL ENABLE,
     CONSTRAINT "DRIVERS_PK" PRIMARY KEY ("id")
  USING INDEX  ENABLE
   )
/
INSERT INTO DRIVERS VALUES (1,'Varga','Janos',2,20,110,'?');
INSERT INTO DRIVERS VALUES (2,'Pop','Laurentiu',1,15,44,'?');
INSERT INTO DRIVERS VALUES (3,'Rus','Emil',1,11,50,'?');
INSERT INTO DRIVERS VALUES (4,'Ferenc','Daniel',2,20,55,'?');
INSERT INTO DRIVERS VALUES (5,'Balogh','Norbert',5,40,240,'?');
INSERT INTO DRIVERS VALUES (6,'Paunescu','Adrian',4,36,210,'?');
INSERT INTO DRIVERS VALUES (7,'Baciu','Raul',2,1,1,'?');
/
CREATE TABLE  "CLIENTS"
   (    
    "id" INTEGER  NOT NULL ENABLE,
    "nume_client" VARCHAR2(50) NOT NULL ENABLE,
    "prenume_client" VARCHAR2(50) NOT NULL ENABLE,
    "rides" INTEGER  NOT NULL ENABLE,
    "total_payed" INTEGER  NOT NULL ENABLE,
    "gender" VARCHAR(1),
     CONSTRAINT "CLIENTS_PK" PRIMARY KEY ("id")
  USING INDEX  ENABLE
   )
/
INSERT INTO CLIENTS VALUES (1,'Pestritu','Adelina',5,120,'F');
INSERT INTO CLIENTS VALUES (2,'Pruna','Cristina',5,200,'F');
INSERT INTO CLIENTS VALUES (3,'Timisorean','Sebastian',5,120,'M');
INSERT INTO CLIENTS VALUES (4,'Poenar','David',2,44,'M');
INSERT INTO CLIENTS VALUES (5,'Fekete','Tibor',11,280,'M');
INSERT INTO CLIENTS VALUES (6,'Bucur','Andrei',1,15,'M');
/
CREATE TABLE  "RIDES"
   (    
    "id_ride" INTEGER  NOT NULL ENABLE,
    "driver" INTEGER  NOT NULL ENABLE,
    "client" INTEGER  NOT NULL ENABLE,
    "distance" INTEGER  NOT NULL ENABLE,
    "time" INTEGER  NOT NULL ENABLE,
    "price" INTEGER  NOT NULL ENABLE,
       
     CONSTRAINT "RIDES_PK" PRIMARY KEY ("id_ride")
  USING INDEX  ENABLE
   )
/
ALTER TABLE  "RIDES" ADD CONSTRAINT "DRIVER_FK" FOREIGN KEY ("driver")
      REFERENCES  "DRIVERS" ("id") ENABLE
/
ALTER TABLE  "RIDES" ADD CONSTRAINT "CLIENT_FK" FOREIGN KEY ("client")
      REFERENCES  "CLIENTS" ("id") ENABLE
/

INSERT INTO RIDES VALUES (1125,2,3,15,20,38);
INSERT INTO RIDES VALUES (1147,4,4,10,10,25);
INSERT INTO RIDES VALUES (1212,4,2,5,7,21);
INSERT INTO RIDES VALUES (1215,6,3,2,4,10);
INSERT INTO RIDES VALUES (1268,1,5,2,7,12);
INSERT INTO RIDES VALUES (1299,3,6,4,5,15);

ALTER TABLE "CLIENTS" MODIFY "gender" NOT NULL;
                            
ALTER TABLE "DRIVERS" DROP COLUMN "car";

ALTER TABLE "DRIVERS" ADD CONSTRAINT nivel_rank CHECK("rank" BETWEEN 0 AND 6);

UPDATE "RIDES" SET "price" = 11 WHERE "id_ride" = 1268;

DELETE FROM "DRIVERS" WHERE "id" =  7;

select "nume_driver", "prenume_driver"
from DRIVERS
where "tips">50 and "rank"<4

select "id"
from DRIVERS
where "hours">39 and "rank">4

select "hours", "tips"
from DRIVERS
where "rank"=5

select "id"
from DRIVERS
where "hours">20 and "rank"<3

select "rank"
from DRIVERS
where "hours">20 or "tips">100

select "id"
from CLIENTS
where "rides">2 or "total_payed">100

select "nume_client", "prenume_client"
from CLIENTS
where "total_payed">200

select "nume_client", "prenume_client", "total_payed"
from CLIENTS
where "rides"<5

select "nume_client", "prenume_client"
from CLIENTS
where "gender"='F' and "rides">2

select "gender"
from CLIENTS
where "total_payed">50 and "rides"<5

select "driver", "client"
from RIDES
where "distance">10

select "id_ride"
from RIDES
where "distance"<10 and "price">19

select "id_ride", "client"
from RIDES
where "driver" = 3

select  "client"
from RIDES
where "price" = 20 or “time” = 20

select  "client"
from RIDES
where "price" = 20 or “time” = 20
select  “time"
from RIDES
where “rider” = 1 or “rider” = 3

create view CURSE as
select RIDES."id_ride" as "id_ride",
    DRIVERS."id" as "sofer",
    CLIENTS."id" as "nume client"
 from CLIENTS CLIENTS,
    DRIVERS DRIVERS,
    RIDES RIDES
 where RIDES."driver"=DRIVERS."id"
    and RIDES."client"=CLIENTS."id"

create view CURSE_DRIVER_4 as
select RIDES."id_ride" as "id_ride",
    CLIENTS."nume_client" as "nume client"
 from CLIENTS CLIENTS,
    RIDES RIDES
 where RIDES."driver"=4
    and RIDES."client"=CLIENTS."id"

create view CURSE_CLIENT_3 as
select RIDES."id_ride" as "id_ride",
    DRIVERS."nume_driver" as "nume sofer"
 from DRIVERS DRIVERS,
    RIDES RIDES
 where RIDES."client"=4
    and RIDES."driver"=DRIVERS."id"

