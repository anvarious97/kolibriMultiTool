import ProjectPointSchema from "./ProjectPoint";

const ProjectSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
        },
        points: {
            type: 'array',
            items: ProjectPointSchema
        }
    },
    required: ["title"],
    additionalProperties: true
}

export default ProjectSchema;