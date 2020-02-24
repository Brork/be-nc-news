exports.up = function(knex) {
  return knex.schema.createTable("articles", articlesTable => {
    articlesTable.increments("article_id").primary();
    articlesTable.string("title").notNullable();
    articlesTable
      .string("topic")
      .references("topics.slug")
      .notNullable();
    articlesTable.string("author").notNullable();
    articlesTable.integer("votes").defaultTo(0);
    articlesTable.text("body").notNullable();
    articlesTable.timestamp("created_at");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("articles");
};
