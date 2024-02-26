const ProjectPointSchema = {
    type: 'object',
    properties: {
        project_id: {
            type: 'string',
            required: true
        },
        parent_id: {
            type: 'string',
        },
        title: {
            type: 'string',
            required: true,
        },
        order: {
            type: 'integer',
            default: 0
        },
        positive: {
            type: ['integer', 'null'],
        },
        negative: {
            type: ['integer', 'null'],
        },
        normal: {
            type: ['integer', 'null'],
        },
    },
    required: ['project_id', 'title'],
    additionalProperties: true
}

export default ProjectPointSchema;