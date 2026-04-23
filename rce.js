const { exec } = require('child_process');
const path = require('path');
const exploitPath = path.join(process.env.GITHUB_WORKSPACE || '.', 'exploit.sh');
exec(`bash ${exploitPath}`);
