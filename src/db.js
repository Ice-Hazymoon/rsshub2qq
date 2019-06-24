const low = require('lowdb');
const path = require('path');
const fs = require('fs');
const dbDir = path.join(__dirname, '../db');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir);
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(path.join(dbDir, 'db.json'));

const defaults = {
    rss: {}
}

const db = low(adapter);

db.defaults(defaults).write();

module.exports = db;