(async function manipulateData() {
    const baseURL = 'http://localhost:1337/content-manager/collection-types/api::'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI1Nzk5Mzk5LCJleHAiOjE3MjgzOTEzOTl9.RHOum0e9RihK56GuuQcZX_GZ6f67qfTe1kZoCa2sRrQ';
    let discordPostFormat;
    let subjects;

    try {
        discordPostFormat = await getDiscordPostTemplate();
        subjects = await getSubjects();

        console.log(discordPostFormat);
        console.log(subjects);

        subjects.forEach((subject) => {
            console.log(`Subject: `,subject.code);
        });

    } catch (error) {
        console.error('Error manipulating data:', error);
    }

    async function getDiscordPostTemplate() {
        const discordPostURL = baseURL + 'discord-post-format.discord-post-format/1';

        const response = await fetch(discordPostURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    async function getSubjects() {
        const subjectsURL = baseURL + 'subject.subject';
        const pageSize = 20;
        const sort = 'id:ASC';
        
        const url = new URL(subjectsURL);
        const params = new URLSearchParams({
            pageSize: pageSize,
            sort: sort
        });

        url.search = params.toString();

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    }
})();

let subjectCode, subjectName, subjectTitle, subjectDescription;
let lecturesLink, slidesLink, studentCollabDrive, link;
let year, current_year, trimester, tutorialsBy, tutorialTime, repeatTutorialTime, lecturesBy;
let trimester_start_date, trimester_end_date;
let tutorial_week_1, tutorial_repeat_week_1, tutorialTimeWeek1, repeatTutorialTimeWeek1, tutorialTimeWeek2, repeatTutorialTimeWeek2, tutorialTimeWeek3, repeatTutorialTimeWeek3, tutorialTimeWeek4, repeatTutorialTimeWeek4, tutorialTimeWeek5, repeatTutorialTimeWeek5, tutorialTimeWeek6, repeatTutorialTimeWeek6;
let tutorialTimeWeek7, repeatTutorialTimeWeek7, tutorialTimeWeek8, repeatTutorialTimeWeek8, tutorialTimeWeek9, repeatTutorialTimeWeek9, tutorialTimeWeek10, repeatTutorialTimeWeek10, tutorialTimeWeek11, repeatTutorialTimeWeek11, tutorialTimeWeek12, repeatTutorialTimeWeek12;

    function replacePlaceholders(obj) {
        // Replace placeholders in a string
        const replaceInString = (str) => {
        return str
            .replace(/\${subjectCode}/g, subjectCode)
            .replace(/\${subjectName}/g, subjectName)
            .replace(/\${subjectTitle}/g, subjectTitle)
            .replace(/\${subjectDescription}/g, subjectDescription)
            .replace(/\${lecturesLink}/g, lecturesLink)
            .replace(/\${slidesLink}/g, slidesLink)
            .replace(/\${studentCollabDrive}/g, studentCollabDrive)
            .replace(/\${link}/g, link)
            .replace(/\${year}/g, year)
            .replace(/\${current_year}/g, current_year)
            .replace(/\${trimester}/g, trimester)
            .replace(/\${tutorialsBy}/g, tutorialsBy)
            .replace(/\${tutorialTime}/g, tutorialTime)
            .replace(/\${repeatTutorialTime}/g, repeatTutorialTime)
            .replace(/\${lecturesBy}/g, lecturesBy)
            .replace(/\${trimester_start_date}/g, trimester_start_date)
            .replace(/\${trimester_end_date}/g, trimester_end_date)
            .replace(/\${tutorial_week_1}/g, tutorial_week_1)
            .replace(/\${tutorial_repeat_week_1}/g, tutorial_repeat_week_1)
            .replace(/\${tutorialTimeWeek1}/g, tutorialTimeWeek1)
            .replace(/\${repeatTutorialTimeWeek1}/g, repeatTutorialTimeWeek1)
            .replace(/\${tutorialTimeWeek2}/g, tutorialTimeWeek2)
            .replace(/\${repeatTutorialTimeWeek2}/g, repeatTutorialTimeWeek2)
            .replace(/\${tutorialTimeWeek3}/g, tutorialTimeWeek3)
            .replace(/\${repeatTutorialTimeWeek3}/g, repeatTutorialTimeWeek3)
            .replace(/\${tutorialTimeWeek4}/g, tutorialTimeWeek4)
            .replace(/\${repeatTutorialTimeWeek4}/g, repeatTutorialTimeWeek4)
            .replace(/\${tutorialTimeWeek5}/g, tutorialTimeWeek5)
            .replace(/\${repeatTutorialTimeWeek5}/g, repeatTutorialTimeWeek5)
            .replace(/\${tutorialTimeWeek6}/g, tutorialTimeWeek6)
            .replace(/\${repeatTutorialTimeWeek6}/g, repeatTutorialTimeWeek6)
            .replace(/\${tutorialTimeWeek7}/g, tutorialTimeWeek7)
            .replace(/\${repeatTutorialTimeWeek7}/g, repeatTutorialTimeWeek7)
            .replace(/\${tutorialTimeWeek8}/g, tutorialTimeWeek8)
            .replace(/\${repeatTutorialTimeWeek8}/g, repeatTutorialTimeWeek8)
            .replace(/\${tutorialTimeWeek9}/g, tutorialTimeWeek9)
            .replace(/\${repeatTutorialTimeWeek9}/g, repeatTutorialTimeWeek9)
            .replace(/\${tutorialTimeWeek10}/g, tutorialTimeWeek10)
            .replace(/\${repeatTutorialTimeWeek10}/g, repeatTutorialTimeWeek10)
            .replace(/\${tutorialTimeWeek11}/g, tutorialTimeWeek11)
            .replace(/\${repeatTutorialTimeWeek11}/g, repeatTutorialTimeWeek11)
            .replace(/\${tutorialTimeWeek12}/g, tutorialTimeWeek12)
            .replace(/\${repeatTutorialTimeWeek12}/g, repeatTutorialTimeWeek12);
        };
    
        // Recursive function to handle nested objects and arrays
        function recursiveReplace(obj) {
        if (typeof obj === 'string') {
            return replaceInString(obj);
        } else if (Array.isArray(obj)) {
            return obj.map(item => recursiveReplace(item));
        } else if (typeof obj === 'object' && obj !== null) {
            const result = {};
            for (const key in obj) {
            result[key] = recursiveReplace(obj[key]);
            }
            return result;
        }
        return obj;
        }
    
        return recursiveReplace(obj);
    }

}