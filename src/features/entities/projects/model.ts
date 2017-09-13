export const readAll = (db) => db.manyOrNone("SELECT * FROM projects");

export const readAllTickets = (id, db) => db.manyOrNone(`
  SELECT * from tickets AS t
  INNER JOIN projects_tickets AS pt
  ON (pt.project_id = $1) AND (pt.ticket_id = t.id)
`, [id])