const ProjectSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
        },
        order: {
            type: 'integer',
            default: 0
        }
    },
    additionalProperties: true,
    required: ['title']
}

export default ProjectSchema;