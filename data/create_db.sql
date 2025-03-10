-- Product

DROP TABLE IF EXISTS "product";
DROP TABLE IF EXISTS "user";

CREATE TABLE "product" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT,
    "description" TEXT,
    "origin" TEXT,
    "price_per_kilo" REAL NOT NULL,
    "characteristic" TEXT,
    "available" BOOLEAN,
    "reference" INTEGER
);

set client_encoding to utf8;

INSERT INTO "product"("id", "name", "description", "origin", "price_per_kilo", "characteristic", "available", "reference") VALUES
(1, 'Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 'Italie', 20.99, 'Corsé', TRUE, 100955890),
(2, 'Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 'Colombie', 18.75, 'Acide', TRUE, 100955894),
(3, 'Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 'Éthiopie', 22.50, 'Fruité', TRUE, 105589090),
(4, 'Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', 'Brésil', 17.80, 'Doux', TRUE, 134009550),
(5, 'Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 'Guatemala', 21.25, 'Corsé', TRUE, 256505890),
(6, 'Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 'Kenya', 23.70, 'Acide', TRUE, 295432730),
(7, 'Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', 'Indonésie', 19.95, 'Corsé', TRUE, 302932754),
(8, 'Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', 'Costa Rica',  24.50, 'Acide', TRUE, 327302954),
(9, 'Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', 'Vietnam', 16.75, 'Épicé', TRUE, 549549090),
(10, 'Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 'Tanzanie', 26.80, 'Fruité', TRUE, 582954954),
(11, 'Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 'Jamaïque', 39.25, 'Doux', TRUE, 589100954),
(12, 'Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 'Rwanda', 21.90, 'Fruité', TRUE, 650753915),
(13, 'Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 'Panama', 42.00, 'Fruité', TRUE, 795501340),
(14, 'Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 'Pérou', 19.40, 'Chocolaté', FALSE, 954589100),
(15, 'Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 'Hawaï', 55.75, 'Doux', FALSE, 958090105),
(16, 'Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 'Nicaragua', 28.60, 'Fruité', FALSE, 691550753);


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "user_name" VARCHAR(100) NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT
);

INSERT INTO "user"("id", "user_name", "email", "password", "role") VALUES
(1, 'Jean', 'pepper-brothers@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$T+XmuYpd4ri/2bktS6gOrg$PQ0fQw3RcETTXF9K/xqCmLf1XZ3eZpVPEizB0RWdHoo', 'admin');