const ProjectPointSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
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
    required: ["title"],
    additionalProperties: true
}

export default ProjectPointSchema;