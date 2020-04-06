"use strict";
const alasql = require("alasql");
const asTable = require("as-table");

module.exports = async (event, context) => {
  try {
    context.headers({ "Content-Type": "text/plain" });
    if (!event.body) {
      throw new Error("empty query received");
    }
    return asTable(await alasql.promise(event.body));
  } catch (e) {
    return "Error: " + e;
  }
};
