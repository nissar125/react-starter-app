#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra'); // Using fs-extra for easier directory copying
const path = require('path');

const program = new Command();

program
  .version('1.0.0')
  .arguments('<project-directory>')
  .description('A sample CLI tool to create a new React project based on the ATT starter template')
  .action((projectDirectory) => {
    const projectPath = path.resolve(process.cwd(), projectDirectory);

    // Check if the directory already exists
    if (fs.existsSync(projectPath)) {
      console.error(`Directory ${projectDirectory} already exists.`);
      process.exit(1);
    }

    try {
      // Create the project directory
      fs.mkdirSync(projectPath, { recursive: true });
      console.log(`Project ${projectDirectory} has been created at ${projectPath}`);

      // Copy the template files to the new project directory
      const templatePath = path.resolve(__dirname, 'template'); // Ensure you have a template directory
      fs.copySync(templatePath, projectPath);
      console.log('Template files copied successfully.');
    } catch (error) {
      console.error('An error occurred:', error);
      process.exit(1);
    }
  });

program.parse(process.argv);