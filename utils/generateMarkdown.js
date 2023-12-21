function renderLicenseBadge(license) {
if(license === 'N/A') {
  return ""}
else {
return `![${license}](https://img.shields.io/badge/LICENSE-${license}-BLUE.svg)`}
}


function renderLicenseLink(license) {

}


function renderLicenseSection(license) {}


function generateMarkdown(data) {
  console.log('this is the object being returned from inquirer', data);
  for (var i = 0; i < data.length; i++) 
    return `# ${data.i}`
  `${renderLicenseBadge(data.license)}`;

}

module.exports = generateMarkdown;
