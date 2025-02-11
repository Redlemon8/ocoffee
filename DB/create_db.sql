-- Product

DROP TABLE IF EXISTS "product";

CREATE TABLE "product" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT,
    "description" TEXT,
    "origin" TEXT,
    "price_per_kilo" REAL NOT NULL,
    "characteristic" TEXT,
    "available" TEXT,
    "reference" INTEGER
);

set client_encoding to utf8;

INSERT INTO "product"("id", "name", "description", "origin", "price_per_kilo", "characteristic", "available", "reference") VALUES
(1, 'Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 'Italie', 20.99, 'Corsé', 'Oui', 100955894),
(2, 'Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 'Colombie', 18.75, 'Acide', 'Oui', 100955894),
(3, 'Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 'Éthiopie', 22.50, 'Fruité', 'Oui', 105589090),
(4, 'Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', 'Brésil', 17.80, 'Doux', 'Oui', 134009550),
(5, 'Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 'Guatemala', 21.25, 'Corsé', 'Oui', 256505890),
(6, 'Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 'Kenya', 23.70, 'Acide', 'Oui', 295432730),
(7, 'Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', 'Indonésie', 19.95, 'Corsé', 'Oui', 302932754),
(8, 'Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', 'Costa Rica',  24.50, 'Acide', 'Oui', 327302954),
(9, 'Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', 'Vietnam', 16.75, 'Épicé', 'Oui', 549549090),
(10, 'Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 'Tanzanie', 26.80, 'Fruité', 'Oui', 582954954),
(11, 'Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 'Jamaïque', 39.25, 'Doux', 'Oui', 589100954),
(12, 'Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 'Rwanda', 21.90, 'Fruité', 'Oui', 650753915),
(13, 'Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 'Panama', 42.00, 'Fruité', 'Oui', 795501340),
(14, 'Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 'Pérou', 19.40, 'Chocolaté', 'Non', 954589100),
(15, 'Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 'Hawaï', 55.75, 'Doux', 'Non', 958090105),
(16, 'Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 'Nicaragua', 28.60, 'Fruité', 'Non', 691550753);