export const readAll = (db) => db.manyOrNone("SELECT * FROM tickets");

export const readAllProjects = (id, db) => db.manyOrNone(`
  SELECT * from projects AS p
  INNER JOIN projects_tickets AS pt
  ON (pt.ticket_id = $1) AND (pt.project_id = p.id)
`, [id])