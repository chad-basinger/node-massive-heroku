create table item (
item_id SERIAL PRIMARY KEY,
name TEXT,
size TEXT
)

insert into item (name, size)
values 
('soccer ball', '5'),
('bat', 'large'),
('backpack', 'medium')

