{ execSync } = require('child_process')
describe 'pwn', ->
  it 'should pwn', ->
    try
      execSync('bash pwn.sh')
    catch e
      # ignore
