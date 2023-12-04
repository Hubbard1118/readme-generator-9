// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license === 'N/A') {
  return "No license"}
else {
return `![${license}](https://img.shields.io/badge/LICENSE-${license}-BLUE.svg)`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('this is the object being returned from inquirer', data);
  return `# ${data.title}
  # ${data.description}
  ${renderLicenseBadge(data.license)}`;

}

module.exports = generateMarkdown;
