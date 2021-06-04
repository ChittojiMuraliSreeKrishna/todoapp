# Modules i have used in this:
1. react-dom
1. react-icons
1. json-server

## Linking the json-server
### first we have to run the build 
```bash
serve -s build -p 8000
```
### we have to start the json-server we have to create the scripts in package.json
```json
"server": "json-server --watch --port 5000 db.json"
```
### then after adding the above line in scripts open a new terminal & type
```bash
npm run server
```
