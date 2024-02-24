import Ajv from "ajv";
import ProjectSchema from "../schemas/Project";
import Datastore from "nedb-promises";

class ProjectStore {
    constructor() {
        const ajv = new Ajv({
            allErrors: true,
            useDefaults: true
        });
        this.schemaValidator = ajv.compile(ProjectSchema);
        const dbPath = `${process.cwd()}/projects.db`;
        this.db = Datastore.create({
            filename: dbPath,
            timestampData: true,
        });
    }

    validate(data) {
        return this.schemaValidator(data);
    }

    create(data) {
        const isValid = this.validate(data);
        if (isValid) {
            return this.db.insert(data);
        }
    }

    read(_id) {
        return this.db.findOne({_id}).exec()
    }

    readAll() {
        return this.db.find()
    }

    readActive() {
        return this.db.find({isDone: false}).exec();
    }

    archive({_id}) {
        return this.db.update({_id}, {$set: {isDone: true}})
    }
}

const ProjectStoreInstance = new ProjectStore();
export default ProjectStoreInstance;