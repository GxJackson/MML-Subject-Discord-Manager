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
            lectures_by: {
                fields: ['Name', 'Timezone']
            },
            tutorials_by: {
                fields: ['Name', 'Timezone']
            }
        }
        });
    return subjects;
};

module.exports = {
    getSubjects
};