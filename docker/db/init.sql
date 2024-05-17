-- Create the database 'nobel'
CREATE DATABASE nobel;

-- Connect to the 'nobel' database
\c keycloak_db

-- Since userdata stores in keycloak fistname and lastname columns added to comments folder for make things simpler.
CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);