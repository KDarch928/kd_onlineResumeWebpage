var skills1 = [
    {
        skill: "Java",
        score: 3
    }, 
    {
        skill: "iRise",
        score: 2
    },
    {
        skill: "Python",
        score: 3
    },
    {
        skill: "C++",
        score: 3
    },
    {
        skill: "Jira",
        score: 4
    },
    {
        skill: "Confluence",
        score: 4
    },
    {
        skill: "Stash",
        score: 4
    },
    {
        skill: "Crowd",
        score: 3
    },
    {
        skill: "Google G-Suite",
        score: 4
    },
    {
        skill: "Windows",
        score: 4
    },
    {
        skill: "Javascript",
        score: 4
    }
]

var skills2 = [
    {
        skill: "CSS",
        score: 3
    }, 
    {
        skill: "Bootstrap",
        score: 3
    },
    {
        skill: "HTML",
        score: 4
    },
    {
        skill: "Node.js",
        score: 4
    },
    {
        skill: "Linux",
        score: 4
    },
    {
        skill: "JQuery",
        score: 4
    },
    {
        skill: "APIs",
        score: 2
    },
    {
        skill: "AJAX",
        score: 3
    },
    {
        skill: "Github",
        score: 4
    },
    {
        skill: "GIT",
        score: 4
    }
]

function displaySkills(arr){

    for (var i = 0; i < arr.length; i++){
        console.log(arr[i].skill);
    }
}


console.log(skills1.length);
console.log(skills2.length);

displaySkills(skills1);