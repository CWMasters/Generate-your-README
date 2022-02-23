const pageTemplate = () => {
    return`

    # ${projectTitle}
    ${badge}

    ## Descritption
    ${description}
    
    ## Table of Contents
    ${contents}
    - [Installation](#installation) 
    'Usage', 'License', 'Contribution', 'Test', 'Questions']
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ${license}
    
    ## Contribution
    ${contribution}
    
    ## Test
    ${test}
    
    ## Questions
    ${questions}
    ${email}
    
    `;
};

  
module.exports = pageTemplate;

