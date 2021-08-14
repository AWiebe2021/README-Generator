// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { project_title, description_input, installation_instructions, 
    usage_information, license, contribution_guidelines, test_instructions,  
    GitHub_username, email_address } = templateData;
 // set url for license badge

let licenseBadge = ""
switch (license) {
  case 'MIT License':
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
    break;
  case 'The Unlicense':
    licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg"
    break;
  case 'Apache License 2.0':
    licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
    break;
  case 'GNU General Public License v3.0':
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
    break;  
  case 'BSD 3-Clause':
    licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
    break;
  case 'Mozilla Public License 2.0':
    licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
    break;
}



  return `
  # Title: ${project_title}
  
  ![badge](${licenseBadge}) 

  ## Description:
  ${description_input}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation:
  ${installation_instructions}
  
  ## Usage:
  ${usage_information}
  
  ## License:
  ${license}
  
  ## Contributing:
  ${contribution_guidelines}
  
  ## Tests:
  ${test_instructions}
  
  ## Questions:
  Questions about this repository? Please contact me at [${email_address}](mailto:${email_address}). View more of my work in GitHub at [${GitHub_username}](https://github.com/${GitHub_username}) 

  
  `;
};
