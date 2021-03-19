insert into item (name, size)
values ($1, $2)
returning *;