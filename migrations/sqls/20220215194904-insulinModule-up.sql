/* Replace with your SQL commands */

CREATE TABLE insulin
(
    id           SERIAL primary key,
    type         TEXT,
    menu         TEXT,
    carbohydrate FLOAT,
    quantity     FLOAT,
    unit         TEXT
);