async function getSubjects(today, trimester) {
    console.log(`today:`, today);
    const subjects = await strapi.entityService.findMany('api::subject.subject', {
        fields: ['code', 'title', 'description', 'lecture_video_playlist', 'lecture_slides_folder', 'Student_Collaboration_Drive', 'Tutorial_Time', 'Repeat_Tutorial_Time', 'Tutorial_Day', 'Repeat_Tutorial_Day'],
        filters: {
            trimesters: {
                id: {
                    $eq: trimester.current
                }
            }
        },
        populate: {
            lectures_by: true,
            tutorials_by: true,
            trimesters: {
                fields: ['trimester', 'start_date', 'end_date']
            },
            tutorial_weeks: '*',
            student_resource_folders: {
                fields: ['Student', 'resource_location', 'resource_link', 'Resource_Name']
            }
        }
    });
    return subjects;
};

module.exports = {
    getSubjects
};