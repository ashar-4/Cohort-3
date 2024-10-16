const {Command} = require('commander');
const fs = require('fs');

const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count-words')
    .description('Count the number of words in a given file')
    .argument('<fileName>', 'Name of the file')
    .action((fileName) => {
        let fileContents = fs.readFileSync(__dirname + '/' + fileName, 'utf-8');
        console.log(fileContents.split(' ').length);
    })
    .parse();