git fetch
git pull
start cmd /c code %cd%
start cmd /k mongod
start cmd /k "cd server & npm start"
timeout 3
start cmd /k "cd client & ng serve --open"