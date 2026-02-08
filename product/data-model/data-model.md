# Data Model

## Entities

### Project
A research-to-real-world initiative Labs To Legends is working on, described by its problem, approach, impact, and current status (with optional tags and links).

### Researcher
An individual affiliated with Labs To Legends, with a role/title, bio, photo, links, and a personal statement/testimony.

### Article
A blog/insight post that shares updates, ideas, or progress, with a title, summary, publish date, and content.

### Application
A simple “Apply to Join” submission containing a visitor’s name and email so the team can follow up.

### Inquiry
A collaboration/partner contact submission containing a visitor’s name, email, and message (optionally about a specific project).

## Relationships

- Researcher works on many Project
- Project has many Researcher
- Article can reference one or more Project
- Inquiry may relate to a Project
