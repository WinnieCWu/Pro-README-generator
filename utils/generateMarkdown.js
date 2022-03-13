// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if const licenseBadgeUrl = `https://img.shields.io/badge/License-MIT-yellow.svg`; {
    return licenseBadgeUrl
  } else {
    return ('');
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if const licenseLink = `https://opensource.org/licenses/MIT`; {
    return licenseLink();
  } else {
    return ('');
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
//   if const licenseSection = `./generatePage.html`
//   [License](##License)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Table of Content
-[description](#description)
-[usage](#usage)
-[installation](#installation)
-[licenses](#licenses)
-[credits](#credits)
-[contribution](#contribution)
-[test](#test)
-[userName](#username)
-[userEmail](#useremail)
-[profile](#profile)
-[questions](#questions)

${data.username}
##username:

${data.description}
##description:

${data.usage}
##usage:

${data.installation}
##installation:

${data.licenses}
##licenses:

${data.credits}
##credits:

${data.contribution}
##contribution:

${data.test}
##test:

${data.username}
##username

${data.useremail}
##useremail

${data.profile}
##profile

${data.questions}
##questions)
`
}

module.exports = generateMarkdown;
